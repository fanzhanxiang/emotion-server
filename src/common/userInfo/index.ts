import {Action, cookie, redis, utils} from "te-one";
import HeadersClass from "../base/base.headers";
import service from './service';
import {UserInfo} from './service/interface.userInfo';

const serialize = (name : string, val : string, opt?: any) => {
  var pairs = [name + '=' + val];
  opt = opt || {};
  if (opt.maxAge)
    pairs.push('Max-Age=' + opt.maxAge);
  if (opt.domain)
    pairs.push('Domain=' + opt.domain);
  if (opt.path)
    pairs.push('Path=' + opt.path);
  if (opt.expires)
    pairs.push('Expires=' + opt.exppires.toUTCString());
  if (opt.httpOnly)
    pairs.push('HttpOnly');
  if (opt.secure)
    pairs.push('Secure');
  return pairs.join(';');
};

export default async(action : Action) => {
  let t = new Date().getTime();
  if (!action.request.header.hasOwnProperty('cookie')) {
    return new UserInfo();
  };
  const cookieStr = action.request.header['cookie'];
  let cookieParse = cookie.parse(cookieStr);
  let sessionToken = cookieParse.SessionToken;
  if (sessionToken) {
    let cacheUserInfo = await redis
      .get('H5Cache:wxxcxorderapi:H5Session:node:' + sessionToken)
      .catch((err) => {
        utils
          .log
          .error('>>>>> redis.get >>>>>', JSON.stringify(err));
        return null;
      });
    if (cacheUserInfo) {
      return new UserInfo(JSON.parse(cacheUserInfo));
    }
    let headers = new HeadersClass();
    headers.SessionToken = sessionToken;
    headers.DeviceId = cookieParse.H5CookieId || '';
    headers.ChannelId = cookieParse.ChannelId || "html5";
    headers.Version = cookieParse.Version || '1301001';
    headers.ClientType = cookieParse.ClientType || "7";
    let result = await service({
      req: utils.aes(JSON.stringify({}))
    }, {headers});
    if (!result.IsError) {
      let assignResponse = Object.assign(result, {isLogin: true});
      // 写入redis
      redis.set('H5Cache:wxxcxorderapi:H5Session:node:' + sessionToken, JSON.stringify(assignResponse));
      return new UserInfo(assignResponse);
    }
  }
  return new UserInfo(cookieParse);
}