const express = require('express');
const route = express.route();


route.get('/', (req, res) => { //khai báo route
    res.send('Hello World! with nodemon')
})

route.get('/abc', (req, res) => { //khai báo route mới
    res.send('check new route')
})

route.get('/ejs', (req, res) => { //khai báo route mới
    res.render('sample.ejs')
})

module.exports = route;