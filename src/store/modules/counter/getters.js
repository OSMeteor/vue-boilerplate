
// (state, getters, rootState, rootGetters)=>{}
export default {
    count: state => state.count,
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}