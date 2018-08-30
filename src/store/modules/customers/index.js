import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";



export default (API, i18n) => { 
     return { 
       state,
       getters,
       "actions": actions(API),
       "mutations": mutations(i18n)
     }
}


