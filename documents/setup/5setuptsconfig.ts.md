**Cấu hính alias cho tsconfig.json**
Việc thêm alias vào file tsconfig.json sẽ giúp VS Code hiểu mà tự động import giúp chúng ta. Lưu ý cái này chỉ giúp
Thêm đoạn này vào compilerOptions trong file tsconfig.json

"baseUrl": ".",
"paths": {
"~/_": ["src/_"]
}

Ý nghĩa của đoạn này là ta có thể import Login from '~/pages/Login' thay vì import Login from '../../pages/Login'. Ngắn gọn và dễ nhìn hơn nhiều!
