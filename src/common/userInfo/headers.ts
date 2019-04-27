interface HEADERS_PARAM {
    DeviceId: string,
    Version: string,
    SessionToken: string,
    MvtConfig?: any,
    sessionkey?: string,
    ChannelId: string,
    pversion?: string,
    CheckCode?: string,
    Aeskey?: string,
    Browser?: string,
    ClientType?: string,
    [propName: string]: any
};
export default class HeadersClass{
    DeviceId: string;
    Version: string = "1301001";
    SessionToken: string;
    MvtConfig?: any;
    sessionkey?: string;
    ChannelId: string;
    pversion?: string;
    CheckCode?: string;
    Aeskey?: string;
    Browser?: string;
    ClientType: string = "7";
    Channel?: string;
    ChId?: string;
    InnerFrom?: string;
    OuterFrom?: string;
    SubClientType?: string;
    TraceId?: string;
}