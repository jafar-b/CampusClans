import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://afan:afan123@cluster0.094wgdr.mongodb.net/?retryWrites=true&w=majority")
    console.log('Connected to MongoDB.')
  } catch (e) {
    console.log('Could not connect to MongoDB - ', e.message)
  }
}

connectDB()
