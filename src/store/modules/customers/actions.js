function makeActionCommit(type) {
  return ({
    commit
  }, ...args) => commit(type, ...args)
}

function makeActionDispatch(type) {
  return ({
    dispatch
  }, ...args) => dispatch(type, ...args)
}
export default (API) => { 
  return {
    handleSubmitSignup(
      {
      commit,state,rootState
    },
     obj) {  
       let _user = {
         
       }
       return API.userAPI.phoneregister(_user).then((data)=>{  
            commit('handleSubmitSignup',data)  
            commit('userloginOutStatus', true)
            API.userAPI.getUserInfo().then((userInfo)=>{
              
            })
            return data;
       })
    },
    signupSendauthcode({
      commit
    }, obj) {
        API.userAPI.sendauthcode(obj.itucode, obj.phone).then((_obj)=>{ 
        });
    },
   handleSubmitSignin({
       commit,
       state,
       rootState
     },
     obj) {
       
     let _user = { 
     }

     
     return API.userAPI.phonelogin(_user).then((data) => {
       commit('handleSubmitSignin', data)
       commit('userloginOutStatus', false)  
       API.userAPI.getUserInfo().then((userInfo) => {
         console.log("userinfo:", userInfo)
       })
       return data;
     })
   }, 
   handleSubmitSignOut({  commit,   state, rootState}) {
      return API.userAPI.loginOut().then(() => { 
          commit('userloginOutStatus', true)
          commit('handleSubmitSignOut',)
          return null;
      })
   }
  }
}



 