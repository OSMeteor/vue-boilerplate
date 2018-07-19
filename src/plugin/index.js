function plugin(Vue, axios) {
    if (plugin.installed) {
        return
    }
     plugin.installed = true
    Object.defineProperties(Vue.prototype, {

      axios: {
        get() {
          return axios
        }
      },

      $http: {
        get() {
          return axios
        }
      }

    })  
}