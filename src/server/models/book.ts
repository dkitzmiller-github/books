import * as mongoose from 'mongoose';
import {Author} from './author';
const { Schema } = mongoose;

const Book = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  year: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    required: true,

  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  publisher: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', Book);
