const express = require('express');
const teacherRouter = express.Router();

const teachers = [
    {name: 'Nguyen Tuan Anh', age: 30, id: 1, class: '2A'},
    {name: 'Luong Tran', age: 44, id: 2, class: '2B'},
    {name: 'Le Tien Dung', age: 45, id: 3, class: '2C'},
];

teacherRouter.get('/', (req, res) => {
    res.json(teachers);
});


teacherRouter.get('/add', (req, res) => {
    teachers.push({ name: 'Phung Gia Hao', age: 34 });
    res.json(teachers);
});

teacherRouter.get('/find/:id', (req, res) => {
   const idParameter = req.params.id;
   const findTeacher = teachers.find((teacher) => teacher.id === parseInt(idParameter));
   if (findTeacher) {
       res.json(findTeacher);
   } else {
       res.send('Khong tim thay thong tin giao vien nay');
   }
});

teacherRouter.get('/:id/class/:classId', (req, res) => {
    const id = req.params.id;
    const classId = req.params.classId;
    console.log({id, classId});
    const findTeacherById = teachers.filter((teacher) => teacher.id === parseInt(id));
    const findTeacherByClassId = findTeacherById.find((teacher) => teacher.class === classId);
    if (findTeacherByClassId) {
        res.json(findTeacherByClassId);
    } else {
        res.end(`Khong tim thay thong tin giao vien trong lop ${classId}`);
    }
});

teacherRouter.get('/find', (req, res) => {
    const age = req.query.age;
    const classId = req.query.class;
    console.log({age, classId});
    const findTeacherByAge = teachers.filter((teacher) => teacher.age === parseInt(age));
    const findTeacherByClassId = findTeacherByAge.find((teacher) => teacher.class === classId);
    if (findTeacherByClassId) {
        res.json(findTeacherByClassId);
    } else {
        res.end(`Khong tim thay thong tin giao vien trong lop ${classId}`);
    }
});

module.exports = teacherRouter;