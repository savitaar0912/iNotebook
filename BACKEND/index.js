const connectToMongo = require('./db');
const express = require('express')
const auth = require('./routes/auth')
const notes = require('./routes/notes')
const cors = require('cors')

connectToMongo()

const app = express()
const port = 5000

// app.get('/', (req, res) => {
//   res.send(`We're connected to mongodb`)
// })

// Allow requests only from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable cookies and authentication headers
}));

app.use(express.json())

//Available routes
app.use('/api/auth', auth)
app.use('/api/notes', notes)


app.listen(port, () => {
  console.log(`iNotebook Backend listening on port ${port}`)
})