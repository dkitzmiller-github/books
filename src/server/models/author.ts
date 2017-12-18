import * as mongoose from 'mongoose';
const { Schema } = mongoose;

export const Author = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  age: Number,
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Author', Author);
