/*
* 1. Global object
* - Global (toàn cục) - Mọi nơi đều có thể truy cập vào được
* - Không cần khai báo, không cần import, không cần required mà vẫn sử dụng được
* */
// Link tham khảo về global object
// https://nodejs.org/api/globals.html

// __dirname
console.log('dirname: ', __dirname);

// __filename
console.log('filename: ', __filename);

function helloWorld() {
    console.log('Hello world !!!');
}

setTimeout(helloWorld, 2000);

setInterval(helloWorld, 1000);