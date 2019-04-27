//引入框架组件
import {
    Get,
    Post,
    Controller,
    CurrentUser,
    AutoXLog,
    AutoCheckList,
    BaseController
} from 'te-one';

//引入 controller 层出入参定义
import {
    GetAddressesBean,
    GetAddressesViewModel,
    AddAddressBean,
    AddAddressViewModel,
    DeleteAddressBean,
    DeleteAddressViewModel
} from './index.interface';

import {
    ERROR_CODE,
    ERROR_MESSAGE
} from '../../../common/consts'
import ViewModel from '../../../common/baseviewmodel'
@AutoXLog('test')
@AutoCheckList()
//注册修饰器 [checklist 、controller]
@Controller('/demo')
export class AddressesController extends BaseController {
    @Get('/test')
    async test() {
        return 'hello one';
    }
    @Get('/getaddresses')
    async getAddresses(@CurrentUser() userInfo): Promise < ViewModel < GetAddressesViewModel > > {
        let resObj = this.getResObj();
        let getBean: GetAddressesBean = this.getQuery();
        let {
            cardNo
        } = userInfo;
        let request = new this.business.addresses.GetAddressesRequest();
        request.cardNo = cardNo;
        request.pageSize = getBean.pageSize;
        request.pageIndex = getBean.pageIndex;
        request.isDefault = !!getBean.isDefault;
        let agent = await this.business.addresses.getAddresses(request);
        if (agent === null) {
            resObj.error = true;
            resObj.errorCode = ERROR_CODE.NETWORK;
            resObj.errorMessage = ERROR_MESSAGE.NETWORK;
        } else {
            let viewMode = new GetAddressesViewModel();
            // 将 agent(下层服务数据) 精简为端上需要的数据 将 agent(下层服务数据) 精简为端上需要的数据 将 agent(下层服务数据)
            // 精简为端上需要的数据
            viewMode.totalConut = agent.totalConut;
            viewMode.addresses = agent.addresses;
            resObj.data = viewMode;
        }
        return resObj;
    }

    @Post('/addaddress')
    async addAddress(@CurrentUser() userInfo): Promise < ViewModel < AddAddressViewModel > > {
        let resObj = this.getResObj();
        let addBean: AddAddressBean = this.getBody();
        let {
            cardNo,
            name
        } = userInfo; //登录获取cardNo

        let request = new this.business.addresses.AddAddressRequest();
        request.cardNo = cardNo; //艺龙卡号
        request.postCode = addBean.postArea; //地址邮编
        request.country = addBean.country; //地址国家
        request.province = addBean.province; //省份
        request.city = addBean.city; //城市
        request.area = addBean.area; //区域
        request.addressContent = addBean.addressContent; //地址详情
        request.addressNumber = addBean.addressNumber; //门牌号
        request.postArea = addBean.postArea; //配送区域，基本没用
        request.contactName = addBean.contactName; //联系人姓名
        request.phoneNo = addBean.phoneNo; //联系人电话
        request.areaCode = addBean.areaCode; //区域码(中国大陆(+86) 、中国香港(+852)、中国澳门(+853)、中国台湾(+886))
        request.isDefault = !!addBean.isDefault;
        let now = Date.now() + '';
        const SYSTEM = 'xcx'
        request.createTime = now; //创建时间
        request.createSystem = SYSTEM; //创建业务线
        request.operateSystem = SYSTEM; //操作业务线
        request.operateTime = now; //操作时间
        request.operatorIP = this.ctx.ip; //操作IP
        request.creatorIP = this.ctx.ip; //创建人IP
        request.creatorName = name; //创建人姓名
        request.operatorName = name; //操作人

        let agent = await this.business.addresses.addAddress(request);
        if (agent === null) {
            resObj.error = true;
            resObj.errorCode = ERROR_CODE.NETWORK;
            resObj.errorMessage = ERROR_MESSAGE.NETWORK;
        } else {
            // 将 agent(下层服务数据) 精简为端上需要的数据 将 agent(下层服务数据) 精简为端上需要的数据 将 agent(下层服务数据)
            // 精简为端上需要的数据
            let viewMode = new AddAddressViewModel();
            if (agent.addressId > 0) { //大于零插入成功，小于等于0插入失败
                viewMode.addressId = agent.addressId; //插入成功
                resObj.data = viewMode;
            } else {
                resObj.errorMessage = "插入失败";
            }
        }
        return resObj;
    }
    @Post('/deleteaddress')
    async deleteAddress(@CurrentUser() userInfo): Promise < ViewModel < DeleteAddressViewModel > > {
        let resObj = this.getResObj();
        let deleteBean: DeleteAddressBean = this.getBody();
        console.log(deleteBean);
        let {
            cardNo
        } = userInfo; //登录获取cardNo
        let request = new this.business.addresses.DeleteAddressRequest();
        request.addressId = deleteBean.addressId;
        request.cardNo = cardNo;
        let agent = await this.business.addresses.deleteAddress(request);
        if (agent === null) {
            resObj.error = true;
            resObj.errorCode = ERROR_CODE.NETWORK;
            resObj.errorMessage = ERROR_MESSAGE.NETWORK;
        } else {
            // 将 agent(下层服务数据) 精简为端上需要的数据 将 agent(下层服务数据) 精简为端上需要的数据 将 agent(下层服务数据)
            // 精简为端上需要的数据
            let viewMode = new DeleteAddressViewModel();
            if (agent.error) {
                resObj.error = true;
                resObj.errorCode = agent.code;
                resObj.errorMessage = agent.msg
            }
            resObj.data = viewMode;
        }
        return resObj;
    }
}