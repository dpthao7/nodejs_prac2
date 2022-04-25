const express = require('express');
const router = express.Router();

// Đối tượng mới được tạo từ new class thì ko viết hoa chữ cái đều
const siteController = require('../app/controllers/SiteController');

// Truyền đối tượng index vào. Tương tự như NewsController nhưng gọn hơn
router.use('/search', siteController.search);
// Tuyến đường gốc, luôn để cuối cùng (khớp từ trên xuống)
router.use('/', siteController.index);

module.exports = router;
