import * as mongoose from 'mongoose';
require('../models/author');
export const Author = mongoose.model('Author');

class AuthorsController {
  index(request, response) {
    console.log('grabbing authors');

    Author.find({})
      .then(authors => {
        response.json(authors);
      })
      .catch(error => {
        response.status(422).json(error.message);
      });
  }
  create(request, response) {
    Author.create(request.body)
      .then(author => {
        response.json(author);
      })
      .catch(error => {

        console.log('server errors creating author', error);
        response.status(422).json(
          Object.keys(error.errors).map(key => error.errors[key].message)
        );
      })
  }
  show(request, response) {}
  update(request, response) {}
  destroy(request, response) {}
}
module.exports = new AuthorsController();
