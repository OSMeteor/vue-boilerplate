<template>  
 <Row >
        <Row :style="{background:'#000'}"> 
                <Col :xs="{ span: 18, offset: 0 }" :lg="{ span: 6, offset: 0 }"  :style="{'text-align': 'left',color: '#fff'}">
                   
                    <span v-text="$t('netConnectionStatus.Connecting')"></span>
                    <!-- <Time :time="localtime" type="datetime"  /> -->
                   
                    <span v-text="localtime"></span>
                    <span>UTC{{StandardTimeZone}}</span> 
                </Col> 
                <Col v-if="!isMobile" :xs="{ span: 14, offset: 0 }"  :lg="{ span: 9, offset: 1}"   :style="{'text-align': 'left'}"> 
                
                  <span>&nbsp;</span>
                </Col>
                <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 2, offset: 6 }" >
                    <Dropdown trigger="click" @on-click='changeI18nlocale' >
                        <a href="javascript:void(0)" >
                            {{langText}}
                            <Icon type="ios-arrow-down"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem :style="{color: '#000'}" name="zh_CN" > 中文简体</DropdownItem>
                            <DropdownItem :style="{color: '#000'}" name="en_US" divided>English</DropdownItem> 
                            <DropdownItem :style="{color: '#000'}" name="ko_KR"  divided disabled>한국어</DropdownItem>
                            <DropdownItem :style="{color: '#000'}" name="ja_JP"  divided disabled>日本语</DropdownItem>
                        </DropdownMenu>
                     </Dropdown>
                </Col>
            </Row>  
              <Row :style="{height:'60px'}"> 
                   <Col :xs="5" :sm="4" :md="6" :lg="{ span: 4, offset: 0 }" :style="{background:'#0b0d2e'}">
                         <!-- <Icon type="ios-cube-outline" color="#52cbca" size="60" />      -->
                         <img src="../../assets/logo.png" :style="{'height': '55px','line-height': '60px'}" /> 
                   </Col>
                   <Col :xs="13" :sm="16" :md="12" :lg="{ span: 14, offset: 0 }" :style="{background:'#901','font-size': '12px'}">
                            <Row  > 
                                 <Col :xs="6" :sm="6" :md="6" :lg="{ span: 6, offset: 0 }" :style="{height:'60px',background:'#0b0d2e'}">
                                    <router-link to="/" :style="{'line-height': '60px'}">{{$t('nav.Home')}}</router-link>  
                                </Col>
                                <Col :xs="6" :sm="6" :md="6" :lg="{ span: 6, offset: 0 }" :style="{height:'60px',background:'#0b0d2e'}">
                                  <router-link to="/" :style="{'line-height': '60px'}">{{$t('nav.Home')}}</router-link>
                                </Col>
                                <Col :xs="6" :sm="6" :md="6" :lg="{ span: 6, offset: 0 }" :style="{height:'60px',background:'#0b0d2e'}">
                                 <router-link to="/" :style="{'line-height': '60px'}">{{$t('nav.Account')}}</router-link>
                                </Col>
                                    <Col :xs="6" :sm="6" :md="6" :lg="{ span: 6, offset: 0 }" :style="{height:'60px',background:'#0b0d2e'}">
                                        <router-link to="/" :style="{'line-height': '60px'}">{{$t('nav.Account')}}</router-link>
                                </Col> 
                            </Row> 
                   </Col>
                   <Col :xs="6" :sm="4" :md="6" :lg="{ span: 6, offset: 0 }" :style="{background:'#0b0d2e','font-size': '10px'}">
                         <Row  v-show="userloginOut"> 
                                <Col :xs="12" :lg="{ span: 18, pull: 2 }"  :style="{ 'text-align': 'right',color: '#fff'}">
                                <router-link to="/account/signin" :style="{'line-height': '60px'}">{{$t('nav.SignIn')}}</router-link>
                                </Col>
                                <Col :xs="12" :lg="{ span: 4, pull: 2 }" :style="{'text-align': 'right',color: '#fff'}">
                                <router-link to="/account/signup" :style="{'line-height': '60px'}">{{$t('nav.SignUp')}}</router-link>
                                </Col>
                              </Row> 
                               <Row  v-show="!userloginOut"> 
                                <Col :xs="12" :lg="{ span: 5 }"  :style="{ 'line-height': '60px','text-align': 'right',color: '#fff'}">
                                         <span>XXXXX</span>
                                </Col>
                                  <Col :xs="12" :lg="{ span: 8}"  :style="{ 'line-height': '60px','text-align': 'right',color: '#fff'}">
                                        <router-link to="/" :style="{'line-height': '30px',color: '#000'}">
                                                        <span> XXXX</span>
                                         </router-link>
                                </Col>
                                <Col :xs="12" :lg="{ span: 10 }" :style="{'line-height': '60px','text-align': 'right',color: '#fff'}">
                                       
                                            <Dropdown>
                                            <a href="javascript:void(0)">
                                                <Icon type="ios-contact" color="#fff" size="24"/>
                                                <span>{{userInfo.nickname}} </span> 
                                                <Icon type="ios-arrow-down"></Icon>
                                            </a>
                                            <DropdownMenu slot="list"> 
                                                <DropdownItem  > 
                                                      <router-link to="/" :style="{'line-height': '30px',color: '#000'}">
                                                        XXXXXXX
                                                         <Icon type="ios-contact" color="#000" size="24"/>  {{$t('nav.Account')}} 
                                                    </router-link> 
                                                </DropdownItem>
                                                <DropdownItem :style="{color: '#000'}" > 
                                                        <router-link to="/" :style="{'line-height': '30px',color: '#000'}">
                                                           <Icon type="ios-notifications" color="#000" size="24"/>  XXXXX 
                                                     </router-link>
                                                </DropdownItem>
                                                <DropdownItem :style="{color: '#000'}" > 
                                                        <router-link to="/" :style="{'line-height': '30px',color: '#000'}">
                                                            <Icon type="ios-people" color="#000" size="24"/> XXXX 
                                                       </router-link>
                                                    </DropdownItem>
                                                <DropdownItem >
                                                    <span @click="handleSubmitSignOut()" style="color:#000"> 
                                                         <Icon type="md-log-out" color="#000" size="24"/>  退出登录
                                                    </span> 
                                                    </DropdownItem> 
                                            </DropdownMenu>
                                        </Dropdown> 

                                        <!-- <Button  style="width:100%;color:#fff; background-color:#48c4c3;border-color:#00a96a"  type="primary" @click="handleSubmitSignOut()">退出登录</Button>  -->
                                </Col>
                        </Row> 
                   </Col>
         </Row> 
 </Row>
