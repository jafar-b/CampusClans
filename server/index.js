import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { corsOptions } from './utils/corsOptions.js'
import errorHandler from './middlewares/errorHandler.js'
import notFound from './middlewares/notFound.js'
import morgan from 'morgan'

import './utils/connectDB.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.get('/', async (req, res) => {
  res.status(200).send('API is running...')
})

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
