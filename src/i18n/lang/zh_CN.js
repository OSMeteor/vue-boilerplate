export default {
  message: {
    hello: '嗨，世界',
  },
  netConnectionStatus: {
    Connected: '已连接',
    Connecting: '连接中'
  }, 
  nav: {
    Home: "首页",  
    Help: "帮助",
    Account: "个人中心",
    SignIn: "登录",
    SignUp: "注册"
  },
  errMsg: {
    4003: "验证码错误请重新获取",
    2008: "该手机号已存在",
    4400: "系统错误 4400",
    4401: "系统错误 4401",
    4402: "系统错误 4402",
    4403: "系统错误 4403",
    4404: "系统错误 4404",
    4000: "系统错误 4000", 
    4040:"用户不存在",
    4010: "密码错误",
    3003:"系统错误 3003",
    2004:"用户已被拉黑", 
    3010:"系统错误3010"
  },
  validations:{
    messages:{
        email: (field) => `${field}111不是一个有效的邮箱`,
        required: (field) => "不能为空" + field, //替换 “ 必须  ” 关键字
    } 
  }
}