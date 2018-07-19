var Mock = require('mockjs')
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
});

import MockAdapter from 'axios-mock-adapter';
// 设置模拟调试器实例 
var mock = new MockAdapter(axiosInstance, {
  delayResponse: 2000
});

mock.onGet('/users', {
  params: {
    searchText: 'John'
  }
}).reply(function (config) {
  //config是axios config 
  //返回一个数组[status, data, headers] 
  return [200, 
    Object.assign(
      Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1,
          "number|+1": 202,
          "ip": Mock.Random.ip(),
          "email": Mock.Random.email(),
          "url_http": Mock.Random.url('http'),
          "dt": Mock.Random.date('yyyy-MM-dd'),
          "dt1": Mock.Random.now('yyyy-MM-dd A HH:mm:ss'),
          "t1": Mock.Random.cparagraph()
        }]
      }),
    { 
    users: [{
      id: 1,
      name: 'John Smith'
    }]
  })];
});


axiosInstance.get('/users', {
    params: {
      searchText: 'John'
    }
  })
  .then(function (response) {
    console.log(response.data);
  });

// 模拟登录                POST
mock.onPost('/login').reply(config => {
  let {
    username,
    password
  } = JSON.parse(config.data);
  return new Promise((resolve, reject) => {
    let user = null;
    setTimeout(() => {
      // let hasUser = LoginUsers.some(u => {
      //   if (u.username === username && u.password === password) {
      //     user = JSON.parse(JSON.stringify(u));
      //     user.password = undefined;
      //     return true;
      //   }
      // });
      let hasUser = true;
      if (hasUser) {
        resolve([200, {
          code: 200,
          msg: '请求成功',
          user
        }]);
      } else {
        resolve([200, {
          code: 500,
          msg: '账号或密码错误'
        }]);
      }
    }, 1000);
  });
});
axiosInstance.post('/login', {}).then(res => res.data);


// 没有具体路径的时候 拒绝所有的 POST 请求，返回 HTTP 500
mock.onAny().reply(500); 
// 导出
export default axiosInstance;