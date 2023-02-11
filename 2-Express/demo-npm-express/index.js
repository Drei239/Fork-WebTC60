// const jsonExport = require('jsonexport');
//
// const members = [
//     {
//         name: 'Nguyen Tuan Anh',
//         age: '31'
//     },
//     {
//         name: 'Le Ngoc Manh',
//         age: '14'
//     },
//     {
//         name: 'Bao Phuc',
//         age: '20'
//     }
// ];
//
// jsonExport(members, function (error, csv) {
//    if (error) return console.log(error);
//
//    // log convert json to csv
//     console.log(csv);
// });

// Create server with express
const express = require('express');
const app = express();

const teacherRouter = require('./teacher');
const studentRouter = require('./students');

app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);
// const students = [
//     {name: 'Nguyen Tuan Anh', age: 10},
//     {name: 'Luong Tran', age: 14},
//     {name: 'Le Tien Dung', age: 15},
// ];

// app.get('/user/:id', (req, res) => {
//     console.log(req.params);
//     const idParam = req.params;
//     console.log(idParam.id);
//     res.send('Welcome to my website');
// });
//
// app.get('/students', (req, res) => {
//     res.json(students);
// });
//
// app.get('/students/add', (req, res) => {
//     students.push({ name: 'Bui Thanh Phong', age: 30 });
//     res.json(students);
// });

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});