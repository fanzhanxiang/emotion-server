export class GetAddressesRequest {
  pageIndex : number
  pageSize : number
  cardNo : string
  isDefault : boolean
}
export class GetAddressesResponse {
  totalConut : number
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

export class AddAddressRequest {
  cardNo : string; //艺龙卡号
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
  createTime : string; //创建时间
  createSystem : string; //创建业务线
  operateSystem : string; //操作业务线
  operateTime : string; //操作时间
  operatorIP : string; //操作IP
  creatorIP : string; //创建人IP
  creatorName : string; //创建人姓名
  operatorName : string; //操作人
  isDefault : boolean; //是否默认
}
export class AddAddressResponse {
  addressId : number //   地址ID
}

export class DeleteAddressRequest {
  cardNo : string; //艺龙卡号
  addressId : string; //地址ID
}
export class DeleteAddressResponse {
  code : string;
  msg : string;
  error : boolean;
}