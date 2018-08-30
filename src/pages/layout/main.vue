<template> 
 <Row>
   <Row>
       <layout_header></layout_header> 
   </Row>
          <router-view/>  
  <Row>
       <layout_footer></layout_footer> 
   </Row>
</Row>



</template>

<script type="text/babel">
import  layout_header from "./header.vue"
import  layout_footer from "./footer.vue"

    export default{
        name: 'layout_main',
         components: { layout_header,layout_footer }
    }

</script>
<style scoped>
  
</style>
