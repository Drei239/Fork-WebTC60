/*
* Có 2 cách để tạo 1 modules
* - Sử dụng module.exports
* - Sử dụng exports.
* */

// Cách 1
module.exports.getMyDateTime = function () {
    return Date();
}

// Cách 2
exports.getDirName = function () {
    return __dirname;
}

// export variable
const MY_AGE = 31;
exports.myAge = MY_AGE;
