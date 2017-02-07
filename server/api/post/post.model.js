'use strict';

import mongoose from 'mongoose';

var PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content:  { type: String, required: true },
  canComment: { type: Boolean },
  isActive: { type: Boolean, default: true },
  comments: [{
    comment: { type: String },
    active: { type: Boolean, default: true },
    createdAt: { type: Date },
    updatedAt: { type: Date }
  }]
}, {
  timestamps: true
});

export default mongoose.model('Post', PostSchema);
