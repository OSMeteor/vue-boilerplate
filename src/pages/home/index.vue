<template>
<div class="main"> 
    <Row>
        <Col span="24">
            <Carousel autoplay v-model="value2"  loop  :style="{'background':'#506b9e',height:'440px'}">
                <CarouselItem>
                    <div class="demo-carousel"  >1</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">2</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">3</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">4</div>
                </CarouselItem>
            </Carousel>
        </Col> 
    </Row>  
     <Row>
        <Col span="24">
             <span>  XXXXXXXXXXXXXXXXXXXXXXXXXX </span> 
        </Col>
     </Row>
        <Row>
        <Col :xs="{ span: 24 }" :sm="{ span: 24 }" :md="{ span: 24 }" :lg="{ span: 22, offset: 1 }">
          
        </Col>
        </Row>
    </div>
</template>

<script type="text/babel"> 
    export default{
        name: 'layout_header' ,
         data () {
            return {
                value2: 0 
            }
        },
        watch: {
            "lang" (nval, oval){ 
            }
        },
       computed: { 
            lang() { 
                return this.$store.state.common.lang;
            } 
        },
    }
</script>
<style scoped>
.main{
    height: 900px;
    /* width: 100%; */
    background: #ffffff;
}
</style>
