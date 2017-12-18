import * as mongoose from 'mongoose';
require('../models/user');
const bcrypt = require('bcrypt-as-promised');
const validator = require('validator');
const { Schema } = mongoose;

const User = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator(value) {
        return validator.isEmail(value);
      }
    },
    unique: true
  },

  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

User.pre('save', function(next) {
  if (!this.isModified('password')) { return next(); }

  bcrypt.hash(this.password, 10)
    .then(hashed => {
      this.password = hashed;
      next();
    })
    .catch(next);
});

User.statics.validatePassword = function(candidatePassword, hashedPassword) {
  return bcrypt.compare(candidatePassword, hashedPassword);
};

module.exports = mongoose.model('User', User);
