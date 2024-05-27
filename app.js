require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500
const patientRoutes = require('./routes/patientRoutes')
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to db successfully!'))

app.use('/api/v1/patients', patientRoutes)

app.listen(PORT, () =>
{
    console.log(`server is running at http://localhost:${PORT}`)
})