EMUI.wifiObjCtrl = EMUI.ObjController.extend({
MACRO_PASSWORD_LOW: 1,
MACRO_PASSWORD_MID: 2,
MACRO_PASSWORD_HIG: 3,
RADIO_2G: 0,
RADIO_5G: 1,
WIFISSID1: 0,
WIFISSID2: 1,
WIFISSID3: 2,
WIFISSID4: 3,
WIFIAUTHMODE_AUTO: 'AUTO',
WIFIAUTHMODE_OPEN: 'OPEN',
WIFIAUTHMODE_WPA2_PSK: 'WPA2-PSK',
WIFIAUTHMODE_WPA_WPA2_PSK: 'WPA/WPA2-PSK',
WIFIAUTHMODE_802: '802.1x',
WIFIAUTHMODE_WPA_ENTER: 'WPA2 Enterprise',
WIFIAUTHMODE_WPA_WPA2_ENTER: 'WPA/WPA2 Enterprise',
WIFIADVENCRYPMODE_MIX: 'MIX',
WIFIADVENCRYPMODE_AES: 'AES',
WIFIBASICENCRYPMODE_WEP: 'WEP',
WIFIBASICENCRYPMODE_NONE: 'NONE',
MACRO_SUPPORT_CHAR_MIN: 32,
MACRO_SUPPORT_CHAR_MAX: 126,
MACRO_NOT_SUPPORT_CHAR_COMMA: 44,
MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK: 34,
MACRO_NOT_SUPPORT_CHAR_COLON: 58,
MACRO_NOT_SUPPORT_CHAR_SEMICOLON: 59,
MACRO_NOT_SUPPORT_BACKSLASH_MARK: 92,
MACRO_NOT_SUPPORT_CHAR_38: 38,
MACRO_NOT_SUPPORT_CHAR_37: 37,
MACRO_NOT_SUPPORT_CHAR_43: 43,
MACRO_NOT_SUPPORT_CHAR_39: 39,
MACRO_NOT_SUPPORT_CHAR_60: 60,
MACRO_NOT_SUPPORT_CHAR_62: 62,
MACRO_NOT_SUPPORT_CHAR_63: 63,
gModelist: [
['b', 'g', 'n', 'b/g', 'g/n', 'b/g/n'],
['a', 'a/n', 'ac', 'a/n/ac', 'a/n/ac/ax']
],
objName: '',
postDbho: function (senddata, callback) {
this.contentType= 'application/json;charset=UTF-8';
this.isSupportSaveInfo = true;
this.objName = 'wlan/wlandbho';
this.postData(senddata, callback);
},
postStatusSwitchSettings: function (wifiStatusData, callback, isrestart ) {
this.isSupportSaveInfo = true;
var data = {
radios: {
radio: wifiStatusData
},
WifiRestart: (typeof isrestart === 'undefined') ? 1 : isrestart
};
this.objName = 'wlan/status-switch-settings';
this.postData(data, callback);
},
postSecurity: function (senddata, callback) {
this.isSupportSaveInfo = true;
this.objName = 'wlan/multi-security-settings';
this.postData(senddata, callback);
},
postSecurityEx: function (senddata, callback) {
this.isSupportSaveInfo = true;
this.objName = 'wlan/multi-security-settings-ex';
var postdata = {
ssids: {
ssid: senddata
},
WifiRestart: 1
};
this.postData(postdata, callback);
},
clearSecureData: function ( basicdata ) {
for ( var i = 0; i < basicdata.length; i++ ) {
basicdata[i].WifiSsid = null;
basicdata[i].WifiRadiusKey = null;
basicdata[i].WifiWpapsk = null;
basicdata[i].MixWifiWpapsk = null;
basicdata[i].WifiWepKey1 = null;
basicdata[i].WifiWepKey2 = null;
basicdata[i].WifiWepKey3 = null;
basicdata[i].WifiWepKey4 = null;
basicdata[i].WifiWep128Key1 = null;
basicdata[i].WifiWep128Key2 = null;
basicdata[i].WifiWep128Key3 = null;
basicdata[i].WifiWep128Key4 = null;
}
},
postMutiBasicSwitch: function (wifiSsidData, callback, isrestart ) {
this.isSupportSaveInfo = true;
this.clearSecureData( wifiSsidData );
var data = {
Ssids: {
Ssid: wifiSsidData
},
WifiRestart: (typeof isrestart === 'undefined') ? 1 : isrestart
};
this.objName = 'wlan/multi-basic-settings';
this.postData(data, callback);
},
wifiMultBasicObj: EMUI.ObjController.extend({
contentType: 'application/x-www-form-urlencoded; charset=UTF-8;enp',
postMutiBsicData: function (wifiSsidData, callback, isrestart ) {
this.isSupportSaveInfo = true;
var data = {
Ssids: {
Ssid: wifiSsidData
},
WifiRestart: (typeof isrestart === 'undefined') ? 1 : isrestart
};
this.objName = 'wlan/multi-basic-settings';
this.postData(data, callback);
}
}),
postUserPwd: function (pwdData, callback) {
this.contentType = 'application/x-www-form-urlencoded; charset=UTF-8;';
this.isSupportSaveInfo = false;
this.objName = 'user/pwd';
this.postData(pwdData, callback);
},
createArray: function (obj) {
var tempArray = [];
if ($.isArray(obj)) {
return obj;
}
if (typeof (obj) !== 'undefined') {
tempArray.push(obj);
}
return tempArray;
},
checkPWStrength: function (passValue) {
var repeatPass = 0;
var tempArray = passValue.split('');
var n = 0;
for (var i = 0; i < tempArray.length; i++) {
var sliceArray = [];
if (tempArray[i] !== tempArray[i + 1]) {
sliceArray = tempArray.slice(n, i + 1);
if (sliceArray.length > 1) {
repeatPass += sliceArray.length;
}
n = i + 1;
}
}
function charMode(iN) {
if (iN >= 48 && iN <= 57) {
return 1;
} else if (iN >= 65 && iN <= 90) {
return 2;
} else if (iN >= 97 && iN <= 122) {
return 4;
}
return 8;
}
function bitTotal(num) {
var modes = 0;
var numMode = num;
var iNum = 0;
for (iNum = 0; iNum < 4; iNum++) {
if (numMode & 1) {
modes++;
}
numMode >>>= 1;
}
return modes;
}
var ret = 0;
var sPWLength = passValue.length;
var sPWModes = 0;
var iPw = 0;
for (iPw = 0; iPw < sPWLength; iPw++) {
sPWModes |= charMode(passValue.charCodeAt(iPw));
}
sPWModes = bitTotal(sPWModes);
if (sPWLength < 6 || sPWModes === 1) {
ret = this.MACRO_PASSWORD_LOW;
} else if ((sPWModes === 2 && (sPWLength >= 6) && (sPWLength <= 10))) {
if (parseFloat((repeatPass / parseInt(sPWLength, 10)).toString()) > 0.667) {
ret = this.MACRO_PASSWORD_LOW;
} else {
ret = this.MACRO_PASSWORD_MID;
}
} else if ((sPWModes >= 3 && (sPWLength >= 6)) || (sPWModes === 2 && (sPWLength > 10))) {
if (parseFloat((repeatPass / parseInt(sPWLength, 10)).toString()) > 0.334 && (parseFloat((repeatPass / parseInt(sPWLength, 10)).toString()) <= 0.667)) {
ret = this.MACRO_PASSWORD_MID;
} else if (parseFloat((repeatPass / parseInt(sPWLength, 10)).toString()) > 0.667) {
ret = this.MACRO_PASSWORD_LOW;
} else {
ret = this.MACRO_PASSWORD_HIG;
}
} else {
ret = this.MACRO_PASSWORD_LOW;
}
return ret;
},
showPwdStrengthByID: function (id, level) {
var temp = id;
var idSuffix = ['_week', '_medium', '_strong'];
if (level < 1 || level > 3) {
return;
}
temp = temp.replace('_text', '');
$('#' + temp + idSuffix[0]).hide();
$('#' + temp + idSuffix[1]).hide();
$('#' + temp + idSuffix[2]).hide();
var pwdStrengthID = '#' + temp + idSuffix[level - 1];
$(pwdStrengthID).show();
},
showPwdStrength: function (evt) {
var pdid = evt.target.id;
var newvalue = $('#' + pdid).val();
if ((evt.type === 'keydown' || evt.type === 'keypress' || evt.type === 'keyup')
&& (evt.keyCode === 37 || evt.keyCode === 38 || evt.keyCode === 39 || evt.keyCode === 40)) {
return;
}
if (newvalue.length <= 0) {
return;
}
var checkval = this.checkPWStrength(newvalue);
this.showPwdStrengthByID(pdid, checkval);
},
checkWpaPwd: function (passwordid, wifispecialcharenable) {
var pwdVal = getPassword(passwordid);
var errMsg = null;
var ret = false;
if (pwdVal.length === 0) {
errMsg = 'dialup_hint_password_empty';
} else if (hasSpaceOrTabAtHead(pwdVal)) {
errMsg = 'input_cannot_begin_with_space';
} else if (pwdVal.length >= 8 && pwdVal.length <= 63) {
if (wifispecialcharenable === '1') {
if (!this.checkVisibleChar(pwdVal)) {
errMsg = 'wlan_hint_ssid_valid_char_new';
} else {
ret = true;
}
} else if (!VALIDATION.checkInputChar(pwdVal)) {
errMsg = 'wlan_hint_wps_pwd_valid_char';
} else {
ret = true;
}
} else {
errMsg = 'wlan_hint_wps_pwd_valid_type';
}
if (!ret) {
showErrorMsg(passwordid + '_div', errMsg);
$('#' + passwordid).focus();
$('#' + passwordid).select();
}
return ret;
},
checkWepPwd: function (passwordid, wifispecialcharenable) {
var pwdVal = getPassword(passwordid);
var errMsg = null;
var ret = false;
if (pwdVal.length === 0) {
errMsg = 'dialup_hint_password_empty';
} else if (hasSpaceOrTabAtHead(pwdVal)) {
errMsg = 'input_cannot_begin_with_space';
} else if (pwdVal.length === 5 || pwdVal.length === 13) {
if (wifispecialcharenable === '1') {
if (!this.checkVisibleChar(pwdVal)) {
errMsg = 'wlan_hint_ssid_valid_char_new';
} else {
ret = true;
}
} else if (!VALIDATION.checkInputChar(pwdVal)) {
errMsg = 'wlan_hint_wep_key_valid_type';
} else {
ret = true;
}
} else {
errMsg = 'wlan_hint_64_or_128_bit_key';
}
if (!ret) {
showErrorMsg(passwordid + '_div', errMsg);
$(passwordid).focus();
$(passwordid).select();
}
return ret;
},
checkVisibleChar: function (str) {
var i;
var numCharStr;
if (str === '') {
return true;
}
for (i = 0; i < str.length; i++) {
numCharStr = str.charAt(i).charCodeAt();
if ((numCharStr > this.MACRO_SUPPORT_CHAR_MAX) || (numCharStr < this.MACRO_SUPPORT_CHAR_MIN)) {
return false;
}
}
return true;
},
checkWifiKey: function ( idprefix, specialcharenable ) {
var authMethod = $( '#' + idprefix + '_auth_select').attr('value');
if (authMethod === this.WIFIAUTHMODE_WPA2_PSK
|| authMethod === this.WIFIAUTHMODE_WPA_WPA2_PSK) {
return this.checkWpaPwd( idprefix + '_wpa_key', specialcharenable);
} else if (authMethod === this.WIFIAUTHMODE_AUTO) {
if (!this.checkWepPwd( idprefix + '_wep_key1', specialcharenable)) {
return false;
}
if (!this.checkWepPwd( idprefix + '_wep_key2', specialcharenable)) {
return false;
}
if (!this.checkWepPwd( idprefix + '_wep_key3', specialcharenable)) {
return false;
}
if (!this.checkWepPwd( idprefix + '_wep_key4', specialcharenable)) {
return false;
}
} else if ( authMethod === this.WIFIAUTHMODE_802
|| authMethod === this.WIFIAUTHMODE_WPA_ENTER
|| authMethod === this.WIFIAUTHMODE_WPA_WPA2_ENTER) {
var radiusIPAddress = $.trim($('#' + idprefix + '_radius_address').val());
var radiusPort = $.trim($('#' + idprefix + '_radius_port').val());
if ( !isValidIpAddress( radiusIPAddress, true)) {
showErrorMsg( idprefix + '_radius_address_div', 'dialup_hint_ip_address_empty');
return false;
}
if ( !VALIDATION.isVaildSpecialPort(radiusPort, idprefix + '_radius_port_div' ) ) {
return false;
}
if ( !this.checkWpaPwd( idprefix + '_radius_key', specialcharenable)) {
return false;
}
}
return true;
},
showPwdElement: function (authMode, selectID) {
var tempIndex = selectID.indexOf('auth');
var pwdIDPreffix = selectID.substr(0, tempIndex);
$('#' + pwdIDPreffix + 'none_key').hide();
$('#' + pwdIDPreffix + 'wep_key').hide();
$('#' + pwdIDPreffix + 'radius_div').hide();
$('#' + pwdIDPreffix + 'wpa_key_div').hide();
if (GLOBAL.modules.hilink_enabled === '1' ) {
$('.wifi_radiusprompt_info').attr('lang-id','wifi.radiuspromptHilink');
$('.wifi_radiusprompt_info').text(publicLang['wifi.radiuspromptHilink']);
}else{
$('.wifi_radiusprompt_info').attr('lang-id','wifi.radiusprompt');
$('.wifi_radiusprompt_info').text(publicLang['wifi.radiusprompt']);
}
if (this.WIFIAUTHMODE_OPEN === authMode) {
$('#' + pwdIDPreffix + 'none_key').show();
} else if (this.WIFIAUTHMODE_AUTO === authMode) {
$('#' + pwdIDPreffix + 'wep_key').show();
} else if (this.WIFIAUTHMODE_WPA2_PSK === authMode
|| this.WIFIAUTHMODE_WPA_WPA2_PSK === authMode) {
$('#' + pwdIDPreffix + 'wpa_key_div').show();
} else if (this.WIFIAUTHMODE_802 === authMode
|| this.WIFIAUTHMODE_WPA_ENTER === authMode
|| this.WIFIAUTHMODE_WPA_WPA2_ENTER === authMode) {
$('#' + pwdIDPreffix + 'radius_div').show();
}
if (typeof authMode === 'undefined') {
var secMode;
if (pwdIDPreffix === 'wifi_2g_') {
secMode = $('#wifi_2g_auth_select').attr('value');
} else if (pwdIDPreffix === 'wifi_5g_') {
secMode = $('#wifi_5g_auth_select').attr('value');
} else if (pwdIDPreffix === 'wifisec_') {
secMode = $('#wifisec_auth_select').attr('value');
} else if (pwdIDPreffix === 'guestwifi_') {
secMode = $('#guestwifi_auth_select').attr('value');
}
if (this.WIFIAUTHMODE_OPEN === secMode) {
$('#' + pwdIDPreffix + 'none_key').show();
} else if (this.WIFIAUTHMODE_AUTO === secMode) {
$('#' + pwdIDPreffix + 'wep_key').show();
} else if (this.WIFIAUTHMODE_WPA2_PSK === secMode || this.WIFIAUTHMODE_WPA_WPA2_PSK === secMode) {
$('#' + pwdIDPreffix + 'wpa_key_div').show();
} else if (this.WIFIAUTHMODE_802 === secMode || this.WIFIAUTHMODE_WPA_ENTER === secMode || this.WIFIAUTHMODE_WPA_WPA2_ENTER === secMode) {
$('#' + pwdIDPreffix + 'radius_div').show();
}
}
},
encryptWifiKey: function (id, oldValue) {
if (oldValue === getPassword(id)) {
return null;
}
var wifiKey;
try {
wifiKey = this.doRSAEncrypt(this.wifiEncode(getPassword(id)));
} catch (exception) {
debugInfo('doRSAEncrypt error ');
}
return wifiKey;
},
wifiEncode: function (xmlStr) {
if (typeof xmlStr !== 'undefined' && xmlStr !== null && xmlStr !== '') {
return xmlStr.replace(/(\&|\'|\"|\>|\<)/g,
function Rep($0, $1) {
return {
'&': '&amp;',
"'": '&apos;',
'"': '&quot;',
'<': '&lt;',
'>': '&gt;'
} [$1];
});
}
return '';
},
getBaicencryptionmode: function (wifimode) {
if (this.WIFIAUTHMODE_AUTO === wifimode) {
return this.WIFIBASICENCRYPMODE_WEP;
} else if (this.WIFIAUTHMODE_OPEN === wifimode) {
return this.WIFIBASICENCRYPMODE_NONE;
}
return null;
},
getWpaencryptionmode: function (wifimode) {
if (wifimode === this.WIFIAUTHMODE_WPA2_PSK) {
return this.WIFIADVENCRYPMODE_AES;
} else if (wifimode === this.WIFIAUTHMODE_WPA_WPA2_PSK) {
return this.WIFIADVENCRYPMODE_MIX;
}
return null;
},
getDAesString: function (encrypted, keystr, ivstr) {
var key = CryptoJS.enc.Hex.parse(keystr);
var iv = CryptoJS.enc.Hex.parse(ivstr);
var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
iv: iv,
mode: CryptoJS.mode.CBC,
padding: CryptoJS.pad.Pkcs7
});
return decrypted.toString(CryptoJS.enc.Latin1);
},
getWifiKey: function (getKeyDataCallBack, showKeyDataCallBack) {
var scram = CryptoJS.SCRAM();
var wifiNonce = scram.nonce().toString();
var wifiSalt = scram.nonce().toString();
var nonceStr = wifiNonce + wifiSalt;
try {
var nonceData = this.doRSAEncrypt(nonceStr);
} catch (exception) {
debugInfo('doRSAEncrypt error ');
}
var userpwddata = {
module: 'wlan',
nonce: nonceData
};
this.postUserPwd(userpwddata, function decryptWifiKey(pwdret) {
if (!pwdret.response
|| !pwdret.response.pwd
|| !pwdret.response.hash
|| !pwdret.response.iter) {
return;
}
var wifiEncrypted = pwdret.response.pwd;
var salt = CryptoJS.enc.Hex.parse(wifiSalt);
var iter = pwdret.response.iter;
var saltedStr = scram.saltedPassword(wifiNonce, salt, iter);
saltedStr = saltedStr.toString();
var aesKey = saltedStr.substring(0, 32);
var aesIV = saltedStr.substring(32, 48);
var hmacKey = saltedStr.substring(48, 64);
var hashData = scram.signature(CryptoJS.enc.Hex.parse(wifiEncrypted), CryptoJS.enc.Hex.parse(hmacKey));
hashData = hashData.toString();
if (pwdret.response.hash !== hashData) {
debugInfo('UserPwd hash error');
return;
}
var encrypted = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(wifiEncrypted));
var decryptedData = EMUI.wifiObjCtrl.getDAesString(encrypted, aesKey, aesIV);
decryptedData = decryptedData.substring(decryptedData.indexOf('<response>'));
var xmls;
if (typeof decryptedData === 'string' || typeof decryptedData === 'number') {
if (!window.ActiveXObject) {
var parser = new DOMParser();
xmls = parser.parseFromString(decryptedData, 'text/xml');
} else {
xmls = new ActiveXObject('Microsoft.XMLDOM');
xmls.async = false;
xmls.loadXML(decryptedData);
}
} else {
xmls = decryptedData;
}
var keydata = xml2object($(xmls));
getKeyDataCallBack(keydata);
showKeyDataCallBack();
});
},
getKeyData: function (keydata, wifibasic) {
if (keydata && keydata.type && keydata.type === 'response') {
var secretKeyArray = keydata.response.Ssids.Ssid;
secretKeyArray = $.makeArray( secretKeyArray );
$(wifibasic).each(function (i) {
wifibasic[i].WifiWpapsk = secretKeyArray[i].WifiWpapsk;
wifibasic[i].MixWifiWpapsk = secretKeyArray[i].MixWifiWpapsk;
wifibasic[i].WifiWepKey1 = secretKeyArray[i].WifiWepKey1;
wifibasic[i].WifiWepKey2 = secretKeyArray[i].WifiWepKey2;
wifibasic[i].WifiWepKey3 = secretKeyArray[i].WifiWepKey3;
wifibasic[i].WifiWepKey4 = secretKeyArray[i].WifiWepKey4;
if (typeof (wifibasic[i].WifiRadiusKey) !== 'undefined' && typeof (secretKeyArray[i].WifiRadiusKey) !== 'undefined') {
wifibasic[i].WifiRadiusKey = secretKeyArray[i].WifiRadiusKey;
}
});
}
},
getssiderrmsg: function (supportchinese, supportspecailchar) {
if (supportchinese === '0' && supportspecailchar === '0') {
return 'wlan_hint_ssid_valid_char';
} else if (supportchinese === '1' && supportspecailchar === '0') {
return 'wlan_hint_ssid_char_cn';
} else if (supportchinese === '0' && supportspecailchar === '1') {
return 'wlan_hint_ssid_valid_char_new';
}
return 'wlan_hint_ssid_valid_char_cn';
},
checkInputCharNew: function (unamepwd) {
var reg = /^[a-zA-Z0-9_]+$/;
var value = reg.test(unamepwd);
return value;
},
validateSsid: function (id, ssidName, supportchinese, supportspecailchar) {
var bytecount = 0;
var charcount = 0;
var chinesechar = /[\u4e00-\u9fa5]/;
if (ssidName.length === 0) {
return 'wlan_hint_ssid_empty';
} else if (ssidName.length > 32) {
return 'wizard_help_name_ssid';
}
if (supportspecailchar === '0' && hasSpaceOrTabAtHead(ssidName)) {
return 'input_cannot_begin_with_space';
}
for ( var i = 0; i < ssidName.length; i++) {
var c = ssidName.charAt(i);
if (this.checkInputCharNew(c) || c === '-' || c === '.' || c === ' ') {
bytecount++;
} else if (c.charCodeAt() <= this.MACRO_SUPPORT_CHAR_MAX && c.charCodeAt() >= this.MACRO_SUPPORT_CHAR_MIN) {
if (supportspecailchar === '0') {
return this.getssiderrmsg(supportchinese, supportspecailchar);
}
bytecount++;
} else if (chinesechar.test(c)) {
if (supportchinese === '0') {
return this.getssiderrmsg(supportchinese, supportspecailchar);
}
bytecount += 3;
} else {
return this.getssiderrmsg(supportchinese, supportspecailchar);
}
charcount++;
if (bytecount > 32) {
charcount--;
return 'stk_content_too_long';
}
}
return 'common_ok';
},
wifiCheckName: function ( idprefix, chinesessidenable, specialcharenable ) {
var wifiSsid = idprefix + '_ssid_input';
var name = $.trim(($('#' + wifiSsid)).val());
var errMsg = null;
errMsg = this.validateSsid(wifiSsid, name, chinesessidenable, specialcharenable);
if (errMsg !== 'common_ok') {
showErrorMsg( idprefix + '_ssid', errMsg);
$('#' + wifiSsid).focus();
$('#' + wifiSsid).select();
return false;
}
return true;
},
isSingleChip: function (featureswitch) {
if ( typeof featureswitch === 'undefined') {
return false;
}
if (!featureswitch.wifi_dbdc_enable
|| !featureswitch.isdoublechip) {
return false;
}
if (featureswitch.wifi_dbdc_enable === '0'
&& featureswitch.isdoublechip === '0') {
return true;
}
return false;
},
isDoubleChip: function (featureswitch) {
if ( typeof featureswitch === 'undefined') {
return false;
}
if (!featureswitch.isdoublechip) {
return false;
}
if (featureswitch.isdoublechip === '1') {
return true;
}
return false;
},
isDbdcChip: function (featureswitch) {
if ( typeof featureswitch === 'undefined') {
return false;
}
if (!featureswitch.wifi_dbdc_enable
|| !featureswitch.isdoublechip) {
return false;
}
if (featureswitch.wifi_dbdc_enable === '1'
&& featureswitch.isdoublechip === '0') {
return true;
}
return false;
},
isOffloadOpen: function ( handover) {
if ( GLOBAL.modules.wifioffload_enabled
&& GLOBAL.modules.wifioffload_enabled === '1'
&& handover
&& handover.Handover === '2' ) {
return true;
}
return false;
},
getGuestWifiIndex: function ( basicdata ) {
if (!$.isArray(basicdata)) {
return -1;
}
for (var i = 0; i < basicdata.length; i++) {
if (basicdata[i].wifiisguestnetwork === '1') {
return i;
}
}
return -1;
},
isGuestwifiOpen: function ( featureswitch, wifibasic ) {
if ( featureswitch.guestwifi_enable !== '1') {
return false;
}
var guestwifiindex = this.getGuestWifiIndex( wifibasic );
if ( guestwifiindex !== -1
&& wifibasic[ guestwifiindex ].WifiEnable === '1' ) {
return true;
}
return false;
},
isPwdSameWithGuest: function (pwdvalue, wifibasic) {
for (var i = 0; i < wifibasic.length; i++) {
if (wifibasic[i].wifiisguestnetwork === '1') {
if (pwdvalue === wifibasic[i].WifiWpapsk) {
return true;
}
}
}
return false;
},
is5gRestirct: function ( featureswitch, monitorstatus, pinstatus ) {
if ( !featureswitch.wifi_dfs_enable
|| featureswitch.wifi_dfs_enable === '0' ) {
return false;
}
if ( monitorstatus.SimStatus === '255'
|| monitorstatus.simlockStatus === '1'
|| monitorstatus.cellroam === '2'
|| pinstatus.SimState === '260'
|| pinstatus.SimState === '261') {
return true;
}
return false;
},
isSecondarySsidOpen: function ( wififeature, wifibasic ) {
if ( this.isDbdcChip( wififeature ) || this. isSingleChip( wififeature ) ) {
if ( wifibasic.length > 2
&& wifibasic[ this.WIFISSID2].WifiEnable === '1' ) {
return true;
}
}
return false;
},
isWorkOnDFS: function ( country ) {
var channels = [];
if ( !EMUI.CountryChannel
|| !EMUI.CountryChannel.getCountryChannel ) {
return false;
}
channels = EMUI.CountryChannel.getCountryChannel( country, this.RADIO_5G);
if ( channels.length === 0 ) {
return false;
}
for ( var i = 0; i < channels.length; i++ ) {
if ( ( channels[i] > 51 && channels[i] < 65 )
|| ( channels[i] > 99  && channels[i] < 141) ) {
return true;
}
}
return false;
},
getMainSsidIndex: function ( radioindex, wififeature, wifibasic) {
if ( this.isSingleChip( wififeature ) ) {
return  this.WIFISSID1;
}
if ( this.isDoubleChip( wififeature ) ) {
if ( radioindex === this.RADIO_2G ) {
return this.WIFISSID1;
}
for (var i=0;i<wifibasic.length;i++){
if (wifibasic[i].ID.indexOf('Radio.2')>-1){
return i;
}
}
}
if ( this.isDbdcChip( wififeature ) ) {
if ( radioindex === this.RADIO_2G ) {
return this.WIFISSID1;
}
return this.WIFISSID3;
}
return  this.WIFISSID1;
},
getSwitchStatus: function ( radioindex, wififeature, wifistatus, wifibasic ) {
if ( radioindex !== this.RADIO_2G && radioindex !== this.RADIO_5G ) {
return  wifistatus[0].wifienable;
}
if ( this.isSingleChip( wififeature )) {
return wifistatus[0].wifienable;
}
if ( this.isDbdcChip( wififeature ) ) {
if ( wifistatus[ radioindex ].wifienable === '0' ) {
return '0';
}
return wifibasic[ this.getMainSsidIndex( radioindex, wififeature ) ].WifiEnable;
}
if ( this.isDoubleChip( wififeature ) ) {
return wifistatus[radioindex].wifienable;
}
return wifistatus[0].wifienable;
},
getBasicDataFromPage: function ( idprefix,  basicdata, sourcedata) {
basicdata.WifiSsid = this.wifiEncode($.trim($('#' + idprefix + '_ssid_input').val()));
basicdata.WifiAuthmode = $('#' + idprefix + '_auth_select').attr('value');
basicdata.WifiBasicencryptionmodes = this.getBaicencryptionmode(basicdata.WifiAuthmode);
basicdata.WifiWpaencryptionmodes = this.getWpaencryptionmode(basicdata.WifiAuthmode);
basicdata.WifiWpapsk = null;
basicdata.MixWifiWpapsk = null;
if ( basicdata.WifiAuthmode === this.WIFIAUTHMODE_WPA2_PSK
|| basicdata.WifiAuthmode === this.WIFIAUTHMODE_WPA_WPA2_PSK ) {
basicdata.WifiWpapsk = this.encryptWifiKey(idprefix + '_wpa_key', sourcedata.WifiWpapsk);
basicdata.MixWifiWpapsk = basicdata.WifiWpapsk;
}
basicdata.WifiWepKey1 = null;
basicdata.WifiWepKey2 = null;
basicdata.WifiWepKey3 = null;
basicdata.WifiWepKey4 = null;
if ( basicdata.WifiAuthmode === this.WIFIAUTHMODE_AUTO ) {
basicdata.WifiWepKey1 = this.encryptWifiKey(idprefix + '_wep_key1', sourcedata.WifiWepKey1);
basicdata.WifiWepKey2 = this.encryptWifiKey(idprefix + '_wep_key2', sourcedata.WifiWepKey2);
basicdata.WifiWepKey3 = this.encryptWifiKey(idprefix + '_wep_key3', sourcedata.WifiWepKey3);
basicdata.WifiWepKey4 = this.encryptWifiKey(idprefix + '_wep_key4', sourcedata.WifiWepKey4);
basicdata.WifiWepKeyIndex = $('#' + idprefix + '_key_select').attr('value');
}
basicdata.WifiRadiusAddress = null;
basicdata.WifiRadiusPort = null;
basicdata.WifiRadiusKey = null;
if ( basicdata.WifiAuthmode === this.WIFIAUTHMODE_802
|| basicdata.WifiAuthmode === this.WIFIAUTHMODE_WPA_ENTER
|| basicdata.WifiAuthmode === this.WIFIAUTHMODE_WPA_WPA2_ENTER ) {
basicdata.WifiRadiusAddress = $.trim($('#' + idprefix + '_radius_address').val());
basicdata.WifiRadiusPort = $.trim($('#' + idprefix + '_radius_port').val());
basicdata.WifiRadiusKey = this.encryptWifiKey(idprefix + '_radius_key', sourcedata.WifiRadiusKey);
}
},
showKeyToPage: function (idPreffix, wifibasic) {
showSelectedValue(idPreffix + '_auth_select', wifibasic.WifiAuthmode);
this.showPwdElement(wifibasic.WifiAuthmode, idPreffix + '_auth_select');
$('#' + idPreffix + '_wep_key1').val(wifibasic.WifiWepKey1);
$('#' + idPreffix + '_wep_key1_text').val(wifibasic.WifiWepKey1);
$('#' + idPreffix + '_wep_key2').val(wifibasic.WifiWepKey2);
$('#' + idPreffix + '_wep_key2_text').val(wifibasic.WifiWepKey2);
$('#' + idPreffix + '_wep_key3').val(wifibasic.WifiWepKey3);
$('#' + idPreffix + '_wep_key3_text').val(wifibasic.WifiWepKey3);
$('#' + idPreffix + '_wep_key4').val(wifibasic.WifiWepKey4);
$('#' + idPreffix + '_wep_key4_text').val(wifibasic.WifiWepKey4);
showSelectedValue(idPreffix + '_key_select', wifibasic.WifiWepKeyIndex);
$('#' + idPreffix + '_wpa_key').val(wifibasic.WifiWpapsk);
$('#' + idPreffix + '_wpa_key_text').val(wifibasic.WifiWpapsk);
$('#' + idPreffix + '_radius_address').val(wifibasic.WifiRadiusAddress);
$('#' + idPreffix + '_radius_port').val(wifibasic.WifiRadiusPort);
$('#' + idPreffix + '_radius_key').val(wifibasic.WifiRadiusKey);
$('#' + idPreffix + '_radius_key_text').val(wifibasic.WifiRadiusKey);
},
getSingleChipFrequency: function ( mode ) {
if ( $.inArray( mode, this.gModelist[ this.RADIO_2G]) > -1 ) {
return this.RADIO_2G;
}
return this.RADIO_5G;
},
checkMode: function ( mode, radio) {
if ( $.inArray( mode, this.gModelist[radio]) > -1 ) {
return true;
}
return false;
},
isSupportEnterprise: function ( wififeature ) {
if ( wififeature.radius_enable
&& wififeature.radius_enable === '1' ) {
return true;
}
return false;
},
removeEnterpriseSelectItem: function ( ) {
$('.wifi_enterprise').remove();
},
isChangeToWep: function (basicdata, idprefix) {
if ( basicdata.WifiAuthmode !== this.WIFIAUTHMODE_AUTO
&& $('#' + idprefix + '_auth_select').attr('value') === this.WIFIAUTHMODE_AUTO ) {
return true;
}
return false;
},
changeWepWarn: function() {
if ( GLOBAL.modules.isIntellOpen ) {
$('.wifi_wep_warn').attr('lang-id', 'wifi_wep_key_warn_hilink');
$('.wifi_wep_warn').text( publicLang['wifi_wep_key_warn_hilink'] );
}
},
loadWifiConfigureXml: function () {
if ( !GLOBAL.wifiConfigure ) {
getConfigData('wifi/configure.xml', getWifiConfigure, {sync: true} );
}
return GLOBAL.wifiConfigure;
function getWifiConfigure( ret ) {
GLOBAL.wifiConfigure = xml2object( ret ).config;
if ( typeof GLOBAL.wifiConfigure.assocnumchangenoshowtips === 'undefined' ) {
GLOBAL.wifiConfigure.assocnumchangenoshowtips = '0';
}
}
}
});
