import mongoose from 'mongoose'

// const uri = 'mongodb+srv://admin:XP5bSXGijZt2275y@therig-cluster0.54eypo6.mongodb.net/?retryWrites=true&w=majority&appName=therig-Cluster0'

// Load environment variables from .env file
require('dotenv').config()

const uri = process.env.MONGODB_URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const CommentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  comments: String
})

const Comment = mongoose.model('Comment', CommentSchema)

export default async (req, res) => {
  const comments = await Comment.find().sort({ _id: -1 }).limit(3)
  res.status(200).json(comments)
}
