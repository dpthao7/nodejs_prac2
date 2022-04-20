const express = require('express')
const apps = require('express/lib/response')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))
// app.get('/', (req, res) => res.send('Hello World'))
app.get('/', (req, res) => {
    return res.send(`<h1>Hello world</h1>`);
})

app.listen(port, () => console.log(`Example all listening at http://localhost:${port}`))