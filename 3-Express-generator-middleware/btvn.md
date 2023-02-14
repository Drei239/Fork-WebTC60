## Bai 1

Viết 1 middleware in ra URL và method khi user request đến trang chủ và trang about

## Bai 2

* Tạo một middleware authentication để xác thực người dùng.
* Middleware này sẽ kiểm tra xem tên đăng nhập và mật khẩu của người dùng có hợp lệ hay không.
* Nếu hợp lệ, middleware sẽ cho phép yêu cầu được xử lý tiếp, nếu không hợp lệ, middleware sẽ trả về một phản hồi với mã trạng thái 401.
* Middleware authentication chỉ được sử dụng cho các yêu cầu đến đường dẫn /admin.
* Khi một yêu cầu đến đường dẫn /admin được gửi đến server, 
* nó sẽ đầu tiên được xử lý bởi middleware authentication.
* Nếu tên đăng nhập và mật khẩu hợp lệ, yêu cầu sẽ được chuyển tiếp đến xử lý tương ứng cho đường dẫn /admin,
* nếu không hợp lệ, server sẽ trả về một phản hồi với mã trạng thái 401.

req.body.username === 'admin' và req.body.password === 'admin' next() -> localhost:3000/admin -> show 'Trang quan tri noi dung cua admin'
localhost:3000/ -> khong chay qua middleware