- Tạo 1 document là book trong collection buoi-4
- Import data từ file json manage-book.json vào (sử dụng mongo compass)
- Truy vấn search thông tin theo các đầu mục sau

1. Tìm toàn bộ quyển sách trong document book

```
query:
db.books.find
```

```
result:

```

2. Tìm 1 quyển sách theo _id
3. Thêm 1 quyển sách mới (insert toàn bộ thông tin)
4. Tìm 1 quyển sách có lớn hơn 400 trang và đúng 2 thể loại
5. Update thông tin của quyển sách có title là "One Hundred Years Of Solitude"
- publisher_date
- genres
- Publisher
6. Delete những quyển sách xuất bản trước năm 1967
