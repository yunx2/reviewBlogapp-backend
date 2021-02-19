const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const blogsRouter = require('./controllers/blogs')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log('error:', err.message))

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

module.exports = app;