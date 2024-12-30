**Config Prettier để format code**

1. Tạo file .prettierrc trong thư trong thư mục root với nội dung dưới đây
   {
   "arrowParens": "always",
   "semi": false,
   "trailingComma": "none",
   "tabWidth": 2,
   "endOfLine": "auto",
   "useTabs": false,
   "singleQuote": true,
   "printWidth": 120,
   "jsxSingleQuote": true
   }
   Mục đích là cấu hình prettier. Anh em nên cài Extension Prettier - Code formatter cho VS Code để nó hiểu nhé.
2. Tiếp theo Tạo file .prettierignore ở thư mục root
   Mục đích là Prettier bỏ qua các file không cần thiết
   // node_modules/
   // dist/
