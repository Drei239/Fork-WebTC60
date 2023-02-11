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

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const idParam = req.params;
    console.log(idParam.id);
    res.send('Welcome to my website');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});