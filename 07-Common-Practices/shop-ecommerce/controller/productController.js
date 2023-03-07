const asyncHandle = require('express-async-handler');
const productModel = require('../models/productModel');

// Search theo keyword truyen len
// Phan trang -> tra ve so luong record tren 1 trang la 10
// Skip den dung record ma user yeu cau
const getProducts = asyncHandle(async (req, res) => {
    // Fix so luong item hien thi tren 1 trang
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword;
    const searchQuery = keyword ? { name: { $regex: keyword } } : {};
    // Count theo cung 1 dieu kien -> Tim ra so luong total record tra ve
    const totalProduct = await productModel.countDocuments({ ...searchQuery });
    // Gia su co 20 san pham, dang o trang so 2 -> skip qua 10 san pham dau tien, chi lay tu san pham so 11 tro di
    const products = await productModel.find({ ...searchQuery }).limit(pageSize).skip(pageSize * (page - 1));
    res.json({
        products,
        totalProduct,
        page
    });
});

module.exports = {
    getProducts
}