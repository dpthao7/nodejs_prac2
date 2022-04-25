// const res = require("express/lib/response");

class SiteController {
    // [GET] /home
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

// Đối tượng khởi tạo từ class thì viết hoa chữ cái đầu
module.exports = new SiteController;
