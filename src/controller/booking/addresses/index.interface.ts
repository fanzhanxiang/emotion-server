export class GetAddressesBean {
  pageIndex : number
  pageSize : number
  isDefault : boolean
}
export class GetAddressesViewModel {
  totalConut : number;
  addresses : Array < Address >
}
export class Address {
  id : number; //地址id
  country : string; // 国家
  province : string; // 省份
  city : string; // 城市
  area : string; // 区域
  addressContent : string; // 地址详情
  addressNumber : string; // 门牌号
  postCode : string; //邮编
  name : string; //联系人姓名
  areaCode : string; //区域码(中国大陆(+86) 、中国香港(+852)、中国澳门(+853)、中国台湾(+886))
  phoneNo : string; // 联系人电话
  isDefault : boolean; //是否默认地址标志
}

export class AddAddressBean {
  cardNo : string; //卡号
  postCode : string; //地址邮编
  country : string; //地址国家
  province : string; //省份
  city : string; //城市
  area : string; //区域
  addressContent : string; //地址详情
  addressNumber : string; //门牌号
  postArea : string; //配送区域，基本没用
  contactName : string; //联系人姓名
  phoneNo : string; //联系人电话
  areaCode : string; //区域码(中国大陆(+86) 、中国香港(+852)、中国澳门(+853)、中国台湾(+886))

  isDefault : boolean = false; //是否默认
}
export class AddAddressViewModel {
  addressId : number //   地址ID
}

export class DeleteAddressBean {
  addressId : string; //地址ID
}
export class DeleteAddressViewModel {}