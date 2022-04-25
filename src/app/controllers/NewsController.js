// const res = require("express/lib/response");

class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug (Tạo nhiều tuyến đường con bên trong)
    show(req, res) {
        res.send('news details');
    }
    // !! ko chạy đc vào trang con
}

// Đối tượng khởi tạo từ class thì viết hoa chữ cái đầu
module.exports = new NewsController;
