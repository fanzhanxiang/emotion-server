//引入框架组件
import {
    Get,
    Controller,
    QueryParam,
    CurrentUser,
    AutoXLog,
    AutoCheckList,
    BaseController,
    CookieParams
} from 'te-one';
import { OrderDetailViewModel } from './service/interface.orderdetail';
import HeadersClass from "../../../common/base/base.headers";
import {OrderDetailRequest} from '../../../business/orderdetail/service/interface'
import getApiOrderDetail from '../../../business/orderdetail/index'
import ViewModel from '../../../common/base/base.viewmodel'


@AutoCheckList()
//注册修饰器 [checklist 、controller]
@Controller('/order')
@AutoXLog('fs-order')
export default class GetOrderDetailController extends BaseController {
    @Get('/orderdetail')
    async getOrderdetail(@QueryParam('orderno') orderno: string, @CurrentUser() userInfo, @CookieParams() cookies: any): Promise<ViewModel<OrderDetailViewModel>> {
        let result = this.getResObj();
        let vm_data  = new OrderDetailViewModel();
        let Cookie = "AUTH_UNIONID=ohmdTt_80saBstg-bax9n3_JK974; H5CookieId=0bc8c043-dd4a-4273-86da-f5d125aee7953; OpenId=o498X0ZBvaSc_yq2TkKgW0JILDTE; SessionToken=de731998-8b5e-41ab-9e72-e3f331fcfb5d01; cityid=5389; openid=o498X0ZBvaSc_yq2TkKgW0JILDTE; topenid=o498X0ZBvaSc_yq2TkKgW0JILDTE; tunionid=ohmdTt_80saBstg-bax9n3_JK974; H5Channel=wxqbh5%2CNormal; ch=wxhome; chid=wxqbh5; xcxSessionId=0bc8c043-dd4a-4273-86da-f5d125aee7953; token=WC39ZUyXRgdG5N%2Boo2HKEIOqVt2nQw5NCSeywE9tzwoJxDQRyaEWHkq3pMAPotHWcou3CP3TlhQrOp4UL3%2BudmjiwPxXIe7lf08ebRWiQ2ao0HPjzOG9gjM3TrhNbLK6xhZfHoitROMrBYyD60HpGU3uGW05FJcyxmhAydjXWO60%3D1487577677129; ext_param=bns%3D3%26ct%3D5%26hoff%3D1001%26opens%3Dtcqb_xcx"
        let headers = new HeadersClass()
        headers.Cookie = Cookie
        // req  请求参数
        let orderDetailRequest = new OrderDetailRequest()
        orderDetailRequest.orderno= orderno

    
        try{
            vm_data= await getApiOrderDetail(orderDetailRequest,headers).catch(e=>{return null});
        }catch(e){
            this.log('请求xapi错误',e)
        }
        result.data = vm_data
        return result
    }
    // async test() {
    //     return 'orderdetail111';
    // }
}