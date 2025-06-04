const express = require('express');
const route = express.route();
const { getHomepage } = require("../controllers/homeController");


route.get('/', getHomepage); //hàm được gọi từ bên file homeController trông cho đỡ rối, nó là mấy dòng dưới
//nhưng đã được chuyển logic sang homecontroller

route.get('/abc', (req, res) => { //khai báo route mới
    res.send('check new route')
})

route.get('/ejs', (req, res) => { //khai báo route mới
    res.render('sample.ejs')
})

module.exports = route;