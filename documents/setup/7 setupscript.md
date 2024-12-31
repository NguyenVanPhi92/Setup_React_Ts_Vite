1. Mở file package.json lên, thêm đoạn script dưới vào
   "scripts": {
   //...
   "lint:fix": "eslint . --fix",
   "prettier": "prettier --check \"src/**/(_.tsx|_.ts|_.css|_.scss)\"",
   "prettier:fix": "prettier --write \"src/**/(_.tsx|_.ts|_.css|_.scss)\""
   }
