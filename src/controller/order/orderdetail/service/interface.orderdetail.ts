export class OrderDetailViewModel {
    // 一元夺宝的地址
    treasureBoxUrl: TreasureBox = null;
    // 订单号 done
    orderNo: string = "";
    // 订单状态 done
    clientStatusDesc: string = "";
    // 状态id done
    statusId: number = null;
    // 订单描述性文案 done
    clientStatusExplain: string = "";
    // 闪信提示 端上未找到
    // creditTip: string = "";
    // 可变更取消订单 done
    changeCancelable: boolean = false;
    // 酒店名称
    hotelName: string = "";
    // 酒店所在城市 done
    hotelCity: string = "";
    // 酒店地址 done
    hotelAddress: string = "";
    // 酒店电话 done
    hotelPhone: string = "";
    // 酒店id
    hotelId: string = "";
    // @done
    insPrice: number = 0;
    // 到店时间  done
    arriveDate: number = null;
    // 离店时间 done
    leaveDate: number = null;
    // 房型名称 done
    roomTypeName: string = "";
    // 房间数  done
    roomCount: number = 1;
    // 最晚到店时间 done
    timeLate: number = null;
    // 入住名称 done
    guestName: string = "";
    // 入住人列表 done
    gutests: Array<VmGutests> = null;
    // 联系电话 done
    mobilePhone: string = "";
    // 早餐信息 done
    breakfast: Array<Breakfast> = null;
    // 早餐信息 done
    breakfastStr: string = "";
    //  发票 done
    invoiceEntity: HotelInvoiceInfoListEntity = null;
    // 发票 done
    invoiceInfoStr: string = "";
    // 创单时间 done
    createTime: number = null;
    // 服务器时间 done
    serverTime: number = null;
    // 总价 done
    sumPrice: number = null;
    // done
    cashBackMoney: number = null;
    // done
    vouchMoney: number = null;
    // 卡号 done
    cardNumber: string = "";
    // 订单的取消状态 done
    cancelStatus: number = null;
    // 铂涛提示 done
    boTaoHongBaoDesCode: string = "";// 端上未用到
    // rp名称 done
    ratePlanName: string = "";
    // 含早餐信息 done
    breakfastFlag: number = null;
    // 订单是否可取消 done
    cancelable: boolean = false;
    // 钟点房 done
    hourRoomOrder: boolean = false;
    // 申请返现状态 done
    applyCouponStatus: number = null;
    // 支付金额 done
    payAmount: number = null;
    // 预付订单 done
    payment: number = null;
    // 是否可以延住 done
    canContinuePay: boolean = false;
    // done 端上不需要
    // feedbackStatusFlag: number = null; 
    // done
    currency: string = "";
    // done
    hongbaoBackMoney: number = null;
    // done
    discountMoney: number = null;
    // done
    backMoney: number = null;
    // done
    discountOrder: boolean = false;
    // 预付规则 done
    prepayRule: string = "";
    // 担保规则 done
    vouchRule: string = "";
    // done
    exchangedSumPrice: number = null;
    // done
    exchangedDisplayPrice: number = null;
    // done
    exchangeBargainSumPrice: number = null;
    // done
    orderInsurance: VmOrderInsurance = null;
    // done
    yiWaiInsurance: VmOrderInsurance = null;
    // done
    conquestSwitch: boolean = false;
    // done
    resellOrder: boolean = false;
    // done
    canDelete: boolean = false;
    // done
    showResaleSchedule: boolean = false;
    // done
    showCancelResale: boolean = false;
    // done
    showModifyOrder: boolean = false;
    // done
    canBeResaled: boolean = false;
    // done
    hongbaoReduce: number = null;
    // doneas
    txStaticMapurl: string = "";
    // done
    canReminded: boolean = false;
    // doing
    promotionDetail: string = "";
    promotionDetail11: PromotionDetailEntity = null;
    // done
    paymentFlowType: number = null;
    // done
    creditChannelId: string = "";
    // done
    creditFlashLiveDes: string = "";
    // done
    colorHex: string = "";
    // done
    orderPayDes: string = "";
    // done 写死
    forbidOrderflow: boolean = false;
    // done
    bookAgain: boolean = true;
    // done
    stayDays: number = 1;
    // done
    canBeExtended: boolean;
    // done
    invoiceElongTip: string = "";
    // done
    einvoiceElongTip: string = "";
    // done
    orderFAQs: any = null;
    // 端上未找到引用
    // complaintTip: string = "";
    // todo
    penaltyMessage: string = "";
    // done
    hongbaoAsYouhuijuan: boolean = false;
    // done
    preInvoiceInfo: PreInvoiceInfo = null;
    // done
    dandanAwardConfig: string = "";
    // done
    fillInvoiceConfig: string = "";
    // done
    orderdetailSwitch: string = "";
    // done
    cashBackInfo: CashBackInfo;
    // done
    barginActivityId: string = "";
    // done
    bargin: Bargin = null;
    // done 
    hotelMap: HotelMap = null;
    // done
    orderSource: number = 2;
    // done
    supplierDesc: string = "";
    // done
    addtionProductDetailList: Array<AdditionProductDetail> = null;
    // done
    claimPhone: string = "";
    // done前端未找到引用
    hongBaoEntityList: Array<VmSellingHongbao> = null;
    // done
    additionProductGather: AdditionProductGather = null;
    // done
    hotelErrorList: Array<HotelErrorList> = null;
    // done
    mRoomTypeId: string = "";
    // done
    booking: boolean = false;
    // done
    canComment: boolean = false;
    // done
    clientStatus: VmClientStatus = null;
    // done
    autoHideOrder: boolean = false;
    // done 是否展示理赔申请按钮
    showClaim: boolean = false;
    // done
    showYiWaiClaim: boolean = false;
    // done
    refund: boolean = false;
    // done
    needShowCheckIn: boolean = false;
    // 新版取消规则 done
    cancelRuleDesc: CancelRuleDesc = null;
    // 发票后置的开关 done
    backInvoiceSwitch: boolean = false;
    // 离店是否超过30天 done
    leaveOverThirty: boolean = false;
    // done 是否已经结账
    leave: boolean = false;
    // done 是否取消
    cancel: boolean = false;
    // 在线付金额
    // 展示金额(RMB总价-总减金额 +保险金额)所有预付都是RMB金额，现付如果是外币就是外币金额
    exchangedDisplayPriceDecimal: number = null
    // 订单详情里程积分文案说明
    mileagePointsText: string = null;
    // 是否展示新的取消规则
    newCancelShow: boolean = false;
    // 订单的取消状态文案   1:不能取消2:可取消3:可电话取消
    cancelStatusDesc: string = null;
    // 单独售卖产品 如季卡
    aloneSaleEntity: AloneSaleEntity = null;
    // 权益云
    entitlementCloud: EntitlementCloud = null;
    // 发放里程
    millageVaild: boolean = false
  }
  export class EntitlementCloud {
    beforeTitle: string = '';
    afterTitle: string = '';
    beforeDesc: string = '';
    middleDesc: string = '';
    afterDesc: string = '';
    instruction: string = '';
    detailTip: string = '';
    entitlements: Array<Entitlement>;
  }
  export class EntitlementItemInfo {
    id: number;
    sum: number;
    mileageSum: number;
  }
  export class Entitlement {
    title: string = '';
    beforeDesc: string = '';
    afterDesc: string = '';
    state: number;
    //只有早餐会有
    breakFasts: Array<EntitlementBreakFirst>;
  }
  export class EntitlementBreakFirst {
    title: string = '';
    beforeDesc: string = '';
    afterDesc: string = '';
    state: number;
  }
  export class AloneSaleEntity {
    //@Desc("主产品图")
    mainPic: string;
    //@Desc("总销量")
    totalSales: string;
    //@Desc("产品详情 Url")
    productUrl: string;
    //@Desc("是否展示更多")
    isShowMore: boolean;
    //@Desc("更多背景色")
    showMoreColor: string;
    //@Desc("更多文案")
    showMoreText: string;
    //@Desc("更多文案的背景色")
    moreTextColor: string;
    //@Desc("更多跳转 Url")
    showMoreUrl: string;
  }
  class TreasureBox {
    pic_url: string; // 浮标图片地址
    activity_url: string; // 活动链接
  }
  export class CancelRuleDesc {
    // 类型
    id: string;
    // 名称 or Title;
    name: string;
    // 描述
    desc: string;
    // 副文案
    subPromotionText: Array<CancelRuleDesc> = null;
  }
  export class VmSellingHongbao {
    desc: string = '';
    sellType: number; //	红包类型: 1.赠送红包, 2: 强绑红包, 3: 可选红包
    activityId: number;//	活动ID
    activityNo: string; //	活动编号（机票搭售用）
    activityDesc: string; //	活动描述
    faceValue: number;//	红包面值
    fullReturnRule: FullReturnRule;//	满返红包规则
    sellingPrice: number;//	红包售卖价格
    sellCategory: number; //	红包类别: 1.国内酒店红包; 2.机票红包
    sellCategoryName: string; //	红包类别名称
    relativeEffectiveDays: number; //	相对有效天数
    sellTagName: string; //	红包展示名称
    sellTagDesc: string; //	红包展示描述
    positionId: string; //	红包文案资源位置(调文案接口使用)
    text: Array<string>;//	订单详情页附加产品文案:Array<string>
    incomeID: string; //	大于0则充值成功
    isShowSellingPrice: boolean; //	酒店强绑红包是否展示售卖金额, false不展示
    couponCode: string; //	机票的红包code，非空时为已到账
    instruction: string;// 辅营产品使用说明
    couponType: number; //	红包类型 这个定义是同程机票那边用的：1: 国内微信, 2国际微信, 3: 国内app, 4: 国际app, 5: 机场服务
  }
  export class FullReturnRule {
    leftValue: number; //	满金额
    rightValue: number; //	返金额
    description: string; //	描述	
  
  }
  export class VmGutests {
    name: string = "";
    country: string = "";
    orderItemID: number;
    nameId: number
  }
  export class Breakfast {
    type: string;
    date: string;
    free?: string;
  }
  export class PreInvoiceInfo {
    showPreInvoiceModule: boolean;
    preInvoiceAction: PreInvoiceAction;
  }
  export class PreInvoiceAction {
    actionStatus: number;
    actionName: string = "";
    actionDesc: string = "";
  }
  export class CashBackInfo {
    // 返现状态Id
    statusId: number;
    // 返现状态
    status: string = "";
    // 返现描述
    statusDesc: string = "";
    // 申领条件弹窗文案
    applyConditionDesc: string = "";
    // 需要标蓝文案
    markStr: string = "";
    //返现状态及按钮信息
    action: CashBackActionEntity;
    applyConditionDescList: Array<string> = null;
  };
  export class CashBackActionEntity {
    actionId: string;
    actionName: string;
    colorHex: string = "colorHex";
  }
  
  export class Bargin {
    // 砍价金额
    amount: number;
    // 离店日期
    leaveDate: string;
    // 砍价状态
    bargainStatus: number;
    // 砍价返现状态
    cashBackStatusId: number = null;
    // 当前时间是否超过离店日期
    leave: boolean = false;
    // 是否已结账
    accounts: boolean = false;
    // 过期时间
    expireTime: string;
    // 是否是砍价活动 
    wxqbBargain: boolean = false;
    // A:幸运用户
    userAb: string = 'Z'
  };
  export class HotelMap {
    lat: string = "";
    lng: string = "";
    name: string = "";
    coordtype: string = "";
    address: string = "";
  }
  export class HotelPositon {
    lat: string = "";
    lng: string = "";
  }
  export class AdditionProductGather {
    seasonCardList: Array<SeasonCard>;
    expensivePayInfoList: Array<ExpensivePayInfo>;
    couponInfoList: Array<CouponInfo>
  };
  export class CouponInfo {
    orderId: string; //订单号
    additionOrderId: string; //辅营订单号
    productKindCode: string; //产品种类code
    productCode: string; //产品code
    additionOrderStatus: number; //辅营订单状态 0未生效1已取消3已支付5已生效 10已退款11受理中13赔款中 15已理赔18理赔失败
    additionOrderStatusDesc: string; //辅营订单状态描述
    productName: string; //产品名称
    productQuantity: number; //产品数量
    productAmount: number; //产品总金额
    productTitle: string; //产品标题
    productDetail: string; //产品详情
    ableRefund: boolean; //是否可退
    refundReasonCode: string; //不可退原因代码
    refundReasonDesc: string; //不可退原因描述
    canRefundAmount: number; //可退产品金额
    couponStatus: number; //券状态
    couponStatusDesc: string; //券状态描述
    couponContent: string; //对客券文案
  }
  //季卡产品列表
  export class ExpensivePayInfo {
    orderId: string; //订单号
    additionOrderId: string; //辅营订单号
    productKindCode: string; //产品种类code
    productCode: string; //产品code
    additionOrderStatus: number; //辅营订单状态 0未生效1已取消3已支付5已生效 10已退款11受理中13赔款中 15已理赔18理赔失败
    additionOrderStatusDesc: string; //辅营订单状态描述
    productName: string; //产品名称
    productQuantity: number; //产品数量
    productAmount: number; //产品总金额
    productTitle: string; //产品标题
    productDetail: string; //产品详情
    priceType: number; //价格类型(1:单价,2百分比)
    sellingPrice: number; //卖价
    claimMultiple: number; //赔付差价倍数
    claimMaxAmount: number; //赔付上限金额
    refundAmount: number; //退款给客人金额（赔付后）
    operator: string; //操作人
    refundTime: string; //单独退服务时间
    claimedTime: string; //赔付成功时间
    claimContent: string; //订单详情页对客文案
    ableRefund: boolean; //是否可退
    refundReasonCode: string; //不可退原因代码
    refundReasonDesc: string; //不可退原因描述
    ableClaim: boolean; //是否可理赔
    claimReasonCode: string; //不可理赔code
    claimReasonDesc: string; //不可理赔原因
    canRefundAmount: number; //可退产品金额
  }
  export class SeasonCard {
    orderId: string; //订单号
    additionOrderId: string; //辅营订单号
    productKindCode: string; //产品种类code
    productCode: string; //产品code
    additionOrderStatus: number; //辅营订单状态 0未生效1已取消3已支付5已生效 10已退款11受理中13赔款中 15已理赔18理赔失败
    additionOrderStatusDesc: string; //辅营订单状态描述
    productName: string; //产品名称
    productTitle: string; //产品标题
    productDetail: string; //产品详情
    productAmount: number; //产品总金额
    productReduceAmount: number; //产品减免金额
    productStatusDesc: string; //季卡状态描述
    refundAmount: number; //退款给客人金额
    operator: string; //操作人
    refundTime: string; //退款给客人时间
    ableRefund: boolean; //是否可退
    refundReasonCode: string; //不可退原因代码
    refundReasonDesc: string; //不可退原因描述
    canRefundAmount: number; //可退产品金额
    totalAmount: number; //季卡权益总金额(使用该字段)
    effectiveDate: string; //季卡生效日期
    expireDate: string; //季卡过期日期(使用该字段YYYY-MM-DD)
    totalDays: string; //季卡总天数
    scRightDetails: Array<ScRightDetailsBean>; //List&ltScRightDetailsBean&gt
    customerContent: string; //未生效，已取消，已支付，已生效，已过期，已退款对应的文案
  }
  export class ScRightDetailsBean {
    scName: string; //	权益名称
    scQuantity: number; //	权益数量
    scRightId: number; //	权益id
    scTitle: string; //	权益标题
    scType: number; //	权益类型（1订单立减, 2退订无忧, 2酒店红包）
    scValue: number; //	权益价值
    validDays: number; //	有效期天数
    expirationDate: string; //	过期日期
    availableQuantity: number; //	可用数量
  }
  export class HotelErrorList {
    type: string = "";
    srSubDetailId: string = "";
    errorMessage: string = "";
    typeCsport: string = "";
    buttonCsport: string = "";
  }
  export class VmClientStatus {
    /**
     * 1:等待支付担保金
     * 2:等待支付房费
     * 3:等待酒店确认
     * 4:未入住
     * 5:酒店拒绝订单
     * 6:房费支付失败
     * 7:担保金支付失败
     * 8:处理中（支付中）
     * 9:处理中（担保中）
     * 10:处理中（正在支付）
     * 11:处理中（正在担保）
     * 12:等待核实入住
     * 13:订单已取消
     * 14:已确认，等待入住
     * 15:预订完成
     * 16:已入住
     * 17:已离店
     * 18:处理中
     *
     */
    statusId: number;
    status: string = "";
    statusDes: string = "";
    statusDesType: number;
    colorHex: string = "";
    actions: Array<VmClientStatusActions>;
    orderPayDes: string = "";
    // 高亮显示
    highLightStr:string=""; 
  }
  export class VmClientStatusActions {
    actionName: string = "";
    actionId: string = "";
    appendDes: string = "";;
  }
  // 闪住信用住
  export class OrderDetailBean {
    orderno: string = "";
  }
  export class DailyPromotion {
    // 入住日期
    date: string;
    // 当日每房间的促销信息
    fusionedPromotion: Array<FusionedPromotion>;
  
  }
  export class FusionedPromotion {
    factor: number;
    roomPrice: number;
    roomPromotions: Array<RoomPromotions>
  }
  export class VmRoomPromotion {
    // 优先级因数
    order: number=null;
  
    factoredValue: number;
    // 促销文案
    info: string;
    // 促销金额
    value: number;
    factor: number;
    roomPrice: number;
  }
  export class RoomPromotions {
    // 该促销的总面值
    factoredValue: number;
    info: string;
    // 该促销的面值
    value: number;
    // 该促销出现的次数
    frequency: number;
  }
  export class PromotionEntity {
    promotionTypeEnum: number;
    discountpromotion: number;
  }
  
  
  // 目前端上只需要isAbleContinueToPay一个字段
  export class HotelInvoiceInfoListEntity {
    // source: number; //	发票来源(0不开发票,1elong开发票,2酒店开发票)
    // invoiceOpType: number; //	发票操作状态 -1：不可展示发票，也没有操作 0：可展示发票，没操作 1：可以补开发票 2：可以修改发票
    // invoiceMoney: number; //	无发票，详情页补开时可开金额
    // invoiceTypeList: Array<InvoiceType>;// 补开、修改 - 发票类型:Array < InvoiceType >
    // invoiceItems: Array<InvoiceItem>;// 发票列表:Array < InvoiceItem >
    // delieverFeeType: number; //	发票配送金额类型 1 现金，2 积分，3免费邮递
    // delieverFeeAmount: number; //	发票配送金额
    isAbleContinueToPay: boolean; //	发票是否可以继续支付 - 补开发票
    // notifyUrl: string; //	mis回调url - 发票
    // payAmount: number;//	支付订单金额 - 发票
    // tradeNo: string; //	请求交易号token - 发票
    // businessType: number; //	业务线 - token - 发票
    // bookingCreditCardInfo: Array<BookingCreditCardInfo>;// booking订单信用卡信息列表:Array < BookingCreditCardInfo >
    // invoicePayStatus: InvoicePayStatus;//	发票支付状态
  }
  //补开、修改-发票类型
  export class InvoiceType {
    type: string;//	类型 0-纸质普票 1 - 电子普票 2 - 纸质专票
    des: string;//	描述
  }
  //发票列表
  export class InvoiceItem {
    invoiceNo: string;//	发票号
    isInvoiced: boolean;//	是否已开发票
    amount: string;//	发票金额
    title: string;//	发票抬头
    invoiceType: string;//	发票类型
    address: string;//	发票邮寄地址
    desc: string;//	发票描述
    recevierName: string;//	收件人姓名
    recevierPhone: string;//	收件人电话
    invoiceCreateDate: string;//	发票生成时间
    isInvoiceHoldRemark: boolean;//	是否有备注信息
    invoiceRemark: Array<OrderInvoiceRemark>;// 发票备注信息:Array < OrderInvoiceRemark >
    isMergeInvoice: boolean;//	是否为合开发票
    invoiceId: string; //	发票的ID，修改发票新接口使用
    invoiceCategory: string;//	发票类型：0 - 纸质普票, 1 - 电子普票，2 - 纸质专票
    urlForWeixinCard: string;//	加入微信卡券的链接url
    urlForWeixinCardPack: string;//	添加到微信卡包的url
    dedicatedInvoiceInfo: DedicatedInvoiceItem;//	专用发票信息（仅发票类型为专用发票时有效）
    urlForPDF: string;//	发票下载地址
    processStatus: string;//	发票处理状态：0 未处理，1 处理中，2 成功，3 失败
    deliveryDetailFlag: boolean;//	是否展示发票物流信息
  }
  //booking订单信用卡信息列表	
  export class BookingCreditCardInfo {
    creditCardCode: string; //	信用卡code
    creditCardDesc: string; //	信用卡描述
  }
  //发票支付状态
  export class InvoicePayStatus {
    orderId: string; //	订单号
    detailType: string; //	0 房费，1 取消险，4 发票配送费
    transactionProcessType: string; //	0 扣款 1 退款 2 担保 3解除担保 4 担保后退款 场景：担保订单NoShow有罚金，发起退款时 5 信用住-担保(密码验证成功) 6 信用住 - 解除担保场景：“客人免费取消订单” 或者 “非担保，客人Noshow（住哲模式 - 非担保）” 或者 “离店后酒店没有及时处理订单，需要自动取消订单并发起解除担保” 7 信用住 - 扣款 下单时，客人仅仅只是绑卡、验证支付密码，真正的扣款要在 触发到扣款的时机 后，再由订单API向支付系统发起扣款请求 场景：客人离店 / 担保、预付，客人Noshow / 超过免费取消的时限取消订单 8 信用住 - 退款 场景：客人投诉 9 闪住扣款 10 闪住退款 11 booking产品订单的担保，只是收集支付信息，传给booking酒店，由酒店进行相应的操作 12 booking产品订单的解除担保，删除支付系统的支付信息
    transactionStatus: string; //	0 未处理 1 已获取Token 2 支付中（平台收到信用卡信息后回调） 3 成功 4 失败 5暂缓
    canRefundAmount: string; //	可退金额
    alreadyRefundAmount: string; //	已退金额
    transactionAmount: string; //	当次与payment交互金额
    failReason: string; //	失败原因
    notes: string; //	备注
  }
  //发票备注信息	
  export class OrderInvoiceRemark {
    checkInDate: string; //	入住日期
    checkOutDate: string; //	离店日期
    roomNum: number;//	房间数
    hotelName: string; //	酒店名	
  
  }
  //专用发票信息（仅发票类型为专用发票时有效）
  export class DedicatedInvoiceItem {
    registerBankNum: string; //	登记银行账号
    registerPhoneNum: string; //	登记电话
    sHotelAddress: string; //	登记的酒店地址
    taxPayerNum: string; //	纳税人识别号
    taxRegisterBank: string; //	纳税人登记银行
  }
  //发票信息	
  export class HotelInvoiceInfo {
    Source: string;//发票来源(0不开发票,1elong开发票,2酒店开发票)
    InvoiceNo: string; //	发票号
    IsInvoiced: Boolean; //	是否已开发票
    Amount: number; //	发票金额
    Title: string; //	发票抬头
    InvoiceType: string; //	发票类型
    Address: string; //	发票邮寄地址
    desc: string; //	发票描述
    RecevierName: string; //	收件人姓名
    RecevierPhone: string; //	收件人电话
    InvoiceCreateDate: string; //	发票生成时间
    InvoiceOpType: number; //	发票操作状态 - 1：不可展示发票，也没有操作 0：可展示发票，没操作 1：可以补开发票 2：可以修改发票
    IsInvoiceHoldRemark: boolean;//	是否有备注信息
    InvoiceRemark: Array<OrderInvoiceRemark>;// 发票备注信息:Array < OrderInvoiceRemark >
    IsMergeInvoice: boolean;//	是否为合开发票
    InvoiceMoney: number; //	无发票，详情页补开时可开金额
    InvoiceId: number;//	发票的ID，修改发票新接口使用
    invoiceCategory: number; //	发票类型：0 - 纸质发票, 1 - 电子发票
    urlForWeixinCard: string; //	加入微信卡券的链接url
  }
  //保单信息	
  export class VmOrderInsurance {
    status: string; //	保单状态
    statusId: number; //	状态id
    insuranceDesc: string; //	保险文案
    color: string; //	保单状态颜色
    insuranceId: string; //	保险ID(目前1代表取消险)
    insurancePrice: number; //	保险金额
    isShowClaimButt: Boolean; //	是否展示理赔按钮
    isClaimed: number; //	是否理赔过 0: 未理赔 1：理赔过
    claimPrompt: string; //	理赔按钮展示文案
    insuranceOrderId: string; //	保险订单号 - 理赔使用
    policyNumber: string; //	保单号
    policyHoldersName: string; //	投保人姓名
    insuranceCompanyName: string; //	保险公司名称
    insuranceCompanyTel: string; //	保险公司电话
    policyHoldersMobile: string; //	投保人电话
    insuranceExplainUrl: string; //	保险说明URL
    insuranceType: string; //	0取消险，1出行险
    insuranceTip: string; //	保险提示信息
    phoneNum: string; //理赔电话
    claimMessage: string; // 理赔文案
    nonReasonInsurance: boolean = false; // 是否为无理由取消险
    insuranceTitle: string; // 取消险title
    onlineClaimUrl: string; //在线理赔跳转链接
  }
  
  export class AdditionProductDetail {
  
    productName: string; //辅营产品名称
    additionProductDetailText: string; //辅营产品详情页文案
    titleBar: string; //点击申请赔付按钮弹出框标题
    finishedMessage: string; //点击申请赔付按钮弹出框提示语句
    productKindCode: string; //辅营产品类型code
    auxiliaryId: number; //辅营订单id
    productCode: string; //辅营产品code
    productAmount: number; //辅营产品总金额
    isAbleClaim: boolean; //是否可理赔 默认false
    claimReasonDesc: string; //不可理赔原因
    additionOrderStatus: number; //辅营订单状态 0未生效5已生效10已退款15已理赔
    additionOrderStatusDesc: string; //辅营订单状态描述
    claimAmount: number; //理赔金额
    claimTime: string; //理赔时间
    claimStatus: number; //理赔状态（0-未处理 1-待理赔 2-已理赔）
    claimText: string; //理赔进度文案 根据状态不同文案不同（0-未处理 1-待理赔 2-已理赔）
    canClaimAmount: number; //可理赔金额
  }
  export class PromotionDetailEntity {
    // 贵就赔/标题 done
    claimTitle: string = null;
    // 贵就赔/明细 done
    claimPrice: number = 0;
    // 返现 done
    couponTotalPrice: number = 0;
    // 信用住 done
    creditLivePrice: number = 0;
    // 每日明细 todo
    dailyPromotion: Array<DailyPromotion> = null;
    // 额外返现
    extraCoupon: number = 0;
    // 红包返现
    hongBaoTotalCoupon: number = 0;
    // 红包立减
    hongBaoTotalReduce: number = 0
    // 里程抵现金额
    offsetPayAmount: number = 0;
    // 退订无忧价格
    orderClaimPrice: number = 0;
    // 取消险
    orderInsurancePrice: number = 0;
    //总价
    originalTotalPrice: number = 0;
    // 立减
    reduceTotalPrice: number = 0;
    // 房量
    roomCount: number = 1;
    // 61,63两种促销的文案 微信专享立减
    weixinEnjoyDesc: string = "";
    //   // 携程促销下的微信专享下的优惠金额，前端展示
    weixinEnjoySumPrice: number = 0;
    // 意外险
    yiWaiPrice: number = 0;
    // 取消险/无理由取消险名称
    insuranceTitle: string = "";
    // 搭售机票卷明细 done
    sellingDetailHongbaoInfo: SellingDetailHongbaoInfo;
    // 携程促销信息 done
    ctripDiscountInfoList: Array<VmCtripDiscountInfo>;
    // 季卡消费明细 done
    seasonCardPrice: SeasonCardPriceInfo;
    // 季卡立减明细 done
    seasonCardReducePrice: SeasonCardReducePrice;
    // 里程积分
    mileagePoints: number;
  
  }
  // 季卡立减明细
  export class SeasonCardReducePrice {
    // 产品立减文案
    productNameReduce: string;
    // 产品减免额
    productReduceAmount: number;
  }
  // 季卡消费明细
  export class SeasonCardPriceInfo {
    // 产品名称
    productName: string;
    // 产品总额
    productAmount: number = 0;
    /**
     * 季卡生效返回日期格式
     * yyyy-MM-dd 至 yyyy-MM-dd
     * 季卡未生效返回文案
     * 待酒店确认后立即生效
     */
    productDesc: string;
  
  }
  // 携程促销标签端上只用到了desc amout
  export class VmCtripDiscountInfo {
    // 携程促销优惠类型：1-天天特价；2-新客专享；3-优享会;
    type: string;
    // 金额
    amount: number = 0;
    // 根据携程促销类型，给端上的展示，mapi不提供该字段
    desc: string;
  }
  export class StatInfo {
    // 不包含促销的总金额
    total: number = 0;
    // 红包返现金额
    hongbaoCoupon: number = 0;
    // 红包立减金额
    hongbaoReduce: number = 0;
    // 总返现金额(包含红包)
    coupon: number = 0;
    // 总立减金额(包含红包))
    reduce: number = 0;
    //额外返现金额（单独统计 用于前台展示）
    extra: number = 0;
    //携程促销二期新增的字段，使用方式 promotionName + amount, 就前端用了。  一期的还是需要去转换一下类型对应的促销名称  start
    //促销名称
    promotionName: string;
    // 促销说明
    promotionDescription: string;
    // 非优享会的ruleid
    ruleId: string;
    // 非优享会的promotionId
    promotionId: string;
    // 非优享会的促销类型
    promotionCtripType: string;
    //携程促销二期新增的字段，使用方式 promotionName + amount, 就前端用了。  一期的还是需要去转换一下类型对应的促销名称   end
    // 携程促销聚合标签名称
    promotionTagName: string;
    // 携程促销聚合标签id
    promotionTagId: string;
  
  }
  export class SellingDetailHongbaoInfo {
  
    sumPrice: number = 0;
    sellingDetailHongbaoEntityList: Array<SellingDetailHongbaoEntity>;
  
  }
  export class SellingDetailHongbaoEntity {
    // 销售金额
    sellingPrice: number = 0;
    // 红包类型 1 国内酒店 2 机票
    sellCategory: number;
    //pay相同 facevalue相x同 sellCategory相同时候的数量
    number: number = 0;
    desc: string;
    // 面额
    faceValue: number = 0;
  
    isOld: boolean;
  }