import {utils,BaseController} from 'te-one';
interface IResObj {
  error : boolean,
  errorMessage : string,
  errorCode : string,
  data : any
}
export default class extends BaseController {

  log(...arg) {
    Promise
    console.log(...arg);
    utils
      .log
      .info(arg);
    Promise
  }
  error(...arg) {
    console.error(...arg);
    utils
      .log
      .error(arg);
  }
  warn(...arg) {
    console.warn(...arg);
    utils
      .log
      .warn(arg);
  }
  getResObj() : IResObj {
    return Object.defineProperties({
      error: false,
      errorCode: '',
      data: {}
    }, {
      _errorMessage: {
        value: '',
        writable: true
      },
      errorMessage: {
        enumerable: true,
        set(value) {
          if (value === '')
            return;
          if (!this.errorCode) {
            this.errorCode = 1;
          }
          if (!this.error) {
            this.error = !this.error;
          }
          this._errorMessage = value;
        },
        get() {
          return this._errorMessage;
        }
      }
    });
  }
}
