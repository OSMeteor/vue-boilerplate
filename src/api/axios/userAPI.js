import axios from "./axios"
import config from "../../config";
import _guestAPI from "./geustAPI"; 

class userAPI {
   constructor() {
     this.config = config;
     this.guestAPI = new _guestAPI();
     this.user_token = null;
     this.userloginOut=true;
     this._axios = new axios(config.apiURL, 5000, {
       'Content-Type': 'application/json; charset=utf-8'
     }, null, false)
     this.refreshuTokenTimeout=null;
     this.getToken(false); 
   }
   get(){

   }
   post(){
     
   }
   loginOut() { 
     return new Promise((resolve) => {
     this.user_token = null; 
     window.localStorage.removeItem('user_token_expiresTime');
     window.localStorage.removeItem('user_token');
     this.userloginOut=true; //已经登出
     if (this.refreshuTokenTimeout) clearTimeout(this.refreshuTokenTimeout)
      return resolve(null)
     })
   }
   // 通过用户token 获取用户数据
   getUserInfo(){
     return new Promise((resolve,reject)=>{
        if (this.userloginOut || !this.user_token) return resolve(null);
        else {
          this._axios.axiosInstance.get('Consumers',
        ).then(data => { 
            return resolve(data)
          }).catch(err=>{
            return reject(err);
          })
        }
     })
   } 
   getToken(renewal = false) {
        return new Promise((resolve, reject) => {  
            if ( this.user_token) return resolve(this.user_token);
            else{
               const LocalStorage_user_token = this.getUserTokenFromLocalStorage();
               if (LocalStorage_user_token) { 
                       this.setUserToken(LocalStorage_user_token.user_token, LocalStorage_user_token.user_token_expiresTime, renewal)
                      return resolve(LocalStorage_user_token.user_token)
               } else {
                       return resolve(null)
               }
            } 
        });
   }

   getUserTokenFromLocalStorage(){
        const user_token_expiresTime = window.localStorage.getItem("user_token_expiresTime"),
         user_token = window.localStorage.getItem("user_token")
       if (window.localStorage && user_token_expiresTime && user_token &&
         user_token_expiresTime - new Date().getTime() > 0
       ) {
           return {
               user_token,
               user_token_expiresTime: (user_token_expiresTime - new Date().getTime()) / 1000
           }
       } else return null
   } 
   setUserToken(user_token, expiresIn, renewal = false) {
       this.userloginOut=false;
       this.user_token = user_token;
       this._axios.setToken(user_token);
       window.localStorage.setItem('user_token_expiresTime', new Date().getTime() + expiresIn * 1000)
       window.localStorage.setItem('user_token', user_token)
       this.refreshuToken(expiresIn, renewal)

   }
   sendauthcode(itucode,phone) { 
      return this.guestAPI.getToken(false).then((guest_token) => {
        return this.guestAPI._axios.axiosInstance.post("Consumers/sendauthcode", {
            itucode, phone
          }).then(data => {
          return data;
        })
      })
   }

   
   phonelogin(user_data) {
      return this.guestAPI.getToken().then((guest_token)=>{ 
              return  this.guestAPI._axios.axiosInstance.post("Consumers/login", user_data).then(data => {
                 
                 if(data.code==2000)
                     this.setUserToken(data.result.token.token, data.result.token.expiresIn,true)
                     return data;
               })
      })
   }
   phoneregister(user_data) {
    return this.guestAPI.getToken().then((guest_token) => {
      console.log(guest_token)
      return this.guestAPI._axios.axiosInstance.post("Consumers/register", user_data).then(data => {
         if(data.code==2000)
         {
           this.setUserToken(data.result.token.token, data.result.token.expiresIn, true);
         }
        return data;
      })
    })
   } 
   refreshuToken(expiresIn, renewal = false) {
     if (renewal) {
      this.refreshuTokenTimeout = setTimeout(() => {
         const LocalStorage_user_token = this.getUserTokenFromLocalStorage();
        if(localStorage){
           if (renewal) this.refreshuToken(LocalStorage_user_token.user_token, renewal)
        }
        else if (!this.userloginOut) 
         this._axios.axiosInstance.post('Tokens/xxxx', {}
          
         ).then((data) => { 
           if (!this.userloginOut)  this.setUserToken(data.result.token, data.result.expiresIn, renewal)
         })
       }, 
       expiresIn * 1000 - 10
    );
     }

   }
}






export default new userAPI()