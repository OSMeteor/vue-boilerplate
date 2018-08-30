 
import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import VeeValidate, {
//   Validator
// } from 'vee-validate';
Vue.use(VueI18n) 

let loadedLanguages = ['zh_CN']
function getLocaleLang() {　　
     //  获取本都设置的语言类型
    //  let index = Math.floor(Math.random() * 10 % arr.length)  
   if(false){ // 从服务器获取设置的语言

   }
  else
     if (window.localStorage && window.localStorage.getItem('locale')){ 
          console.log(window.localStorage.getItem('locale')) 
          return window.localStorage.getItem('locale')
     }else {
          window.localStorage.setItem('locale', loadedLanguages[0]);
         return loadedLanguages[0]
     }
}
// const zh = r => require.ensure([], () => r(require('./lang/zh.js')), 'lang/zh')
import zh_CN from './lang/zh_CN';



 export const i18n = new VueI18n({
   locale: getLocaleLang(),
    // fallbackLocale: 'en',
    messages:{
        zh_CN: zh_CN
        // en: require('./lang/en.js'),
        // ja: require('./lang/en.js'),
        // ko: require('./lang/en.js'),
    }
 })
 



 function setI18nLanguage(lang) {
    i18n.locale = lang
  //  axios.defaults.headers.common['Accept-Language'] = lang
  //  document.querySelector('html').setAttribute('lang', lang)
  // Validator.localize(i18n.locale)
    // changeLocale()
   return lang
 }
 export function loadLanguageAsync(lang, force) {  
   if (i18n.locale !== lang || force) {
     window.localStorage.setItem('locale', lang)
     if (!loadedLanguages.includes(lang) || force) {
       return import ( /* webpackChunkName: "lang-[request]" */ `./lang/${lang}`).then(msgs => {
           i18n.setLocaleMessage(lang, msgs.default)
          if (!loadedLanguages.includes(lang)) loadedLanguages.push(lang)
           return setI18nLanguage(lang)
       })
     }
     return Promise.resolve(setI18nLanguage(lang))
   }
   return Promise.resolve(lang)
 }
 if (window.localStorage.getItem('locale') !== loadedLanguages[0]) {
   loadLanguageAsync(window.localStorage.getItem('locale'), true)
 }

//  Vue.use(VeeValidate)

// function changeLocale(){
//   let localeName = i18n.locale;
//   if (localeName=="en_US") localeName='en'
//   if (localeName == "ja_JP") localeName = 'ja'
//   if (localeName == "ko_KR") localeName = 'ko'
//   if (localeName == "zh_MO") localeName = 'zh_CN'
//   if (localeName == "zh_HK") localeName = 'zh_TW'
//   if (Validator.dictionary.hasLocale(localeName)) {
//     Validator.localize(localeName);
//   } else {
//     import (`vee-validate/dist/locale/${localeName}`).then(locale => { 
//       Validator.localize(localeName, locale);
//     });
//   }
// }

//  Vue.use(VeeValidate, {
//    aria: true,
//    classNames: {},
//    classes: false,
//    delay: 0,
//    dictionary: null,
//    errorBagName: 'errors', // change if property conflicts
//    events: 'input|blur',
//    fieldsBagName: 'fields',
//    i18n: i18n, // the vue-i18n plugin instance
//    i18nRootKey: 'validations', // the nested key under which the validation messages will be located
//    inject: true,
//    locale: i18n.locale,
//    strict: true,
//    validity: false,
//  });
// changeLocale()
// VeeValidate.locale = i18n.locale
// VeeValidate.Validator.localize(i18n.locale)
// Validator.localize('en'); // changes the locale

// // Merges the English dictionary and sets the current locale to English.
// Validator.localize('en', dictionary.en);