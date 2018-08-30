import {
  UPDATELOADINGSTATUS,
  UPDATEISMOBILESTATUS,
  UPDATELOCALELANG, USERLOGINOUTSTATUS
} from "./mutation-types";
import getMobileInfo from "./getMobileInfo"

export default {
    [UPDATELOADINGSTATUS](state,{isLoading}) {
          console.log("UPDATELOADINGSTATUS", isLoading)
          state.isLoading = isLoading
    },
    [UPDATELOCALELANG](state, {
      lang
    }){
      console.log("UPDATELOCALELANG", lang)
      state.lang = lang
    },
    [UPDATEISMOBILESTATUS](state) {
        state.isMobile = getMobileInfo.isMobile
        state.isPad = getMobileInfo.isPad
        state.phonetype = getMobileInfo.phonetype
        state.phonemodel = getMobileInfo.phonemodel 
    },
     [USERLOGINOUTSTATUS](state, userloginOut) {
       state.userloginOut = userloginOut
     } 
}