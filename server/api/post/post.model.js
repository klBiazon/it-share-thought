'use strict';

import mongoose from 'mongoose';

var PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content:  { type: String, required: true },
  canComment: { type: Boolean },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('Post', PostSchema);
