module.exports = {
  port: 8080, //端口
  routePrefix: "/api", //controller 接口前缀
  staticPath: '/static', //静态资源路径
  currentUser: '/src/common/userInfo', //登录组件
  log: { //日志配置
    checklist: {
      logVersion: "4.0",
      pattern: '.yyyy-MM-dd-hh.log',
      path: '../logs/checklist/checklist',
      productName: "H5",
      serviceName: "one-demo"
    },
    business: {
      info: {
        pattern: 'info.yyyy-MM-dd.log',
        path: '../logs/blog'
      },
      error: {
        pattern: 'error.yyyy-MM-dd.log',
        path: '../logs/blog'
      }
    },
    pm2: {
      path: '../logs/plog'
    },
    one: {
      path: '../logs/onelog'
    }
  },
  controller: { // controller 配置
    path: [
      '/src/controller/booking/addresses',
      'src/controller/order/orderdetail'
  ], // controller 路径
    mount: 'business.agent' // 该挂载规则表示 -> agent 类实例挂载到 business 类实例，  business 类实例挂载到 controller 类实例
  },
  openAsyncHooks: false, //是否开启异步钩子 ，开启后可跟踪请求上下文对象（通过：import {getContext} from 'te-one'; let currentContext = getContext();）
  jest: { //单元测试配置项
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    "coverageThreshold": { //统计代码覆盖率
      "global": {
        "branches": 50,
        "functions": 50,
        "lines": 50,
        "statements": -10
      }
    },
    "collectCoverageFrom": ["src/**/*.ts"]
  },
  email: { //邮件配置，可用于 发送单元测试报告
    server: {
      host: '邮箱服务器',
      port: '服务器端口',
      auth: {
        user: '发送人@邮箱',
        pass: '邮箱密码'
      }
    },
    to: '接受者@邮箱'
  }
}
