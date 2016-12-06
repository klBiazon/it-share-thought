'use strict';

import mongoose from 'mongoose';

var PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body:  { type: String, required: true },
  canComment: { type: Boolean, default: true }
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('Post', PostSchema);
