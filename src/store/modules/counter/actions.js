// checkout({ commit, state }, 传的值) {}
function makeActionCommit(type) {
    return ({ commit }, ...args) => commit(type, ...args)
}
function makeActionDispatch(type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}

export default {
    increment: makeActionCommit('increment'), 
    // ({ commit }) => commit('increment'),
    decrement: makeActionCommit('decrement'),
    // decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                commit('increment')
                resolve()
            },1000)
            // setTimeout(() => {
            //     commit('increment')
            //     resolve()
            // }, 100)
        })
    }
}