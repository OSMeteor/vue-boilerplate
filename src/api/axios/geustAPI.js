import axios from "./axios" 
import config from "../../config";

class guestAPI{
    constructor(){ 
        this.config=config;
        this.guest_token=null;
        this._axios = new axios(config.apiURL, 5000, {
          'Content-Type': 'application/json; charset=utf-8'
        }, null, false)
          this.getToken(true);
    }
    getToken(renewal =false) { 
        return new Promise((resolve, reject) => {
                 if (this.guest_token) return resolve(this.guest_token);
                else { 
                        const guest_token_expiresTime = window.localStorage.getItem("guest_token_expiresTime"),
                          guest_token = window.localStorage.getItem("guest_token")
                        if (window.localStorage && guest_token_expiresTime && guest_token &&
                          guest_token_expiresTime - new Date().getTime() > 0
                        ) {
                          this.guest_token = guest_token;
                          this._axios.setToken(this.guest_token)
                          if (renewal) this.refreshgToken((guest_token_expiresTime - new Date().getTime()) / 1000, renewal);
                          return resolve(this.guest_token);
                        } else
                          this._axios.axiosInstance.post('/Tokens', {
                            "appid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                            "appsecret": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                          }).then((data) => {
                            console.log(data)
                            if (data.code==2000){
                              window.localStorage.setItem('guest_token_expiresTime', new Date().getTime() + data.result.expiresIn * 1000)
                              window.localStorage.setItem('guest_token', data.result.token)
                              this.guest_token = data.result.token;
                              this._axios.setToken(this.guest_token)
                              if (renewal) {
                                this.refreshgToken(data.result.expiresIn, renewal);
                              }
                            } 
                            return resolve(this.guest_token);
                          });
                } 
        });
    }
    refreshgToken(expiresIn, renewal = false) {  
        if(renewal){ 
            setTimeout(() => {   
              const guest_token_expiresTime = window.localStorage.getItem("guest_token_expiresTime"),
                guest_token = window.localStorage.getItem("guest_token")
              if (window.localStorage && guest_token_expiresTime && guest_token &&
                guest_token_expiresTime - new Date().getTime() > 0
              ) {
                if (renewal) this.refreshgToken((guest_token_expiresTime - new Date().getTime()) / 1000, renewal);
              } else
              this._axios.axiosInstance.post('Tokens/xxxx', {} 
            ).then((data) => {  
                 window.localStorage.setItem('guest_token_expiresTime', new Date().getTime() + data.result.expiresIn * 1000)
                 window.localStorage.setItem('guest_token', data.result.token)
                 this.guest_token = data.result.token;
                 this._axios.setToken(this.guest_token)
                 this.refreshgToken(data.result.expiresIn, renewal);
              })
            }, (expiresIn - 10) * 1000);
            // 
        }
      
    }
}
export default  guestAPI