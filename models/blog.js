
const mongoose = require('mongoose')

var uniqueValidator = require('mongoose-unique-validator')

const blogSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  author: String,
  url: String,
  likes: Number
})
blogSchema.plugin(uniqueValidator)

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog