export class OrderDetailRequest{
    orderno:string
  }
  
  export class OrderDetailResponse {
  
    IsError:boolean; //
    ErrorMessage:string; //
    ErrorCode:string; //
    VouchMoney:number; //担保金额
    CashBackMoney:number; //返现金额
    HongbaoBackMoney:string; //红包金额
    DiscountMoney:string; //折扣金额
    ExtraCouponMoney:string; //额外优惠返现金额
    AddedCouponValue:HotelCoupon; //可追加的coupon值
    AddedHongbaoValue:HotelHongbao; //可追加的hongbao值
    ArriveDate:string; //到达时间
    Cost:string; //花费 :跟酒店确认实际意义
    CreateTime:string; //创建时间
    CreatorName:string; //创建人
    numberCredit:string; //双倍积分
    GuestCount:number; //客人数量
    GuestName:string; //客人名称
    HotelAddress:string; //酒店地址
    HotelId:string; //酒店 Id
    HotelName:string; //酒店名称
    IsConfirmed:boolean; //是否需要确认
    IsSpecialPrice:boolean; //是否特价
    LatestChangeTime:string; //最近变更时间
    LeaveDate:string; //离开日期
    OrderNo:string; //此订单的订单号（又称ReserNo）
    CardNumber:string; //订单所属卡号
    RoomCount:number; //房间数量
    RoomTypeId:string; //房型 Id
    RoomTypeName:string; //房型名称
    MRoomTypeId:string; //m房型 Id
    MRoomTypeName:string; //m房型名称
    RatePlanId:number; //RPID
    RatePlanName:string; //rp名称
    ActivityHint:string; //活动提示
    StateCode:string; //订单状态
    StateName:string; //订单状态名
    SumPrice:number; //总价
    ExchangedSumPrice:number; //RMB总价
    ExchangedDisplayPrice:number; //展示金额(总价-总减金额 +保险金额 +门票金额)所有预付都是RMB金额，现付如果是外币就是外币金额
    TimeEarly:string; //最早到达
    TimeLate:string; //最晚到达
    VouchSet:string; //担保类型
    VouchSetCode:number; //担保类型code
    Cancelable:boolean; //是否可取消
    IsComplainted:boolean; //该订单是否已申述
    ComplaintId:number; //申述ID
    Currency:string; //货币类型
    ExchangeRate:number; //汇率
    Payment:number; //支付类型 0:前台现付 1:预付
    PrepayRule:string; //预付规则
    VouchRule:string; //担保规则
    CityName:string; //城市名
    CancelStatus:number; //订单的取消状态 1:不能取消 2:可取消 3:可电话取消
    HotelPhone:string; //酒店电话
    CanEditContactor:boolean; //订单联系人是否可以修改
    CanEditGuests:boolean; //订单入住人是否可以修改
    Gutests:Array<HotelOrderGuest>; //酒店入住人列表List&ltHotelOrderGuest&gt
    Contactor:HotelContactor; //入住人联系方式
    ThirdPartyPaymentInfo:ThirdPartyPaymentInfo; //第三方支付信息
    IsCanBeEdited:boolean; //订单产品是否能够被修改,只能修改成同一酒店下的产品，HotelId相同
    IsCanContinuePay:boolean; //是否可继续支付
    InvoiceInfo:HotelInvoiceInfo; //发票信息
    InvoiceInfoList:HotelInvoiceInfoList; //发票信息列表(9.14.0版本使用)
    preInvoiceInfo:PreInvoiceInfo; //预约发票信息
    ClientStatusDesc:string; //给用户的状态
    ClientStatus:ClientStatus; //给用户的状态 (9.11.0新增) 注：老版本仍用ClientStatusDesc字段
    OrderFlows:Array<OrderVisualFlowItem>; //给用户的订单流List&ltOrderVisualFlowItem&gt
    SubOrderStatusCode:number; //某订单状态的小状态（状态细分 0:无状态 1：特殊满房-需同意安排 2：特殊满房-可反馈）
    IsCanComment:boolean; //订单是否可点评
    isNewFlow:boolean; //是否是新流程订单
    notifyUrl:string; //mis回调url
    payAmount:number; //支付订单金额
    tradeNo:string; //请求交易号token
    businessType:number; //业务线-token
    bookingCreditCardInfo:Array<BookingCreditCardInfo>; //booking订单信用卡信息列表List&ltBookingCreditCardInfo&gt
    IsDiscountOrder:boolean; //是否是五折订单
    IsOnTimeConfirm:boolean; //是否是及时确认订单
    ApplyCouponStatus:number; //申请返现状态，1：可以申请，2：已申请，3：已返现，4：不显示
    IsCanApplyGiftCard:boolean; //是否可以申请礼品卡
    IsBookingFromApartmentChannel:boolean; //是否是公寓来源预定的订单
    BackOrDiscount:BackOrDiscount; //是满多少还是减多少
    IsNeedCoordinatesInfo:boolean; //申请返现时是否需要传入经纬度
    ApplyCashMsg:string; //申请预付返现文案
    IsShowApplyCashMsg:boolean; //是否显示预付返现文案
    IsHourRoomOrder:boolean; //是否是钟点房订单
    Tags:Array<ProductTagInfo>; //标签
    BedTypeNotes:string; //床型要求备注
    Breakfast:Array<string>; //早餐信息List&ltString&gt
    oTAProductSourceType:number; //代理类型编号
    oTAProductSourceName:string; //代理类型名称
    BoTaoHongBaoMsg:string; //铂涛红包获取描述
    BoTaoHongBaoDesCode:string; //铂涛红包获取描述Code
    PromotionCompositeInfo:PromotionCompositeInfo; //促销组合信息
    userExperience:string; //用户获取的经验值
    DayPrice:Array<DayPrice>; //每日价格明细List&ltDayPrice&gt
    userExperienceDes:string; //用户获取的经验值信息描述
    debugInfo:string; //
    baidutudeInfo:Array<string>; //百度经纬度 精度在前 纬度在后
    googletudeInfo:Array<string>; //谷歌经纬度 精度在前 纬度在后
    downtownId:string; //商圈ID
    downtownName:string; //商圈名称
    isMaJiaProduct:boolean; //是否马甲订单
    inComeID:number; //收入ID(新红包)
    memberScoreValue:number; //会员积分值
    describe:string; //有积分订单，积分未到帐，显示文案：预计赠积分XXX和经验值XXX。有积分订单，积分已到帐，显示文案：已赠积分XXX和经验值XXX。无积分订单，经验值未到帐，显示文案：预计赠经验值XXX。无积分订单，经验值已到帐，显示文案：已赠经验值XXX。特殊处理：如积分和经验值其中一个已到帐，另一个未到帐，则显示文案：预计赠积分XXX和经验值XXX。
    transactionProcessType:number; //0 扣款、1 退款 2 担保 3解除担保 4 担保后退款
    transactionStatus:number; //0 未处理 1 已获取Token 2 支付中（平台收到信用卡信息后回调） 3 成功 4 失败 5暂缓
    isHideOrder:boolean; //订单是否隐藏（可依据该字段判断订单是否删除）
    shotelId:string; //供应商酒店id
    isArriveNow:boolean; //是否是马上到店
    baseOrderId:number; //一键延住 原订单号
    resellInfo:ResellInfo; //转让信息
    insuranceList:Array<OrderInsurance>; //保单信息List&ltOrderInsurance&gt
    PayTypes:Array<string>; //订单上红包支持的支付方式List&ltString&gt
    OrderFAQs:Array<string>; //订单常见问题列表List&ltString&gt
    ticketOrderId:string; //门票ID
    ticketDesc:string; //门票备注信息
    ticketTotalPrice:string; //门票总价RMB
    CashBackRuleText:string; //满返红包文案
    feeAmount:number; //杂费/押金
    paymentFlowType:number; //0：普通订单，1：信用住，2：闪住
    creditChannelId:string; //信用住通道id
    cashBackInfo:CashBackStatus; //返现状态及按钮信息
    wxqbBargainCashBackInfo:CashBackStatus; //微信砍价-返现状态及按钮信息
    appBargainCashBackInfo:CashBackStatus; //app砍价-返现状态及按钮信息
    knowledgeFilterList:Array<KnowledgeFilter>; //新知识库的查询条件List&ltKnowledgeFilter&gt
    isVouchInsurance:boolean; //是否是担保取消险-用于支付
    isApplePayDiscountOrder:boolean; //是否是applePay订单
    isBooking:boolean; //是否是booking订单
    creditFlashLiveDes:string; //信用住、闪住说明
    countDownTips:string; //待支付倒计时文案
    countDown:number; //待支付剩余时间,单位为ms
    extraBonusInfo:ExtraBonusInfo; //额外优惠资格信息
    productUniqueId:string; //产品唯一ID, 9.37.0 新增
    majiaOriginProductUniqueId:string; //马甲产品原产品唯一ID, 9.40.0 新增
    otherShowText:Array<ShowText>; //9.39.0新增文案，退款、转让房等List&ltShowText&gt
    cancelTypeDes:string; //9.40.0新增文案取消规则类型，免费取消、付费取消、不可取消、限时取消
    sourceFrom:number; //订单来源 0:enumber 1:同程
    supplierId:number; //供应商id
    otaProductType:number; //非之前供应商产品类型， 0:其他, 1:直签, 2:供应商
    ctripSupplierId:string; //携程供应商id
    wxqbBargain:WXqbBargain; //微信砍价
    sellingHongbaoList:Array<SellingHongbao>; //搭售红包列表List&ltSellingHongbao&gt
    addtionProductDetailList:Array<AdditionProductDetail>; //辅营产品详细列表List&ltAdditionProductDetail&gt
    claimPhone:string; //辅营产品理赔电话
    ctripDiscountInfoList:Array<CtripDiscountInfo>; //携程促销优惠列表List&ltCtripDiscountInfo&gt
    appBarginEntrance:AppBarginEntrance; //app砍价入口信息
    mileageOffsetList:Array<MileageOffsetData>; //里程抵现信息List&ltMileageOffsetData&gt
    bargainBook:BargainInstructions; //砍价使用说明
    additionProductGather:AdditionProductGather; //辅营产品集合
    turnToInternational:boolean; //是否链接到国际
    orderPaidAmount:number; //订单房费实际支付金额
    isAutoHideOrder:boolean; //是否是订后即焚订单
    cancelRuleVisualization:CancelRuleVisualization; //取消规则可视化
    entitlementOrderInfo:EntitlementOrderInfo; // 权益云信息
    newCancelType:number; //订单的取消状态 1:不能取消 2:可取消 3:可电话取消
    }
    export class EntitlementOrderInfo{
      // 权益云状态信息
      entitlementStatusInfo:Array<EntitlementStatusInfo>;
      // 权益间夜信息
      equityNightItemList:Array<EquityNightItem>
    }
    export class EquityNightItem{
      // 日期
      day:string;
      // 房间权益
      roomList:Array<EquityRoomItem>;
    }
    class EquityRoomItem{
      // 房间序号
      roomNumber:number;
      // 具体权益
      entitlementList:Array<EquityItem>;
    }
    class EquityItem{
      //@FieldDes("权益类型(0,无效;1,免费早餐;2,免费取消;3,延迟退房;4,升级房型;5,免房费)")
      entitlementType:number;
      //@FieldDes("总数量（免费早餐早餐权益时要传当天的选择数量）")
      amount:number;
      //@FieldDes("单位积分")
      mileage:number;
      //@FieldDes("免费早餐权益时传 时间 2018-09-10")
      time:string;
    }
    export class EntitlementStatusInfo{
      //@FieldDes("状态")
      entitlementStatus:number;
      //@FieldDes("权益类型(0,无效;1,免费早餐;2,免费取消;3,延迟退房;4,升级房型;5,免房费)")
      entitlementType:number;
      //@FieldDes("携程是否到天")
      isDayRelated:boolean;
      //@FieldDes("促销id")
      promotionId:number;
      //@FieldDes("标签id")
      tagId:number;
    }
    export class HotelCoupon {
    
    PromotionId:number; //促销活动 Id
    PromotionType:number; //促销类型，消费券1，积分2，折扣3，礼物4，返现5，6，7
    Upperlimit:number; //费券上线每个间夜为兼容以前版本，这个数值为10的倍数，零头去掉
    TrueUpperlimit:number; //真实消费券上线每个间夜这个数值为真实的消费券上线值
    ProHotelProductID:number; //产品ID
    }
    
    export class HotelHongbao {
    
    PromotionId:number; //促销活动 Id
    PromotionType:number; //促销类型，10，红包
    Upperlimit:number; //红包上限每个间夜为兼容以前版本，这个数值为10的倍数，零头去掉
    TrueUpperlimit:number; //真实消费红包上限每个间夜这个数值为真实的消费券上线值
    ProHotelProductID:number; //产品ID
    }
    
    export class HotelOrderGuest {
    
    Name:string; //入住人
    NameId:number; //入住人ID
    Country:string; //国家
    OrderItemID:number; //房间ID
    }
    
    export class HotelContactor {
    
    Name:string; //入住人联系人姓名
    MobilePhone:string; //入住人联系人电话
    Email:string; //入住人联系人email
    }
    
    export class ThirdPartyPaymentInfo {
    
    PaymentProviderId:number; //交易提供商
    PaymentAmount:string; //交易金额
    OperationType:number; //操作类型（3：退款 4：扣款）
    Status:number; // 状态（0：未处理 1：成功 2：处理中 3：失败）
    CustomerServiceAmount:string; //客人手续费
    Currency:number; //第三方支付交易币种
    PaymentMethod:number; //支付类型
    ReturnUrl:string; //扣款成功回调URL
    CancelUrl:string; //取消支付URL
    Subject:string; //预订的产品名称
    Body:string; //预订的产品说明
    Requestdate:string; //请求时间
    }
    
    export class HotelInvoiceInfo {
    
    Source:string; //发票来源(0不开发票,1enumber开发票,2酒店开发票)
    InvoiceNo:string; //发票号
    IsInvoiced:boolean; //是否已开发票
    Amount:number; //发票金额
    Title:string; //发票抬头
    InvoiceType:string; //发票类型
    Address:string; //发票邮寄地址
    Desc:string; //发票描述
    RecevierName:string; //收件人姓名
    RecevierPhone:string; //收件人电话
    InvoiceCreateDate:string; //发票生成时间
    InvoiceOpType:number; //发票操作状态 -1：不可展示发票，也没有操作 0：可展示发票，没操作 1：可以补开发票 2：可以修改发票
    IsInvoiceHoldRemark:boolean; //是否有备注信息
    InvoiceRemark:Array<OrderInvoiceRemark>; //发票备注信息List&ltOrderInvoiceRemark&gt
    IsMergeInvoice:boolean; //是否为合开发票
    InvoiceMoney:number; //无发票，详情页补开时可开金额
    InvoiceId:number; //发票的ID，修改发票新接口使用
    invoiceCategory:number; //发票类型：0-纸质发票,1-电子发票
    urlForWeixinCard:string; //加入微信卡券的链接url
    }
    
    export class OrderInvoiceRemark {
    
    checkInDate:string; //入住日期
    checkOutDate:string; //离店日期
    roomNum:number; //房间数
    hotelName:string; //酒店名
    }
    
    export class HotelInvoiceInfoList {
    
    Source:number; //发票来源(0不开发票,1enumber开发票,2酒店开发票)
    InvoiceOpType:number; //发票操作状态 -1：不可展示发票，也没有操作 0：可展示发票，没操作 1：可以补开发票 2：可以修改发票
    InvoiceMoney:string; //无发票，详情页补开时可开金额
    InvoiceTypeList:Array<InvoiceType>; //补开、修改-发票类型List&ltInvoiceType&gt
    InvoiceItems:Array<InvoiceItem>; //发票列表List&ltInvoiceItem&gt
    delieverFeeType:number; //发票配送金额类型 1 现金，2 积分，3免费邮递
    delieverFeeAmount:string; //发票配送金额
    isAbleContinueToPay:boolean; //发票是否可以继续支付-补开发票
    notifyUrl:string; //mis回调url-发票
    payAmount:number; //支付订单金额-发票
    tradeNo:string; //请求交易号token-发票
    businessType:number; //业务线-token-发票
    bookingCreditCardInfo:Array<BookingCreditCardInfo>; //booking订单信用卡信息列表List&ltBookingCreditCardInfo&gt
    invoicePayStatus:InvoicePayStatus; //发票支付状态
    }
    
    export class InvoiceType {
    
    Type:number; //类型 0-纸质普票 1-电子普票 2-纸质专票
    Des:string; //描述
    }
    
    export class InvoiceItem {
    
    InvoiceNo:string; //发票号
    IsInvoiced:boolean; //是否已开发票
    Amount:string; //发票金额
    Title:string; //发票抬头
    InvoiceType:string; //发票类型
    Address:string; //发票邮寄地址
    Desc:string; //发票描述
    RecevierName:string; //收件人姓名
    RecevierPhone:string; //收件人电话
    InvoiceCreateDate:string; //发票生成时间
    IsInvoiceHoldRemark:boolean; //是否有备注信息
    InvoiceRemark:Array<OrderInvoiceRemark>; //发票备注信息List&ltOrderInvoiceRemark&gt
    IsMergeInvoice:boolean; //是否为合开发票
    InvoiceId:number; //发票的ID，修改发票新接口使用
    invoiceCategory:number; //发票类型：0-纸质普票,1-电子普票，2-纸质专票
    urlForWeixinCard:string; //加入微信卡券的链接url
    urlForWeixinCardPack:string; //添加到微信卡包的url
    dedicatedInvoiceInfo:DedicatedInvoiceItem; //专用发票信息（仅发票类型为专用发票时有效）
    urlForPDF:string; //发票下载地址
    processStatus:number; //发票处理状态：0 未处理，1 处理中，2 成功，3 失败
    deliveryDetailFlag:boolean; //是否展示发票物流信息
    }
    
    export class DedicatedInvoiceItem {
    
    registerBankNum:string; //登记银行账号
    registerPhoneNum:string; //登记电话
    sHotelAddress:string; //登记的酒店地址
    taxPayerNum:string; //纳税人识别号
    taxRegisterBank:string; //纳税人登记银行
    }
    
    export class BookingCreditCardInfo {
    
    creditCardCode:string; //信用卡code
    creditCardDesc:string; //信用卡描述
    }
    
    export class InvoicePayStatus {
    
    orderId:number; //订单号
    detailType:number; //0 房费，1 取消险，4 发票配送费
    transactionProcessType:number; //0 扣款 1 退款 2 担保 3解除担保 4 担保后退款 场景：担保订单NoShow有罚金，发起退款时 5 信用住-担保(密码验证成功) 6 信用住-解除担保场景：“客人免费取消订单” 或者 “非担保，客人Noshow（住哲模式-非担保）” 或者 “离店后酒店没有及时处理订单，需要自动取消订单并发起解除担保” 7 信用住-扣款 下单时，客人仅仅只是绑卡、验证支付密码，真正的扣款要在 触发到扣款的时机 后，再由订单API向支付系统发起扣款请求 场景：客人离店/担保、预付，客人Noshow/超过免费取消的时限取消订单 8 信用住-退款 场景：客人投诉 9 闪住扣款 10 闪住退款 11 booking产品订单的担保，只是收集支付信息，传给booking酒店，由酒店进行相应的操作 12 booking产品订单的解除担保，删除支付系统的支付信息
    transactionStatus:number; //0 未处理 1 已获取Token 2 支付中（平台收到信用卡信息后回调） 3 成功 4 失败 5暂缓
    canRefundAmount:number; //可退金额
    alreadyRefundAmount:number; //已退金额
    transactionAmount:number; //当次与payment交互金额
    failReason:string; //失败原因
    notes:string; //备注
    }
    
    export class PreInvoiceInfo {
    
    isShowPreInvoiceModule:boolean; //是否展示预约发票模块
    preInvoiceAction:PreInvoiceAction; //预约发票操作
    }
    
    export class PreInvoiceAction {
    
    actionStatus:number; //预约发票操作状态
    actionName:string; //预约发票操作状态名称
    actionDesc:string; //预约发票操作状态描述
    }
    
    export class ClientStatus {
    
    StatusId:number; //订单状态Id
    Status:string; //订单状态
    StatusDes:string; //订单状态描述
    statusDesType:number; //订单状态描述是类型 0：普通 ，1：退款文案(可点击跳入退款进度)
    ColorHex:string; //色值 例如 #4499ff
    Actions:Array<OrderStatusAction>; //该状态对应的操作List&ltOrderStatusAction&gt
    OrderPayDes:string; //订单支付描述：
    highLightStr:string; // 高亮字段
    }
    
    export class OrderStatusAction {
    
    ActionName:string; //操作名称
    ActionId:string; //操作id
    AppendDes:string; //附加描述
    }
    
    export class OrderVisualFlowItem {
    
    FlowDesc:string; //订单流阶段
    IsCurrentFlow:boolean; //订单当前所在的阶段
    }
    
    export class BackOrDiscount {
    
    BackMoney:string; //返现多少
    DiscountMoney:string; //立减多少
    }
    
    export class ProductTagInfo {
    
    Id:number; //标签id
    Name:string; //标签展示名称
    Description:string; //标签描述
    ColorIndex:number; //颜色索引
    Available:boolean; //是否可用
    Color:string; //颜色十六进制
    rectangleLineColor:string; //标签框线颜色（9.44.0迭代添加）
    priority:number; //标签的优先级
    positionId:string; //标签文案资源位置(调文案接口使用)
    promotionId:number; //携程促销id
    ctripPromotionSort:number; //携程促销二期标签的优先级
    }
    
    export class PromotionCompositeInfo {
    
    DayRoomInfos:Array<DayPromotionRoomInfo>; //每日房间促销信息List&ltDayPromotionRoomInfo&gt
    ProductType:number; //产品类型（产品类型（1：正价产品，2：纯五折，3:五折打包,4:纯满减,5:满减打包,6:老五折,7:纯折扣立减,8:打包折扣立减））
    }
    
    export class DayPromotionRoomInfo {
    
    CheckInDate:string; //入住日期
    PromotionRoomInfo:Array<PromotionRoomInfo>; //促销房间映射信息List&ltPromotionRoomInfo&gt
    }
    
    export class PromotionRoomInfo {
    
    PromotionInfo:ProductPromotionInfo; //促销
    OwnerRoom:number; //所属房间列表（按位标识,第1位代表第1间房，第2位代表第2间房，以此类推）
    PromotionTag:ProductTagInfo; //促销标签
    }
    
    export class ProductPromotionInfo {
    
    Id:number; //促销Id
    Type:number; //促销类型1 --coupon 9 --coupon立减 10 --红包返现 11 --红包立减,14--首晚五折, 16--x+y促销，17-满减促销 101 --额外礼品卡促销，18-五折返现，20-五折立减，26-专属优惠立减
    Priority:number; //促销活动优先级
    TypeMsg:PromotionTypeMsg; //促销类型信息
    UpperLimit:number; //使用上限
    TrueUpperlimit:number; //真实消费券上线每个间夜这个数值为真实的消费券上线值
    DiscountRate:string; //首晚五折折扣率，如50代表5折，60代表6折
    FullCutDesc:FullCutDesc; //满减信息描述
    HongBaoRecords:Array<HongbaoRecord>; //可用红包列表，促销类型为红包时才有值ArrayList&ltHongbaoRecord&gt
    promotionDescriptions:Array<PromotionDescription>; //List&ltPromotionDescription&gt
    }
    
    export class PromotionTypeMsg {
    
    Type:number; //促销类型
    Priority:number; //促销优先级
    IsEeffectivePrice:boolean; //是否参与最低价计算
    IsSpecial:boolean; //是否属于特殊处理组
    }
    
    export class FullCutDesc {
    
    FullAmount:string; //满多少的金额
    CutAmount:string; //减多少的金额
    UpperLimit:string; //上限值
    OffAmount:string; //优惠金额
    }
    
    export class HongbaoRecord {
    
    faceValue:number; //红包面值
    rechargeTypeName:string; //结算类型名字
    rechargeType:number; //结算类型 103112:老通用红包, 103114:预付酒店红包, 103100:艺龙奖励, 103099:返现过期撤销, 103098:通用红包（微信）, 103095:火车票红包, 103094:酒店红包, 103093:如家酒店红包, 103089:机票专用红包, 103092:铂涛专属红包, 103090:特色房源房费
    recordId:number; //红包ID
    incomeId:number; //收入ID
    validDate:string; //红包的有效期
    isRecommend:boolean; //是否推荐使用 true为推荐
    hongbaoDescription:string; //红包描述
    activityName:string; //活动名称
    activityId:number; //活动ID
    TrueUseAmount:number; //本红包真实可用金额
    flag:number; //红包标识：0 普通红包，1 专享红包，1000 满返红包
    PayTypes:Array<string>; //该红包支持的支付方式List&ltString&gt
    FullReturnRule:FullReturnRule; //满返红包规则
    CanUse:boolean; //红包是否可用
    Priority:number; //红包所属活动的优先级
    IncomeIdStr:string; //同程红包唯一标识
    }
    
    export class FullReturnRule {
    
    leftValue:number; //满金额
    rightValue:number; //返金额
    Description:string; //描述
    }
    
    export class PromotionDescription {
    
    key:string; //
    value:string; //
    }
    
    export class DayPrice {
    
    date:string; //日期(格式:yyyy-MM-dd)
    price:number; //间夜价格
    }
    
    export class ResellInfo {
    
    canBeResaled:boolean; //是否可以转让
    existResaleOrder:boolean; //是否存在转让单
    promptDesc:string; //转让提示信息
    statusId:number; //状态id
    status:string; //状态
    color:string; //色值
    resaleRate:number; //转让折扣率
    commisionRate:number; //佣金率
    resaleAmount:number; //用户实际转卖价格
    resaleBasePrice:string; //转卖基础价
    }
    
    export class OrderInsurance {
    
    status:string; //保单状态
    statusId:number; //状态id
    insuranceDesc:string; //保险文案
    color:string; //保单状态颜色
    insuranceId:string; //保险ID(目前1代表取消险)
    insurancePrice:number; //保险金额
    isShowClaimButt:boolean; //是否展示理赔按钮
    isClaimed:number; //是否理赔过 0:未理赔 1：理赔过
    claimPrompt:string; //理赔按钮展示文案
    insuranceOrderId:string; //保险订单号-理赔使用
    policyNumber:string; //保单号
    policyHoldersName:string; //投保人姓名
    insuranceCompanyName:string; //保险公司名称
    insuranceCompanyTel:string; //保险公司电话
    policyHoldersMobile:string; //投保人电话
    insuranceExplainUrl:string; //保险说明URL
    insuranceType:string; //0取消险，1出行险
    insuranceTip:string; //保险提示信息
    insuranceSname:string; //保险对客展示名称
    nonReasonInsurance:boolean;//是否取消险表示
    insuranceTitle:string;//取消险title
    }
    
    export class CashBackStatus {
    
    statusId:number; //返现状态Id
    status:string; //返现状态
    statusDesc:string; //返现描述
    action:CashBackAction; //操作
    applyConditionDesc:string; //申领条件弹窗文案
    markStr:string; //需要标蓝文案
    }
    
    export class CashBackAction {
    
    actionId:number; //操作id
    actionName:string; //操作名称
    colorHex:string; //色值 例如 #4499ff
    }
    
    export class KnowledgeFilter {
    
    businessLine:number; //业务线:1国内酒店,2国际酒店,3国内机票,4国际机票,5火车票,6汽车票,7民宿,8门票
    orderId:string; //订单号
    hotelKnowledgeFilter:HotelKnowledgeFilter; //国内酒店查询问题条件
    }
    
    export class HotelKnowledgeFilter {
    
    ordedrType:number; //订单类型:1预付,2现付-无担保,3现付-全额担保,4现付-首晚担保
    stateCode:string; //订单状态:N_新单,H_变更,V_已审,A_已确认,G_变价,O_满房,U_特殊满房,B1_有预定未查到,B2_待查,B3_暂不确认,S_特殊,F_已入住,C_已结账,B_NO Show,E_取消,D_已删除
    cancelType:number; //取消类型:1不可取消,2电话可取消,3限时免费取消,4限时扣罚金取消,5不限时免费取消
    cancelStatus:number; //取消状态：1超时,2未超时
    invoiceType:number; //发票类型：1电子发票,2纸质普通发票,3纸质专用发票
    invoiceChannel:number; //开发票渠道：1酒店开具,2艺龙开具
    invoiceStatus:number; //开发票状态：1未开具（电子）,2已开具（电子）,3待邮寄（纸质）,4已邮寄（纸质),5未开具（纸质）
    invoiceWay:number; //发票开具类型：1补开,2合开,3一张多开,4下单开
    cashBackCode:number; //返现状态编码
    payState:number; //支付状态1未支付,2已支付
    checkinDate:string; //入住日
    checkoutDate:string; //离店日
    timeLate:string; //最晚保留房间时间
    cancelTime:string; //取消订单时间
    penaltyMoney:string; //违约金额
    }
    
    export class ExtraBonusInfo {
    
    bonusid:string; //
    memberType:number; //
    }
    
    export class ShowText {
    
    type:number; //类别，1：订单详情退款文案；2：订单详情转让房文案；3:申诉状态文案, 4:booking订单，5:搭售红包
    text:string; //文案，需要高亮展示的文案开始和结束标志位为##，比如‘含担保金##100元##’
    }
    
    export class WXqbBargain {
    
    isWxqbBargain:boolean; //是否有砍价资格
    amount:number; //砍价金额
    discountAmount:number; //折扣金额
    discountRate:number; //折扣率
    discountLimit:number; //折扣上限
    promotionType:number; //促销类型
    bargainStatus:number; //砍价成功状态
    }
    
    export class SellingHongbao {
    
    sellType:number; //红包类型:1.赠送红包,2:强绑红包,3:可选红包
    activityId:number; //活动ID
    activityNo:string; //活动编号（机票搭售用）
    activityDesc:string; //活动描述
    faceValue:number; //红包面值
    fullReturnRule:FullReturnRule; //满返红包规则
    sellingPrice:number; //红包售卖价格
    sellCategory:number; //红包类别:1.国内酒店红包;2.机票红包
    sellCategoryName:string; //红包类别名称
    relativeEffectiveDays:number; //相对有效天数
    sellTagName:string; //红包展示名称
    sellTagDesc:string; //红包展示描述
    positionId:string; //红包文案资源位置(调文案接口使用)
    text:Array<string>; //订单详情页附加产品文案List&ltString&gt
    incomeID:number; //大于0则充值成功
    isShowSellingPrice:boolean; //酒店强绑红包是否展示售卖金额,false不展示
    couponCode:string; //机票的红包code，非空时为已到账
    couponType:number; //红包类型 这个定义是同程机票那边用的：1:国内微信,2国际微信,3:国内app,4:国际app,5:机场服务
    }
    
    export class AdditionProductDetail {
    
    productName:string; //辅营产品名称
    additionProductDetailText:string; //辅营产品详情页文案
    titleBar:string; //点击申请赔付按钮弹出框标题
    finishedMessage:string; //点击申请赔付按钮弹出框提示语句
    productKindCode:string; //辅营产品类型code
    auxiliaryId:number; //辅营订单id
    productCode:string; //辅营产品code
    productAmount:number; //辅营产品总金额
    isAbleClaim:boolean; //是否可理赔 默认false
    claimReasonDesc:string; //不可理赔原因
    additionOrderStatus:number; //辅营订单状态 0未生效5已生效10已退款15已理赔
    additionOrderStatusDesc:string; //辅营订单状态描述
    claimAmount:number; //理赔金额
    claimTime:string; //理赔时间
    claimStatus:number; //理赔状态（0-未处理 1-待理赔 2-已理赔）
    claimText:string; //理赔进度文案 根据状态不同文案不同（0-未处理 1-待理赔 2-已理赔）
    canClaimAmount:number; //可理赔金额
    }
    
    export class CtripDiscountInfo {
    
    type:number; //携程促销优惠类型：1-天天特价；2-新客专享；3-优享会
    amount:number; //金额
    promotionName:string; //促销名称
    promotionDescription:string; //促销说明
    ruleId:string; //非优享会的ruleid
    promotionId:string; //非优享会的promotionId
    promotionCtripType:number; //非优享会的促销类型
    promotionMethod:number; //促销方式: 1立减,2返现,3权益,4服务
    promotionTagId:number; //携程促销聚合标签id
    promotionTagName:string; //携程促销聚合标签名称
    }
    
    export class AppBarginEntrance {
    
    statusId:number; //编号
    contentLeft:string; //砍价入口，左侧文案
    contentRight:string; //砍价入口，右侧文案
    url:string; //跳转地址
    endTime:string; //活动结束时间
    showBarginEntrance:boolean; //是否展示砍价入口
    discountMoney:string; //砍价金额
    maxDiscountMoney:string; //最大砍价金额
    remainTime:number; //活动剩余时间
    flauntUrl:string; //炫耀二维码
    }
    
    export class MileageOffsetData {
    
    mileageType:number; //里程类型 0:微信里程
    detailType:number; //抵扣费用类型 0:房费
    mileageAmount:string; //里程量,抵现使用的里程
    offsetPayAmount:number; //抵现金额,抵现使用的里程
    }
    
    export class BargainInstructions {
    
    prompt:string; //砍价文案
    used:number; //使用的次数
    discountChance:number; //总次数
    }
    
    export class AdditionProductGather {
    
    seasonCardList:Array<SeasonCard>; //季卡产品列表List&ltSeasonCard&gt
    expensivePayInfoList:Array<ExpensivePayInfo>; //贵就赔列表List&ltExpensivePayInfo&gt
    couponInfoList:Array<CouponInfo>; //优惠券列表List&ltCouponInfo&gt
    }
    
    export class SeasonCard {
    
    orderId:string; //订单号
    additionOrderId:string; //辅营订单号
    productKindCode:string; //产品种类code
    productCode:string; //产品code
    additionOrderStatus:number; //辅营订单状态 0未生效1已取消3已支付5已生效 10已退款11受理中13赔款中 15已理赔18理赔失败
    additionOrderStatusDesc:string; //辅营订单状态描述
    productName:string; //产品名称
    productTitle:string; //产品标题
    productDetail:string; //产品详情
    productAmount:number; //产品总金额
    productReduceAmount:number; //产品减免金额
    productStatusDesc:string; //季卡状态描述
    refundAmount:number; //退款给客人金额
    operator:string; //操作人
    refundTime:string; //退款给客人时间
    ableRefund:boolean; //是否可退
    refundReasonCode:string; //不可退原因代码
    refundReasonDesc:string; //不可退原因描述
    canRefundAmount:number; //可退产品金额
    totalAmount:number; //季卡权益总金额(使用该字段)
    effectiveDate:string; //季卡生效日期
    expireDate:string; //季卡过期日期(使用该字段YYYY-MM-DD)
    totalDays:string; //季卡总天数
    scRightDetails:Array<ScRightDetailsBean>; //List&ltScRightDetailsBean&gt
    customerContent:string; //未生效，已取消，已支付，已生效，已过期，已退款对应的文案
    }
    
    export class ScRightDetailsBean {
    
    scName:string; //权益名称
    scQuantity:number; //权益数量
    scRightId:number; //权益id
    scTitle:string; //权益标题
    scType:number; //权益类型（1订单立减,2退订无忧,2酒店红包）
    scValue:number; //权益价值
    validDays:number; //有效期天数
    expirationDate:string; //过期日期
    availableQuantity:number; //可用数量
    }
    
    export class ExpensivePayInfo {
    
    orderId:string; //订单号
    additionOrderId:string; //辅营订单号
    productKindCode:string; //产品种类code
    productCode:string; //产品code
    additionOrderStatus:number; //辅营订单状态 0未生效1已取消3已支付5已生效 10已退款11受理中13赔款中 15已理赔18理赔失败
    additionOrderStatusDesc:string; //辅营订单状态描述
    productName:string; //产品名称
    productQuantity:number; //产品数量
    productAmount:number; //产品总金额
    productTitle:string; //产品标题
    productDetail:string; //产品详情
    priceType:number; //价格类型(1:单价,2百分比)
    sellingPrice:number; //卖价
    claimMultiple:number; //赔付差价倍数
    claimMaxAmount:number; //赔付上限金额
    refundAmount:number; //退款给客人金额（赔付后）
    operator:string; //操作人
    refundTime:string; //单独退服务时间
    claimedTime:string; //赔付成功时间
    claimContent:string; //订单详情页对客文案
    ableRefund:boolean; //是否可退
    refundReasonCode:string; //不可退原因代码
    refundReasonDesc:string; //不可退原因描述
    ableClaim:boolean; //是否可理赔
    claimReasonCode:string; //不可理赔code
    claimReasonDesc:string; //不可理赔原因
    canRefundAmount:number; //可退产品金额
    claimContentType:number; //20190411 BG交差免费3倍贵就赔 0:三倍贵就赔，1:免费三倍贵就赔
    agreementUrl:string;
    }
    
    export class CouponInfo {
    
    orderId:string; //订单号
    additionOrderId:string; //辅营订单号
    productKindCode:string; //产品种类code
    productCode:string; //产品code
    additionOrderStatus:number; //辅营订单状态 0未生效1已取消3已支付5已生效 10已退款11受理中13赔款中 15已理赔18理赔失败
    additionOrderStatusDesc:string; //辅营订单状态描述
    productName:string; //产品名称
    productQuantity:number; //产品数量
    productAmount:number; //产品总金额
    productTitle:string; //产品标题
    productDetail:string; //产品详情
    ableRefund:boolean; //是否可退
    refundReasonCode:string; //不可退原因代码
    refundReasonDesc:string; //不可退原因描述
    canRefundAmount:number; //可退产品金额
    couponStatus:number; //券状态
    couponStatusDesc:string; //券状态描述
    couponContent:string; //对客券文案
    }
    
    export class CancelRuleVisualization {
    
    freeCancelRuleShowDesc:string; //限时取消-规则短文案
    cancelRuleTables:Array<CancelRuleTable>; //取消规则表格List&ltCancelRuleTable&gt
    }
    
    export class CancelRuleTable {
    
    ruleTime:string; //取消规则时段
    amount:string; //取消&修改费用, 或者描述
    clolor:string; //色值
    }
  
  