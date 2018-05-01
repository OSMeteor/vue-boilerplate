<template>
  <div id="app">
    Clicked: [{{ count}}] times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
//  ###  普通全局用法
// import { mapState,mapGetters, mapActions } from 'vuex'
// ###  如果    namespaced: true,
import { createNamespacedHelpers } from 'vuex' 
const { mapState, mapGetters,mapActions } = createNamespacedHelpers('counter')
// ###  如果    namespaced: true,
export default {
  computed:{
    ...mapState({
      count:state => state.count
    }),
    ... mapGetters([
    // 'count',
    'evenOrOdd'
  ])
  },
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>