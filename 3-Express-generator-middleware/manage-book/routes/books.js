var express = require('express');
var router = express.Router();
const Joi = require('joi');

// Defined list book
let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
];

const bookSchema = Joi.object({
    title: Joi.string().min(3).required(),
    author: Joi.string().min(5).required()
});

// Viet 1 endpoint http://localhost:3000/books/get-all (GET)
router.get('/get-all', (req, res) => {
    // tra ve danh sach toan bo cac quyen sach dang co
    res.send(books);
});

// Viet 1 endpoint http://localhost:3000/books/create (POST)
router.post('/create', (req, res) => {
    const validationResult = bookSchema.validate(req.body);
    console.log(validationResult);
    if (validationResult.error) {
        return res.status(400).send(validationResult.error.details[0].message);
    }

    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    }
    books.push(book);
    res.send(book);
});

// Viet 1 endpoint http://localhost:3000/books/:id (PUT)
// Cập nhật thông tin 1 quyển sách dựa vào ID - Validation, Check ID tồn tại mới validate và update, không thì báo lỗi
router.put('/:id', (req, res) => {
    // B1. Xac dinh ID co ton tai hay khong ?
    const findBook = books.find((b) => b.id === parseInt(req.params.id));
    if (!findBook) {
        res.status(404).send('Khong tim thay quyen sach voi ID nay');
    }

    // B2. Thuc hien validation thong tin quyen sach - title & author
    const validationResult = bookSchema.validate(req.body);
    // console.log({validationResult});
    console.log(JSON.stringify(validationResult));
    if (validationResult.error) {
        return res.status(400).send(validationResult.error.details[0].message);
    }

    // B3. Cap nhat thong tin title va author - tra ve cho user
    findBook.title = req.body.title;
    findBook.author = req.body.author;
    res.send(findBook);
});

// Viet 1 endpoint http://localhost:3000/books/:id (DELETE)
// Xóa 1 quyển sách dựa vào ID -> Check ID tồn tại thì xóa, không thì báo lỗi
router.delete("/books/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send("The book with the given ID was not found.");
    const index = books.indexOf(book);
    books.splice(index, 1);
    res.send(book);
});

// Ket hop them 1 vai kien thuc khac - Su dung joi de validate data dau vao
// Handle cac case loi
// Hoc cach su dung postman
module.exports = router;