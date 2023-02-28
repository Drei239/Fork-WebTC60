var express = require('express');
var router = express.Router();
const UserModel = require('../models/user.model');
const { registerValidation, loginValidation } = require('../validation/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');

// 1. Viết 1 API đăng ký 1 user mới
// Validation thông tin user
// - Kiểm tra email đã tồn tại trong hệ thống chưa ?
// - Khi lưu thông tin user - Mã hóa password
// - Tạo user mới trong bảng user của mongodb
router.post('/register', async function (req, res) {
  // Validation user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check email exists in db
  const emailExists = await UserModel.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send('Email exists in database. Please choose other email');

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Save user in db
  const newUser = new UserModel();
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.password = hashPassword;

  try {
    const user = await newUser.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(400);
  }
});


//2. Viết 1 API login vào hệ thống
// Validation thông tin user
// - Kiểm tra email có đúng không ? (có thật là member của hệ thống không )
// - Kiểm tra password có đúng không ?
// - Tạo ra 1 chuỗi JWT và gắn vào header trả về cho client.
router.post('/login', async function (req, res) {
  //Validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Kiểm tra email có đúng không ? (có thật là member của hệ thống không)
  const userLogin = await UserModel.findOne({ email: req.body.email });
  if (!userLogin) return res.status(400).send('User not exist in database');

  // Kiểm tra password có đúng không ?
  const isPasswordLogin = await bcrypt.compare(req.body.password, userLogin.password);
  if (!isPasswordLogin) return res.status(400).send('Password incorrect');

  // Tạo ra 1 chuỗi JWT và gắn vào header trả về cho client.
  // jwt.sign(payload, secretOrPrivateKey, [options, callback])
  const token = jwt.sign({_id: userLogin._id}, 'ma-so-bi-mat-khong-duoc-tiet-lo');

  // Gắn chuỗi token này vào header và trả về cho client
  res.header('auth-token', token).send(token);
});

// Kiểm tra xem token có làm việc hay không
// Viết 1 API trả về string HelloWorld
// Nếu API gắn token được trả về từ API login -> trả về HelloWorld
// Nếu API không gắn token -> Trả về bạn không có quyền truy cập
// Nếu API gắn token nhưng token không phải là token đã được trả về từ API login -> bạn không thể truy cập
router.get('/', authMiddleware, function (req, res) {
  res.send('Hello world');
});

// BTVN - Viết 1 API lấy về toàn bộ thông tin của car
// Có token (token phải đc verify) - Đc thêm, sửa, xóa, get lấy thông tin car
// Không có token - Chỉ được get thông tin car


module.exports = router;
