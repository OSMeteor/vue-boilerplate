<template>
<div class="main">
    <Row  class-name="wallettop_margin">
       <Col :xs="24" :lg="{ span: 20, offset: 2 }"  >
           <Card :style="{height:'178px'}">  
                         <p> 服务协议 Terms of Service</p> 
                         <p>xxxx </p>
           </Card> 
        </Col> 
    </Row>  
  
</div>
     
</template>

<script type="text/babel"> 
    export default{
        name: 'wallet' ,
         data () {
            return {
                value2: 0
            }
        }
    }

</script>
<style scoped>
.main{
    /* height: 2552px; */
    /* width: 100%; */
    background: #f8f8f8;
}
.box{
     height: 430px;
}
</style>
