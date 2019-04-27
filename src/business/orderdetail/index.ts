import orderDetailAgent from '../../agent/orderdetail'
import HeadersClass from "../../common/base/base.headers";
import { OrderDetailRequest, OrderDetailResponse } from "./service/interface";

export default function orderDetail(OrderDetailRequest: OrderDetailRequest, headers: HeadersClass): Promise<OrderDetailResponse> {
  //console.log('aes--req',utils.aes(JSON.stringify(OrderDetailRequest)));
  let resObj = orderDetailAgent(headers)(OrderDetailRequest)
  return resObj
}