var set = new Set();

// Add key
set.add({x: 1});
set.add(2);
set.add("text");

console.log(set.has("text")); // kiếm tra xem có key == 'text' hay không.
set.delete(1); // xóa một key
var set_1 = new Set([1, 2, 3, 4]);  // khởi tạo một set bằng dữ liệu là một mảng
console.log(set_1.size); // in ra size của 1 set "5"
var set_2 = new Set(set_1.values()); // sao chép các giá trị key từ một set khác.
