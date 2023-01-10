express = require('express')
app = express()
cors = require('cors')
projects = require('./projects.json')
about = require('./about.json')
dotenv = require('dotenv').config()
const PORT = process.env.PORT

// Middleware
app.use(cors())


// Home Route
app.get('/', (req, res) => {
    res.send('App running!')
})

// Project Route
app.get('/projects', (req, res) => {
    res.json(projects)
})

// About Info Route
app.get('/about', (req, res) => {
    res.json(about)
})

// App Listener
app.listen(PORT, () => {
    console.log(`Hey there Delilah, what's it like in Port ${PORT}`)
})

