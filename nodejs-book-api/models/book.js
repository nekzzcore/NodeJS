const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    category: String,
    publisher: String,
    year: Number,
    likes: Number,
    author_id: String
});

module.exports = mongoose.model('Book', bookSchema);