const express = require('express')
// const showdata = require('./showdata')

const app = express()

 app.use(express.static('public'))

 app.set('view engine', 'pug')

/*
app.get('/', (request, respond) => {
    return response.render('index', { showdata })
})
*/

app.all ('*', (request, response) => {
    return response.sendStatus(404)
})

app.listen (1337, () => [
    console.log('listening on port 1337...') //eslint-disable-line no-comsole
])
