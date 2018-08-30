<template>
<div class="main">
    <Row class-name="signuptop_margin">
        <Col :xs="24" :lg="{ span: 7, offset: 9 }" > 
             <Card  class="box">   
                         <Row :style="{'margin-top': '5px'}"> 
                             <Icon type="ios-create" color="#52cbca" size="30" style="margin-bottom:7px"/> 
                             <span style=" font-size: 24px"> 注册</span> 
                            
                        </Row> 
                       <Row :style="{'margin-top': '15px'}">   
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                           <Row>
                                           <Col span="12" style="text-align:left;">
                                            <span>已有XXXX账号？</span> 
                                           </Col>
                                          <Col span="12" style="text-align:right;">
                                            <router-link to="/account/signin">
                                             <span :style="{color:'#52cbca'}">立即登录</span>
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
 export default{
     name: 'signup' ,
     data(){ 
         return {}
     },
     computed: { 
        ...mapGetters(['signup'])
    },
    methods:{
         handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                         this.$store.dispatch("handleSubmitSignup",this.formInline).then((data)=>{ 
                             if(data.code===2000){ 
                                 this.$router.push({path: '/my/info/basic'});
                             }
                         }); 
                    } else {
                        // this.$Message.error('Fail!');
                    }
                })
        },
        handleSubmitSendauthcode(name){ 
             this.$refs[name].validateField('phone',(errMsg)=>{
                 if (!errMsg) {
                     if(this.formInline.codeCountdown<0){
                          this.formInline.codeCountdown=120;
                     this.formInline.codeText=this.formInline.codeCountdown+" s"; 
                     setInterval(()=>{
                         this.formInline.codeCountdown--;
                         if(this.formInline.codeCountdown>=0){
                             this.formInline.codeText=this.formInline.codeCountdown+" s";
                         }else{
                             this.formInline.codeText="获取验证码"
                         }
                     },1000)
                        //   this.$Message.success('Success!111');  
                          this.$store.dispatch("signupSendauthcode",this.formInline); 
                     }
                    
                    } else {
                        // this.$Message.error('Fail!111');
                    }
             })

        },
        ... mapActions([ 
             'handleSubmitSignup',
             'signupSendauthcode'
         ])
    }
 }
    // export default{
    //     name: 'signup' ,
    //      computed: {
    //         // ...mapState({
    //         //     checkoutStatus: state => state.cart.checkoutStatus
    //         // }),
    //         // ...mapGetters('cart', {
    //         //     products: 'cartProducts',
    //         //     total: 'cartTotalPrice'
    //         // })
    //     },
    //     // methods:mapActions([ 
    //     // 'increment',
    //     // ]),
    //      data () {
    //         return { 
    //             formValidate: { 
    //                 mail: '',
    //                 city: '',
    //                 gender: '',
    //                 interest: [],
    //                 date: '',
    //                 time: '',
    //                 desc: '',
    //                 select:'', 
    //                 country:"0086", 
    //                 countryList: [
    //                             {
    //                                 value: '0086',
    //                                 label: 'China '
    //                             },
    //                             {
    //                                 value: '00852',
    //                                 label: 'Hong Kong(China) '
    //                             },
    //                             {
    //                                 value: '00886',
    //                                 label: 'Taiwan(China) '
    //                             },
    //                             {
    //                                 value: '0081',
    //                                 label: 'Japan ',
    //                                 disabled:true
    //                             },
    //                             {
    //                                 value: '0082',
    //                                 label: 'Korea ',
    //                                 disabled:true
    //                             },
    //                             {
    //                                 value: '0044',
    //                                 label: 'United Kingdom ',
    //                                 disabled:true
    //                             },
    //                             {
    //                                 value: '001',
    //                                 label: 'Canada ',
    //                                 disabled:true
    //                             },
    //                             {
    //                                 value: '0066',
    //                                 label: 'Thailand ',
    //                                 disabled:true
    //                             },
    //                             {
    //                                 value: '0064',
    //                                 label: 'New Zealand ',
    //                                 disabled:true
    //                             }
    //             ],
    //             },
    //             ruleValidate: { 
    //                 mail: [
    //                     // { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
    //                     // { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
    //                 ] 
    //             } 
    //         }
    //     },
    //     methods: {
             
    //         handleSubmit (name) {
    //             this.$refs[name].validate((valid) => {
    //                 if (valid) {
    //                     this.$Message.success('Success!');
    //                 } else {
    //                     this.$Message.error('Fail!');
    //                 }
    //             })
    //         },
    //         handleReset (name) {
    //             this.$refs[name].resetFields();
    //         }
    //     }
    // }

</script>
<style scoped>
.main{
    /* height: 921px; */
    /* width: 100%; */
    background: #f8f8f8;
}
.box{
     height: 600px;
}
</style>
