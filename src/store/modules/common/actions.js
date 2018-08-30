// checkout({ commit, state }, 传的值) {}
function makeActionCommit(type) {
    return ({ commit }, ...args) => commit(type, ...args)
}
function makeActionDispatch(type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}

export default {
    updateismobilestatus: makeActionCommit('UPDATEISMOBILESTATUS'),
    updateismobilestatus: makeActionCommit('updateIsMobileStatus'),
}