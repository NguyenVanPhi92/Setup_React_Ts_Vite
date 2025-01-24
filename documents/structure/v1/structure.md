**Chưa tối ưu**
**V1 Redux**

📦v1
┣ 📂@types :chứa type khi khai báo khi thư viện chưa có
┃ ┗ 📜i18next.d.ts
┣ 📂assets :chứa các file ảnh, svg, icon, font
┃ ┗ 📜react.svg
┣ 📂components :chưa các components của dùng chung cho các pages hoặc cho app
┣ 📂context :chứa global state management contextAPI hoặc logic liên quan đến Redux
┣ 📂data :chứa dữ liệu tĩnh hoặc các mô hình dữ liệu (data models) mà ứng dụng sử dụng
┣ 📂features :Tổ chức các mô-đun theo tính năng
┣ 📂hooks :Lưu trữ các hooks tùy chỉnh của React. Những hooks này giúp đóng gói logic tái sử dụng
┣ 📂i18n
┃ ┗ 📜i18n.ts
┣ 📂layouts :Gồm các thành phần định hình cấu trúc ứng dụng, như header, footer, hoặc các trình bao (layout wrapper). Đây là nơi bạn quản lý giao diện chung cho toàn bộ ứng dụng.
┣ 📂libs :chứa các thư viện bên ngoài, tiện ích, hoặc các tích hợp với hệ thống khác. Những phần này thường là các công cụ hỗ trợ cho logic ứng dụng.
┣ 📂locales
┃ ┣ 📂en
┃ ┃ ┣ 📜home.json
┃ ┃ ┗ 📜product.json
┃ ┗ 📂vi
┃ ┃ ┣ 📜home.json
┃ ┃ ┗ 📜product.json
┣ 📂pages :Đây là nơi bạn định nghĩa các trang
┣ 📂services :Quản lý các cuộc gọi API, kết nối với các dịch vụ bên ngoài, hoặc tích hợp với thư viện bên thứ ba. Đây là nơi bạn xử lý dữ liệu đến và đi từ máy chủ.
┣ 📂stores
┣ 📂styles :Lưu trữ các tệp CSS, SCSS, hoặc các tệp kiểu dáng toàn cục và kiểu dáng dành riêng cho từng thành phần
┣ 📂types :Khai báo các type được dùng ex: type, interface
┗ 📂utils :Chứa các hàm tiện ích và các helper dùng chung cho toàn bộ ứng dụng. Ví dụ: định dạng ngày tháng, xử lý chuỗi, hoặc kiểm tra dữ liệu đầu vào.
