import { TeService } from "te-one";

import apis from "../common/constants/constants.api";
export default function (headers) {
    console.log(headers,'测试是否调用了接口',apis.orderDetail)
    return TeService({
      headers,
      url: apis.orderDetail,
      timeOut: 3000,
      method:'GET'
    });
  }
