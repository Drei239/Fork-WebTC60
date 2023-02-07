console.log('promise file');

const promisePending = new Promise((resolve, reject) => {
// TODO - console.log
});

console.log("1. Trạng thái Promise khi khởi tạo: ", promisePending);

const promiseFulfilled = new Promise((resolve, reject) => {
   resolve();
});
console.log("2. Trạng thái của Promise khi resolve duoc goi: ", promiseFulfilled);

const promiseReject = new Promise((resolve, reject) => {
    reject("Co loi xay ra");
});

console.log("3. Trang thai cua Promise khi reject duoc goi: ", promiseReject);

const promiseWithData = new Promise((resolve, reject) => {
    // Mock data call from Server
   const memberLists = [
       {
           "name": "Nguyen Tuan Anh",
           "age": "31"
       },
       {
           "name": "Nguyen Minh Tuan",
           "age": "15"
       }
   ]
   resolve(memberLists);
});

console.log('4. Trang thai cua Promise khi resolve dc goi va co value tra ve: ', promiseWithData);

promiseWithData
    .then(function (data) {
        console.log('5. Data get khi fulfilled - resolve dc call: ', data);
    })
    .catch(function () {
        console.log('6. Data get khi rejected - reject dc call: ');
    })
    .finally(function () {
        console.log('7. Khi ca thanh cong hay that bai !!!');
    });