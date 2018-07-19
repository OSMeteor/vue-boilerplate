 export default new VueI18n({
   locale: 'en',
   messages: {
     'en': (resolve) => {
       require.ensure([], function (require) {
         resolve(require('./lang/en.js'));
       }, 'lang/en')
     }
,
     'zh': (resolve) => {
       require.ensure([], function (require) {
         resolve(require('./lang/zh.js'));
       }, 'lang/zh')
     }
   }
 })