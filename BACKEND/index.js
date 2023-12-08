const connectToMongo = require('./db');
const express = require('express')
const auth = require('./routes/auth')
const notes = require('./routes/notes')

connectToMongo()

const app = express()
const port = 5000

// app.get('/', (req, res) => {
//   res.send(`We're connected to mongodb`)
// })

app.use(express.json())

//Available routes
app.use('/api/auth' , auth)
app.use('/api/notes' , notes)


app.listen(port, () => {
  console.log(`iNotebook Backend listening on port ${port}`)
})