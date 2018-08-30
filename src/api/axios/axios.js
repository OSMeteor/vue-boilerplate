import axios from 'axios'
import qs from 'qs'
import MockAdapter from 'axios-mock-adapter';
import _mock from "./mock";

class myaxios {
   constructor(baseURL, timeout, headers, access_token, enableMock = true) {
       this.token=null; 
       this.axiosInstance =  axios.create({
         baseURL: baseURL || 'http://0.0.0.0:3000/api/',
         timeout: timeout|| 5000, 
         transformRequest: [(data, headers)=> {
            if (this.token) headers['token'] = this.token; 
            return JSON.stringify(data)
         }],
         // transformResponse: [function (data) { 
         //    return JSON.stringify(data);
         // }],
         headers: headers || { 
             'Content-Type': 'application/json; charset=utf-8'
         },
         withCredentials: true, // default
       }); 
        // POST传参序列化
        this.axiosInstance.interceptors.request.use((config) => {
          // post方法并且数据不是formData，序列化参数
          if (config.method === 'post' && config.headers['Content-Type'] !== 'multipart/form-data'
            && config.headers['Content-Type'] !== 'application/json; charset=utf-8'
          ) {
            config.data = qs.stringify(config.data)
          }
          if (access_token) config.headers['access_token'] = access_token
          return config
        }, (error) => {
          console.log("error  parameter")
          return Promise.reject(error)
        })
        // code状态码200判断
        this.axiosInstance.interceptors.response.use((res) => { 
          if (parseInt(res.status) === 204) {
              return res
          }
          if (parseInt(res.status) !== 200) {
            return Promise.reject(res)
          } 
         if (parseInt(res.status) === 200) { 
              if (res.data)  return res.data;
              else return Promise.reject(res)
         }
        }, (error) => {
           console.log("network abnormal ", error)
          return Promise.reject(error)
        });
        if (enableMock){
            this.mock = new MockAdapter(this.axiosInstance, {
              delayResponse: 2000
            });
            _mock(this.mock);
        } 
   }

   setToken(token) {
     this.token=token;
    //  this.axiosInstance.defaults.headers.common['token'] = token;
    //  this.axiosInstance.defaults.headers.common['token'] = token;
    //  this.axiosInstance.defaults.headers.common['token'] = ACCESS_TOKEN;
    //  this.axiosInstance.defaults.headers.common['authorization'] = ACCESS_TOKEN;
    //  this.axiosInstance.defaults.headers.common['auth'] = ACCESS_TOKEN;
     
   }
   interceptors_request(interceptors) {
       this.axiosInstance.interceptors.request.use(interceptors, (error) => { 
         return Promise.reject(error)
       })
   }
   interceptors_response(interceptors) {
     this.axiosInstance.interceptors.response.use(interceptors, (error) => { 
       return Promise.reject(error)
     })
   } 
}
export default myaxios