import { ShippingAddress } from './address.interface'

export interface Auth {
  firebase_access_token?: string
  google_access_token?: string
  type?: string
  facebook_access_token?: string
  data_in_token?: any
}

export interface ChangePasswordProps {
  password: string
  re_password: string
  old_password: string
}

export interface ResetPassword {
  password: string
  re_password: string
  phone: string
}

export interface PhoneUpdateProps {
  firebase_access_token: string
  phone: string
}

export interface UserEdit {
  email: string
  name: string
  sex: 'male' | 'female' | ''
  image?: string
}

export interface ILogin {
  phone: string
  password: string
}

export interface User {
  token: string
  phone: string
  name: string
  password: string
  re_password: string
  street: string
  longitude: string
  latitude: string
  name_customs: string
  image: string
  birth_day: string
}

export interface UserInfo {
  id: number
  avatar?: string
  name: string
  phone?: string
  email: string
  birthday?: string
  sex?: 'male' | 'female' | ''
  phone_2: false
  address?: string
  account_type?: string
}

export interface PartnerId {
  partner_id: number
}

export interface GetPromotionList extends PartnerId {
  company_id?: number
}

export interface UserDetail extends UserInfo {
  notification_counts: number
  partner_id: number
  company_id: number
  shipping_adress: ShippingAddress[]
}

export interface OrderHistory {
  sell_by: string
  coupon_code: string | boolean
  amount_total: number
  order_id: number
  partner_id: number
  name: string
  create_date: string
  state: string
  state_name: string
  state_paid_name_name: string
  state_delivery_name: string
  state_paid_name: string
  state_return_delivery: string
  state_return_paid: string
  note: string
  delivery_message: string
}

export interface UpdateUserPropsHook {
  name_customs: string
  image?: string
  sex: 'male' | 'female' | ''
  email: string
}

export interface UpdateUserProps extends UpdateUserPropsHook {
  token: string
}

interface ProductOrderHistory {
  image_url: Array<string>
  name: string
  price: number
  product_discount: number
  product_id: number
  product_uom: string
  quantity: number
  re_order: boolean
}

export interface OrderHistoryDetail {
  amount_total: number
  create_date: string
  customer_location: { longitude: string; latitude: string }
  delivery_address: string
  delivery_name: string
  delivery_phone: string
  discount_by_loyal: number
  is_rate: string
  name: string
  note: string
  partner_address: string
  partner_id: number
  partner_name: string
  partner_phone: string
  products: ProductOrderHistory[]
  sell_by: string
  star: number
  state: string
  state_delivery_name: string
  state_name: string
  state_paid_name: string
  state_return_delivery: string
  state_return_paid: string
  type_product: string
  code_delivery: string | false
  url_tracking_delivery: string | false
  delivery_message: string
}

export interface Wishlist {
  id: number
  product_id: number
  id_product_att: number
  name: string
  partner_id: number
  partner_name: string
  price: number
  product_uom: string
  product_uom_id: number
  qty_available: number
  barcode: boolean | string
  description: boolean | string
  image_url: Array<string>
  type: 'product'
  uom: { id: number; name: string }
  wishlist: true
  uom_categ: { id: number; name: string }[]
  company_id: false
  company_name: false
  vat: number
  rating_count: number
  comment_count: number
  price_list: []
  price_discount: number
  price_orgin: []
  seller_price: number
  price_table: []
  categ_name: string
  attributes: []
}

export interface Comment {
  id: number
  partner_id: number
  partner_name: string
  message: string
  star_rating: number
  product_id: number
  date: string
  avatar: string
}

export interface UserSlice {
  token: string | undefined
  chatToken: string | undefined
  addressDefault: undefined | ShippingAddress
  userInfo: UserInfo | undefined
  fcmToken: string
}

export interface WishlistReq {
  product_id?: number
  wishlist_id?: number
}

export interface GetComment {
  product_id: number
}

export interface AddComment extends GetComment {
  content: string
}

export interface DeleteComment {
  comment_id: number
  product_id: number
}

export interface AuthSlice {
  currentToken: string | undefined
  phoneNumber: string | undefined
  currentUserInfo: UserInfo | undefined
  isValidateCreatePasswordOTP: boolean | undefined
}

export interface GetUserInfo {
  token?: string
  onSuccess?: (_: UserInfo) => void
  onError?: () => void
}
