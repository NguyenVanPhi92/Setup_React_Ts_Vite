interface UserInfoField {
  id: 'name' | 'email' | 'sex' | 'phone'
  vniTitle: string
  engTitle: string
  type: 'text' | 'radio' | 'dropdown'
}

export const inputs: UserInfoField[] = [
  {
    id: 'name',
    vniTitle: 'Tên Đăng Nhập',
    engTitle: 'User name',
    type: 'text'
  },
  {
    id: 'email',
    vniTitle: 'Email',
    engTitle: 'Email',
    type: 'text'
  },
  {
    id: 'phone',
    vniTitle: 'Số Điện Thoại',
    engTitle: 'Phone Number',
    type: 'text'
  },
  {
    id: 'sex',
    vniTitle: 'Giới Tính',
    engTitle: 'Gender',
    type: 'radio'
  }
]

export const accountHeaderOptionList = [
  {
    path: '/account/',
    vniTitle: 'Tài khoản của tôi',
    engTitle: 'General'
  },

  {
    path: '/account/purchase',
    vniTitle: 'Đơn mua',
    engTitle: 'General'
  },

  {
    path: '',
    vniTitle: 'Đăng xuất',
    engTitle: 'Logout'
  }
]

export const accountOptionList = [
  {
    path: '/account',
    vniTitle: 'Tổng quan',
    engTitle: 'General',
    icon: 'icon'
  },
  {
    path: '/account/info',
    vniTitle: 'Hồ sơ',
    engTitle: 'Information',
    icon: 'icon'
  },
  {
    path: '/account/password',
    vniTitle: 'Đổi mật khẩu',
    engTitle: 'Change password',
    icon: 'icon'
  },
  {
    path: '/account/notifications',
    vniTitle: 'Thông báo',
    engTitle: 'Notification',
    icon: 'icon'
  },
  {
    path: '/account/address',
    vniTitle: 'Địa chỉ',
    engTitle: 'Address',
    icon: 'icon'
  },
  {
    path: '/account/order-history',
    vniTitle: 'Đơn mua',
    engTitle: 'My Order',
    icon: 'icon'
  },
  {
    path: '/account/purchase',
    vniTitle: 'Sản phẩm mua',
    engTitle: 'My purchase',
    icon: 'icon'
  },
  {
    path: '/account/wishlist',
    vniTitle: 'Danh sách yêu thích',
    engTitle: 'My purchase',
    icon: 'icon'
  },
  {
    path: '/account/vouchers',
    vniTitle: 'Kho voucher',
    engTitle: 'My vouchers',
    icon: 'icon'
  }
]
