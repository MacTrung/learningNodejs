const express = require('express');//dùng import là nỗi đóa
//const { hostname } = require('os');
require('dotenv').config()
const path = require('path');
const app = express(); //app của express


const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || 'localhost';

console.log("check", process.env.PORT);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//cấu hình static file (chỗ lưu css, ảnh, js) aka:frondend
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => { //khai báo route
    res.send('Hello World! with nodemon')
})

app.get('/abc', (req, res) => { //khai báo route mới
    res.send('check new route')
})

app.get('/ejs', (req, res) => { //khai báo route mới
    res.render('sample.ejs')
})
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})