const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if (!token) res.status(401).send('Ban khong co quyen truy cap vao he thong');
    // Check token correct or incorrect
    try {
        // su dung ham verify cua thu vien jsonwebtoken
        // jwt.verify(token, secretOrPublicKey, [options, callback])
        const checkToken = jwt.verify(token, 'ma-so-bi-mat-khong-duoc-tiet-lo');
        req.user = checkToken;
        next();
    } catch (e) {
        res.status(400).send('Token incorrect - Permission denied');
    }
}