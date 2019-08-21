
//let {getCookie} = require('@/shared/utils/cookies');
let LANG;// = getCookie('LOCAL_LANGUAGE')
let word={
  /**MENU */
  'Online':'在线',
  'Offline':'离线',
  'Next':'下一步',
  'Back':'返回',
}

 function __(text){
    /**将语言设置到浏览器的session中，判断是什么语言 
     * 1 如果是英文，则直接返回text,
     * 2 如果不是英文，则返回word[text]
     * 3 这个语言选择的时候决定用哪个语言下的文件翻译。
    */
   /**根据浏览器自动获取语言 */
    let navigatorLang = (navigator.language || navigator.browserLanguage).toLowerCase()
    if(LANG===undefined){
        if(navigatorLang.indexOf('zh')>=0){
            LANG='cn'
        }else if(navigatorLang.indexOf('en')>=0){
            LANG='en'
        }else{
          LANG = 'en'
        }
    }
   if(text in word && LANG!=='en')
        return word[text]
    else return text
}
module.exports = __