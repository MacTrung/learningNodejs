
const path = require('path');
const path = require('express');

const configViewEngine = (app) => {
    //app.set('views', path.join(__dirname, 'views'));
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs')
    //cấu hình static file (chỗ lưu css, ảnh, js) aka:frondend
    app.use(express.static(path.join('./src', 'public')));
}
module.exports = configViewEngine;