import React from 'react'

const utils = {
  testRegex: (value, regex) => value.toString().match(regex),
  rules: {
    required: {
      message: 'The :attribute field is required',
      rule: val => utils.testRegex(val, /.+/),
    },
    reg: {
      message: 'The :attribute reg is not match the value',
      rule: (val, options) =>{/*console.log(new RegExp(options[0]));*/ return utils.testRegex(val,new RegExp(options[0]))}, 
    },
    max: {
      message: 'The :attribute may not be greater than :max characters',
      rule: (val, options) => {
        var len = 0;  
        for (var i=0; i<val.length; i++) { 
            //console.log(val,val[i],val.charCodeAt(i)) 
            if (val.charCodeAt(i)>127 || val.charCodeAt(i)===94) {  
                 len += 3;  
             } else {  
                 len ++;  
             }  
         }         
        return len <= options[0]
      },
      messageReplace: (message, options) => message.replace(':max', options[0]),
    },
    min: {
      message: 'The :attribute may not be greater than :mix characters',
      rule: (val, options) => {
        var len = 0;  
        for (var i=0; i<val.length; i++) { 
            //console.log(val,val[i],val.charCodeAt(i)) 
            if (val.charCodeAt(i)>127 || val.charCodeAt(i)===94) {  
                 len += 3;  
             } else {  
                 len ++;  
             }  
         }         
        return len >= options[0]
      },
      messageReplace: (message, options) => message.replace(':min', options[0]),
    },
    number: {
      message: 'The :attribute must be a number', 
      rule: (val) => utils.testRegex(val,/^\d+.?\d*$/)
    },
    url: {
      message: 'The :attribute must be a valid url', 
      rule: (val) => utils.testRegex(val,/^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i)  
    },
    ip:{
      message: 'The :attribute must be a valid ip format', 
      rule: (val) => utils.testRegex(val,/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/i)  
    },
    mac:{
      message: 'The :attribute must be a valid mac format', 
      //rule: (val) => utils.testRegex(val,/^([0-9A-F]{2})(([/\s:][0-9A-F]{2}){5})$/)  
      rule: (val) => utils.testRegex(val,/^([0-9a-fA-F]{2})(([/\s:][0-9a-fA-F]{2}){5})$/i)  
    },
    netmask:{
      message: 'The :attribute must be a valid mac format', 
      rule: (val) => utils.testRegex(val,/^(254|252|248|240|224|192|128|0)\.0\.0\.0$|^(255\.(254|252|248|240|224|192|128|0)\.0\.0)$|^(255\.255\.(254|252|248|240|224|192|128|0)\.0)$|^(255\.255\.255\.(254|252|248|240|224|192|128|0))$/i)                              
    },
    gateway:{
      message: 'The :attribute must be a valid mac format', 
      rule: (val) => utils.testRegex(val,/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/i)
                                                     
    },    
    port:{/**1-65535 */
      message: 'The :attribute must be a valid port format', 
      rule: (val) => utils.testRegex(val,/^([1-9]\d{0,3}|[1-5]\d{4}|6[0-4]\d\d\d|65[0-4]\d\d|655[0-2]\d|6553[0-5])$/)
    },
    char:{/**只能为数字或字母 ,可以为空*/
      message: 'The :attribute must be number or letter', 
      rule: (val) => { if(!val) return true; return utils.testRegex(val,/^[A-Za-z0-9]+$/)}
    },
    password:{
      message: 'The :attribute must be a valid password format', 
      rule: (val) => utils.testRegex(val,/^[A-Za-z0-9_]+$/)
    },
    ssid:{
      message: 'The :只能为汉字、数字、字母、下划线、横杠、空格', 
      rule: (val) => utils.testRegex(val,/^[a-z A-Z0-9-_\u4e00-\u9fa5]+$/)
    }
  },
}

export default class ReactValidator {
  constructor() {
    this.fields = []
    this.rules = utils.rules
    this.showMessage = false
  }

  hideMessages() {
    this.showMessage = false
  }

  showMessages() {
    this.showMessage = true
  }

  allValid() {
    for (var key in this.fields) {
      //console.log(key,this.fields,this.fields.hasOwnProperty(key),this.fields[key])
      if (this.fields.hasOwnProperty(key) && this.fields[key] === false) {
        console.warn(`field ${key} result not match rule`)
        return false
      }
    }
    return true
  }
  //use : this.validator.someValid(['va0ssid'])
  someValid(keyarr) {
    for(var i=0;i<keyarr.length;i++){
      if (keyarr[i] in this.fields) {
        //console.log(key,this.fields,this.fields.hasOwnProperty(key),this.fields[key])
        if (this.fields.hasOwnProperty(keyarr[i]) && this.fields[keyarr[i]] === false) {
          console.warn(`field ${keyarr[i]} result not match rule`)
          return false
        }
      }
    }
    return true
  }
  message(field, value, testString, customClass, customErrors = {}) {
    this.fields[field] = true
    /**为了添加自定义的过滤表达式，所以将参数的‘|’换成‘&&’ 使用时请注意 */
    let tests = testString.split('&&')
    //let tests = testString.split('|')
    let rule, options, message
    for (let i = 0; i < tests.length; i++) {
      value = this.filterEmptyValue(value)
      rule = this.getRule(tests[i])
      options = this.getOptions(tests[i])
      if (!this.isValid(value, rule, options)) {
        this.fields[field] = false
        if (this.showMessage) {
          message =
            customErrors[rule] ||
            customErrors.default ||
            this.rules[rule].message.replace(':attribute', field)

          if (
            options.length > 0 &&
            this.rules[rule].hasOwnProperty('messageReplace')
          ) {
            let replaceMessage = this.rules[rule].messageReplace(
              message,
              options,
            )
            return this.createErrorEle(replaceMessage, customClass)
          }

          return this.createErrorEle(message, customClass)
        }
      }
    }
  }

  createErrorEle(message, customClass) {
    return React.createElement(
      'div',
      { className: customClass || 'error-message' },
      message,
    )
  }

  filterEmptyValue(value) {
    return value === undefined || value === null ? '' : value
  }

  getRule(rule) {
    return rule.split(':')[0]
  }

  getOptions(rule) {
    let parts = rule.split(':')
    //return parts.length > 1 ? parts[1].split(',') : []
    return parts.length > 1 ? parts[1].split('&&') : []
  }
  isValid(value, rule, options) {
    try {
      return this.rules[rule].rule(value, options)
    }catch(e){
      console.error(`not find your setting rule ${rule}, Please read doc in https://github.com/febobo/react-validator`)
    }
  }
}
