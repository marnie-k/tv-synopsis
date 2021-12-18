const express = require('express')
const showdata = require('./showdata')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')
//handler #1
app.get('/', (request, response) => {
   return response.render('index', { showdata })
})
//handler #2
app.get('/season/:id', (request, response) => {
    const season = showdata.seasons.find(season => season.number  === parseInt(request.params.id))

    return response.render('season', { season, title: showdata.title})
})
// handler #3
app.all ('*', (request, response) => {
    return response.sendStatus(404)
})
// directions on where to send data in browser
app.listen (1337, () =>{console.log('listening on port 1337...') //eslint-disable-line no-comsole
})
