const express = require('express');
const router = express.Router();
const CarModel = require('../model/car.model'); // Đại diện cho 1 bảng (collection) trong database

// CRUD here

// Create - Tạo 1 API tạo 1 chiếc xe mới lưu vào database và trả về khi call API
router.post('/', (req, res) => {
   const car = new CarModel();
   car.name = req.body.name;
   car.manufacturer = req.body.manufacturer;
   car.price = req.body.price;

   car.save((err, car) => {
       if (err) {
           res.send('Loi luu thong tin xe o to nay');
       } else {
           console.log('Luu thong tin xe o to nay thanh cong', car);
           res.send(car);
       }
   })
});

// READ - Lấy toàn bộ danh sách các xe oto lưu trong bảng cars
router.get('/', (req, res) => {
    // Tim xe oto có http://localhost:3000/cars?name=abc
    CarModel.find({ name: req.query.name }).exec((err, cars) => {
       if (err) {
           res.send('Khong the lay thong tin xe oto trong bang');
       } else {
           console.log('Lay thanh cong danh sach oto')
           res.json(cars);
       }
    });
});

// Lay 1 chiec xe boi ID
router.get('/:id', (req, res) => {
    CarModel.findOne({
        _id: req.params.id
    }).exec((err, car) => {
        if (err) {
            res.send('Co loi xay ra');
        } else {
            res.json(car);
        }
    })
});

// Cap nhat thong tin xe by ID
router.put('/:id', (req, res) => {
   CarModel.findOneAndUpdate(
       {
           _id: req.params.id
       },
       {
           $set: { name: req.body.name }
       },
       {
           upsert: true
       },
       (err, car) => {
           if (err) {
               res.send('Xay ra loi khi update !!!');
           } else {
               res.status(200).send('Update thanh cong');
           }
       }
   )
});

// Xoa xe by ID (Xoa cung)
router.delete('/:id', (req, res) => {
   CarModel.findByIdAndDelete(
       {
           _id: req.params.id
       },
       {},
       (err) => {
           if (err) {
               res.send('Xay ra loi khi xoa');
           } else {
               res.status(200).send('Xoa thanh cong');
           }
       }
   )
});

module.exports = router;