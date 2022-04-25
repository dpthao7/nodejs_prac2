const newsRouter = require('./news');

function route(app) {
    // app.get('/news', (req, res) => {
    //     // Render ra nội dung từ home.handlebars. Header, Footer là tĩnh, ko đổi, nội dung body thay đổi
    //     res.render('news');
    // });
    app.use('/news', newsRouter);

    // Tạo tuyến đường bên SiteController.js
    app.use('/', newsRouter);


    // app.get('/', (req, res) => {
    //     // Render ra nội dung từ home.handlebars
    //     res.render('home');
    // });

    // // Tạo /search - query param
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
    
    // app.post('/search', (req, res) => {
    //     // send - gửi yêu cầu client lên server
    //     console.log(req.body);
    //     res.send('');
    // });
}

module.exports = route;
