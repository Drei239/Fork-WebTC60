const express = require('express');
const studentRouter = express.Router();

const students = [
    {name: 'Nguyen Tuan Anh - student', age: 30},
    {name: 'Luong Tran - student', age: 44},
    {name: 'Le Tien Dung - student', age: 45},
];

studentRouter.get('/', (req, res) => {
    res.json(students)
});


studentRouter.get('/add', (req, res) => {
    students.push({ name: 'Phung Gia Hao - student', age: 34 })
    res.json(students)
});

module.exports = studentRouter;