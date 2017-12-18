import * as mongoose from 'mongoose';
require('../models/book');
export const Book = mongoose.model('Book');

module.exports = {
    index(request, response) {
        console.log(`Index route:`);
        Book.find({}).populate('author')
            .exec(function(err, bks) {
                if (err) {
                    response.json([])
                }
                console.log('exec() => ');
                console.log(bks);
                response.json(bks);
            })
            .then(function (books) {
                response.status(200).json(books);
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    create(request, response) {
        const book = new Book(request.body);

        console.log('created new book', book);

        book.save()
            .then(function (bk) {
                console.log('saved book', bk);
                response.json(bk);
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    show(request, response) {
        Book.findById(request.params.id)
            .then(function (book) {
                response.json(book);
            })
            .catch(console.log);
    },
    update(request, response) {
        Book.findByIdAndUpdate(request.params.id, request.body, {new: true})
            .then(function (book) {
                console.log('updated book', book);
                response.json(book);
            })
            .catch(console.log);
    },
    destroy(request, response) {
        Book.findByIdAndRemove(request.params.id)
            .then(function (book) {
                response.json(book);
            })
            .catch(console.log);
    },
};
