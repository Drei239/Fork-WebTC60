/*
* Trong node js có 3 loại modules
* - Core modules (build-in module) (modules của nodejs build sẵn)
* - Local modules (modules của project - các bạn tạo)
* - Third Party Modules (modules do bên thứ 3 viết để phục vụ 1 mục đích công việc nào đó)
* */

// Build-in modules
const path = require('path');
console.log(path.sep);

const os = require('os');
const user = os.userInfo();
console.log(user);