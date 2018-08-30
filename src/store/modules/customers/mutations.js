import { 
  HANDLESUBMITSIGNUP,
  SIGNUPSENDAUTHCODE,
  HANDLESUBMITSIGNIN,
  HANDLESUBMITSIGNOUT
} from "./mutation-types"; 
export default (i18n) => {
  return {
    [HANDLESUBMITSIGNUP](state,data) {   
        if (data.code == 2000){ 
              state.signup.errMsg.code = data.code;
               state.signup.errMsg.msg = "";
              state.userInfo = data.result.userInfo;
        }
        else {
            state.signup.errMsg = {
              code:data.code,
              msg: i18n.t('errMsg.' + data.code)
            }
        }
      console.log("UPDATELOADINGSTATUS", state.signup, data)
    },
    [SIGNUPSENDAUTHCODE](state) {
      console.log("SIGNUPSENDAUTHCODE", state.signup)
    },
    [HANDLESUBMITSIGNIN](state, data) {
      if (data.code == 2000) {
        state.signin.errMsg.code = data.code;
        state.signin.errMsg.msg = "";
        state.userInfo = data.result.userInfo;
        // state.nickname = data.result.userInfo.nickname;
      } else {
        state.signin.errMsg = {
          code: data.code,
          msg: i18n.t('errMsg.' + data.code)
        }
      }
      console.log("UPDATELOADINGSTATUS", state.signin, data)
    },
     [HANDLESUBMITSIGNOUT](state) { 
        state.userInfo.nickname = "";
     },

    
  }
}

 