</template>
<script type="text/babel"> 
import {mapGetters, mapActions } from "vuex";
import eutil from 'eutil'
let langList={   zh_CN:"简体中文",
                    en_US:"English",
                    ja_JP:"日本语",
                    ko_KR:"한국어",
         }
    export default{
        name: '',
        data(){ 
            return{  
                StandardTimeZone: eutil.dateGetStandardTimeZone() >0  ? '+'+Math.ceil(eutil.dateGetStandardTimeZone()): Math.ceil(eutil.dateGetStandardTimeZone()),
                localtime:eutil.dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss"),
                langText:window.localStorage.getItem('locale')==null ? "简体中文":langList[window.localStorage.getItem('locale')]
            }
        },
        computed: { 
            isMobile() { 
                  return this.$store.state.common.isMobile; 
            },
            userloginOut(){
                 return this.$store.state.common.userloginOut; 
            },
            ...mapGetters(['userInfo'])
        },

        mounted(){   
            setInterval(() => {
                this.localtime= eutil.dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss");
            }, 1000);
        },
        methods:{  
            handleSubmitSignOut(){
                this.$store.dispatch("handleSubmitSignOut").then((data)=>{ 
                            this.$router.push({path: '/account/signin'});
               }); 
            },
            changeI18nlocale(lang){  
                     if(lang)  {
                         this.$loadLanguageAsync(lang).then(()=>{
                                if(langList[this.$i18n.locale])this.langText=langList[this.$i18n.locale]
                         }) 
                     } 
          }
        }
    }

</script>

<style scoped>
 * {
     color: #fff
 }
</style>
