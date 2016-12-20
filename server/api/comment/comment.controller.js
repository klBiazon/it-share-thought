/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/comments              ->  index
 * POST    /api/comments              ->  create
 * GET     /api/comments/:id          ->  show
 * PUT     /api/comments/:id          ->  update
 * DELETE  /api/comments/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Comment from './comment.model';
import Post from '../post/post.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Comments
export function index(req, res) {
  return Comment.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Comment from the DB
export function show(req, res) {
  return Comment.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Comment in the DB
export function create(req, res) {
  var id = req.body.id;
  delete req.body.id;

  return Post.findByIdAndUpdate(id,
  { $push:
    {"comments": req.body}
  }, { safe: true, upsert: true }).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Comment in the DB
export function update(req, res) {
  console.log(req.params);
  console.log(req.body);
  return Post.findOne({'_id' : req.params.id},
    {'comments' : {$elemMatch : {'_id' : req.body.commentId}}})
    .exec(function (err,result){
      if(err) { return handleError(res, err); }
      if(!result) { return res.send(404); }
      Post.update({'comments._id': req.body.commentId},
      {'$set':
        {
          'comments.$.comment': req.body.comment,
          'comments.$.updatedAt': new Date()
        }
      }).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
    });

  // return Comment.findById(req.params.id).exec()
  //   .then(handleEntityNotFound(res))
  //   .then(saveUpdates(req.body))
  //   .then(respondWithResult(res))
  //   .catch(handleError(res));
}

// Deletes a Comment from the DB
export function destroy(req, res) {
  return Comment.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
