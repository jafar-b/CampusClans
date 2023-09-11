export const allowedOrigins = [
  process.env.CLIENTAPI_URL,
  'http://localhost:5173',
  'http://localhost:5137',
]

export const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not Allowed by CORS'))
    }
  },
  //   credentials: true,
  optionsSuccessStatus: 200,
}
