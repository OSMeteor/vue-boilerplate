<template>
<div class="main">
    <!-- :style="{'padding-top': '135px','padding-bottom': '356px'}" -->
    <Row   class-name="signintop_margin" >
            <Col v-if="!isMobile" :xs="24" :lg="{ span: 10, offset: 3 }" :style="{background:'#000'}" >
             <Card  class="box"> 
                  <span>最新公告</span>  </br>
                  <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></br>
                 <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></br>
                 <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></br>
                 <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></br>
                 <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></br>
                 <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></br>
                 <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></br>
                 <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></br>
                 <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></br>
            </Card>
            </Col>
            <Col :xs="24" :lg="{ span: 7, offset: 1 }" :style="{background:'#1002'}">
                   <Card  class="box">
                        <Row :style="{'margin-top': '30px'}">
                             <Icon type="md-person" color="#52cbca" size="30" style="margin-bottom:7px"/> 
                             <span style=" font-size: 24px"> 登录</span>
                        </Row>
                       <Row :style="{'margin-top': '20px'}">   
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <Row>
                                           <Col span="12" style="text-align:left;">
                                            <span>没有XXX账号？</span> 
                                           </Col>
                                          <Col span="12" style="text-align:right;">
                                           <!-- :style="{'line-height': '40px','font-size': '10px'}" -->
                                            <router-link to="/account/signup">
                                             <span :style="{color:'#52cbca'}">立即注册</span>
                                             </router-link>
                                           </Col>
                                       </Row>
                        </Row>
                    </Card>
            </Col>
    </Row>  
  
</div>
     
</template>

<script type="text/babel"> 
import {mapGetters, mapActions } from "vuex";
    export default {
        data () {
            return {}
        },
         computed: { 
            isMobile() { 
                return this.$store.state.common.isMobile;
            },
             ...mapGetters(['signin','signup'])
        },
        methods: {
            
        }
    }

</script>
<style scoped>
.main{
    /* height: 921px; */
    /* width: 100%; */
    background: #f8f8f8;
}
.box{
     height: 430px;
} 
</style>
