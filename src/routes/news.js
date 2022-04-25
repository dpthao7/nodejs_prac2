const express = require('express');
const router = express.Router();

// Đối tượng mới được tạo từ new class thì ko viết hoa chữ cái đều
const newsController = require('../app/controllers/NewsController');

// Truyền đối tượng index vào. Tương tự như NewsController nhưng gọn hơn
router.use('/:slug', newsController.show);
// Tuyến đường gốc, luôn để cuối cùng (khớp từ trên xuống)
router.use('/', newsController.index);

module.exports = router;
