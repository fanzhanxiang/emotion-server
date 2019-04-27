export class UserInfo {
  isLogin: boolean = false
  SessionToken: string = ''
  Birthday: string = ""
  CardNo: string = "191928"
  Email: string = ""
  ErrorCode: string = ""
  ErrorMessage: string = ""
  ImageUrl: string = ""
  IsError: boolean
  Level: number
  Name: string = ""
  NickName: ""
  PhoneNo: string = ""
  Proxy: string = ""
  RegisterDate: string = ""
  Sex: string = ""
  UserId: ""
  [proName:string]: any
  constructor(result?: object) {
    if (result) {
      Object.keys(result).forEach((key) => {
        if (result[key]) {
          this[key] = result[key];
        }
      });
    }
  }
}