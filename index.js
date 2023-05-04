const express = require('express')
const app = express()
const port = 5000

const chefData = require('./data/chef.json')

app.get('/', (req, res) => {
    res.send('Baburchi King is running')
})

app.get('/chefs', (req, res) => {
    res.send(chefData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})