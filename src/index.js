//Loads the express module
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

//Creates express server
const app = express();

const port = 3000

//Serves static files (file tĩnh trong thư mực public)
app.use(express.static(path.join(__dirname,'public')));

// Http logger
// app.use(morgan('combined'));

// Template engine
// app.engine('handlebars', handlebars() ); // code F8: Lỗi, phải dùng code 2 dòng dưới
const hbs = handlebars.create({defaultLayout: 'main'});
app.engine('handlebars', hbs.engine);
// app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname, 'resources/views'))

// console.log(path.join(__dirname, 'views'));

// app.get('/', (req, res) => res.send('Hello World'))

app.get('/', (req, res) => {
    // Render ra nội dung từ home.handlebars
    res.render('home');
});

app.get('/news', (req, res) => {
    // Render ra nội dung từ home.handlebars. Header, Footer là tĩnh, ko đổi, nội dung body thay đổi
    res.render('news');
});

// Tạo /search - query param
app.get('/search', (req, res) => {
    res.render('search');
});

app.post('/search', (req, res) => {
    // send - gửi yêu cầu client lên server
    res.send('');
});

app.listen(port, () => console.log(`Example all listening at http://localhost:${port}`))