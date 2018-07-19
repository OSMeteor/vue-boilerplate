import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// 设置模拟调试器实例 
var mock = new MockAdapter(axios,{ delayResponse: 2000 });

mock.onGet('/users', {
  params: {
    searchText: 'John'
  }
}).reply(function (config) {
  //config是axios config 
  //返回一个数组[status, data, headers] 
  return [200, {
    users: [{
      id: 1,
      name: 'John Smith'
    }]
  }];
});


axios.get('/users', {
    params: {
      searchText: 'John'
    }
  })
  .then(function (response) {
    console.log(response.data);
  });

/模拟登录                POST
mock.onPost('/login').reply(config => {
  let {
    username,
    password
  } = JSON.parse(config.data);
  return new Promise((resolve, reject) => {
    let user = null;
    setTimeout(() => {
      let hasUser = LoginUsers.some(u => {
        if (u.username === username && u.password === password) {
          user = JSON.parse(JSON.stringify(u));
          user.password = undefined;
          return true;
        }
      });

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
axios.post('/login', params).then(res => res.data);


// 没有具体路径的时候 拒绝所有的 POST 请求，返回 HTTP 500
mock.onAny().reply(500); 
// 导出
export default mock;