const express = require('express')
const { join } = require('path')
const app = express()

app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'))
})

app.listen()