// Mục đích: Giải quyết bài tập số 5
// Hướng dẫn học viên sử dụng build in modules http để tạo 1 server đơn giản
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Day la trang chu');
    } else if (req.url === '/about') {
        res.end('Day la thong tin cua user: Nguyen Tuan Anh');
    } else {
        res.end('Trang web ban yeu cau khong ton tai');
    }
});

server.listen(5000);
