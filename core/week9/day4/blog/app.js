require('dotenv').config()

const authors = require('./routes/authors');
const entries = require('./routes/entries');
const express = require('express')
const app = express()

app.use(express.json())

app.use('/api/authors', authors);
app.use('/api/entries', entries);

app.listen(process.env.PORT || 3000)