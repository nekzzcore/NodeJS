const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use('/api/books', booksRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});