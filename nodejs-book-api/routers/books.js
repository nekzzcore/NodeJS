const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


router.get('/', async (req, res) => {
    try {
    const books = await prisma.book.findMany();
    res.json(books);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
    const book = await prisma.book.findUnique({
        where: { id: parseInt(req.params.id) },
    });
    if (!book) {
        return res.status(404).json({ message: 'Книга не найдена' });
    }
    res.json(book);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    try {
    const book = await prisma.book.create({
        data: {
        name: req.body.name,
        category: req.body.category,
        publisher: req.body.publisher,
        year: req.body.year,
        likes: req.body.likes,
        author_id: req.body.author_id,
        },
    });
    res.status(201).json(book);
    } catch (err) {
    res.status(400).json({ message: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
    const book = await prisma.book.delete({
        where: { id: parseInt(req.params.id) },
    });
    res.json({ message: 'Книга удалена' });
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
});

module.exports = router;