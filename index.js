const express = require('express')

const app = express()

const showdata = require('./showdata')

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, respond) => {
    'index', {showdata}
})

app.all ('*', (request, response) => {
    return response.sendStatus(404)
})

app.listen (1337, () => [
    console.log('listening on port 1337...')
])
