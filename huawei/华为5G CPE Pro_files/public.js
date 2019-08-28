( function () {
var method;
var noop = function () {
};
var methods = [
'assert',
'clear',
'count',
'debug',
'dir',
'dirxml',
'error',
'exception',
'group',
'groupCollapsed',
'groupEnd',
'info',
'log',
'markTimeline',
'profile',
'profileEnd',
'table',
'time',
'timeEnd',
'timeStamp',
'trace',
'warn'
];
var length = methods.length;
var console = (window.console = window.console || {});
while (length--) {
method = methods[length];
if (!console[method]) {
console[method] = noop;
}
}
if (!Array.prototype.forEach) {
Array.prototype.forEach = function (fun) {
var len = this.length;
if (typeof fun !== 'function') {
throw new TypeError();
}
var thisp = arguments[1];
for (var i = 0; i < len; i++) {
if (i in this) {
fun.call(thisp, this[i], i, this);
}
}
};
}
if (!Array.prototype.every) {
Array.prototype.every = function(callback) {
var len = this.length;
if(typeof callback != "function") {
throw new TypeError();
}
var thisArg = arguments[1];
for(var i = 0; i < len; i++) {
if(i in this && !callback.call(thisArg, this[i], i, this)) {
return false;
}
}
return true;
}
}
}());
var MACRO_NET_SINGLE_MODE = 1;
var MACRO_NET_DUAL_MODE = 2;
var MACRO_NET_MODE_CHANGE = 1;
var MACRO_NET_MODE_RESET = 0;
var MACRO_NET_MODE_C = 1;
var MACRO_NET_MODE_W = 2;
var MACRO_NET_WORK_TYPE_GSM = '1';
var MACRO_MIN_PORT_RANGE = 1;
var MACRO_MAX_PORT_RANGE = 65535;
var MACRO_NOT_SUPPORT_CHAR_COMMA = 44;
var MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK = 34;
var MACRO_NOT_SUPPORT_CHAR_COLON = 58;
var MACRO_NOT_SUPPORT_CHAR_SEMICOLON = 59;
var MACRO_NOT_SUPPORT_BACKSLASH_MARK = 92;
var MACRO_NOT_SUPPORT_CHAR_38 = 38;
var MACRO_NOT_SUPPORT_CHAR_37 = 37;
var MACRO_NOT_SUPPORT_CHAR_43 = 43;
var MACRO_NOT_SUPPORT_CHAR_39 = 39;
var MACRO_NOT_SUPPORT_CHAR_60 = 60;
var MACRO_NOT_SUPPORT_CHAR_62 = 62;
var MACRO_NOT_SUPPORT_CHAR_63 = 63;
var MACRO_NET_WORK_TYPE_GPRS = '2';
var MACRO_NET_WORK_TYPE_EDGE = '3';
var MACRO_NET_WORK_TYPE_WCDMA = '4';
var MACRO_NET_WORK_TYPE_HSDPA = '5';
var MACRO_NET_WORK_TYPE_HSUPA = '6';
var MACRO_NET_WORK_TYPE_HSPA = '7';
var MACRO_NET_WORK_TYPE_TDSCDMA = '8';
var MACRO_NET_WORK_TYPE_HSPA_PLUS = '9';
var MACRO_NET_WORK_TYPE_EVDO_REV_0 = '10';
var MACRO_NET_WORK_TYPE_EVDO_REV_A = '11';
var MACRO_NET_WORK_TYPE_EVDO_REV_B = '12';
var MACRO_NET_WORK_TYPE_1XRTT = '13';
var MACRO_NET_WORK_TYPE_UMB = '14';
var MACRO_NET_WORK_TYPE_1XEVDV = '15';
var MACRO_NET_WORK_TYPE_3XRTT = '16';
var MACRO_NET_WORK_TYPE_HSPA_PLUS_64QAM = '17';
var MACRO_NET_WORK_TYPE_HSPA_PLUS_MIMO = '18';
var MACRO_NET_WORK_TYPE_LTE = '19';
var MACRO_NET_WORK_TYPE_LTE_NR = '20';
var MACRO_NET_WORK_TYPE_EX_NOSERVICE = '0';
var MACRO_NET_WORK_TYPE_EX_GSM = '1';
var MACRO_NET_WORK_TYPE_EX_GPRS = '2';
var MACRO_NET_WORK_TYPE_EX_EDGE = '3';
var MACRO_NET_WORK_TYPE_EX_IS95A = '21';
var MACRO_NET_WORK_TYPE_EX_IS95B = '22';
var MACRO_NET_WORK_TYPE_EX_CDMA_1X = '23';
var MACRO_NET_WORK_TYPE_EX_EVDO_REV_0 = '24';
var MACRO_NET_WORK_TYPE_EX_EVDO_REV_A = '25';
var MACRO_NET_WORK_TYPE_EX_EVDO_REV_B = '26';
var MACRO_NET_WORK_TYPE_EX_HYBRID_CDMA_1X = '27';
var MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_0 = '28';
var MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_A = '29';
var MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_B = '30';
var MACRO_NET_WORK_TYPE_EX_EHRPD_REL_0 = '31';
var MACRO_NET_WORK_TYPE_EX_EHRPD_REL_A = '32';
var MACRO_NET_WORK_TYPE_EX_EHRPD_REL_B = '33';
var MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_0 = '34';
var MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_A = '35';
var MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_B = '36';
var MACRO_NET_WORK_TYPE_EX_WCDMA = '41';
var MACRO_NET_WORK_TYPE_EX_HSDPA = '42';
var MACRO_NET_WORK_TYPE_EX_HSUPA = '43';
var MACRO_NET_WORK_TYPE_EX_HSPA = '44';
var MACRO_NET_WORK_TYPE_EX_HSPA_PLUS = '45';
var MACRO_NET_WORK_TYPE_EX_DC_HSPA_PLUS = '46';
var MACRO_NET_WORK_TYPE_EX_TD_SCDMA = '61';
var MACRO_NET_WORK_TYPE_EX_TD_HSDPA = '62';
var MACRO_NET_WORK_TYPE_EX_TD_HSUPA = '63';
var MACRO_NET_WORK_TYPE_EX_TD_HSPA = '64';
var MACRO_NET_WORK_TYPE_EX_TD_HSPA_PLUS = '65';
var MACRO_NET_WORK_TYPE_EX_802_16E = '81';
var MACRO_NET_WORK_TYPE_EX_LTE = '101';
var MACRO_NET_WORK_TYPE_EX_LTE_PLUS = '1011';
var MACRO_NET_WORK_TYPE_EX_NR = '111';
var LANGUAGE_DATA = {
current_language: 'en_us',
supportted_languages: [],
safe_question_url_cpe: {},
safe_question_url_e5: {},
privacy_policy_list: {},
usermanual_language_list: {}
};
var myAccountStatus = {};
var device_differentiation = '';
function showSelectLang() {
$('#language_select_list').toggle();
}
function generateLanguageSelect() {
var langLength = 0;
if ((LANGUAGE_DATA.supportted_languages) instanceof Array) {
langLength = LANGUAGE_DATA.supportted_languages.length;
} else {
langLength = 1
}
var langHtml = '';
if (langLength > 1) {
$('#language_table').show();
$('#language_select_list').empty();
$('#language_select_list').mCustomScrollbar('destroy');
$('#language_select_list').html('<div style="margin-bottom:-1px;" class="lang_top_normal"></div><div id="language_select_list_content"></div><div style="margin-top:-1px;" class="lang_bottom_normal"></div>')
setLanguageListScroll();
if (langLength > 11) {
$('#language_select_list_content').css('height', '352px');
}
$('#language_select_list').css('width', '228px');
$('#language_select_list').css('margin-top', '25px');
var langList = LANGUAGE_DATA.supportted_languages;
var curlang = LANGUAGE_DATA.current_language;
for (var loop = 0; loop < langLength; loop++) {
var language = langList[loop];
var option = language.replace(/\-/g, '_');
var langTemplateData = {
loop: loop,
language: language,
option: option
};
var pushHtml = '';
if (option === curlang) {
pushHtml = '<div id="language_select_list_{{loop}}" option="{{language}}" style="margin-top:-1px;" class="lang_middle_selected" onclick="changeLanguage(this)">';
} else {
pushHtml = '<div id="language_select_list_{{loop}}" option="{{language}}" style="margin-top:-1px;" class="lang_middle_normal" onclick="changeLanguage(this)">';
}
pushHtml += '<span lang-id="{{option}}" class="public_lang_left" option="{{language}}" ></span></div>';
$('#language_select_list_content').find('.mCSB_container').secureAppend(pushHtml, langTemplateData);
}
} else {
$('#language_table').show();
$('#language_table').html(publicLang[LANGUAGE_DATA.supportted_languages.replace(/\-/g, '_')])
}
}
var submitinterval = 0;
function utilStartConfirmDialog(notice, confirmcallback, canclecallback, confirmstr, canclestr) {
$('#confirm_light').empty();
var canclestring = (typeof canclestr === 'undefined') ? publicLang['btn.cancel'] : canclestr;
var confirmsting = (typeof confirmstr === 'undefined') ? publicLang['btn.cofirm'] : confirmstr;
var confirmhtml = '<div class="common_win_top"></div>'
+ '<div align="center" class="margin_bottom_box2 color_Darkgray color_background_white" style="font-size:16px;width:508px;padding-top:50px;padding-bottom:8px;">'
+ '    <div id="confirm_notice" style="width:450px"></div>'
+ '    <div class="color_background_white" style="padding-top:40px;">'
+ '        <div class="clearboth"></div>'
+ '        <div align="center">'
+ '            <button id="confirm_cancel" class="btn_normal_short"></button>'
+ '            <button id="confirm_confirm" class="btn_normal_short margin-left-20"></button>'
+ '        </div>'
+ '    </div>'
+ '</div><div class="common_win_bottom"></div>';
$('#confirm_light').secureHtml(confirmhtml);
$('#confirm_notice').text(notice);
$('#confirm_cancel').text(canclestring);
$('#confirm_confirm').text(confirmsting);
$('#confirm_cancel').die();
$('#confirm_cancel').live('click', function () {
utilStopConfirmDialog();
if (canclecallback) {
canclecallback();
}
});
$('#confirm_confirm').die();
$('#confirm_confirm').live('click', function () {
utilStopConfirmDialog();
if (confirmcallback) {
confirmcallback();
}
});
$('#confirm_light').show();
$('#submit_fade').show();
var heightest = $(document).height();
submitinterval = setTimeout( function () {
$('#submit_fade').css('height', heightest + 'px');
}, 50);
}
function utilStopConfirmDialog() {
clearTimeout(submitinterval);
$('#confirm_light').hide();
$('#submit_fade').hide();
}
function utilStartSubmitDialog(noticeEX, btnId) {
var notice = publicLang['content.submitting'];
if (typeof noticeEX !== 'undefined') {
notice = noticeEX;
}
var templateData = {
notice: notice,
btnId: btnId
};
$('#submit_light').empty();
var submithtml;
submithtml = '<div class="common_win_top"></div><div align="center" class="margin_bottom_box2 color_Darkgray color_background_white" style="font-size:16px;width:508px;padding-top:40px;min-height:136px;">'
+ '<div><img src="../res/submiting.gif" /></div>'
+ '<div id="utilStartSubmitDialog_contentId" style="padding:16px 16px 0 16px;">{{notice}}</div>';
if (btnId) {
submithtml += '<button id="{{btnId}}" style="margin-top:60px;margin-bottom: 8px" class="btn_normal_short" lang-id="btn.cancel">' + publicLang['btn.cancel'] + '</button>';
}
submithtml += '</div><div class="common_win_bottom"></div>';
$('#submit_light').secureHtml(submithtml, templateData);
$('#submit_light').show();
$('#submit_fade').show();
var heightest = $(document).height();
submitinterval = setTimeout( function () {
$('#submit_fade').css('height', heightest + 'px');
}, 50);
}
function utilStopSubmitDialog() {
clearTimeout(submitinterval);
$('#submit_light').hide();
$('#submit_fade').hide();
}
function utilStartCommonDialog(noticeEX) {
$('#submit_light').empty();
var templateData = {
noticeEX: noticeEX
};
var submithtml = '<div class="common_win_top"></div><div align="center" class="margin_bottom_box2 color_Darkgray color_background_white" style="font-size:16px;width:508px;padding-top:40px;min-height:100px;">'
+ '<div style="padding-top:16px;">{{noticeEX}}</div>'
+ '</div><div class="common_win_bottom"></div>';
$('#submit_light').secureHtml(submithtml, templateData);
$('#submit_light').show();
$('#submit_fade').show();
var heightest = $(document).height();
submitinterval = setTimeout( function () {
$('#submit_fade').css('height', heightest + 'px');
}, 50);
}
function utilStopCommonDialog() {
utilStopSubmitDialog();
}
function utilShowToast(info) {
if (typeof info === 'undefined' || info === '') {
return;
}
$('#toast_info').text(info);
$('#toast_location').show();
setTimeout( function () {
var lang = LANGUAGE_DATA.current_language;
var toastwidth = $('#toast_location').width();
if (lang === 'ar_sa' || lang === 'he_il' || lang === 'fa_fa') {
$('#toast_location').css('margin-right', '-' + (toastwidth / 2) + 'px');
} else {
$('#toast_location').css('margin-left', '-' + (toastwidth / 2) + 'px');
}
}, 10);
setTimeout( function () {
$('#toast_location').hide();
}, 1000);
}
var GLOBAL = {
HOME_PAGE_URL: 'content.html#home',
INDEX_PAGE_URL: 'index.html',
INDEX_NO_SIMREDIRECT_PAGE_URL: 'index.html?noredirect'
};
var AJAX = {
HEADER: '../',
TAIL: '',
TIMEOUT: 30000,
tokens: [],
cookieFlag: true
};
function guideHref(addSearch) {
var curHref = window.location.href;
var curSearch = window.location.search;
var isGuide = false;
var isGuideSmall = false;
var hasNoPhone = false;
if (!EMUI.webWebFeatureController.content) {
EMUI.webWebFeatureController.load(null, false);
}
var isSupportCaptive = GLOBAL.modules.captivePortalGuide === '1' ? true : false;
var resSearch = '';
if (curHref.indexOf('guidesmall') >= 0) {
isGuideSmall = true;
device_differentiation = '0';
} else if (curHref.indexOf('guide') >= 0) {
isGuide = true;
} else {
}
if (curSearch || addSearch) {
resSearch = curSearch + addSearch;
}
if (!isSupportCaptive) {
if (!isGuide) {
return resSearch ? '../html/guide.html' + resSearch : '../html/guide.html';
}
return false;
}
if (curSearch.indexOf('noPhone') >= 0) {
hasNoPhone = true;
}
var userAgent = navigator.userAgent;
if (userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) ||
userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i)) {
if (isSupportCaptive && !isGuideSmall && !hasNoPhone) {
device_differentiation = '0';
return resSearch ? '../html/guidesmall.html' + resSearch : '../html/guidesmall.html';
}
} else {
if (isSupportCaptive && !isGuide) {
return resSearch ? '../html/guide.html' + resSearch : '../html/guide.html';
}
}
return false;
}
function gotoPageWithoutHistory(url) {
window.location.replace(url);
}
function _recursiveXml2Object($xml) {
if ($xml.children().size() > 0) {
var _obj = {};
$xml.children().each( function () {
var _childObj = ($(this).children().size() > 0) ? _recursiveXml2Object($(this)) : $(this).text();
if ($(this).siblings().size() > 0 && $(this).siblings().get(0).tagName === this.tagName) {
if (!_obj[this.tagName]) {
_obj[this.tagName] = [];
}
_obj[this.tagName].push(_childObj);
} else {
_obj[this.tagName] = _childObj;
}
});
return _obj;
}
return $xml.text();
}
var beforeselectid = '';
function SelectItem(obj) {
var normalselect = {
select_top: 'select_top',
select_medium: 'select_medium',
select_bottom: 'select_bottom',
select_medium_selected: 'select_medium_selected',
height: 40,
width: 328
};
var shortselect = {
select_top: 'spanner_top',
select_medium: 'spanner_medium',
select_bottom: 'spanner_bottom',
select_medium_selected: 'spanner_medium_selected',
height: 32,
width: 90
};
var SHOW_MAX_ITEM_COUNT = 5;
var selectid = $(obj).attr('id');
if ($('#' + selectid).hasClass('disabled')) {
return;
}
var selectitemsid = selectid + '_list';
if (beforeselectid !== selectitemsid) {
$('#' + beforeselectid).hide();
beforeselectid = selectitemsid;
}
var classes = normalselect;
if ($('#' + selectitemsid + ' .' + shortselect.select_medium).length !== 0) {
classes = shortselect;
}
$('#' + selectitemsid + ' .' + classes.select_medium).removeClass(classes.select_medium_selected);
var selectitemsLength = $('#' + selectitemsid + ' .' + classes.select_medium).length;
if ($('#' + selectitemsid + ' .' + classes.select_top).length === 0) {
var showitemcount = selectitemsLength < SHOW_MAX_ITEM_COUNT ? selectitemsLength : SHOW_MAX_ITEM_COUNT;
var height = showitemcount * classes.height - 1;
var tophtml = '<div  class="' + classes.select_top + '" ></div>';
var bottomhtml = '<div  class="' + classes.select_bottom + '"></div>';
var items = $('#' + selectitemsid).html();
items = '<div id="' + selectitemsid + '_items" style="height: ' + height + 'px; width: ' + classes.width + 'px;" >' + items + '</div>';
$('#' + selectitemsid).secureHtml(tophtml + items + bottomhtml);
$('#' + selectitemsid + '_items :last-child').css('height', classes.height - 1 + 'px');
}
if (selectitemsLength > SHOW_MAX_ITEM_COUNT) {
$('#' + selectitemsid + '_items').mCustomScrollbar({
theme: 'minimal-dark',
scrollButtons: {
enable: true
},
mouseWheel: {
enable: true,
scrollAmount: classes.height
},
autoHideScrollbar: false,
scrollInertia: 0,
horizontalScroll: false,
callbacks: {
onScroll: function () {
}
}
});
}
$('#' + selectitemsid).toggle();
var container;
var content;
var contentHeight;
if (classes = normalselect) {
for (var i = 0; i < selectitemsLength; i++) {
container = $($('#' + selectitemsid + ' .' + classes.select_medium)[i]).find("div");
content = $($('#' + selectitemsid + ' .' + classes.select_medium)[i]).find("span");
if (content.length === 1) {
container = container[0];
content = content[0];
if (LANGUAGE_DATA.current_language === 'he_il' || LANGUAGE_DATA.current_language === 'fa_fa' || LANGUAGE_DATA.current_language === 'ar_sa') {
$(container).css('width', '305px');
} else {
$(container).css('width', '285px');
}
$(content).css('font-size', '14px');
$($('#' + selectitemsid + ' .' + classes.select_medium)[i]).css('line-height', '40px');
contentHeight = $(content).height();
if (contentHeight > 39) {
$(content).css('font-size', '13px');
contentHeight = $(content).height();
}
if (contentHeight > 39) {
$(content).css('font-size', '12px');
contentHeight = $(content).height();
}
if (contentHeight > 39) {
$($('#' + selectitemsid + ' .' + classes.select_medium)[i]).css('line-height', '20px')
}
}
}
}
}
function xml2object($xml) {
var obj = {};
if ($xml.find('response').size() > 0) {
var _response = _recursiveXml2Object($xml.find('response'));
obj.type = 'response';
obj.response = _response;
} else if ($xml.find('error').size() > 0) {
var _code = $xml.find('code').text();
var _message = $xml.find('message').text();
obj.type = 'error';
obj.error = {
code: _code,
message: _message
};
} else if ($xml.find('config').size() > 0) {
var _config = _recursiveXml2Object($xml.find('config'));
obj.type = 'config';
obj.config = _config;
} else {
obj.type = 'unknown';
}
return obj;
}
function refreshToken() {
window.getAjaxData('api/webserver/token', function ($xml) {
var ret = xml2object($xml);
if (ret.type === 'response') {
AJAX.tokens.length = 0;
AJAX.tokens.push(ret.response.token.substr(32));
}
}, {
sync: true
});
}
function getAjaxToken() {
var meta = $('meta[name=csrf_token]');
if (meta.length > 0) {
AJAX.tokens = [];
for (var i = 0; i < meta.length; i++) {
AJAX.tokens.push(meta[i].content);
}
} else {
refreshToken();
}
}
window.getAjaxData = function (urlstr, callback, options) {
var myurl = AJAX.HEADER + urlstr + AJAX.TAIL;
var isAsync = true;
var nTimeout = AJAX.TIMEOUT;
var errorCallback = null;
if (options) {
if (options.sync) {
isAsync = (options.sync !== true);
}
if (options.timeout) {
nTimeout = parseInt(options.timeout, 10);
if (isNaN(nTimeout)) {
nTimeout = AJAX.TIMEOUT;
}
}
errorCallback = options.errorCB;
}
var headers = {
'_ResponseSource': 'Broswer'
};
if (!($.isArray(AJAX.tokens))) {
headers.__RequestVerificationToken = AJAX.tokens;
}
if (urlstr === 'api/wlan/multi-basic-settings' || urlstr === 'api/wlan/basic-settings') {
headers['Login-Type'] = 'Scram';
}
if (AJAX.cookieFlag && urlstr === 'api/monitoring/status') {
AJAX.cookieFlag = false;
headers['Update-Cookie'] = 'UpdateCookie';
}
$.ajax({
async: isAsync,
headers: headers,
type: 'GET',
timeout: nTimeout,
url: myurl,
error: function (XMLHttpRequest, textStatus) {
try {
if (jQuery.isFunction(errorCallback)) {
errorCallback(XMLHttpRequest, textStatus);
}
} catch (exception) {
debugInfo('getAjaxData errorCallback fail');
}
},
success: function (data) {
var xml;
var content;
content = data;
if (typeof content === 'string' || typeof content === 'number') {
if ((this.url.indexOf('/api/ussd/get') !== -1 ) && ( content.indexOf('content') !== -1)) {
content = smsContentDeleteWrongChar(content);
}
if (!!window.ActiveXObject || "ActiveXObject" in window) {
xml = new ActiveXObject('Microsoft.XMLDOM');
xml.async = false;
xml.loadXML(content);
} else {
var parser = new DOMParser();
xml = parser.parseFromString(content, 'text/xml');
}
} else {
xml = content;
}
var ret = xml2object($(xml));
if (ret.type === 'error') {
if (ERROR_WRONG_SESSION_TOKEN === ret.error.code || ERROR_WRONG_SESSION === ret.error.code) {
gotoPageWithoutHistory(GLOBAL.HOME_PAGE_URL);
return;
}
}
if (ret.type === 'error' && ret.error.code === ERROR_WRONG_TOKEN) {
getAjaxToken();
window.getAjaxData(urlstr, callback, options);
} else if (typeof callback === 'function') {
callback(ret);
}
}
});
};
function Switch(obj, callback) {
var classlist = $(obj).attr('class');
if (classlist.indexOf('switch_on') >= 0) {
$(obj).addClass('switch_off').removeClass('switch_on');
} else {
$(obj).addClass('switch_on').removeClass('switch_off');
}
if (callback) {
callback();
}
}
function checkbox(obj, callback) {
var classlist = $(obj).attr('class');
if (classlist.indexOf('check_on') >= 0) {
$(obj).addClass('check_off').removeClass('check_on');
} else {
$(obj).addClass('check_on').removeClass('check_off');
}
if (callback) {
callback();
}
}
function radio(obj, callback) {
if ($(obj).hasClass('radio_btn_on')
|| $(obj).hasClass('radio_btn_on_disabled')
|| $(obj).hasClass('radio_btn_off_disabled')) {
return;
}
var namevalue = $(obj).attr('name');
$('div[name=' + namevalue + ']').addClass('radio_btn_off');
$('div[name=' + namevalue + ']').removeClass('radio_btn_on');
$(obj).removeClass('radio_btn_off');
$(obj).addClass('radio_btn_on');
if (callback) {
callback();
}
}
function getPassword(id) {
if (!$('#' + id + '_close').is(':visible')) {
return $('#' + id + '_text').val();
}
return $('#' + id).val();
}
function ShowPassword(obj) {
var classlist = $(obj).attr('class');
var forAttr = $(obj).attr('forpass');
if (classlist.indexOf('ic_eye_open') >= 0) {
$('#' + forAttr + '_open').hide();
$('#' + forAttr + '_close').show();
$('#' + forAttr).val($('#' + forAttr + '_text').val());
} else {
$('#' + forAttr + '_open').show();
$('#' + forAttr + '_close').hide();
$('#' + forAttr + '_text').val($('#' + forAttr).val());
}
}
function clearAllErrorMsg() {
$('.error_message').remove();
var classVal = '';
$(':text').each( function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_error') >= 0) {
$(element).addClass('input_normal').removeClass('input_error');
}
if (classVal && classVal.indexOf('input_long_error') >= 0) {
$(element).addClass('input_long').removeClass('input_long_error');
}
});
$(':password').each( function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_error') >= 0) {
$(element).removeClass('input_error').addClass('input_normal');
}
if (classVal && classVal.indexOf('input_long_error') >= 0) {
$(element).removeClass('input_long_error').addClass('input_long');
}
});
$('div').each( function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_error') >= 0) {
$(element).removeClass('input_error').addClass('input_normal');
}
if (classVal && classVal.indexOf('input_long_error') >= 0) {
$(element).removeClass('input_long_error').addClass('input_long');
}
});
}
function showInputBorder(obj) {
var curElement = $(obj);
if (curElement && curElement.parent()) {
if (curElement.parent().hasClass('input_normal')) {
curElement.parent().addClass('input_normal_selected').removeClass('input_normal');
}
if (curElement.parent().hasClass('input_long')) {
curElement.parent().addClass('input_long_selected').removeClass('input_long');
}
}
}
function hideInputBorder(obj) {
var curElement = $(obj);
if (curElement && curElement.parent()) {
if (curElement.parent().hasClass('input_normal_selected')) {
curElement.parent().addClass('input_normal').removeClass('input_normal_selected');
}
if (curElement.parent().hasClass('input_long_selected')) {
curElement.parent().addClass('input_long').removeClass('input_long_selected');
}
}
}
function showShortInputBorder(obj) {
var curElement = $(obj);
if (curElement && curElement.parent()) {
curElement.parent().addClass('short_input_selected').removeClass('short_input');
}
}
function hideShortInputBorder(obj) {
var curElement = $(obj);
if (curElement && curElement.parent()) {
curElement.parent().addClass('short_input').removeClass('short_input_selected');
}
}
function toggleHelpInfo(obj) {
var curElement = $(obj);
if (curElement && curElement.hasClass('page_help')) {
curElement.next().toggle();
}
}
function showErrorMsg(divid, errormsgid, para) {
var msgcontent = '';
var errorLabel = '';
var msgid = (divid + errormsgid).replace('.', '');
try {
msgcontent = publicLang[errormsgid];
} catch (e) {
return;
}
if (para) {
msgcontent = msgcontent.replace('%d', para);
msgcontent = msgcontent.replace('%s', para);
}
errorLabel += '<div class="clearboth error_message">';
if ($('#' + divid).find('.control-label-win').length !== 0) {
errorLabel += '<div class="control-label-win">&nbsp;</div>';
errorLabel += '<div class="controls-win">';
} else {
errorLabel += '<div class="control-label">&nbsp;</div>';
errorLabel += '<div class="controls-win">';
}
errorLabel += '<div id="' + msgid + '" lang-id="' + errormsgid + '" class="error_info ">' + msgcontent + '</div>';
errorLabel += '</div>';
errorLabel += '</div>';
var classVal = '';
classVal = $('#' + divid).find('input').attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$('#' + divid).find('input').each( function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_long') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long');
}
});
} else {
$('#' + divid).find('div').each( function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_long') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long');
}
if (classVal && classVal.indexOf('input_normal_selected') >= 0) {
$(element).addClass('input_error').removeClass('input_normal_selected');
}
if (classVal && classVal.indexOf('input_long_selected') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long_selected');
}
});
}
$('#' + divid).secureAppend(errorLabel);
if (para) {
EMUI.LanguageController.registerLanguage(msgid, errormsgid, para);
}
}
function showRangeErrorMsg(divid, errormsgid, para1, para2) {
var msgcontent = '';
var errorLabel = '';
var msgid = (divid + errormsgid).replace('.', '');
try {
msgcontent = publicLang[errormsgid];
} catch (e) {
return;
}
if (para1 && para2) {
msgcontent = msgcontent.replace('%d1', para1);
msgcontent = msgcontent.replace('%d2', para2);
}
errorLabel += '<div class="clearboth error_message">';
if ($('#' + divid).find('.control-label-win').length !== 0) {
errorLabel += '<div class="control-label-win">&nbsp;</div>';
errorLabel += '<div class="controls-win">';
} else {
errorLabel += '<div class="control-label">&nbsp;</div>';
errorLabel += '<div class="controls-win">';
}
errorLabel += '<div id="' + msgid + '" lang-id="' + errormsgid + '" class="error_info ">' + msgcontent + '</div>';
errorLabel += '</div>';
errorLabel += '</div>';
var classVal = '';
classVal = $('#' + divid).find('input').attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$('#' + divid).find('input').each( function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_long') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long');
}
});
} else {
$('#' + divid).find('div').each( function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_long') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long');
}
if (classVal && classVal.indexOf('input_normal_selected') >= 0) {
$(element).addClass('input_error').removeClass('input_normal_selected');
}
if (classVal && classVal.indexOf('input_long_selected') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long_selected');
}
});
}
$('#' + divid).secureAppend(errorLabel);
if (para1 && para2) {
EMUI.LanguageController.registerLanguageEx(msgid, errormsgid, '%d1', para1);
EMUI.LanguageController.registerLanguageEx(msgid, errormsgid, '%d2', para2);
}
}
function showOffloadErrorMsg(divid, errormsgid, para1, para2, para3 ,para4) {
var msgcontent = '';
var errorLabel = '';
var msgid = (divid + errormsgid).replace('.', '');
try {
msgcontent = publicLang[errormsgid];
} catch (e) {
return;
}
if (para1 && para2 && para3 && para4) {
msgcontent = msgcontent.replace('%1$d', para1);
msgcontent = msgcontent.replace('%2$d', para2);
msgcontent = msgcontent.replace('%3$d', para3);
msgcontent = msgcontent.replace('%4$d', para4);
}
errorLabel += '<div class="clearboth error_message">';
if ($('#' + divid).find('.control-label-win').length !== 0) {
errorLabel += '<div class="control-label-win">&nbsp;</div>';
errorLabel += '<div class="controls-win">';
} else {
errorLabel += '<div class="control-label">&nbsp;</div>';
errorLabel += '<div class="controls-win">';
}
errorLabel += '<div id="' + msgid + '" lang-id="' + errormsgid + '" class="error_info ">' + msgcontent + '</div>';
errorLabel += '</div>';
errorLabel += '</div>';
var classVal = '';
classVal = $('#' + divid).find('input').attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$('#' + divid).find('input').each( function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_long') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long');
}
});
} else {
$('#' + divid).find('div').each( function (index, element) {
classVal = $(element).attr('class');
if (classVal && classVal.indexOf('input_normal') >= 0) {
$(element).addClass('input_error').removeClass('input_normal');
}
if (classVal && classVal.indexOf('input_long') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long');
}
if (classVal && classVal.indexOf('input_normal_selected') >= 0) {
$(element).addClass('input_error').removeClass('input_normal_selected');
}
if (classVal && classVal.indexOf('input_long_selected') >= 0) {
$(element).addClass('input_long_error').removeClass('input_long_selected');
}
});
}
$('#' + divid).secureAppend(errorLabel);
if (para1 && para2 && para3 && para4) {
EMUI.LanguageController.registerLanguageEx(msgid, errormsgid, '%1$d', para1);
EMUI.LanguageController.registerLanguageEx(msgid, errormsgid, '%2$d', para2);
EMUI.LanguageController.registerLanguageEx(msgid, errormsgid, '%3$d', para3);
EMUI.LanguageController.registerLanguageEx(msgid, errormsgid, '%4$d', para4);
}
}
var DEBUG_INFO = false;
function debugInfo() {
if (DEBUG_INFO) {
for (var i = 0; i < arguments.length; i++) {
}
}
}
function smsContentDeleteWrongChar(smsStr) {
return smsStr.replace(/([\x00-\x08]|\x0b|\x0c|[\x0e-\x1f])/g, ' ');
}
function checkUrl(source) {
var lowCaseStr = source.toLowerCase();
var strRegex = '^((https|http|ftp|rtsp|mms)?://)' + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' + '(([0-9]{1,3}\.){3}[0-9]{1,3}' + '|' + '([0-9a-z_!~*\'()-]+\.)*' + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.' + '[a-z]{2,6})' + '(:[0-9]{1,4})?' + '((/?)|' + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
var regex = new RegExp(strRegex);
return regex.test(lowCaseStr);
}
function escapeURL(source) {
var outstr = '';
var index;
var copystr = source + '';
if (!checkUrl(source)) {
outstr = '/';
} else {
copystr = copystr.toLowerCase();
if (copystr.indexOf('javascript') !== -1 || copystr.indexOf('script') !== -1) {
return '/';
}
for (index = 0; index < source.length; index++) {
if (source.charAt(index) === '&' || source.charAt(index) === '<' || source.charAt(index) === '>' || source.charAt(index) === '"' || source.charAt(index) === '\'' || source.charAt(index) === '(' || source.charAt(index) === ')') {
outstr += '%';
outstr += source.charCodeAt(index).toString(16);
} else {
outstr += source.charAt(index);
}
}
}
return outstr;
}
function getQueryStringByName(item) {
var svalue = location.search.match(new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i'));
return svalue ? svalue[1] : svalue;
}
function delChromePrefix(filepath) {
return filepath.replace('C:\\fakepath\\', '');
}
var gEncPublickey = {
e: '',
n: ''
};
function storagePubkey(rsaN, rsaE) {
var storage = window.sessionStorage;
if (rsaE === '' || rsaN === '') {
return;
}
try {
storage.clear();
storage.setItem('n', rsaN);
storage.setItem('e', rsaE);
} catch (error) {
var pubkey = '[rsa_n=' + rsaN + '&rsa_e=' + rsaE + ']';
var namebk = window.name;
var keyLocation = namebk.indexOf('[rsa_n=');
var defaultValue = namebk;
if (keyLocation > 0) {
defaultValue = namebk.substr(0, keyLocation);
}
window.name = defaultValue + pubkey;
}
}
function getPubkey() {
var storage = window.sessionStorage;
try {
storage.setItem('atp', 'atp');
storage.getItem('atp');
storage.removeItem('atp');
return [
storage.getItem('n'),
storage.getItem('e')
];
} catch (error) {
var namebk = window.name;
var keylocation = namebk.indexOf('[rsa_n=');
if (keylocation >= 0) {
var pubkey = namebk.substr(keylocation);
var localE = pubkey.indexOf('&rsa_e=');
if (localE > 0) {
var e = pubkey.substring(localE + 7, pubkey.length - 1);
var n = pubkey.substring(7, localE);
return [
n,
e
];
}
}
}
return [
'',
''
];
}
var AJAX_HEADER = '/api/';
var AJAX_TIMEOUT = 30000;
var gScarmLogin = false;
var gSetCookieFlag = false;
var ERROR_SYSTEM_NO_SUPPORT = 100002;
var ERROR_SYSTEM_NO_RIGHTS = 100003;
var ERROR_SYSTEM_BUSY = 100004;
var ERROR_VOICE_BUSY = '120001';
var ERROR_WRONG_TOKEN = 125001;
var ERROR_WRONG_SESSION = 125002;
var ERROR_WRONG_SESSION_TOKEN = 125003;
var MACRO_SUPPORT_CHAR_MIN = 32;
var MACRO_SUPPORT_CHAR_MAX = 126;
var gRequestVerificationToken = [];
var gDeviceTitle = '';
function getConfigData(urlstr, callbackFunc, options) {
var myurl = '../config/' + urlstr + '';
var isAsync = true;
var nTimeout = AJAX_TIMEOUT;
var errorCallback = null;
if (options) {
if (options.sync) {
isAsync = (options.sync === true) ? false : true;
}
if (options.timeout) {
nTimeout = parseInt(options.timeout, 10);
if (isNaN(nTimeout)) {
nTimeout = AJAX_TIMEOUT;
}
}
errorCallback = options.errorCB;
}
$.ajax({
async: isAsync,
type: 'GET',
timeout: nTimeout,
url: myurl,
headers: {
'_ResponseSource': 'Broswer'
},
error: function (XMLHttpRequest, textStatus, errorThrown) {
try {
if (jQuery.isFunction(errorCallback)) {
errorCallback(XMLHttpRequest, textStatus);
}
} catch (exception) {
}
},
success: function (data) {
var xml;
if (typeof data === 'string' || typeof data === 'number') {
if (!window.ActiveXObject) {
var parser = new DOMParser();
xml = parser.parseFromString(data, 'text/xml');
} else {
xml = new ActiveXObject('Microsoft.XMLDOM');
xml.async = false;
xml.loadXML(data);
}
} else {
xml = data;
}
if (typeof callbackFunc === 'function') {
callbackFunc($(xml));
}
}
});
}
function utilGetCsrf() {
var metas = document.getElementsByTagName('meta');
for (var m = 0; m < metas.length; m++) {
if (metas[m].getAttribute('name') === 'csrf_token') {
gRequestVerificationToken.push(metas[m].getAttribute('content'));
}
}
}
var EMUI = {};
$( function () {
EMUI.Object = {};
function cloneObject(inObj) {
var newObj = (inObj instanceof Array) ? [] : {};
for (var i in inObj) {
if (inObj[i] && typeof inObj[i] === 'object' || typeof inObj[i] === Object) {
newObj[i] = cloneObject(inObj[i]);
} else {
newObj[i] = inObj[i];
}
}
return newObj;
}
function compareObject(inObj1, inObj2) {
if (inObj1 === inObj2) {
return true;
}
var obj1length = 0;
for (var i in inObj1) {
if (i) {
obj1length++;
}
}
var obj2length = 0;
for (i in inObj2) {
if (i) {
obj2length++;
}
}
if (obj1length !== obj2length) {
return false;
}
var result = true;
for (i in inObj1) {
if (inObj1[i] && typeof inObj1[i] === 'object' || typeof inObj1[i] === Object) {
result = result && compareObject(inObj1[i], inObj2[i]);
} else {
result = result && (inObj1[i] === inObj2[i]);
}
}
return result;
}
EMUI.Object.extend = function (source) {
var temp = cloneObject(this);
temp._super = this;
for (var property in source) {
if (property) {
temp[property] = source[property];
}
}
return temp;
};
EMUI.ObjController = EMUI.Object.extend({
objName: '',
content: null,
xmlcontent: null,
isSupportSaveInfo: true,
contentType: 'application/x-www-form-urlencoded; charset=UTF-8;',
cloneObject: function (obj) {
return cloneObject(obj);
},
compareObject: function (obj1, obj2) {
return compareObject(obj1, obj2);
},
load: function (callback, bAsync) {
var myurl = AJAX_HEADER + this.objName;
var self = this;
var nTimeout = AJAX_TIMEOUT;
var isAsyncLoad = true;
if (typeof (bAsync) !== 'undefined') {
isAsyncLoad = bAsync;
}
if (this.timeout) {
nTimeout = parseInt(this.timeout, 10);
} else {
nTimeout = AJAX_TIMEOUT;
}
var headers = {
'_ResponseSource': 'Broswer'
};
if (!($.isArray(gRequestVerificationToken))) {
headers['__RequestVerificationToken'] = gRequestVerificationToken;
}
if ((myurl === '/api/wlan/multi-basic-settings' || myurl === '/api/wlan/basic-settings')) {
headers['Login-Type'] = 'Scram';
}
if (myurl === '/api/monitoring/status') {
headers['Update-Cookie'] = 'UpdateCookie';
isAsyncLoad = false;
}
$.ajax({
async: isAsyncLoad,
headers: headers,
type: 'GET',
timeout: nTimeout,
url: myurl,
error: function (XMLHttpRequest, textStatus) {
self.getErrorProc(XMLHttpRequest, textStatus);
},
success: function (data) {
var xml;
var xmlRet;
var resData = data;
if (self.contentType.indexOf('json') !== -1 && resData.indexOf('<?xml') < 0) {
xmlRet = JSON.parse(resData);
} else {
if (typeof resData === 'string' || typeof resData === 'number') {
if (( this.url.indexOf('/api/ussd/get') !== -1) && ( resData.indexOf('content') !== -1)) {
resData = smsContentDeleteWrongChar(resData);
} else if (this.url.indexOf('/api/sdcard/sdcard') !== -1) {
resData = sdResolveCannotParseChar(resData);
}
if (!window.ActiveXObject) {
var parser = new DOMParser();
xml = parser.parseFromString(resData, 'text/xml');
} else {
xml = new ActiveXObject('Microsoft.XMLDOM');
xml.async = false;
xml.loadXML(resData);
}
} else {
xml = resData;
}
self.xmlcontent = xml;
xmlRet = self.xml2object($(xml));
}
self.content = xmlRet;
self.getsuccessProc(xmlRet);
if (callback) {
callback(xmlRet);
}
}
});
},
isAjaxReturnOK: function (obj) {
var ret = false;
if (obj) {
if (typeof (obj.response) === 'string') {
if (obj.response.toLowerCase() === 'ok') {
ret = true;
}
}
}
return ret;
},
utf8Encode: function (string) {
var stringTemp = string.replace(/\r\n/g, '\n');
var utftext = '';
for (var n = 0; n < stringTemp.length; n++) {
var c = stringTemp.charCodeAt(n);
if (c < 128) {
utftext += String.fromCharCode(c);
} else if ((c > 127) && (c < 2048)) {
utftext += String.fromCharCode((c >> 6) | 192);
utftext += String.fromCharCode((c & 63) | 128);
} else {
utftext += String.fromCharCode((c >> 12) | 224);
utftext += String.fromCharCode(((c >> 6) & 63) | 128);
utftext += String.fromCharCode((c & 63) | 128);
}
}
return utftext;
},
base64encode: function (str) {
var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var output = '';
var chr1;
var chr2;
var chr3;
var enc1;
var enc2;
var enc3;
var enc4;
var i = 0;
var input = this.utf8Encode(str);
while (i < input.length) {
chr1 = input.charCodeAt(i++);
chr2 = input.charCodeAt(i++);
chr3 = input.charCodeAt(i++);
enc1 = chr1 >> 2;
enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
enc4 = chr3 & 63;
if (isNaN(chr2)) {
enc3 = enc4 = 64;
} else if (isNaN(chr3)) {
enc4 = 64;
}
output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
}
return output;
},
doRSAEncrypt: function (encstring) {
if (encstring === '') {
return '';
}
if (gEncPublickey.e === '') {
var pubkeyArray = getPubkey();
if (pubkeyArray[0] === null || pubkeyArray[0] === '') {
pubkeyArray = this.requestEncpubkey();
}
gEncPublickey.e = pubkeyArray[1];
gEncPublickey.n = pubkeyArray[0];
}
var rsa = new RSAKey();
rsa.setPublic(gEncPublickey.n, gEncPublickey.e);
var encStr = this.base64encode(encstring);
var num = encStr.length / 245;
if (EMUI.LoginStateController.rsapadingtype === '1') {
num = encStr.length / 214;
}
var restotal = '';
var rsan = gEncPublickey.n;
for (var i = 0; i < num; i++) {
if (EMUI.LoginStateController.rsapadingtype === '1') {
var encdata = encStr.substr(i * 214, 214);
var res = rsa.encryptOAEP(encdata);
} else {
var encdata = encStr.substr(i * 245, 245);
var res = rsa.encrypt(encdata);
}
if (res.length !== rsan.length) {
i--;
continue;
}
restotal += res;
}
return restotal;
},
requestEncpubkey: function () {
var encPublickey = ['', ''];
window.getAjaxData('api/webserver/publickey', function (ret) {
if (ret.type === 'response') {
encPublickey[1] = ret.response.encpubkeye;
encPublickey[0] = ret.response.encpubkeyn;
if (encPublickey[0] === null || encPublickey[0] === '') {
this.requestEncpubkey();
}
} else {
this.requestEncpubkey();
}
}, {
sync: true,
errorCB: function () {
this.requestEncpubkey();
}
});
return encPublickey;
},
object2xml: function (name, obj) {
var xmlstr = '<?xml version="1.0" encoding="UTF-8"?>';
xmlstr += this.recursiveObject2Xml(name, obj);
return xmlstr;
},
xml2object: function ($xml) {
var obj = {};
if ($xml.find('response').size() > 0) {
var _response = this.recursiveXml2Object($xml.find('response'));
obj.type = 'response';
obj.response = _response;
} else if ($xml.find('error').size() > 0) {
var _code = $xml.find('code').text();
var _message = $xml.find('message').text();
obj.type = 'error';
obj.error = {
code: _code,
message: _message
};
if($xml.find('remaincount').text()) {
obj.error.remaincount = $xml.find('remaincount').text();
}
if($xml.find('waittime').text()) {
obj.error.waittime = $xml.find('waittime').text();
}
if ($xml.find('tobelockedtime').text()) {
obj.error.tobelockedtime = $xml.find('tobelockedtime').text();
}
} else if ($xml.find('config').size() > 0) {
var _config = this.recursiveXml2Object($xml.find('config'));
obj.type = 'config';
obj.config = _config;
} else {
obj.type = 'unknown';
}
return obj;
},
createNodeStr: function (nodeName, nodeValue) {
return '<' + nodeName + '>' + nodeValue + '</' + nodeName + '>';
},
recursiveXml2Object: function ($xml) {
var self = this;
if ($xml.children().size() > 0) {
var _obj = {};
$xml.children().each( function () {
var _childObj = ($(this).children().size() > 0) ? self.recursiveXml2Object($(this)) : $(this).text();
if ($(this).siblings().size() > 0 && $(this).siblings().get(0).tagName === this.tagName) {
if (typeof _obj[this.tagName] === 'undefined' || _obj[this.tagName] === null) {
_obj[this.tagName] = [];
}
_obj[this.tagName].push(_childObj);
} else {
_obj[this.tagName] = _childObj;
}
});
return _obj;
}
return $xml.text();
},
recursiveObject2Xml: function (name, obj) {
var xmlstr = '';
var self = this;
if (typeof (obj) === 'string' || typeof (obj) === 'number') {
xmlstr = this.createNodeStr(name, obj);
} else if (jQuery.isArray(obj)) {
jQuery.each(obj, function (idx, item) {
xmlstr += self.recursiveObject2Xml(name, item);
});
} else if (typeof (obj) === 'object') {
if (obj === null) {
return '';
}
xmlstr += '<' + name + '>';
$.each(obj, function (propName, propVal) {
xmlstr += self.recursiveObject2Xml(propName, propVal);
});
xmlstr += '</' + name + '>';
}
return xmlstr;
},
clearAllErrorLabel: function () {
if (AJAX_HEADER + this.objName !== '/api/language/current-language') {
clearAllErrorMsg();
}
},
isCtrlKey: function (evt) {
if ((evt.keyCode >= 1 && evt.keyCode <= 4) ||
evt.keyCode === 8 || evt.keyCode === 9 || evt.keyCode === 12 || evt.keyCode === 13 || evt.keyCode === 27 || evt.keyCode === 144 ||
(evt.keyCode >= 16 && evt.keyCode <= 20) ||
(evt.keyCode >= 112 && evt.keyCode <= 127) ||
(evt.keyCode === 65 && evt.ctrlKey === true) ||
(evt.keyCode >= 33 && evt.keyCode <= 47)) {
return true;
}
return false;
},
checkVisibleChar: function (str) {
var numCharStr;
if (str === '') {
return true;
}
for (var i = 0; i < str.length; i++) {
numCharStr = str.charCodeAt(i);
if ((numCharStr > MACRO_SUPPORT_CHAR_MAX) || (numCharStr < MACRO_SUPPORT_CHAR_MIN)) {
return false;
}
}
return true;
},
checkProc: function () {
return true;
},
postData: function (data, callback, bAsync) {
var myurl = AJAX_HEADER + this.objName;
var nTimeout = AJAX_TIMEOUT;
var self = this;
var isAsyncLoad = true;
var requestData = data || this.content.response;
if (typeof (bAsync) !== 'undefined') {
isAsyncLoad = bAsync;
}
var headers = {
'_ResponseSource': 'Broswer'
};
if ($.isArray(gRequestVerificationToken)) {
if (gRequestVerificationToken.length > 0) {
headers.__RequestVerificationToken = gRequestVerificationToken[0];
gRequestVerificationToken.splice(0, 1);
} else {
setTimeout( function () {
self.postData(requestData, callback, bAsync);
}, 50);
return;
}
} else {
headers.__RequestVerificationToken = gRequestVerificationToken;
}
if (this.contentType.indexOf('json') > 0) {
headers['_ResponseFormat'] = 'JSON';
}
this.clearAllErrorLabel();
if (!this.checkProc()) {
return;
}
if (this.timeout) {
nTimeout = parseInt(this.timeout, 10);
} else {
nTimeout = AJAX_TIMEOUT;
}
var xmlData = '';
if (self.contentType.indexOf('json') === -1) {
xmlData = this.object2xml('request', requestData);
} else {
xmlData = JSON.stringify(requestData);
}
if (this.contentType.indexOf(';enc') > 0) {
xmlData = this.doRSAEncrypt(xmlData);
}
if (this.isSupportSaveInfo) {
utilStartSubmitDialog();
}
var postStartTime = new Date().getTime();
$.ajax({
async: isAsyncLoad,
headers: headers,
type: 'POST',
timeout: nTimeout,
url: myurl,
contentType: self.contentType,
data: xmlData,
error: function (XMLHttpRequest, textStatus) {
if (this.isSupportSaveInfo) {
utilStopSubmitDialog();
}
if (XMLHttpRequest.status === '12030' || XMLHttpRequest.status === '12031' || XMLHttpRequest.status === '12019' || XMLHttpRequest.status === '400') {
self.postData();
return;
}
self.postErrorProc(XMLHttpRequest, textStatus);
},
success: function (res) {
var xmlRet = {};
if (self.contentType.indexOf('json') !== -1) {
xmlRet = JSON.parse(res);
if (xmlRet.errcode !== 0) {
xmlRet.error = {};
xmlRet.error.code = xmlRet.errcode;
}
} else {
var xml;
var localData = res;
if (typeof localData === 'string') {
if (myurl.indexOf('/api/sms/sms-list') !== -1 && localData.indexOf('messages') !== -1) {
localData = smsContentDeleteWrongChar(localData);
}
if (!window.ActiveXObject) {
var parser = new DOMParser();
xml = parser.parseFromString(localData, 'text/xml');
} else {
xml = new ActiveXObject('Microsoft.XMLDOM');
xml.async = false;
xml.loadXML(localData);
}
} else {
xml = localData;
}
xmlRet = self.xml2object($(xml));
}
if (typeof xmlRet.error !== 'undefined' && myurl.indexOf('/api/user/session') === -1) {
if (xmlRet.error.code === ERROR_SYSTEM_NO_RIGHTS || xmlRet.error.code === ERROR_WRONG_TOKEN || xmlRet.error.code === ERROR_WRONG_SESSION_TOKEN || xmlRet.error.code === ERROR_WRONG_SESSION) {
window.location.href = '/';
return;
}
if (GLOBAL.voiceBusyNotice === '1') {
if (xmlRet.error.code === ERROR_VOICE_BUSY) {
gotoPageWithoutHistory('../html/voicebusy.html');
return;
}
}
} else if (myurl.indexOf('/api/user/challenge_login') !== -1 || myurl.indexOf('/api/user/authentication_login') !== -1 || myurl.indexOf('/api/user/password_scram') !== -1) {
if ($.isArray(gRequestVerificationToken)) {
gRequestVerificationToken = [];
}
}
if (self.isSupportSaveInfo) {
var postEndTime = new Date().getTime();
var lastTime = postEndTime - postStartTime;
if (lastTime < 1500) {
setTimeout( function () {
utilStopSubmitDialog();
self.postSuccessProc(xmlRet);
if (callback) {
callback(xmlRet, xml);
}
}, 1500);
} else {
utilStopSubmitDialog();
self.postSuccessProc(xmlRet);
if (callback) {
callback(xmlRet, xml);
}
}
} else {
self.postSuccessProc(xmlRet);
if (callback) {
callback(xmlRet, xml);
}
}
},
complete: function (XMLHttpRequest, textStatus) {
var xmlHeaders = XMLHttpRequest.getAllResponseHeaders();
if (xmlHeaders.indexOf('__RequestVerificationTokenone') >= 0) {
gRequestVerificationToken.push(self.getTokenFromHeader(xmlHeaders, '__RequestVerificationTokenone'));
if (xmlHeaders.indexOf('__RequestVerificationTokentwo') >= 0) {
gRequestVerificationToken.push(self.getTokenFromHeader(xmlHeaders, '__RequestVerificationTokentwo'));
}
} else if (xmlHeaders.indexOf('__requestverificationtokenone') >= 0) {
gRequestVerificationToken.push(self.getTokenFromHeader(xmlHeaders, '__requestverificationtokenone'));
if (xmlHeaders.indexOf('__requestverificationtokentwo') >= 0) {
gRequestVerificationToken.push(self.getTokenFromHeader(xmlHeaders, '__requestverificationtokentwo'));
}
} else if (xmlHeaders.indexOf('__RequestVerificationToken') >= 0) {
gRequestVerificationToken.push(self.getTokenFromHeader(xmlHeaders, '__RequestVerificationToken'));
} else if (xmlHeaders.indexOf('__requestverificationtoken') >= 0) {
gRequestVerificationToken.push(self.getTokenFromHeader(xmlHeaders, '__requestverificationtoken'));
}
}
});
},
getTokenFromHeader: function (headers, tokenHeader) {
var tokenindex = headers.indexOf(tokenHeader) + tokenHeader.length + 1;
while (headers.substring(tokenindex, tokenindex + 1) === ' ') {
tokenindex++;
}
return headers.substring(tokenindex, tokenindex + 32);
},
postSuccessProc: function (retval) {
},
postErrorProc: function (XMLHttpRequest, textStatus) {
},
getsuccessProc: function (retval) {
},
getErrorProc: function (XMLHttpRequest, textStatus) {
}
});
});
$( function () {
EMUI.PublicKeyObjController = EMUI.ObjController.extend({
objName: 'webserver/publickey',
getsuccessProc: function (data) {
gEncPublickey.e = data.encpubkeye;
gEncPublickey.n = data.encpubkeyn;
}
});
EMUI.doubleFrequencyConObjCtrl = EMUI.ObjController.extend({
contentType: 'application/json;charset=UTF-8',
objName: 'wlan/wlandbho',
initStatus: false,
getsuccessProc: function (data) {
var tmp = $.makeArray(data);
if (tmp && tmp[0].DbhoEnable) {
GLOBAL.modules.isdbFrequencyStatus = true;
} else {
GLOBAL.modules.isdbFrequencyStatus = false;
}
EMUI.doubleFrequencyConObjCtrl.initStatus = GLOBAL.modules.isdbFrequencyStatus;
}
});
EMUI.intelligenceConObjCtrl = EMUI.ObjController.extend({
contentType: 'application/json;charset=UTF-8',
objName: 'wlan/wlanintelligent',
getsuccessProc: function (data) {
var tmp = $.makeArray(data);
if (tmp && tmp[0].enable) {
GLOBAL.modules.isIntellOpen = tmp[0].enable;
} else {
GLOBAL.modules.isIntellOpen = false;
}
}
});
EMUI.intelligenceConStaObjCtrl = EMUI.ObjController.extend({
contentType: 'application/json;charset=UTF-8',
objName: 'wlan/wlanwifisync',
isIntellComplete: true,
getsuccessProc: function (data) {
var intellStatus = $.makeArray(data);
if ((intellStatus[0].type === 'error') || (intellStatus && intellStatus[0].WifisyncStatus)) {
this.isIntellComplete = true;
} else {
utilStartCommonDialog(publicLang.wifiIntelligenceConnect);
setTimeout(utilStopCommonDialog,3000);
this.isIntellComplete = false;
}
}
});
EMUI.TokenObjController = EMUI.ObjController.extend({
objName: 'webserver/token',
getsuccessProc: function (data) {
gRequestVerificationToken.length = 0;
gRequestVerificationToken.push(data.response.token.substr(32));
}
});
EMUI.globalDetectSmartUpgVersionController = EMUI.ObjController.extend({
contentType: 'application/json;charset=UTF-8',
objName: 'system/onlineupg',
isSupportSaveInfo: false,
checkNewversion: function () {
if (typeof GLOBAL.config.forbid_2g_upg_enable !== 'undefined' && GLOBAL.config.forbid_2g_upg_enable === '1' && GLOBAL.is2Gstatus) {
return;
}
var checkData = {
'UpdateAction': 1
};
var postContent = {
'action': 'check',
'data': checkData
};
this.postData(postContent, function (result) {
EMUI.globalSmartUpgradeStatusController.load();
});
},
toUpgradePage: function () {
EMUI.globalSmartUpgradeStatusController.fromjump = true;
EMUI.indexAutoUpgradeController.sendAutoUpg(EMUI.globalSmartUpgradeStatusController.fromjump);
EMUI.popWinController.closePopItem('upgrade');
window.location.href = '#upgrade';
}
});
EMUI.globalSmartUpgradeStatusController = EMUI.ObjController.extend({
contentType: 'application/json;charset=UTF-8',
objName: 'system/onlinestate?devid=all',
hasChecked: false,
fromjump: false,
getUpgradeMAcList: function () {
var deviceContent = this.content;
var state = '';
var needUpgradeMacList = [];
var deviceLen = deviceContent.length;
for (var i = 0; i < deviceLen; i++) {
if (deviceContent[i]['IsSupportOnlineUpg'] !== 0) {
state = deviceContent[i]['UpdateState'];
if (state !== 16 && state !== 17 && state !== 20 && state !== 29 && state !== 28 && state !== 22) {
needUpgradeMacList.push(deviceContent[i]['DevId']);
}
}
}
return needUpgradeMacList.join(',');
},
generatePopWinInfo: function (dataItem) {
if (dataItem !== '') {
var newVersion = dataItem['Version'];
var oldVerion = dataItem['CurrentVersion'];
var popHtml = '<div lang-id="upgrade.pop.info">' + publicLang['upgrade.pop.info'] + '</div>'
+ '<table style="margin-top:10px;" cellpadding="0" cellspacing="0" frame=void rules=none>'
+ '<tr style="height:30px;"><td lang-id="upgrade.oldversion">' + publicLang['upgrade.oldversion'] + '</td><td style="width:20px;">&nbsp;</td><td>' + xss(oldVerion) + '</td></tr>'
+ '<tr style="height:40px;"><td lang-id="upgrade.newversion">' + publicLang['upgrade.newversion'] + '</td><td style="width:20px;">&nbsp;</td><td>' + xss(newVersion) + '</td></tr></table>'
+ '<div class="onekey_red" style="margin-top:-5px;" lang-id="upgrade.onekey.body">' + publicLang['upgrade.onekey.body'] + '</div>'
+ '<div id="index_autoUpg" class="clearboth hide" style="padding-top:16px"><div class="pull-left padding-right-10" style="font-size: 14px;height:20px"><div id="index_autoUpg_check" class="check_on"></div>'
+ '</div><div class="color_Darkgray" style="font-size: 14px;width: 430px;line-height:20px;" lang-id="index_autoUpg_label">' + publicLang['index_autoUpg_label'] + '</div></div>'
+ '<div class="clearboth" style="margin-top:50px;text-align:center;"><button class="btn_normal_long" onclick="EMUI.globalDetectSmartUpgVersionController.toUpgradePage();" lang-id="onlineupg.toUpgrade">' + publicLang['onlineupg.toUpgrade'] + '</button></div>';
EMUI.popWinController.addPopItem('upgrade', 'upgrade.newversion.notice', popHtml);
} else {
EMUI.popWinController.closePopItem('upgrade');
}
},
showRed: function(result) {
var isHasNewVersion = false;
if (typeof result !== 'undefined') {
for (var i = 0; i < result.length; i++) {
if (result[i]['IsMainDevice']) {
if (result[i]['UpdateState'] === 18 || result[i]['UpdateState'] === 33 || result[i]['UpdateState'] === 255) {
isHasNewVersion = true;
}
break;
}
}
if (isHasNewVersion) {
$('#header_new_version').show();
} else {
$('#header_new_version').hide();
}
}
},
getsuccessProc: function (result) {
var isHasNewVersion = false;
var needCheckNewVersion = false;
var dataItem = '';
if (typeof result !== 'undefined') {
for (var i = 0; i < result.length; i++) {
if (result[i]['IsMainDevice']) {
if (result[i]['UpdateState'] !== 23 && result[i]['UpdateState'] !== 24 && result[i]['UpdateState'] !== 25 && result[i]['UpdateState'] !== 26 && result[i]['UpdateState'] !== 27) {
needCheckNewVersion = true;
}
if (result[i]['UpdateState'] === 18 || result[i]['UpdateState'] === 33 || result[i]['UpdateState'] === 255) {
isHasNewVersion = true;
dataItem = result[i];
}
break;
}
}
if (needCheckNewVersion && !this.hasChecked) {
this.hasChecked = true;
EMUI.globalDetectSmartUpgVersionController.checkNewversion();
return;
}
if (isHasNewVersion) {
$('#header_new_version').show();
if (GLOBAL.isSecondaryAccount) {
return;
}
this.generatePopWinInfo(dataItem);
} else {
$('#header_new_version').hide();
EMUI.popWinController.closePopItem('upgrade');
}
}
}
});
EMUI.getNewComponentInfoController = EMUI.ObjController.extend({
objName: 'online-update/url-list',
fromjump: false,
toUpgradePage: function () {
EMUI.getNewComponentInfoController.fromjump = true;
EMUI.indexAutoUpgradeController.sendAutoUpg(EMUI.getNewComponentInfoController.fromjump);
EMUI.popWinController.closePopItem('upgrade');
window.location.href = '#upgrade';
},
getsuccessProc: function (data) {
if (data.type === 'response') {
var responseData = data['response'];
if (typeof responseData.ComponentList !== 'undefined') {
var deviceInfo = EMUI.mainDeviceVersionController.content;
var newVersion = '';
if (typeof responseData.ComponentList.Component !== 'undefined') {
var updateComponent = responseData.ComponentList.Component;
newVersion = updateComponent['Version'];
}
if (deviceInfo && deviceInfo['type'] === 'response') {
var deviceData = deviceInfo['response'];
var oldVerion = '';
if (typeof deviceData['SoftwareVersion'] !== 'undefined' && deviceData['SoftwareVersion'] !== '') {
oldVerion = deviceData['SoftwareVersion'];
}
if (oldVerion === '' && typeof deviceData['WebUIVersion'] !== 'undefined' && deviceData['WebUIVersion'] !== '') {
oldVerion = deviceData['WebUIVersion'];
}
}
var popHtml = '<div lang-id="upgrade.pop.info">' + publicLang['upgrade.pop.info'] + '</div>'
+ '<table style="margin-top:10px;" cellpadding="0" cellspacing="0" frame=void rules=none>'
+ '<tr style="height:30px;"><td lang-id="upgrade.oldversion">' + publicLang['upgrade.oldversion'] + '</td><td style="width:20px;">&nbsp;</td><td>' + xss(oldVerion) + '</td></tr>'
+ '<tr style="height:40px;"><td lang-id="upgrade.newversion">' + publicLang['upgrade.newversion'] + '</td><td style="width:20px;">&nbsp;</td><td>' + xss(newVersion) + '</td></tr></table>'
+ '<div class="onekey_red" style="margin-top:-5px;" lang-id="upgrade.onekey.body">' + publicLang['upgrade.onekey.body'] + '</div>'
+ '<div id="index_autoUpg" class="clearboth hide" style="padding-top:16px"><div class="pull-left padding-right-10" style="font-size: 14px;height:20px"><div id="index_autoUpg_check" class="check_on"></div>'
+ '</div><div class="color_Darkgray" style="font-size: 14px;width: 430px;line-height:20px;" lang-id="index_autoUpg_label">' + publicLang['index_autoUpg_label'] + '</div></div>'
+ '<div class="clearboth" style="margin-top:50px;text-align:center;"><button class="btn_normal_long" onclick="EMUI.getNewComponentInfoController.toUpgradePage();" lang-id="onlineupg.toUpgrade">' + publicLang['onlineupg.toUpgrade'] + '</button></div>';
EMUI.popWinController.addPopItem('upgrade', 'upgrade.newversion.notice', popHtml);
} else {
EMUI.popWinController.closePopItem('upgrade');
}
}
}
});
EMUI.mainCheckNewVersionController = EMUI.ObjController.extend({
objName: 'online-update/check-new-version',
isSupportSaveInfo: false,
checkNewVersion: function () {
if (typeof GLOBAL.config.forbid_2g_upg_enable !== 'undefined' && GLOBAL.config.forbid_2g_upg_enable === '1' && GLOBAL.is2Gstatus) {
return;
}
var request = {
check: true
};
this.postData(request, function (result) {
});
}
});
EMUI.headerStautsController = EMUI.ObjController.extend({
objName: 'monitoring/check-notifications',
isLocalUpgrade: false,
hasNewVersion: false,
hasChecked: false,
getsuccessProc: function (data) {
var responceData = data['response'];
var newSmsCount = parseInt(responceData['UnreadMessage'], 10);
if (typeof responceData['SmsStorageFull'] !== 'undefined' && responceData['SmsStorageFull'] === '1') {
$('#sms_not_full').hide();
$('#sms_full_new').hide();
$('#sms_full').hide();
if (newSmsCount > 0) {
$('#sms_full_new').show();
} else {
$('#sms_full').show();
}
} else {
$('#sms_full_new').hide();
$('#sms_full').hide();
$('#sms_not_full').show();
if (newSmsCount > 0) {
$('#header_new_sms').show();
} else {
$('#header_new_sms').hide();
}
}
if (GLOBAL.isBridgeModeOpen) {
EMUI.popWinController.closePopItem('upgrade');
$('#header_new_version').hide();
return;
}
if (window.location.hash === '#upgrade') {
return;
}
if (GLOBAL.modules.hilink_online_update_enabled === '1') {
EMUI.globalSmartUpgradeStatusController.load();
} else {
var versionStatus = responceData['OnlineUpdateStatus'];
if (!EMUI.headerStautsController.isLocalUpgrade) {
if (versionStatus === '12' || versionStatus === '50' || versionStatus === '30' || versionStatus === '31' || versionStatus === '52' || versionStatus === '40') {
$('#header_new_version').show();
this.hasNewVersion = true;
if (GLOBAL.isSecondaryAccount) {
return;
}
EMUI.getNewComponentInfoController.load();
} else {
$('#header_new_version').hide();
EMUI.popWinController.closePopItem('upgrade');
if (this.hasChecked === false) {
EMUI.mainCheckNewVersionController.checkNewVersion();
this.hasChecked = true;
}
}
}
}
}
});
EMUI.publicActionController = EMUI.ObjController.extend({
toSms: function () {
window.location.hash = '#sms';
},
toUpGrade: function () {
window.location.hash = '#upgrade';
}
});
EMUI.LogoutObjController = EMUI.ObjController.extend({
objName: 'user/logout',
isSupportSaveInfo: false,
doLogout: function () {
var request = {
'Logout': 1
};
this.postData(request, function () {
window.location.href = GLOBAL.INDEX_NO_SIMREDIRECT_PAGE_URL;
});
},
Logout: function () {
var hash = window.location.hash;
var self = this;
if (hash === '#sms') {
EMUI.smsSendAndSaveController.smsJumpSave( function () {
self.doLogout();
});
} else {
this.doLogout();
}
}
});
var gTraffic = {};
EMUI.pubStatisticFeatureController = EMUI.ObjController.extend({
objName: 'monitoring/statistic-feature-switch',
isDailyLimitEnable: false,
getsuccessProc: function(res) {
if (res.type === 'response') {
this.isDailyLimitEnable = (res.response.daily_statistic_limit_enable === '1') ? true : false;
}
}
});
EMUI.pubMonthStatisticsController = EMUI.ObjController.extend({
objName: 'monitoring/month_statistics',
globalTraffic: null,
toStatistic: function () {
EMUI.popWinController.closePopItem('statistic');
window.location.href = '#statistic';
},
ignorStatistic: function () {
EMUI.popWinController.closePopItem('statistic');
},
ignorRoamStatistic: function () {
EMUI.popWinController.closePopItem('roamStatistic');
},
getsuccessProc: function (monthData) {
if (monthData.type === 'response') {
var responseData = monthData['response'];
gTraffic.usagetraffic = parseInt(responseData['CurrentMonthDownload'], 10) + parseInt(responseData['CurrentMonthUpload'], 10);
if (typeof responseData['roam_month_download'] !== 'undefined' && typeof responseData['roam_month_upload'] !== 'undefined') {
gTraffic.roamUsagetraffic = parseInt(responseData['roam_month_download'], 10) + parseInt(responseData['roam_month_upload'], 10);
} else {
gTraffic.roamUsagetraffic = 0;
}
gTraffic.dailydataused = parseInt(responseData['CurrentDayUsed'], 10);
}
this.globalTraffic = gTraffic;
var popHtml = '';
if (gTraffic['usagetraffic'] > gTraffic['dataLimit'] && gTraffic['dataLimit'] !== 0 && gTraffic['setmonthdata'] === '1') {
popHtml = '<div lang-id="statistic.flowOver">' + publicLang['statistic.flowOver'] + '</div>'
+ '<div style="margin:0 auto;margin-top:50px;text-align:center;"><button class="btn_normal_long" lang-id="statistic.setagain" onclick="EMUI.pubMonthStatisticsController.toStatistic();">' + publicLang['statistic.setagain'] + '</button></div>'
+ '<div class="clearboth" style="margin-top:10px;text-align:center;"><div class="home_font_style pointer" onclick="EMUI.pubMonthStatisticsController.ignorStatistic();" lang-id="statistic.ignor">' + publicLang['statistic.ignor'] + '</div></div>';
EMUI.popWinController.addPopItem('statistic', 'statistic.overLimit', popHtml);
} else {
if (gTraffic['daydatalimit'] !== 0 && gTraffic['dailydataused'] > gTraffic['daydatalimit'] && gTraffic['SetDayData'] === '1') {
popHtml = '<div lang-id="statistic.flowOver">' + publicLang['statistic.flowOver'] + '</div>'
+ '<div style="margin:0 auto;margin-top:50px;text-align:center;"><button class="btn_normal_long" lang-id="statistic.setagain" onclick="EMUI.pubMonthStatisticsController.toStatistic();">' + publicLang['statistic.setagain'] + '</button></div>'
+ '<div class="clearboth" style="margin-top:10px;text-align:center;"><div class="home_font_style pointer" onclick="EMUI.pubMonthStatisticsController.ignorStatistic();" lang-id="statistic.ignor">' + publicLang['statistic.ignor'] + '</div></div>';
EMUI.popWinController.addPopItem('statistic', 'statistic.overLimit', popHtml);
} else {
EMUI.popWinController.closePopItem('statistic');
}
}
if (gTraffic['supportRoamOver'] === true && gTraffic['setmonthdata'] === '1' && gTraffic['roamUsagetraffic'] > gTraffic['roamFlow']) {
popHtml = '<div lang-id="statistic.roamexceed">' + publicLang['statistic.roamexceed'] + '</div>'
+ '<div style="margin:0 auto;margin-top:50px;text-align:center;"><button class="btn_normal_long" lang-id="statistic.setagain" onclick="EMUI.pubMonthStatisticsController.toStatistic();">' + publicLang['statistic.setagain'] + '</button></div>'
+ '<div class="clearboth" style="margin-top:10px;text-align:center;"><div class="home_font_style pointer" onclick="EMUI.pubMonthStatisticsController.ignorRoamStatistic();" lang-id="statistic.ignor">' + publicLang['statistic.ignor'] + '</div></div>';
EMUI.popWinController.addPopItem('roamStatistic', 'statistic.roamoverLimit', popHtml);
} else {
EMUI.popWinController.closePopItem('roamStatistic');
}
}
});
EMUI.pubMonthStatisticsStartDateController = EMUI.ObjController.extend({
objName: 'monitoring/start_date',
getsuccessProc: function (startData) {
if (startData.type === 'response') {
var obj = {
'MB': 1024 * 1024,
'GB': 1024 * 1024 * 1024,
'TB': 1024 * 1024 * 1024 * 1024
};
var responseData = startData['response'];
gTraffic.turnoffdataenable = responseData['turnoffdataenable'];
gTraffic.turnoffdataswitch = responseData['turnoffdataswitch'];
gTraffic.turnoffdataflag = responseData['turnoffdataflag'];
gTraffic.setmonthdata = responseData['SetMonthData'];
var unit = '';
var datalimit = responseData['DataLimit'];
if (datalimit.length === 0) {
datalimit = 0;
} else {
unit = datalimit.substring(datalimit.length - 2);
datalimit = parseInt(datalimit.substring(0, (datalimit.length - 2)), 10);
datalimit = obj[unit] * datalimit;
}
gTraffic.dataLimit = datalimit;
if (typeof responseData['RoamingStatisticEnable'] !== 'undefined' || responseData['RoamingStatisticEnable'] === '1') {
gTraffic.supportRoamOver = true;
var roamDataLimit = 0;
if (typeof responseData['RoamDataLimit'] !== 'undefined') {
roamDataLimit = responseData['RoamDataLimit'];
if (roamDataLimit.length === 0) {
roamDataLimit = 0;
} else {
unit = roamDataLimit.substring(roamDataLimit.length - 2);
roamDataLimit = parseInt(roamDataLimit.substring(0, (roamDataLimit.length - 2)), 10);
roamDataLimit = obj[unit] * roamDataLimit;
}
}
gTraffic.roamFlow = roamDataLimit;
} else {
gTraffic.supportRoamOver = false;
gTraffic.roamFlow = 0;
}
EMUI.pubMonthStatisticsController.load();
}
}
});
EMUI.pubDailyStatisticsStartDateController = EMUI.ObjController.extend({
objName: 'monitoring/daily-data-limit',
getsuccessProc: function (dailyData) {
if (dailyData === undefined) {
return;
}
if (dailyData.type === 'response') {
var obj = {
'MB': 1024 * 1024,
'GB': 1024 * 1024 * 1024,
'TB': 1024 * 1024 * 1024 * 1024
};
var responseData = dailyData['response'];
gTraffic.dailyturnoffdataenable = responseData['dailyturnoffdataenable'];
gTraffic.dailyturnoffdataswitch = responseData['dailyturnoffdataswitch'];
gTraffic.dailyturnoffdataflag = responseData['dailyturnoffdataflag'];
gTraffic.SetDayData = responseData['SetDayData'];
var unit = '';
var daydatalimit = responseData['DayDataLimit'];
if (daydatalimit.length === 0) {
daydatalimit = 0;
} else {
unit = daydatalimit.substring(daydatalimit.length - 2);
daydatalimit = parseInt(daydatalimit.substring(0, (daydatalimit.length - 2)), 10);
daydatalimit = obj[unit] * daydatalimit;
}
gTraffic.daydatalimit = daydatalimit;
EMUI.pubMonthStatisticsController.load();
}
}
});
EMUI.globalStatusController = EMUI.ObjController.extend({
objName: 'monitoring/status',
getsuccessProc: function (data) {
var monitoringStatus = data.response;
GLOBAL.monitoringStatus = monitoringStatus;
var newNetMode = null;
if (typeof monitoringStatus['CurrentNetworkTypeEx'] !== 'undefined' && monitoringStatus['CurrentNetworkTypeEx'] !== '') {
switch (monitoringStatus['CurrentNetworkTypeEx']) {
case MACRO_NET_WORK_TYPE_EX_IS95A:
case MACRO_NET_WORK_TYPE_EX_IS95B:
case MACRO_NET_WORK_TYPE_EX_CDMA_1X:
case MACRO_NET_WORK_TYPE_EX_EVDO_REV_0:
case MACRO_NET_WORK_TYPE_EX_EVDO_REV_A:
case MACRO_NET_WORK_TYPE_EX_EVDO_REV_B:
case MACRO_NET_WORK_TYPE_EX_HYBRID_CDMA_1X:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_0:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_A:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_B:
case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_0:
case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_A:
case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_B:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_0:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_A:
case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_B:
newNetMode = MACRO_NET_MODE_C;
break;
case MACRO_NET_WORK_TYPE_EX_GSM:
case MACRO_NET_WORK_TYPE_EX_GPRS:
case MACRO_NET_WORK_TYPE_EX_EDGE:
case MACRO_NET_WORK_TYPE_EX_WCDMA:
case MACRO_NET_WORK_TYPE_EX_HSDPA:
case MACRO_NET_WORK_TYPE_EX_HSUPA:
case MACRO_NET_WORK_TYPE_EX_HSPA:
case MACRO_NET_WORK_TYPE_EX_HSPA_PLUS:
case MACRO_NET_WORK_TYPE_EX_DC_HSPA_PLUS:
case MACRO_NET_WORK_TYPE_EX_TD_SCDMA:
case MACRO_NET_WORK_TYPE_EX_TD_HSDPA:
case MACRO_NET_WORK_TYPE_EX_TD_HSUPA:
case MACRO_NET_WORK_TYPE_EX_TD_HSPA:
case MACRO_NET_WORK_TYPE_EX_TD_HSPA_PLUS:
case MACRO_NET_WORK_TYPE_EX_LTE:
case MACRO_NET_WORK_TYPE_EX_LTE_PLUS:
case MACRO_NET_WORK_TYPE_EX_NR:
newNetMode = MACRO_NET_MODE_W;
break;
default:
break;
}
} else {
switch (monitoringStatus['CurrentNetworkType']) {
case MACRO_NET_WORK_TYPE_EVDO_REV_0:
case MACRO_NET_WORK_TYPE_EVDO_REV_A:
case MACRO_NET_WORK_TYPE_EVDO_REV_B:
case MACRO_NET_WORK_TYPE_1XRTT:
case MACRO_NET_WORK_TYPE_UMB:
case MACRO_NET_WORK_TYPE_1XEVDV:
case MACRO_NET_WORK_TYPE_3XRTT:
newNetMode = MACRO_NET_MODE_C;
break;
case MACRO_NET_WORK_TYPE_GSM:
case MACRO_NET_WORK_TYPE_GPRS:
case MACRO_NET_WORK_TYPE_EDGE:
case MACRO_NET_WORK_TYPE_WCDMA:
case MACRO_NET_WORK_TYPE_HSDPA:
case MACRO_NET_WORK_TYPE_HSUPA:
case MACRO_NET_WORK_TYPE_HSPA:
case MACRO_NET_WORK_TYPE_TDSCDMA:
case MACRO_NET_WORK_TYPE_HSPA_PLUS:
case MACRO_NET_WORK_TYPE_HSPA_PLUS_64QAM:
case MACRO_NET_WORK_TYPE_HSPA_PLUS_MIMO:
case MACRO_NET_WORK_TYPE_LTE:
case MACRO_NET_WORK_TYPE_LTE_NR:
newNetMode = MACRO_NET_MODE_W;
break;
default:
break;
}
}
if (newNetMode !== null) {
if (GLOBAL.basicInfo.netModeStatus !== newNetMode) {
GLOBAL.basicInfo.netModeStatus = newNetMode;
GLOBAL.basicInfo.netModeChange = MACRO_NET_MODE_CHANGE;
}
}
var winHref = window.location.href;
if (winHref.indexOf('/html/content.html') >= 0) {
EMUI.getWirelessProfileName.load( function (profileData) {
if (profileData.type === 'error') {
getAjaxData('api/pin/status', statusGetDate, {
sync: true
});
if (apiPinStatus.SimState === CONST.MACRO_NO_SIM_CARD || apiPinStatus.PinOptState === CONST.MACRO_CPIN_FAIL) {
$('#header_sms_info').hide();
return;
}
}
if (GLOBAL.isSecondaryAccount || (!GLOBAL.modules.sms_enabled || GLOBAL.modules.sms_enabled === '0')) {
$('#header_sms_info').hide();
} else {
$('#header_sms_info').show();
}
});
}
}
});
EMUI.getWirelessProfileName = EMUI.ObjController.extend({
objName: 'net/current-plmn',
getsuccessProc: function (data) {
var res = data.response;
if (res) {
if (res.Rat === '0') {
GLOBAL.is2Gstatus = true;
} else {
GLOBAL.is2Gstatus = false;
}
}
},
getPlmnName: function (wirelessData, monitoringStatus) {
var plmnName = '';
if (typeof wirelessData['ShortName'] !== 'undefined' && wirelessData['ShortName'].length > 0) {
plmnName = xss(wirelessData['ShortName']);
} else if (typeof wirelessData['FullName'] !== 'undefined' && wirelessData['FullName'].length > 0) {
plmnName = xss(wirelessData['FullName']);
} else if (typeof wirelessData['Numeric'] !== 'undefined' && wirelessData['Numeric'].length > 0) {
plmnName = xss(wirelessData['Numeric']);
} else {
plmnName = '';
}
if (monitoringStatus['RoamingStatus'] === '1' && monitoringStatus['ServiceStatus'] === '2') {
if (plmnName === '') {
plmnName = '<span lang-id="IDS_dialup_label_roaming">' + publicLang['IDS_dialup_label_roaming'] + '<span>';
}
}
return plmnName;
}
});
EMUI.BasicInfoObjController = EMUI.ObjController.extend({
objName: 'device/basic_information',
getsuccessProc: function (data) {
var resp = data.response;
var basicInfo = {};
var productCDMA = resp.ProductFamily === 'CDMA' ? true : false;
if (productCDMA) {
basicInfo.netModeStatus = MACRO_NET_MODE_C;
} else {
basicInfo.netModeStatus = MACRO_NET_MODE_W;
}
if (resp.MultiMode === '1') {
basicInfo.netModeType = MACRO_NET_DUAL_MODE;
} else {
basicInfo.netModeType = MACRO_NET_SINGLE_MODE;
}
basicInfo.netModeChange = MACRO_NET_MODE_RESET;
GLOBAL.basicInfo = basicInfo;
GLOBAL.deviceInfo = resp;
EMUI.globalStatusController.load();
}
});
EMUI.HeartBeatObjController = EMUI.ObjController.extend({
objName: 'user/heartbeat',
timer: null,
refresh: function ( rediretcturl ) {
var self = this;
var t = 5000;
clearInterval(this.timer);
this.timer = setInterval( function () {
self.load( function (data) {
if (data.response && data.response.userlevel === '0') {
if ( rediretcturl ) {
window.location.href = rediretcturl;
} else {
window.location.href = GLOBAL.INDEX_NO_SIMREDIRECT_PAGE_URL;
}
}
});
}, t);
},
stop: function () {
clearInterval(this.timer);
}
});
EMUI.CurrenLangObjController = EMUI.ObjController.extend({
objName: 'monitoring/converged-status',
matchLanguageExist: function (currentLang, langListArr) {
EMUI.BasicInfoObjController.load(null, false);
var productInfo = EMUI.BasicInfoObjController.content.response.classify;
LANGUAGE_DATA.current_language = 'en_us';
if ($.isArray(langListArr)) {
var arrayLen = langListArr.length;
for (var i = 0; i < arrayLen; i++) {
var langItem = langListArr[i];
if (langItem.replace(/-/, '_') === currentLang.replace(/-/, '_')) {
LANGUAGE_DATA.current_language = langListArr[i].replace(/-/, '_');
}
}
} else if (typeof (langListArr) !== 'undefined') {
LANGUAGE_DATA.current_language = langListArr.replace(/-/, '_');
}
if (typeof (LANGUAGE_DATA.privacy_policy_list) !== 'undefined') {
$('#pravacy_policy').attr('href', LANGUAGE_DATA.privacy_policy_list[LANGUAGE_DATA.current_language]);
} else if (typeof (LANGUAGE_DATA.privacy_policy_list) !== 'undefined') {
$('#pravacy_policy').attr('href', LANGUAGE_DATA.privacy_policy_list.default_url);
}
if (LANGUAGE_DATA.current_language === 'zh_cn') {
$('#pravacy_state').attr('href','../html/privacystatement_zh_cn.html')
} else if (LANGUAGE_DATA.current_language === 'en_us') {
$('#pravacy_state').attr('href','../html/privacystatement_en_us.html')
} else {
}
if (GLOBAL.modules.safeinfo_enable === '1') {
if (typeof(LANGUAGE_DATA.safe_question_url_cpe) !== 'undefined' && productInfo === 'cpe') {
$('#safeinfo').attr('href', LANGUAGE_DATA.safe_question_url_cpe[LANGUAGE_DATA.current_language]);
} else if (typeof(LANGUAGE_DATA.safe_question_url_e5) !== 'undefined' && (productInfo === 'mobile-wifi'|| productInfo === 'touch')) {
$('#safeinfo').attr('href', LANGUAGE_DATA.safe_question_url_e5[LANGUAGE_DATA.current_language]);
} else {
$('#safeinfo').hide();
}
} else {
$('#safeinfo').hide();
}
},
getsuccessProc: function (data) {
getAjaxData('config/help/config.xml', function(xml) {
if(xml.type === 'config') {
var config_ret = xml;
help_enable = config_ret.config.enable;
}
}, {
sync : true
}
);
var lang = data.response.CurrentLanguage.replace(/-/, '_');
var support_usermanual_language_list = $.makeArray(LANGUAGE_DATA.usermanual_language_list.support_language.language);
var default_usermanual_language = LANGUAGE_DATA.usermanual_language_list.default_language;
var helpUrl = '../usermanual/' + default_usermanual_language + '/usermanual/web_content_concept_00001.html';
var helpAskqUrl = '../usermanual/' + default_usermanual_language + '/usermanual/faq_plugin/web_faq_topic_00001.html';
for (var loop = 0; loop < support_usermanual_language_list.length; loop++) {
if (data.response.CurrentLanguage === support_usermanual_language_list[loop]) {
helpUrl = '../usermanual/' + support_usermanual_language_list[loop] + '/usermanual/web_content_concept_00001.html';
helpAskqUrl = '../usermanual/' + support_usermanual_language_list[loop] + '/usermanual/faq_plugin/web_faq_topic_00001.html';
}
}
if (help_enable === '1') {
$('#help_href').attr('href', helpUrl);
} else if (help_enable === '0') {
$('#help_href').attr('href', helpAskqUrl);
$('#help_href div:last-child').attr('lang-id', 'footer.faqs');
}
$('#help_href').show();
this.matchLanguageExist(data.response.CurrentLanguage, LANGUAGE_DATA.supportted_languages);
getLang(lang, function () {
generateLanguageSelect();
showNationalLang();
getGlobalConfig();
EMUI.LanguageController.transLang();
EMUI.LanguageController.transLangEx();
EMUI.LanguageController.adapterCss(lang);
$('#footer_copyright').html(publicLang['footer.copyright.str'].replace('%d', xss(GLOBAL.config.copyright)));
});
if ($('#emui_content_pop_win').css('display') !== 'none') {
showPopWin();
}
}
});
EMUI.LanguageController = EMUI.ObjController.extend({
objName: 'language/current-language',
isSupportSaveInfo: false,
regArray: [],
regFunction: [],
regArrayEx: [],
registerLanguage: function () {
var argLen = arguments.length;
if (argLen < 3) {
return;
}
var htmlId = arguments[0];
var resId = arguments[1];
var para = arguments[2];
var item = {};
var currReg = this.regArray;
var currRegLen = currReg.length;
var isFound = false;
for (var i = 0; i < currRegLen; i++) {
if (currReg[i]['htmlId'] === htmlId) {
this.regArray[i]['resId'] = resId;
this.regArray[i]['para'] = para;
isFound = true;
}
}
if (!isFound) {
item.htmlId = htmlId;
item.resId = resId;
item.para = para;
this.regArray.push(item);
}
},
registerLanguageEx: function (htmlId, resId, parastr, paravalue, paralink, strColor) {
if (!htmlId || !resId || !parastr || !paravalue) {
return;
}
if (parastr.indexOf('%l') !== -1
&& !paralink) {
return;
}
var item = {};
var currReg = this.regArrayEx;
var currRegLen = currReg.length;
for (var i = 0; i < currRegLen; i++) {
if (currReg[i]['htmlId'] === htmlId) {
item = currReg[i];
if (item.resId !== resId) {
currReg.splice(i, 1);
break;
}
for (var j = 0; j < item.para.length; j++) {
if (item.para[j].parastr === parastr) {
item.para.splice(j, 1);
break;
}
}
var temppara = creatParas(parastr, paravalue, paralink, strColor);
item.para.push(temppara);
return;
}
}
item = {};
item.htmlId = htmlId;
item.resId = resId;
item.para = [];
item.para.push(creatParas(parastr, paravalue, paralink, strColor));
currReg.push(item);
return;
function creatParas(str, value, link, strColor) {
var para = {};
para.parastr = str;
para.paravalue = value;
para.strColor = strColor;
if (str.indexOf('%l') !== -1) {
para.paralink = link;
}
return para;
}
},
registerFunction: function (callback) {
if (callback && typeof callback === 'function') {
this.regFunction.push(callback);
}
},
transLang: function () {
var currReg = this.regArray;
var currRegLen = currReg.length;
var i = 0;
for (i = 0; i < currRegLen; i++) {
var item = currReg[i];
if (publicLang[item.resId].indexOf('%d') >= 0) {
$('#' + item['htmlId']).html(publicLang[item.resId].replace('%d', xss(item.para)));
} else if (publicLang[item.resId].indexOf('%s') >= 0) {
$('#' + item['htmlId']).html(publicLang[item.resId].replace('%s', xss(item.para)));
}
}
currReg = this.regFunction;
currRegLen = currReg.length;
for (i = 0; i < currRegLen; i++) {
var functionItem = currReg[i];
if (functionItem && typeof functionItem === 'function') {
functionItem();
}
}
},
transLangEx: function () {
var currReg = this.regArrayEx;
var currRegLen = currReg.length;
for (var i = 0; i < currRegLen; i++) {
var item = currReg[i];
var result = publicLang[item.resId];
for (var j = 0; j < item.para.length; j++) {
var temppara = item.para[j];
if (temppara.parastr.indexOf('$') > -1) {
var re = temppara.parastr;
} else {
var re = new RegExp(temppara.parastr, 'g');
}
var paraValueStr = '';
if (publicLang[xss(temppara.paravalue)]) {
paraValueStr = publicLang[xss(temppara.paravalue)];
} else {
paraValueStr = xss(temppara.paravalue);
}
if (temppara.parastr.indexOf('%l') === -1) {
result = result.replace(re, paraValueStr);
} else {
var templateData = {
ParavalueId:temppara.paravalue
}
var linkhtml = '<a class="selectmenu" href="' + xss(temppara.paralink) + '" id={{ParavalueId}} rel="noopener noreferrer" target="_self" style="">'
+ paraValueStr
+ '</a>';
if(temppara.strColor) {
var linkhtml = '<a href="' + xss(temppara.paralink) + '" id={{ParavalueId}} rel="noopener noreferrer" target="_blank" style="color:'+ temppara.strColor +';text-decoration:underline;">'
+ paraValueStr
+ '</a>';
}
result = result.replace(re, linkhtml);
}
}
$('#' + item['htmlId']).secureHtml(result,templateData);
}
},
setLanguage: function (lang) {
var oldLang = LANGUAGE_DATA.current_language.replace('_','-');
var langArray = ['ar-sa','he-il','fa-fa'].join('');
var self = this;
var langObj = {
CurrentLanguage: lang
};
this.postData(langObj, function (data) {
if (data.type === 'error') {
EMUI.TokenObjController.load( function () {
}, false);
self.setLanguage(lang);
}
EMUI.CurrenLangObjController.load();
if (typeof gMenu !== 'undefined') {
if (lang === 'ar-sa' || lang === 'he-il' || lang === 'fa-fa') {
$('#menucontents').css('right',$('.headcontainer').css('margin-left'));
} else {
$('#menucontents').css('left',$('.headcontainer').css('margin-left'));
}
calculateWidth();
}
if ((langArray.indexOf(oldLang) !== -1 && langArray.indexOf(lang) === -1) || (langArray.indexOf(oldLang) === -1 && langArray.indexOf(lang) !== -1)) {
window.location.reload();
}
if(lang === 'de-de' || lang === 'no-no' || lang === 'sk-sk') {
$(".file_input_on").css('font-size','12px');
}
$('#language_select_list').hide();
});
},
adapterCss: function (lang) {
$('link').each( function(index, element) {
var link = $(element).attr('href');
var newLink = '';
if (link.indexOf('ar_') !== -1) {
if (lang !== 'ar_sa' && lang !== 'he_il' && lang !== 'fa_fa') {
newLink = link.replace('../css/ar_', '../css/');
}
} else {
if (lang === 'ar_sa' || lang === 'he_il' || lang === 'fa_fa') {
newLink = link.replace('../css/', '../css/ar_');
}
}
if (newLink) {
$(element).attr('href', newLink);
}
});
EMUI.LanguageController.adapterleftLabelStyle();
},
adapterleftLabelStyle: function(para) {
var tag;
var selectorTag;
if (window.location.href.indexOf('/html/content.html') >= 0) {
tag = '#' + window.location.hash.substr(1) + '_page';
} else {
tag = 'body';
}
selectorTag = tag + ' .control-label:visible';
if (para) {
var otherTag = tag + ' .' + para + ' .control-label-win:visible';
selectorTag = selectorTag + ',' + otherTag;
}
$(selectorTag).each( function(index, element) {
if ($(element).height() > 25) {
$(element).css('margin-top', '0px')
} else {
$(element).css('margin-top', '8px')
}
});
}
});
EMUI.ModelSwitchController = EMUI.ObjController.extend({
objName: 'global/module-switch',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.modules = data.response;
if(GLOBAL.modules.staticdns_enabled && GLOBAL.modules.staticdns_enabled !== '0') {
GLOBAL.modules.dns_enabled = '1';
}
}
}
});
EMUI.VoiperSwitchController = EMUI.ObjController.extend({
objName: 'voice/voiperstatus',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.modules.voiper_enable = data.response.voiper_enable;
}
}
});
EMUI.ModelOnekeySwitchController = EMUI.ObjController.extend({
objName: 'device/device-feature-switch',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.modules.onekeydiag_enabled = data.response.onekeydiag_enabled;
}
}
});
EMUI.clatSwitchController = EMUI.ObjController.extend({
objName: 'lan/switch-ipmode',
getsuccessProc: function(data) {
if (data.type === 'response') {
GLOBAL.ipmode = data.response.ipmode;
}
}
});
EMUI.myAccountController = EMUI.ObjController.extend({
objName: 'device/encryp_imsi_imei',
getsuccessProc: function(data) {
if (data.type === 'response') {
myAccountStatus.encryp_imsi = data.response.encryp_imsi;
myAccountStatus.encryp_imei = data.response.encryp_imei;
}
}
});
EMUI.ModelDialupSwitchController = EMUI.ObjController.extend({
objName: 'dialup/dialup-feature-switch',
voiceprofile_enabled: '',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.modules.tr069profile_enabled = data.response.tr069_profile_display;
GLOBAL.modules.iptvprofile_enabled = data.response.iptv_profile_display;
EMUI.ModelDialupSwitchController.voiceprofile_enabled = data.response.voice_profile_display;
}
}
});
EMUI.ModelFirewallSwitchController = EMUI.ObjController.extend({
objName: 'security/firewall-switch',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.modules.remotehttps_enabled = data.response.firewallhttpsremoteswitch;
}
}
});
EMUI.WifiFeatureSwitch = EMUI.ObjController.extend({
objName: 'wlan/wifi-feature-switch',
getsuccessProc: function (data) {
if (data.type === 'response') {
GLOBAL.wifiFeatureSwitch = data.response;
if (typeof GLOBAL.wifiFeatureSwitch.wifispecialcharenable === 'undefined') {
GLOBAL.wifiFeatureSwitch.wifispecialcharenable = '1';
}
if (typeof GLOBAL.wifiFeatureSwitch.chinesessid_enable === 'undefined') {
GLOBAL.wifiFeatureSwitch.chinesessid_enable = '0';
}
GLOBAL.modules.stawpsenabled = GLOBAL.wifiFeatureSwitch.stawpsenabled;
GLOBAL.modules.guestwifi_enable = data.response.guestwifi_enable;
}
}
});
EMUI.RebootController = EMUI.ObjController.extend({
objName: 'device/control',
isSupportSaveInfo: false,
isRebootReady: function () {
EMUI.HeartBeatObjController.refresh( GLOBAL.INDEX_PAGE_URL );
},
showRebootInfo: function (isShowdynamic) {
$('#submit_light').empty();
var submithtml = '<div class="common_win_top"></div><div align="center" class="margin_bottom_box2 color_Darkgray color_background_white" style="font-size:16px;width:508px;padding-top:28px;min-height:180px;">';
if (typeof isShowdynamic !== 'undefined' && isShowdynamic) {
submithtml += '<div style="padding-top:30px;"><img src="../res/submiting.gif" /></div>'
+ '<div style="padding-top:25px;" lang-id="content.device.reboot">' + publicLang['content.device.reboot'] + '</div>';
} else {
submithtml += '<div style="padding-left:30px; padding-right:30px">'
+ '<div class="restore_warning"></div>'
+ '<div lang-id="content.device.rebootnotice" style="font-size:16px;">' + publicLang['content.device.rebootnotice'] + '</div></div>'
+ '<div style="padding-top:40px;padding-bottom: 8px; min-height:44px"><div class="btn_normal_short pull-left public_reboot_left" onclick="EMUI.RebootController.rebootCancel()">' + publicLang['common_cancel'] + '</div>'
+ '<div class="btn_normal_short pull-left margin_left_12" onclick="EMUI.RebootController.rebootExe()">' + publicLang['content.continue'] + '</div></div>';
}
submithtml += '</div><div class="common_win_bottom"></div>';
$('#submit_light').html(submithtml);
$('#submit_light').show();
$('#submit_fade').show();
var heightest = $(document).height();
setTimeout( function () {
$('#submit_fade').css('height', heightest + 'px');
}, 50);
},
rebootInfo: function () {
var hash = window.location.hash;
var self = this;
if (hash === '#sms') {
EMUI.smsSendAndSaveController.smsJumpSave( function () {
self.showRebootInfo();
});
} else {
this.showRebootInfo();
}
},
rebootCancel: function () {
$('#submit_light').empty();
$('#submit_light').hide();
$('#submit_fade').hide();
},
rebootExe: function () {
var self = this;
self.checkVoiceBusyApi();
var request = {
Control: 1
};
this.showRebootInfo(true);
self.postData(request, function (data) {
if (self.isAjaxReturnOK(data)) {
clearInterval(documentInterval);
documentInterval = null ;
var rebootHash = window.location.hash;
rebootHash = rebootHash.substring( 1, rebootHash.length);
if( window[rebootHash + 'Destruction'] ) {
window[rebootHash + 'Destruction']();
}
EMUI.HeartBeatObjController.stop();
self.isRebootReady();
} else {
}
});
},
checkVoiceBusyState: function() {
var monitoringStatus = {};
getAjaxData('api/monitoring/status', function (ret) {
if (ret.type === 'response') {
monitoringStatus = ret.response;
}
}, {
sync: true
});
if (monitoringStatus && monitoringStatus.voice_busy && monitoringStatus.voice_busy === '1') {
gotoPageWithoutHistory('../html/voicebusy.html');
}
},
checkVoiceBusyApi: function() {
var voiceBusyStatus = {};
if (GLOBAL.voiceBusyNotice && GLOBAL.voiceBusyNotice === '1') {
getAjaxData('api/voice/voicebusy', function (busyRet) {
if (busyRet.type === 'response') {
voiceBusyStatus = busyRet.response;
}
}, {
sync: true
});
if (voiceBusyStatus && voiceBusyStatus === 'Busy') {
gotoPageWithoutHistory('../html/voicebusy.html');
}
}
}
});
EMUI.LoginStateController = EMUI.ObjController.extend({
objName: 'user/state-login',
loginState: '',
userAccount: '',
sameWithWifiPwd: '',
historyLoginEnable: false,
rsapadingtype: '',
getsuccessProc: function (data) {
var responceData = data['response'];
this.loginState = responceData['State'];
GLOBAL.firstlogin = responceData['firstlogin'];
this.historyLoginEnable = responceData['history_login_flag'];
this.userAccount = responceData['Username'];
this.sameWithWifiPwd = responceData['wifipwdsamewithwebpwd'];
if (responceData['guidemodifypwdpageflag'] !== undefined) {
GLOBAL.guideModifyPwd = responceData['guidemodifypwdpageflag'];
}
if (responceData['forceskipguide'] !== undefined) {
GLOBAL.forceSkipGuide = responceData['forceskipguide'];
}
if (responceData.rsapadingtype) {
this.rsapadingtype = responceData['rsapadingtype'];
}
}
});
EMUI.customHistoryLoginController = EMUI.ObjController.extend({
objName: 'user/history-login',
getsuccessProc: function (data) {
var historyInfo = data['response'];
var lastLoginIp = historyInfo['last_login_ipaddr'];
var lastLoginTime = historyInfo['last_login_time'];
var lastLoginState = historyInfo['last_login_state'];
sessionStorage.setItem('lastLoginIp',lastLoginIp);
sessionStorage.setItem('lastLoginTime',lastLoginTime);
sessionStorage.setItem('lastLoginState',lastLoginState);
}
});
EMUI.guideHomePageRedirectController = EMUI.ObjController.extend({
objName: 'redirection/homepage',
getsuccessProc: function (data) {
if (data['type'] === 'response') {
var responseData = data['response'];
if ('1' == responseData.EnableRedirection) {
var homepage_url = null;
if (responseData.Homepage.length > 4 && responseData.Homepage.toLowerCase().substring(0, 4) == 'http') {
homepage_url = responseData.Homepage;
} else {
homepage_url = 'http://' + responseData.Homepage;
}
gotoPageWithoutHistory(homepage_url);
} else {
window.location.href = './content.html#home';
}
} else {
window.location.href = './content.html#home';
}
}
});
EMUI.indexHomePageRedirectController = EMUI.ObjController.extend({
objName: 'redirection/homepage',
getsuccessProc: function (data) {
if (data['type'] === 'response') {
var responseData = data['response'];
if ('1' == responseData.EnableRedirection) {
var homepage_url = null;
if (responseData.Homepage.length > 4 && responseData.Homepage.toLowerCase().substring(0, 4) == 'http') {
homepage_url = responseData.Homepage;
} else {
homepage_url = 'http://' + responseData.Homepage;
}
gotoPageWithoutHistory(homepage_url);
} else {
indexInit();
}
} else {
indexInit();
}
}
});
EMUI.webWebFeatureController = EMUI.ObjController.extend({
objName: 'user/web-feature-switch',
isSuportSimplify: '',
suportPwdSame: '',
rememberPwd: '',
getsuccessProc: function(data) {
var responceData = data['response'];
this.isSuportSimplify = responceData['web_pwd_simplify_enabled'];
this.suportPwdSame = responceData['wifi_web_pwd_same_enabled'];
this.rememberPwd = responceData['rememberpwd_enable'];
GLOBAL.modules.captivePortalGuide = responceData['captive_portal_guide_enable'];
}
});
EMUI.userBehaviorController = EMUI.ObjController.extend({
objName: 'diagnosis/user_behavior',
isSupportSaveInfo: false,
UserExpEnable: '',
submitData: {},
getsuccessProc: function (data) {
var responceData = data['response'];
this.UserExpEnable = responceData['chrlog_upload_enable'];
},
initUserExperienceSwitch: function (switchID, disabledClass, enableClass) {
var self = this;
if (self.UserExpEnable === '1') {
$('#' + switchID).addClass(enableClass).removeClass(disabledClass)
} else {
$('#' + switchID).addClass(disabledClass).removeClass(enableClass)
}
},
initUserExperience: function (id) {
if (GLOBAL.modules.chrlog_enable && GLOBAL.modules.chrlog_enable === '1') {
$('#' + id).show();
} else {
$('#' + id).hide();
}
},
UserExperienceData: function (id) {
var self = this;
var classlist = $('#' + id).attr('class');
if (classlist.indexOf('_on') < 0) {
self.submitData = {
chrlog_upload_enable: '0'
}
} else {
self.submitData = {
chrlog_upload_enable: '1'
}
}
}
});
EMUI.ping = ( function () {
var PING_TIMEOUT = 2000;
var pingIsTimeout;
var pingStartTime;
var pingTimerID;
var pingIMG = new Image();
var pingipAddress = 0;
function startPing(ipAddress, redirecturl) {
pingipAddress = ipAddress;
pingIMG.src = 'http://' + pingipAddress + '/';
pingIMG.onload = pingIMG.onerror = function () {
clearTimeout(pingTimerID);
if (pingIsTimeout) {
return;
}
if ( redirecturl ) {
gotoPageWithoutHistory('http://' + pingipAddress + '/html/' + redirecturl);
} else {
gotoPageWithoutHistory('http://' + pingipAddress + '/html/' + GLOBAL.INDEX_NO_SIMREDIRECT_PAGE_URL);
}
};
ping();
}
function pingTimeout() {
pingIsTimeout = true;
var strEnd = pingIMG.src.lastIndexOf('/');
pingIMG.src = pingIMG.src.substring(0, strEnd);
ping();
}
function ping() {
pingStartTime = +new Date();
pingIMG.src = pingIMG.src + pingStartTime;
pingIsTimeout = false;
pingTimerID = setTimeout(pingTimeout, PING_TIMEOUT);
}
return {
startPing: startPing
};
}());
EMUI.mainDeviceVersionController = EMUI.ObjController.extend({
objName: 'device/information'
});
EMUI.popWinController = EMUI.Object.extend({
content: [],
isautoUpgChecked: false,
closeAll: function () {
var contentLength = this.content.length;
for (var i = 0; i < contentLength; i++) {
this.content[i]['isClose'] = true;
}
$('#emui_content_pop_win').hide();
},
closePopItem: function (moduleName) {
var contentLength = this.content.length;
for (var i = 0; i < contentLength; i++) {
if (this.content[i]['moduleName'] === moduleName) {
this.content[i]['isClose'] = true;
}
}
this.showPop();
showPopWin();
},
addPopItem: function (moduleName, scribInfoId, contentItem) {
if (typeof contentItem === 'undefined' && contentItem === '') {
return;
}
var isNeedShowAgain = false;
var scribInfo = '';
if (typeof scribInfoId !== 'undefined') {
scribInfo = scribInfoId;
}
var isExist = false;
var contentLen = this.content.length;
for (var i = 0; i < contentLen; i++) {
if (this.content[i]['moduleName'] === moduleName) {
if (contentItem !== this.content[i]['contentinfo']) {
this.content[i]['scribInfoId'] = scribInfo;
this.content[i]['contentinfo'] = contentItem;
this.content[i]['isClose'] = false;
isNeedShowAgain = true;
}
isExist = true;
break;
}
}
if (!isExist) {
var conItem = {};
conItem.moduleName = moduleName;
conItem.scribInfoId = scribInfo;
conItem.contentinfo = contentItem;
conItem.isClose = false;
isNeedShowAgain = true;
this.content.push(conItem);
}
if (isNeedShowAgain) {
this.showPop();
showPopWin();
}
},
toggleMessage: function (index) {
var arrowId = 'arrow_content_message_pop_' + index;
var messageId = 'body_content_message_pop_' + index;
for (var i = 0; i < this.content.length; i++) {
var contentItem = this.content[i];
if (contentItem['isClose'] === false && i !== index) {
$('#body_content_message_pop_' + i).hide();
$('#arrow_content_message_pop_' + i).removeClass('menu_arrow_open').addClass('menu_arrow_close');
}
}
if ($('#' + arrowId).hasClass('menu_arrow_close')) {
$('#' + arrowId).removeClass('menu_arrow_close').addClass('menu_arrow_open');
} else {
$('#' + arrowId).removeClass('menu_arrow_open').addClass('menu_arrow_close');
}
$('#' + messageId).toggle();
showPopWin();
},
showPop: function () {
var self = this;
var contentLen = this.content.length;
if (contentLen === 0) {
$('#pop_win_content_area').empty();
$('#emui_content_pop_win').hide();
return;
}
var showContent = [];
var i = 0;
var openIndex = '';
var curHash = window.location.hash.substr(1);
for (i = 0; i < this.content.length; i++) {
var contentItem = this.content[i];
if (contentItem['isClose'] === false && contentItem['moduleName'].indexOf(curHash) < 0) {
showContent.push(contentItem);
}
}
contentLen = showContent.length;
if (contentLen > 1) {
for (i = 0; i < contentLen; i++) {
var arrowId = 'arrow_content_message_pop_' + i;
if ($('#' + arrowId).hasClass('menu_arrow_open')) {
openIndex = i;
break;
}
}
}
$('#pop_win_content_area').empty();
$('#emui_pop_win_title').empty();
if (contentLen === 0) {
$('#pop_win_content_area').empty();
$('#emui_content_pop_win').hide();
return;
} else if (contentLen === 1) {
$('#pop_win_content_area').empty();
$('#emui_pop_win_title').empty();
$('#emui_pop_win_title').attr('lang-id', showContent[0]['scribInfoId']);
langStr('emui_pop_win_title', showContent[0]['scribInfoId']);
$('#pop_win_content_area').html(showContent[0]['contentinfo']);
} else {
var bacicHtml = [];
$('#emui_pop_win_title').attr('lang-id', 'device.new.message');
langStr('emui_pop_win_title', 'device.new.message');
for (i = 0; i < contentLen; i++) {
var classTop = 'border_top message_item_split';
if (i === 0) {
classTop = '';
}
var htmlItem = '<div id="content_message_pop_' + i + '" onclick="EMUI.popWinController.toggleMessage(' + i + ');" class="clearboth list_shared  pointer ' + classTop + '">'
+ '<div class="dev-table-ip ic_header_new pull-left"></div>'
+ '<div class="pull-left public_item_left" lang-id="' + showContent[i]['scribInfoId'] + '">' + publicLang[showContent[i]['scribInfoId']] + '</div>'
+ '<div id="arrow_content_message_pop_' + i + '" class="pull-right menu_arrow_close"></div></div><div class="clearboth"></div>'
+ '<div class="border_top hide" id="body_content_message_pop_' + i + '" style="margin-top:20px;"><div style="margin-top:20px;">' + showContent[i]['contentinfo'] + '</div></div><div class="clearboth"></div>';
bacicHtml.push(htmlItem);
}
bacicHtml = '<div style="margin-bottom:10px;">' + bacicHtml.join('') + '</div>';
$('#pop_win_content_area').html(bacicHtml);
}
$(showContent).each( function(i, value) {
if (value.moduleName === 'upgrade' && GLOBAL.modules.china_region_enable === '1') {
self.autoUpgStatus();
}
});
$('#emui_content_pop_win').show();
if (openIndex !== '') {
this.toggleMessage(openIndex);
}
},
autoUpgStatus: function() {
if (!this.isautoUpgChecked) {
EMUI.indexAutoUpgradeController.load(null, false);
this.isautoUpgChecked = true;
}
if (EMUI.indexAutoUpgradeController.isOpenAutoUpg === 1) {
$('#index_autoUpg').show();
$('#index_autoUpg_check').attr('class', 'check_on');
} else if (EMUI.indexAutoUpgradeController.isOpenAutoUpg === 0) {
$('#index_autoUpg').show();
$('#index_autoUpg_check').attr('class', 'check_off');
} else {
$('#index_autoUpg').hide();
}
}
});
EMUI.CBSNewListController = EMUI.ObjController.extend({
objName: 'sms/get-cbsnewslist',
getsuccessProc: function (data) {
if (data.type === 'response') {
var responceData = data['response'];
var newCBSList = responceData['cbsnewslist'];
if (newCBSList !== null && newCBSList !== '') {
EMUI.popWinController.addPopItem('cbssettings', 'IDS_CBS_NewList', xss(newCBSList));
} else {
EMUI.popWinController.closePopItem('cbssettings');
}
}
}
});
EMUI.indexAutoUpgradeController = EMUI.ObjController.extend({
objName: 'online-update/autoupdate-config',
isSupportSaveInfo: false,
isOpenAutoUpg: '',
getsuccessProc: function(data) {
if (data['type'] === 'response' && data['response']['auto_update'] === '1') {
$('#index_autoUpg').hide();
} else {
if($('#index_autoUpg').attr('class').indexOf('tagName_tr') > -1) {
$('#index_autoUpg').css('display','');
} else {
$('#index_autoUpg').css('display', 'block');
}
if(device_differentiation && device_differentiation == '0') {
EMUI.indexAutoUpgradeController.isOpenAutoUpg = 1;
} else {
var className = $('#index_autoUpg_check').attr('class');
if (className.substring(className.length - 3, className.length) === 'off') {
className = className.replace('off', 'on');
}
$('#index_autoUpg_check').attr('class', className);
EMUI.indexAutoUpgradeController.isOpenAutoUpg = 1;
$('#index_autoUpg_check').live('click', EMUI.indexAutoUpgradeController.autoUpgSwitch);
}
}
},
autoUpgSwitch: function() {
var className = $('#index_autoUpg_check').attr('class');
if (className.substring(className.length - 2, className.length) === 'on') {
className = className.replace('on', 'off');
EMUI.indexAutoUpgradeController.isOpenAutoUpg = 0;
} else {
className = className.replace('off', 'on');
EMUI.indexAutoUpgradeController.isOpenAutoUpg = 1;
}
$('#index_autoUpg_check').attr('class', className);
},
sendAutoUpg: function(fromjump) {
if (EMUI.indexAutoUpgradeController.isOpenAutoUpg === '') {
return;
}
var self = this;
var request = {
auto_update: self.isOpenAutoUpg,
ui_download: 0
};
if(fromjump) {
request.auto_download_trigger = 2;
}
EMUI.TokenObjController.load( function() {
}, false);
self.postData(request, null, false);
}
});
});
function changeLanguage(obj) {
var lang = $(obj).attr('option');
EMUI.LanguageController.setLanguage(lang);
}
function createHiLinkAppDownloadCancel() {
$('.hilinkapp_download_box').hide();
$('#submit_fade').hide();
}
function createHiLinkAppDownload() {
var outwin = $('.hilinkapp_download_box');
outwin.show();
$('#submit_fade').show();
var outwinheight = outwin.height();
outwin.css('margin-top', '-' + outwinheight / 2 + 'px');
var heightest = $(document).height();
$('#submit_fade').css('height', heightest + 'px');
$('#submit_fade').show();
outwin.show();
}
var security_info_cpe = '';
var security_info_e5 = '';
function getLangList() {
getConfigData('global/languagelist.xml', function ($xml) {
var langListRet = xml2object($xml);
if (langListRet.type === 'config') {
LANGUAGE_DATA.supportted_languages = langListRet.config.languages.language;
LANGUAGE_DATA.privacy_policy_list = langListRet.config.privacy_policy_url;
LANGUAGE_DATA.usermanual_language_list = langListRet.config.usermanual_language;
if (GLOBAL.modules.safeinfo_enable === '1' && langListRet.config.safe_question_url) {
LANGUAGE_DATA.safe_question_url_cpe = langListRet.config.safe_question_url.cpe;
LANGUAGE_DATA.safe_question_url_e5 = langListRet.config.safe_question_url.e5;
security_info_cpe = langListRet.config.safe_question_url.cpe;
security_info_e5 = langListRet.config.safe_question_url.e5;
}
}
}, {
sync: true
});
}
function getGlobalConfig(callback) {
getConfigData('global/config.xml', function ($xml) {
var globalConfig = xml2object($xml);
if (globalConfig.type === 'config') {
var lang = LANGUAGE_DATA.current_language.replace('_', '-');
if (globalConfig['config']['titles_langAdapter']) {
if (globalConfig['config']['titles_langAdapter'][lang]) {
gDeviceTitle = globalConfig['config']['titles_langAdapter'][lang];
} else {
gDeviceTitle = globalConfig['config']['titles_langAdapter']['en-us'];
}
} else {
gDeviceTitle = globalConfig['config']['title'];
}
if (globalConfig['config']['voice_busy_notice']) {
GLOBAL.voiceBusyNotice = globalConfig['config']['voice_busy_notice'];
} else {
GLOBAL.voiceBusyNotice = null;
}
if (globalConfig['config']['pinlock'] === '1') {
GLOBAL.modules.pinlock_Enabled = '0';
} else {
GLOBAL.modules.pinlock_Enabled = '1';
}
if (callback) {
callback(globalConfig['config']);
}
GLOBAL.config = globalConfig['config'];
GLOBAL.homedeviceinfo = globalConfig['config']['homedeviceinfo'];
document.title = gDeviceTitle;
if(device_differentiation == '0') {
if ($('.guide_index_title').length > 0) {
$('.guide_index_title').html(publicLang['guide.welcome'].replace('%s', xss(gDeviceTitle)));
}
} else {
if ($('.guide_step_start_title').length > 0) {
$('.guide_step_start_title').html(publicLang['guide.welcome'].replace('%s', xss(gDeviceTitle)));
}
}
initAppQrcode(globalConfig);
}
}, {
sync: true
});
}
function initAppQrcode(globalConfig) {
if(window.location.href.indexOf('guidesmall.html') != -1) {
if(globalConfig['config']['appmanagements']['enabled'] && globalConfig['config']['appmanagements']['enabled'] === '1') {
$('#app_install').attr('href', globalConfig['config']['appmanagements']['hilink']['domestic']);
}
if(globalConfig['config']['smarthomeapp']['enabled'] && globalConfig['config']['smarthomeapp']['enabled'] === '1') {
$('#app_install').attr('href', globalConfig['config']['smarthomeapp']['smartapp']);
}
} else {
if(globalConfig['config']['appmanagements']['enabled'] && globalConfig['config']['appmanagements']['enabled'] === '1') {
$('#qrcodeaddr, #commends_hilinkapp_download, .hilinkapp_download_href').attr('href', globalConfig['config']['appmanagements']['hilink']['domestic']);
$('#qrcodeaddr, .hilinkapp_download_href').find('div').removeClass('smart_qrcode').addClass('hlink_qrcode');
$('.hilinkdown_left').attr('lang-id', 'hilink_download');
$('.hilinkdown_left').text(publicLang['hilink_download']);
$('.hilinkapp_string').attr('lang-id', 'index.qrcode');
$('.hilinkapp_string').text(publicLang['index.qrcode']);
$("[data-smarthome='qrcode']").attr("lang-id", 'index.qrcode');
$("[data-smarthome='qrcode']").text(publicLang['index.qrcode']);
$("[data-smarthome='download']").attr("lang-id", 'hilink_download');
$("[data-smarthome='download']").text(publicLang['hilink_download']);
}
if(globalConfig['config']['smarthomeapp']['enabled'] && globalConfig['config']['smarthomeapp']['enabled'] === '1') {
$('#qrcodeaddr, #commends_hilinkapp_download, .hilinkapp_download_href').attr('href', globalConfig['config']['smarthomeapp']['smartapp']);
$('#qrcodeaddr, .hilinkapp_download_href').find('div').removeClass('hlink_qrcode').addClass('smart_qrcode');
$('.hilinkdown_left').attr('lang-id', 'smarthome_download');
$('.hilinkdown_left').text(publicLang['smarthome_download']);
$('.hilinkapp_string').attr('lang-id', 'index.smarthome');
$('.hilinkapp_string').text(publicLang['index.smarthome']);
$("[data-smarthome='qrcode']").attr("lang-id", 'index.smarthome');
$("[data-smarthome='qrcode']").text(publicLang['index.smarthome']);
$("[data-smarthome='download']").attr("lang-id", 'smarthome_download');
$("[data-smarthome='download']").text(publicLang['smarthome_download']);
}
EMUI.webWebFeatureController.load(null, false);
EMUI.BasicInfoObjController.load(null, false);
if (GLOBAL.modules.captivePortalGuide === '1' && EMUI.BasicInfoObjController.content.response.restore_default_status === '1') {
$('.hilinkapp_download_box .hilinkapp_download_href').removeAttr('href');
$('.hilinkapp_download_box .hilinkapp_btn').hide();
}
}
}
function sdResolveCannotParseChar(xmlStr) {
if (typeof xmlStr !== 'undefined' && xmlStr !== null && xmlStr !== '') {
return xmlStr.replace(/(\&|\')/g, function ($0, $1) {
return {
'&': '&amp;',
"'": '&#39;'
} [$1];
});
}
return '';
}
function hasSpaceOrTabAtHead(str) {
if (str.indexOf(' ') === 0 || str.indexOf('\t') === 0) {
return true;
}
return false;
}
function wifiSsidResolveCannotParseChar(xmlStr) {
if (typeof xmlStr !== 'undefined' && xmlStr !== null && xmlStr !== '') {
return xmlStr.replace(/(\&|\'|\"|\>|\<)/g, function Rep($0, $1) {
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
}
window.xss = function (xmlStr) {
if ($.type(xmlStr) === 'number') {
return xmlStr;
}
if ($.type(xmlStr) !== 'string') {
return '';
}
return xmlStr.replace(/(\&|\'|\"|\>|\<|\/|\(|\))/g, function Rep($0, $1) {
return {
'&': '&amp;',
"'": '&#39;',
'"': '&quot;',
'<': '&lt;',
'>': '&gt;',
'/': '&#x2F;',
'(': '&#40;',
')': '&#41;'
} [$1];
});
};
window.xssDecode = function (xmlStr) {
return xmlStr.replace(/(&lt;|&gt;|&amp;|&#39;|&quot;|&#x2F;|&#40;|&#41;)/g, function ($0, $1) {
return {
'&lt;': '<',
'&gt;': '>',
'&amp;': '&',
'&#39;': "'",
'&quot;': '\"',
'&#x2F;': '/',
'&#40;': '(',
'&#41;': ')'
}[$1];
});
};
function isButtonEnable(buttonId) {
var $button = $('#' + buttonId);
if ($button) {
return !($button.hasClass('btn_disabled'));
}
return false;
}
function resolveXMLEntityReference(str) {
if (typeof str !== 'undefined' && str !== null && str !== '') {
return str.replace(/(\'|\&|\"|\>|\<|\/|\(|\))/g, function Rep($0, $1) {
return {
"'": '&#39;',
'&': '&amp;',
'"': '&quot;',
'<': '&lt;',
'>': '&gt;',
'/': '&#x2F;',
'(': '&#40;',
')': '&#41;'
} [$1];
});
}
return '';
}
function xssResolveHtmlReturnChar(xmlStr) {
if (typeof xmlStr !== 'undefined' && xmlStr !== null && xmlStr !== '') {
return xmlStr.replace(/(\'|\"|\/|\(|\))/g, function Rep($0, $1) {
return {
"'": '&apos;',
'"': '&quot;',
'/': '&#x2F;',
'(': '&#40;',
')': '&#41;'
} [$1];
});
}
return '';
}
function isPlusInteger(value) {
if (/^\d+$/.test(value) && parseInt(value, 10) >= 0) {
return true;
}
return false;
}
function showSelectedValue(selectid, selectval) {
var selectlist = selectid + '_list';
var selectClass = ' .select_medium';
if ($('#' + selectlist).children().hasClass('spanner_medium')) {
selectClass = ' .spanner_medium';
}
var selectitems = $('#' + selectlist + selectClass);
var selectLength = selectitems.length;
var selectparent = $('#' + selectid);
for (var loop = 0; loop < selectLength; loop++) {
var selectitem = $(selectitems[loop]);
var selectvalue = selectitem.attr('option') || selectitem.find('span').attr('option');
var description = selectitem.text() || selectitem.find('span').text();
var selectlangid = selectitem.attr('lang-id') || selectitem.find('span').attr('lang-id') || '';
if (selectval === selectvalue) {
if(selectparent[0].localName !== 'input' && selectparent[0].localName !== 'textarea' ){
selectparent.attr('value', selectval);
}else{
selectparent.val(selecthtml);
}
selectparent.text(description);
selectparent.attr('lang-id', selectlangid);
break;
}
}
}
function getTransation(langId) {
if (typeof publicLang === 'undefined') {
setTimeout(showNationalLang, 100);
return '<span lang-id="' + langId + '"></span>';
}
return '<span lang-id="' + langId + '">' + publicLang[langId] + '</span>';
}
function handleTemplate(template, data) {
var processed = template.replace(/{{.+?}}/g, function (match) {
var cmd = match.substr(2, match.length - 4);
if (cmd.substr(0, 2) === 't ') {
return getTransation(cmd.substr(2));
}
var evalValue = data;
cmd.split('.').forEach( function (key) {
if (!evalValue) {
return;
}
evalValue = evalValue[key];
});
if (typeof evalValue === 'number') {
return evalValue;
}
return xss(evalValue);
});
return processed;
}
$.fn.secureAppend = function (template, data) {
this.append(handleTemplate(template, data));
};
$.fn.securePrepend = function (template, data) {
this.prepend(handleTemplate(template, data));
};
$.fn.secureBefore = function (template, data) {
this.before(handleTemplate(template, data));
};
$.fn.secureAfter = function (template, data) {
this.after(handleTemplate(template, data));
};
$.fn.secureHtml = function (template, data) {
this.html(handleTemplate(template, data));
};
$.fn.die = function(event) {
$(document).off(event,this.selector);
};
$.fn.live = function(event,func) {
$(document).on(event,this.selector,func);
};
$.fn.val = function (data) {
if (data || data === '') {
var objArr = $.makeArray(this);
if (objArr) {
$.each(objArr, function(i) {
if(objArr[i]) {
objArr[i].value = data;
}
});
}
return this;
} else {
if (this.hasClass('select_on_normal') || this.hasClass('select_on_spanner') || this.hasClass('statistic_select_statistics')) {
if (this.attr('type') === 'text' && this.get(0)) {
return this.get(0).value;
}
return this.attr('value');
} else {
if (this.get(0)) {
if (typeof this.get(0).value === 'undefined') {
return this.attr('value');
}
return this.get(0).value;
}
if (this.attr('value')) {
return this.attr('value');
}
}
}
};
function isValidIpAddress(address, flag) {
var addrParts = address.split('.');
if (addrParts.length !== 4) {
return false;
}
for (var i = 0; i < 4; i++) {
if (isNaN(addrParts[i])) {
return false;
}
if (addrParts[i] === '') {
return false;
}
if (addrParts[i].indexOf(' ') !== -1) {
return false;
}
if ((addrParts[i].indexOf('0') === 0) && (addrParts[i].length !== 1)) {
return false;
}
}
if (typeof flag === 'undefined') {
if ((addrParts[0] <= 0 || addrParts[0] === '127' || addrParts[0] > 223) ||
(addrParts[1] < 0 || addrParts[1] > 255) ||
(addrParts[2] < 0 || addrParts[2] > 255) ||
(addrParts[3] <= 0 || addrParts[3] >= 255)) {
return false;
}
} else if ((addrParts[0] <= 0 || addrParts[0] === '127' || addrParts[0] > 223) ||
(addrParts[1] < 0 || addrParts[1] > 255) ||
(addrParts[2] < 0 || addrParts[2] > 255) ||
(addrParts[3] < 0 || addrParts[3] > 255)) {
return false;
}
return true;
}
function spaceToNbsp(str) {
return str.replace(/ /g, '&nbsp;');
}
function nbspToSpace(str) {
return str.replace(/(\&nbsp;)/g, function ($0, $1) {
return {
'&nbsp;': ' '
}[$1];
}
);
}
function utilGetTimeString(timeVal) {
var timeString = '';
var tmpVal;
if (!timeVal) {
return '';
}
var timeInt = parseInt(timeVal, 10);
tmpVal = parseInt(timeInt / (60 * 60 * 24), 10);
if (tmpVal > 0) {
timeString += tmpVal;
var langId = 'public.day';
timeString += '<span lang-id="' + langId + '">' + publicLang[langId] + '</span>';
}
timeInt %= 60 * 60 * 24;
tmpVal = parseInt(timeInt / (60 * 60), 10);
if (tmpVal > 0) {
timeString += tmpVal;
if (tmpVal > 1) {
langId = 'public.hours';
} else {
langId = 'public.hour';
}
timeString += '<span lang-id="' + langId + '">' + publicLang[langId] + '</span>';
}
timeInt %= 60 * 60;
tmpVal = parseInt(timeInt / (60), 10);
if (tmpVal > 0) {
timeString += tmpVal;
if (tmpVal > 1) {
langId = 'public.minutes';
} else {
langId = 'public.minute';
}
timeString += '<span lang-id="' + langId + '">' + publicLang[langId] + '</span>';
}
timeInt %= 60;
tmpVal = parseInt(timeInt, 10);
if (tmpVal > 0) {
timeString += tmpVal;
if (tmpVal > 1) {
langId = 'public.seconds';
} else {
langId = 'public.second';
}
timeString += '<span lang-id="' + langId + '">' + publicLang[langId] + '</span>';
}
return timeString;
}
function resizeWindow() {
var winheight = $(window).height();
if ($('#page_footer').hasClass('footer-location')) {
winheight = $(window).height() - $('#page_footer').height();
}
var docHeight = $('body').height();
if (winheight > docHeight) {
if ($('#page_footer').hasClass('footer-location')) {
return;
}
$('#page_footer').addClass('footer-location');
} else {
$('#page_footer').removeClass('footer-location');
}
}
function getCurrentTime(time) {
var finalTime = '';
var times = parseInt(time, 10);
var day = parseInt((times / 86400), 10);
if (day > 0) {
finalTime = day;
}
times = times - day * 86400;
if (finalTime !== '') {
finalTime += '<span lang-id="public.day">' + publicLang['public.day'] + '</span> ';
}
var hours = parseInt((times / 3600), 10);
if (hours > 9) {
finalTime += hours + ':';
} else if (hours >= 0) {
finalTime += '0' + hours + ':';
}
times = times - hours * 3600;
var minutes = parseInt(times / 60, 10);
if (minutes > 9) {
finalTime += minutes + ':';
} else if (minutes > 0) {
finalTime += '0' + minutes + ':';
} else if (minutes === 0) {
finalTime += '00' + ':';
}
times = times - minutes * 60;
if (times > 9) {
finalTime += times;
} else if (times > 0) {
finalTime += '0' + times;
} else if (times === 0) {
finalTime += '00';
}
return finalTime;
}
var documentInterval = null;
function globalIntervalProc() {
if (documentInterval !== null) {
return;
}
documentInterval = setInterval( function () {
EMUI.globalStatusController.load();
EMUI.headerStautsController.load();
if (GLOBAL.modules.statistic_enabled === '1') {
EMUI.pubMonthStatisticsStartDateController.load();
if (EMUI.pubStatisticFeatureController.isDailyLimitEnable) {
EMUI.pubDailyStatisticsStartDateController.load();
}
}
if (typeof GLOBAL.modules !== 'undefined' && typeof GLOBAL.modules.cbs_enabled !== 'undefined' && GLOBAL.modules.cbs_enabled === '1') {
if (window.location.hash !== '#cbssettings') {
EMUI.CBSNewListController.load();
}
}
}, 6000);
}
function getMyAccountData() {
if (GLOBAL.modules.myaccount === '1') {
EMUI.myAccountController.load(null, false);
var myAccountHref = '';
if (typeof GLOBAL.config.plmn_url !== 'undefined' && GLOBAL.config.plmn_url !== '') {
myAccountHref = GLOBAL.config.plmn_url + 'IMEI=' + myAccountStatus.encryp_imei + '&IMSI=' + myAccountStatus.encryp_imsi;
$('#my_account').show();
$('#my_account').attr('href', myAccountHref);
} else {
$('#my_account').hide();
}
} else {
$('#my_account').hide();
}
}
function stopBubble() {
window.location.href = '#onekey';
event.stopPropagation();
}
function icmpStatusChange(obj) {
var option = $('#'+ obj.id).attr('option');
if (option === '1') {
$('#input_ipfilter_lan_port').val('');
$('#input_ipfilter_wan_port').val('');
$('#input_ipfilter_lan_port').attr('disabled','disabled');
$('#input_ipfilter_wan_port').attr('disabled','disabled');
} else {
$('#input_ipfilter_lan_port').removeAttr('disabled','disabled');
$('#input_ipfilter_wan_port').removeAttr('disabled','disabled');
}
}
$(document).ready( function() {
twoAccountVersionFlag();
secondaryAccountFlag();
EMUI.ModelSwitchController.load( function () {
}, false);
getLangList();
getConfigData('global/config.xml', function ($xml) {
var globalConfig = xml2object($xml);
if (globalConfig.type === 'config') {
GLOBAL.config = globalConfig['config'];
}
}, {
sync: true
});
var winHref = window.location.href;
if (winHref.indexOf('/html/content.html') >= 0) {
EMUI.ModelFirewallSwitchController.load();
EMUI.mainDeviceVersionController.load();
isBridgeModeOpen();
EMUI.headerStautsController.load();
globalIntervalProc();
if (GLOBAL.modules.statistic_enabled === '1') {
EMUI.pubMonthStatisticsStartDateController.load();
EMUI.pubStatisticFeatureController.load(null, false);
if (EMUI.pubStatisticFeatureController.isDailyLimitEnable) {
EMUI.pubDailyStatisticsStartDateController.load();
}
}
if (GLOBAL.modules.hilink_enabled === '1') {
EMUI.intelligenceConObjCtrl.load();
}
}
if (GLOBAL.modules['voip_enabled'] === '1' || GLOBAL.modules['volte_enabled'] === '1') {
EMUI.VoiperSwitchController.load( function () {
}, false);
}
EMUI.ModelOnekeySwitchController.load();
EMUI.WifiFeatureSwitch.load();
EMUI.ModelDialupSwitchController.load(null, false);
getConfigData('dialup/config.xml', function ($xml) {
var config = xml2object($xml).config;
if (EMUI.ModelDialupSwitchController.voiceprofile_enabled === '1' || (config !== 'undefined' && (config.voip_data_switch_display_enable === '1' || config.voip_display_connection_status_enable === '1'))) {
GLOBAL.modules.voiceprofile_enabled = '1';
} else {
GLOBAL.modules.voiceprofile_enabled = '0';
}
}, {
sync: true
});
if (typeof GLOBAL.modules !== 'undefined' && typeof GLOBAL.modules.help_enabled !== 'undefined' && GLOBAL.modules.help_enabled === '1') {
$('#help_href').show();
}
EMUI.CurrenLangObjController.load( function () {
}, false);
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
$('body').css('cursor', 'pointer');
}
getMyAccountData();
setInterval( function() {
resizeWindow();
}, 100);
$('body').click( function (e) {
var theEvent = window.event || arguments.callee.caller.arguments[0];
var target = $(e.target);
var targetID = target.attr('id');
var srcElement = theEvent.srcElement;
if (!srcElement) {
srcElement = theEvent.target;
}
if (target && target.attr('class')) {
var classlist = target.attr('class');
if (classlist.indexOf('select_') < 0 && classlist.indexOf('_dragger') < 0 && classlist.indexOf('mCSB_scrollTools') < 0) {
$('.select_list').hide();
}
} else {
$('.select_list').hide();
}
if (typeof targetID === 'undefined' || targetID.indexOf('language_') < 0) {
$('#language_select_list').hide();
}
if (typeof targetID === 'undefined' || targetID.indexOf('statistics_select_') < 0) {
$('[class^=statistics_select_]').hide();
}
if (targetID) {
if (targetID.indexOf('_list_item_') > 0) {
var selectval = $('#' + targetID).attr('option');
var parentselectid = targetID.substr(0, targetID.indexOf('_list_item_'));
var selecthtml = $('#' + targetID).text();
$('#' + parentselectid + '_list > div').removeClass('select_top_selected select_bottom_selected select_medium_selected');
if ($('#' + targetID).hasClass('spanner_top')) {
$('#' + targetID).addClass('spanner_top_selected');
} else if ($('#' + targetID).hasClass('spanner_medium')) {
$('#' + targetID).addClass('spanner_medium_selected');
} else if ($('#' + targetID).hasClass('spanner_bottom')) {
$('#' + targetID).addClass('spanner_bottom_selected');
} else if ($('#' + targetID).hasClass('select_top')) {
$('#' + targetID).addClass('select_top_selected');
} else if ($('#' + targetID).hasClass('select_medium')) {
$('#' + targetID).addClass('select_medium_selected');
} else if ($('#' + targetID).hasClass('select_bottom')) {
$('#' + targetID).addClass('select_bottom_selected');
}
if($('#' + parentselectid)[0].localName !== 'input' && $('#' + parentselectid)[0].localName !== 'textarea' ){
$('#' + parentselectid).attr('value', selectval);
}else{
$('#' + parentselectid).val(selecthtml);
}
$('#' + parentselectid).attr('lang-id', $('#' + targetID).attr('lang-id'));
$('#' + parentselectid).text(selecthtml);
$('.select_list').hide();
}
}
});
});
$(window).load( function() {
var headerHeight = $(".header div.logo img").height();
$(".header").height(headerHeight);
generateLanguageSelect();
showNationalLang();
});
function showPopWin() {
var pop_top = $('.adv_pop_win_top').height();
var pop_middle = $('.adv_pop_win_middle').height();
var pop_bottom = $('.adv_pop_win_bottom').height();
var pop_height = pop_top + pop_middle + pop_bottom ;
var winh = $(window).height();
var userDevice = navigator.userAgent;
var pop_offset = winh - pop_height;
$('#emui_content_pop_win').css('top',pop_offset);
}
var VALIDATION = {};
VALIDATION.isValidDomainName = function (value) {
var flag = '';
if (!VALIDATION.isValidAscIICharset(value) || !VALIDATION.isValidDomainNameChar(value)) {
flag = false;
} else if ((value.indexOf('.') === -1 && value !== '') || (value.indexOf('.') !== -1 && value.length === 1)) {
flag = false;
} else if (/\.$/.exec(value) || /^\./.exec(value) || /-$/.exec(value) || /^-/.exec(value)) {
flag = false;
} else {
flag = true;
}
return flag;
};
VALIDATION.isValidDomainNameChar = function (val) {
if (val === '') {
return false;
}
for (var j = 0; j < val.length; j++) {
var c = val.charAt(j);
if (c >= 'a' && c <= 'z') {
continue;
} else if (c >= 'A' && c <= 'Z') {
continue;
} else if (c >= '0' && c <= '9') {
continue;
} else if (c === '-' || c === '.') {
continue;
} else {
return false;
}
}
return true;
};
VALIDATION.isVailDomainLen = function (val) {
if (val === '') {
return false;
}
var valArr = val.split('.');
for (var i = 0; i < valArr.length; i++) {
if (valArr[i].length > 63) {
return false;
}
}
return true;
}
VALIDATION.isValidAscIICharset = function (str) {
for (var i = 0; i < str.length; i++) {
if (!(str.charCodeAt(i) >= 33 && str.charCodeAt(i) <= 126)) {
return false;
}
}
return true;
};
VALIDATION.isSameSubnetAddrs = function (ip1, ip2, mask) {
var addrParts1 = ip1.split('.');
var addrParts2 = ip2.split('.');
var maskParts = mask.split('.');
for (var i = 0; i < 4; i++) {
if (((Number(addrParts1[i])) & (Number(maskParts[i]))) !== ((Number(addrParts2[i])) & (Number(maskParts[i])))) {
return false;
}
}
return true;
};
VALIDATION.isValidNetworkSegment = function isValidNetworkSegment(netSeg, mask) {
var addrParts = netSeg.split('.');
var maskParts = mask.split('.');
for (var i = 0; i < 4; i++) {
if (Number(addrParts[i]) !== ((Number(addrParts[i])) & (Number(maskParts[i])))) {
return false;
}
}
return true;
};
VALIDATION.isSameNetSegment = function isSameNetSegment(ipmax, ipmin, maskmax, maskmin) {
var addrPartsmax = ipmax.split('.');
var addrPartsmin = ipmin.split('.');
var maskPartsmax = maskmax.split('.');
var maskPartsmin = maskmin.split('.');
var maskParts = null;
for (var i = 0; i < 4; i++) {
if (Number(maskPartsmax[i]) > Number(maskPartsmin[i])) {
return false;
}
maskParts = Number(maskPartsmax[i]) & Number(maskPartsmin[i]);
if ((Number(addrPartsmax[i]) & maskParts) !== (Number(addrPartsmin[i]) & maskParts)) {
return false;
}
}
return true;
};
VALIDATION.isBroadcastOrNetworkAddress = function (ipAddress, netmask) {
var ip;
var mask;
var netaddr;
var broadaddr;
function inetAton(a) {
var n;
n = a.split(/\./);
if (n.length !== 4) {
return 0;
}
return ((n[0] << 24) | (n[1] << 16) | (n[2] << 8) | n[3]);
}
ip = inetAton(ipAddress);
mask = inetAton(netmask);
netaddr = ip & mask;
broadaddr = netaddr | ~mask;
if (netaddr === ip || ip === broadaddr) {
return false;
}
return true;
};
function portPartsParse(_port) {
var portArr = [];
_port = $.trim(_port);
if (_port.indexOf('-') === -1) {
portArr = [_port, _port];
} else {
_port = _port.split('-');
portArr = [$.trim(_port[0]), $.trim(_port[1])];
}
return portArr;
}
VALIDATION.isValidMacAddress = function (mac) {
var macAddress = $.trim(mac);
macAddress = macAddress.toLowerCase();
var c = 0;
var i = 0;
var j = 0;
if (macAddress === 'ff:ff:ff:ff:ff:ff' || macAddress === '00:00:00:00:00:00') {
return false;
}
var addrParts = macAddress.split(':');
if (addrParts.length !== 6) {
return false;
}
for (i = 0; i < 6; i++) {
if (addrParts[i].length !== 2) {
return false;
}
for (j = 0; j < addrParts[i].length; j++) {
c = addrParts[i].charAt(j);
if ((c >= '0' && c <= '9') || (c >= 'a' && c <= 'f')) {
continue;
} else {
return false;
}
}
}
c = parseInt(addrParts[0].charAt(1), 16);
if (c % 2) {
return false;
}
return true;
};
VALIDATION.isValidIpAddressCommon = function (address) {
var addrParts = address.split('.');
if (addrParts.length !== 4) {
return false;
}
for (var i = 0; i < 4; i++) {
if (isNaN(addrParts[i]) === true) {
return false;
}
if (addrParts[i] === '') {
return false;
}
if (addrParts[i].indexOf(' ') !== -1) {
return false;
}
if ((addrParts[i].indexOf('0') === 0) && (addrParts[i].length !== 1)) {
return false;
}
}
if ((addrParts[0] < 0 || addrParts[0] > 255) || (addrParts[1] < 0 || addrParts[1] > 255) || (addrParts[2] < 0 || addrParts[2] > 255) || (addrParts[3] < 0 || addrParts[3] > 255)) {
return false;
}
return true;
};
VALIDATION.isValidIpAddress = function (address) {
var addrParts = address.split('.');
if (addrParts.length !== 4) {
return false;
}
for (var i = 0; i < 4; i++) {
if (isNaN(addrParts[i])) {
return false;
}
if (addrParts[i] === '') {
return false;
}
if (addrParts[i].indexOf(' ') !== -1) {
return false;
}
if ((addrParts[i].indexOf('0') === 0) && (addrParts[i].length !== 1)) {
return false;
}
}
if ((addrParts[0] <= 0 || addrParts[0] === '127' || addrParts[0] > 223) ||
(addrParts[1] < 0 || addrParts[1] > 255) ||
(addrParts[2] < 0 || addrParts[2] > 255) ||
(addrParts[3] <= 0 || addrParts[3] >= 255)) {
return false;
}
return true;
};
VALIDATION.isValidStaticIpAddress = function (address) {
var addrParts = address.split('.');
if (addrParts.length !== 4) {
return false;
}
for (var i = 0; i < 4; i++) {
if (isNaN(addrParts[i])) {
return false;
}
if (addrParts[i] === '') {
return false;
}
if (addrParts[i].indexOf(' ') !== -1) {
return false;
}
if ((addrParts[i].indexOf('0') === 0) && (addrParts[i].length !== 1)) {
return false;
}
}
if ((addrParts[0] <= 0 || addrParts[0] === '127' || addrParts[0] > 223) ||
(addrParts[1] < 0 || addrParts[1] > 255) ||
(addrParts[2] < 0 || addrParts[2] > 255) ||
(addrParts[3] < 0 || addrParts[3] > 255)) {
return false;
}
return true;
};
VALIDATION.portJoin = function portJoin(startPort, endPort) {
var _port;
var startPt = $.trim(startPort);
var endPt = $.trim(endPort);
if (startPt === '' || endPt === '' || startPt === endPt) {
_port = startPort;
} else {
_port = startPort + '-' + endPort;
}
return _port;
};
VALIDATION.isVaildSpecialPort = function isVaildSpecialPort(port, showTarget) {
var portParts = $.trim(port);
var c = '';
var i = 0;
if (portParts === '') {
showErrorMsg(showTarget, 'firewall_hint_port_empty');
return false;
}
if ((portParts.indexOf('0') === 0) && (portParts.length !== 1)) {
showErrorMsg(showTarget, 'firewall_hint_port_empty');
return false;
}
for (i = 0; i < portParts.length; i++) {
c = portParts.toLowerCase().charAt(i);
if ((c >= '0') && (c <= '9')) {
continue;
} else {
showErrorMsg(showTarget, 'firewall_hint_port_empty');
return false;
}
}
if ((portParts < MACRO_MIN_PORT_RANGE) || (portParts > MACRO_MAX_PORT_RANGE)) {
showErrorMsg(showTarget, 'firewall_hint_port_number_valid_char');
return false;
}
return true;
};
VALIDATION.isVaildPortForIPFilter = function isVaildPortForIPFilter(port, showTarget) {
var portParts = $.trim(port);
if (portParts === '') {
showErrorMsg(showTarget, 'firewall_hint_port_empty');
return false;
}
if (port < MACRO_MIN_PORT_RANGE || port > MACRO_MAX_PORT_RANGE) {
showErrorMsg(showTarget, 'firewall_hint_port_number_valid_char');
return false;
}
var splitPort = portPartsParse(port);
var i = 0;
for (i = 0; i < splitPort.length; i++) {
if (isNaN(splitPort[i])) {
showErrorMsg(showTarget, 'firewall_hint_port_empty');
return false;
}
}
portParts = $.trim(port);
if (portParts.indexOf('-') === -1) {
if (!VALIDATION.isVaildSpecialPort(portParts, showTarget)) {
return false;
}
} else {
portParts = port.split('-');
if (portParts.length === 2) {
for (i = 0; i < 2; i++) {
if (isNaN(portParts[i]) === true) {
showErrorMsg(showTarget, 'firewall_hint_port_empty');
return false;
}
if (portParts[i] === '') {
showErrorMsg(showTarget, 'firewall_hint_port_empty');
return false;
}
if (!VALIDATION.isVaildSpecialPort(portParts[i], showTarget)) {
return false;
}
}
if (parseInt(portParts[0], 10) > parseInt(portParts[1], 10)) {
showErrorMsg(showTarget, 'firewall_hint_start_greater_end_port');
return false;
}
} else {
showErrorMsg(showTarget, 'firewall_hint_port_empty');
return false;
}
}
return true;
};
VALIDATION.checkInputPPPoeChar = function checkInputChar(str) {
var i;
var charI;
var numCharI;
if (str === '') {
return false;
}
for (i = 0; i < str.length; i++) {
charI = str.charAt(i);
numCharI = charI.charCodeAt();
if ((numCharI > MACRO_SUPPORT_CHAR_MAX) || (numCharI < MACRO_SUPPORT_CHAR_MIN)) {
return false;
}
}
return true;
};
VALIDATION.checkTr069InputUserNameChar = function checkInputChar(str) {
var i;
var charI;
var numCharI;
if (str === '') {
return false;
}
for (i = 0; i < str.length; i++) {
charI = str.charAt(i);
numCharI = charI.charCodeAt();
if ((numCharI > MACRO_SUPPORT_CHAR_MAX) || (numCharI < MACRO_SUPPORT_CHAR_MIN)) {
return false;
} else if (MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK === numCharI || MACRO_NOT_SUPPORT_CHAR_39 === numCharI) {
return false;
}
}
return true;
};
VALIDATION.checkInputChar = function checkInputChar(str) {
var i;
var charI;
var numCharI;
if (str === '') {
return false;
}
for (i = 0; i < str.length; i++) {
charI = str.charAt(i);
numCharI = charI.charCodeAt();
if ((numCharI > MACRO_SUPPORT_CHAR_MAX) || (numCharI < MACRO_SUPPORT_CHAR_MIN)) {
return false;
} else if ((MACRO_NOT_SUPPORT_CHAR_COMMA === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_COLON === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_SEMICOLON === numCharI) ||
(MACRO_NOT_SUPPORT_BACKSLASH_MARK === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_38 === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_37 === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_43 === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_39 === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_60 === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_62 === numCharI) ||
(MACRO_NOT_SUPPORT_CHAR_63 === numCharI)) {
return false;
}
}
return true;
};
VALIDATION.checkChar = function checkChar(str, unsupportChar) {
var i;
var charI;
var numCharI;
if (str === '') {
return false;
}
if (!$.isArray(unsupportChar)) {
return false;
}
for (i = 0; i < str.length; i++) {
charI = str.charAt(i);
numCharI = charI.charCodeAt();
if ((numCharI > MACRO_SUPPORT_CHAR_MAX) || (numCharI < MACRO_SUPPORT_CHAR_MIN)) {
return false;
} else {
for (j = 0; j < unsupportChar.length; j++) {
if (unsupportChar[j] === charI) {
return false;
}
}
}
}
return true;
};
VALIDATION.checkApnInputChar = function checkApnInputChar(str) {
var reg = /^[a-zA-Z0-9\-\.]+$/;
var value = reg.test(str);
if (str !== '' && !value || str.indexOf('-.') >= 0 || str.indexOf('.-') >= 0) {
return 'IDS_hint_apn_name_invalidate';
}
reg = /[a-zA-Z0-9]/;
if (!reg.test(str[0]) || !reg.test(str[str.length - 1])) {
return 'IDS_apn_start_end_error';
}
if (str.toUpperCase() === 'IMS') {
return 'IDS_hint_apn_name_invalidate_volte';
}
str = str.toLocaleLowerCase();
if (str.indexOf('rac') === 0 || str.indexOf('lac') === 0 || str.indexOf('sgsn') === 0 || str.indexOf('rnc') === 0
|| ((str.length > 5) && (str.indexOf('.gprs') === (str.length - 5)))) {
return 'IDS_mobileconnection_unable_set_string';
}
return false;
}
VALIDATION.isGlobalIpv6Address = function isGlobalIpv6Address(strAddress) {
var tempAddress = getFullIpv6Address(strAddress);
if ((tempAddress === '')
|| (tempAddress === '0000:0000:0000:0000:0000:0000:0000:0000')
|| (tempAddress === '0000:0000:0000:0000:0000:0000:0000:0001')
|| (tempAddress.substring(0, 2) === 'ff')) {
return false;
}
return true;
};
function getFullIpv6Address(strVAddress) {
var j = 0;
var m = 0;
var asciiStr;
var strLength;
var str;
var startAddress = [];
var endAddress = [];
var finalAddress = '';
var finalAddressArray = [];
var lowerAddress;
lowerAddress = strVAddress.toLowerCase();
var addrParts = lowerAddress.split('::');
if (addrParts.length === 2) {
if (addrParts[0] !== '') {
startAddress = parseIpv6Array(addrParts[0]);
if (startAddress.length === 0) {
return '';
}
}
if (addrParts[1] !== '') {
endAddress = parseIpv6Array(addrParts[1]);
if (endAddress.length === 0) {
return '';
}
for (var i = 0; i < endAddress.length; i++) {
strLength = endAddress[i].toString().length;
str = endAddress[i].toString();
if (strLength > 4) {
return '';
}
for (m = 0; m < strLength; m++) {
asciiStr = str.charCodeAt(m);
if (!((asciiStr >= 48 && asciiStr <= 57) || (asciiStr >= 97 && asciiStr <= 102))) {
return '';
}
}
}
}
if (startAddress.length + endAddress.length >= 8) {
return '';
}
} else if (addrParts.length === 1) {
startAddress = parseIpv6Array(addrParts[0]);
if (startAddress.length !== 8) {
return '';
}
} else {
return '';
}
for (i = 0; i < startAddress.length; i++) {
strLength = startAddress[i].toString().length;
str = startAddress[i].toString();
if (strLength > 4) {
return '';
}
for (m = 0; m < strLength; m++) {
asciiStr = str.charCodeAt(m);
if (!((asciiStr >= 48 && asciiStr <= 57) || (asciiStr >= 97 && asciiStr <= 102))) {
return '';
}
}
finalAddress += startAddress[i];
if (i !== 7) {
finalAddress += ':';
}
}
for (; i < 8 - endAddress.length; i++) {
finalAddress += '0000';
if (i !== 7) {
finalAddress += ':';
}
}
for (; i < 8; i++) {
finalAddress += endAddress[i - (8 - endAddress.length)];
if (i !== 7) {
finalAddress += ':';
}
}
finalAddressArray = finalAddress.split(':');
for (j = 0; j < 8; j++) {
var onePart = finalAddressArray[j];
if (onePart.length !== 4) {
switch (onePart.length) {
case 1:
finalAddressArray[j] = '000' + finalAddressArray[j];
break;
case 2:
finalAddressArray[j] = '00' + finalAddressArray[j];
break;
case 3:
finalAddressArray[j] = '0' + finalAddressArray[j];
break;
default:
break;
}
}
}
return finalAddressArray.join(':');
function parseIpv6Array(strParseAddress) {
return strParseAddress.split(':');
}
}
VALIDATION.isDigital = function isDigital(str) {
return !( str.match(/^[0-9]+$/) === null);
};
VALIDATION.isIPv6 = function isIPv6(strIP) {
var ipv6AddrParts = strIP.split(':');
if (ipv6AddrParts.length <= 1) {
return false;
}
var lastParts = ipv6AddrParts[ipv6AddrParts.length - 1];
if (lastParts.indexOf('/') !== -1) {
var ipv6LastPart = lastParts.split('/');
if (ipv6LastPart.length !== 2) {
return false;
}
if (ipv6LastPart[0] !== '') {
for (var j = 0; j < 2; j++) {
if (isNaN(ipv6LastPart[j]) === true) {
return false;
}
if (ipv6LastPart[j] === '') {
return false;
}
}
if (parseInt(ipv6LastPart[0], 16) > parseInt(ipv6LastPart[1], 16)) {
return false;
}
if (parseInt(ipv6LastPart[1], 10) > 128 || parseInt(ipv6LastPart[1], 10) < 0) {
return false;
}
strIP = '';
for (var i = 0; i < ipv6AddrParts.length - 1; i++) {
strIP += ipv6AddrParts[i] + ':';
}
strIP += '0001';
} else {
if (parseInt(ipv6LastPart[1], 10) > 128 || parseInt(ipv6LastPart[1], 10) < 0) {
return false;
}
if (ipv6LastPart[1] === '') {
return false;
}
if (isNaN(ipv6LastPart[1]) === true) {
return false;
}
strIP = '';
for (i = 0; i < ipv6AddrParts.length - 1; i++) {
strIP += ipv6AddrParts[i] + ':';
}
}
}
var strlen = strIP.length - 2;
if (strlen >= 0 && strIP.lastIndexOf('::') === strlen) {
strIP = strIP + '0000';
}
return strIP.match(/:/g).length <= 7 && (/::/.test(strIP) ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(strIP) : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(strIP));
};
VALIDATION.obverseMask = function (ip, mask) {
var obverseMaskAndIp = '';
var obvMask = '';
var ipAddr = ip.split('.');
var subMask = mask.split('.');
for (var i = 0; i < 4; i++) {
obverseMaskAndIp += (255 - Number(subMask[i])) & Number(ipAddr[i]);
obverseMaskAndIp = obverseMaskAndIp + '.';
obvMask += 255 - (Number(subMask[i]));
obvMask = obvMask + '.';
}
obverseMaskAndIp = obverseMaskAndIp.substring(0, obverseMaskAndIp.length - 1);
obvMask = obvMask.substring(0, obvMask.length - 1);
if (obverseMaskAndIp === '0.0.0.0' || obverseMaskAndIp === obvMask) {
return false;
}
return true;
};
VALIDATION.isValidMask = function (mask) {
var i = 0;
var num = 0;
var zeroBitPos = 0;
var oneBitPos = 0;
var zeroBitExisted = false;
if (mask === '0.0.0.0') {
return false;
}
if (mask === '255.255.255.255' || mask === '255.255.255.254') {
return false;
}
var maskParts = mask.split('.');
if (maskParts.length !== 4) {
return false;
}
for (i = 0; i < 4; i++) {
if (isNaN(maskParts[i]) === true) {
return false;
}
if (maskParts[i] === '') {
return false;
}
if (maskParts[i].indexOf(' ') !== -1) {
return false;
}
if ((maskParts[i].indexOf('0') === 0) && (maskParts[i].length !== 1)) {
return false;
}
num = parseInt(maskParts[i], 10);
if (num < 0 || num > 255) {
return false;
}
if (zeroBitExisted === true && num !== 0) {
return false;
}
zeroBitPos = getLeftMostZeroBitPos(num);
oneBitPos = getRightMostOneBitPos(num);
if (zeroBitPos < oneBitPos) {
return false;
}
if (zeroBitPos < 8) {
zeroBitExisted = true;
}
}
function getLeftMostZeroBitPos(iputnum) {
var j = 0;
var numArr = [128, 64, 32, 16, 8, 4, 2, 1];
for (j = 0; j < numArr.length; j++) {
if ((iputnum & numArr[j]) === 0) {
return j;
}
}
return numArr.length;
}
function getRightMostOneBitPos(iputnum) {
var j = 0;
var numArr = [1, 2, 4, 8, 16, 32, 64, 128];
for (j = 0; j < numArr.length; j++) {
if (((iputnum & numArr[j]) >> j) === 1) {
return (numArr.length - j - 1);
}
}
return -1;
}
return true;
};
function IsDigital(str) {
return !(str.match(/^[0-9]+$/) === null);
}
function check_port(port) {
if (!IsDigital(port)) {
return false;
}
if (port < 1 || port > 65535) {
return false;
}
return true;
}
function is_ValidUrl(url) {
var result = url.match('^[https:\/]*([^\/]*)');
if (result[1]) {
var domain = result[1].match('^([A-Za-z0-9-_]+\.){1,}([A-Za-z]+)$');
try {
return domain[0];
} catch (e) {
}
;
}
return false;
}
function reSetLineHeightForTable(pageName, lineNum, maxLineHeight) {
var someLine = $('.' + pageName + '_item');
if (maxLineHeight > 96) {
someLine.eq(lineNum).children().removeClass('ip_filter_tb');
someLine.eq(lineNum).children().removeClass('ip_filter_tb_max');
someLine.eq(lineNum).children().addClass('special_app_tb_max');
someLine.eq(lineNum).css('height', '240px');
$('.' + pageName + '_onoff_switch').length !== 0 && $('.' + pageName + '_onoff_switch').eq(lineNum).css('margin-top', '108px');
$('.' + pageName + '_btn_edit').length !== 0 && $('.' + pageName + '_btn_edit').eq(lineNum).css('margin-top', '108px');
} else if (maxLineHeight > 50) {
someLine.eq(lineNum).children().removeClass('ip_filter_tb');
someLine.eq(lineNum).children().addClass('ip_filter_tb_max');
someLine.eq(lineNum).css('height', '96px');
$('.' + pageName + '_onoff_switch').length !== 0 && $('.' + pageName + '_onoff_switch').eq(lineNum).css('margin-top', '32px');
$('.' + pageName + '_btn_edit').length !== 0 && $('.' + pageName + '_btn_edit').eq(lineNum).css('margin-top', '32px');
} else {
}
}
function showTipInBridgeMode(disableAreaId) {
var BridgeModeSwitch = EMUI.ObjController.extend({
objName: 'security/bridgemode'
});
var voipPageArr = ['serverbasic', 'sipbasic', 'speeddial', 'voiceprofile', 'advancecodec', 'voiceadvanced'];
var tr069PageArr = ['tr069settings', 'tr069profile', 'tr111settings'];
var videoPageArr = ['video'];
var currentHash = window.location.hash.substring(1);
BridgeModeSwitch.load(null, false);
$('.bridgemode_tip_info').length !== 0 && $('.bridgemode_tip_info').remove();
if (BridgeModeSwitch.content && BridgeModeSwitch.content.response
&& BridgeModeSwitch.content.response.bridgemode === '1') {
GLOBAL.isBridgeModeOpen = true;
if ((($.inArray(currentHash, voipPageArr) > -1) && BridgeModeSwitch.content.response.voiceshareinternet === '0') ||
(($.inArray(currentHash, tr069PageArr) > -1) && BridgeModeSwitch.content.response.cwmpshareinternet === '0') ||
(($.inArray(currentHash, videoPageArr) > -1) && BridgeModeSwitch.content.response.iptvshareinternet === '0')) {
$('#' + disableAreaId).show();
return false;
}
var bridgeModeTip = '<div class="clearboth text-left bridgemode_tip_info" style="margin-top:40px;margin-bottom:-10px">'
+ '<div><em class="ic_upgrade_failed"></em></div>'
+ '<div id="bridgemode_common_tip" class="padding-right-10 ic_upgrade_failed_left"></div>'
+ '</div>';
$('#' + disableAreaId).hide();
$('#' + disableAreaId).secureAfter(bridgeModeTip, null);
EMUI.LanguageController.registerLanguageEx('bridgemode_common_tip', 'IDS_system_bridge_mode_warning', '%l', 'menu.bridgemode', '#bridgemode');
EMUI.LanguageController.transLangEx();
return true;
}
$('#' + disableAreaId).show();
GLOBAL.isBridgeModeOpen = false;
return false;
}
function showTipInClat(pageName) {
if (GLOBAL.modules.lan_ipmodeswitch_enabled === '1') {
EMUI.clatSwitchController.load(null, false);
var clatArr = ['lanipfilter', 'virtualserver', 'specialapplication', 'dmzsettings', 'sipalgsettings', 'upnp', 'pcp', 'bridgemode', 'vpnsettings', 'nat', 'remotehttpsaccess', 'ddns'];
var currentHash = window.location.hash.substring(1);
var clat_notice_lang_id = '';
var clatTip = '' + '<div id = "clat_common_tip" class="bridgemode_tip_info page_scenes_info_text" style="display:table;margin-top:40px;">' + '</div>';
$('.bridgemode_tip_info').length !== 0 && $('.bridgemode_tip_info').remove();
if (GLOBAL.ipmode === '1') {
if ((($.inArray(currentHash, clatArr) > -1) && GLOBAL.ipmode !== '1')) {
$('#' + pageName).show();
return false;
}
if (currentHash === 'firewallswitch' && GLOBAL.config.menu_v2.advanceset.security.lanipfilter === 'lanipfilter') {
$('#' + pageName).show();
$('#' + pageName).secureBefore(clatTip, null);
clat_notice_lang_id = 'iptype_clat_on_related_firwallswitch_page_message';
} else if (currentHash === 'firewallswitch' && GLOBAL.config.menu_v2.advanceset.security.lanipfilter === undefined) {
$('#' + pageName).show();
} else {
$('#' + pageName).hide();
$('#' + pageName).secureAfter(clatTip, null);
clat_notice_lang_id = 'iptype_clat_on_related_page_message';
}
if (currentHash === 'acl') {
$('#' + pageName).show();
$('#' + pageName).secureBefore(clatTip, null);
clat_notice_lang_id = 'iptype_acl_clat_notice_message';
}
EMUI.LanguageController.registerLanguageEx('clat_common_tip', clat_notice_lang_id, '%l', 'menu.iptype', '#iptype');
EMUI.LanguageController.transLangEx();
return true;
}
if (GLOBAL.ipmode === '2') {
if (currentHash === 'vpnsettings' || currentHash === 'staticdns' || currentHash === 'acl') {
$('#' + pageName).show();
$('#' + pageName).secureBefore(clatTip, null);
EMUI.LanguageController.registerLanguageEx('clat_common_tip', 'iptype_double_stack_ipv4_notice_message', '%l', 'menu.iptype', '#iptype');
EMUI.LanguageController.transLangEx();
return true;
}
}
$('#' + pageName).show();
return false;
}
}
function isBridgeModeOpen() {
var BridgeModeOpen = EMUI.ObjController.extend({
objName: 'security/bridgemode'
});
if (GLOBAL.modules.lan_ipmodeswitch_enabled === '1') {
EMUI.clatSwitchController.load(null, false);
}
if (GLOBAL.modules.bridge_enabled === '1' && GLOBAL.ipmode !== '1') {
BridgeModeOpen.load(null, false);
} else {
return false;
}
if (BridgeModeOpen.content && BridgeModeOpen.content.response
&& BridgeModeOpen.content.response.bridgemode === '1') {
GLOBAL.isBridgeModeOpen = true;
return true;
}
GLOBAL.isBridgeModeOpen = false;
return false;
}
function showTipInFirewall(disableId, switchname, errmsg) {
var FirewallSwitch = EMUI.ObjController.extend({
objName: 'security/firewall-switch'
});
FirewallSwitch.load(null, false);
$('.bridgemode_tip_info').length !== 0 && $('.bridgemode_tip_info').remove();
if ( FirewallSwitch.content.response
&& FirewallSwitch.content.response.FirewallMainSwitch === '0') {
var firewallTip = ''
+ '<div id = "firewall_common_tip" class="bridgemode_tip_info page_prompt_info page_scenes_info_text" style="display:table;">'
+ '</div>';
$('#' + disableId).hide();
$('#' + disableId).secureAfter(firewallTip, null);
EMUI.LanguageController.registerLanguageEx('firewall_common_tip', 'IDS_security_message_firewall_disabled', '%l', 'menu.firewallswitch', '#firewallswitch');
EMUI.LanguageController.transLangEx();
return true;
}
if (FirewallSwitch.content.response
&& FirewallSwitch.content.response[ switchname ]
&& FirewallSwitch.content.response[ switchname ] === '0') {
var firewallTip = ''
+ '<div id = "firewall_common_tip" class="bridgemode_tip_info page_prompt_info page_scenes_info_text" style="display:table;">'
+ '</div>';
$('#' + disableId).hide();
$('#' + disableId).secureAfter(firewallTip, null);
EMUI.LanguageController.registerLanguageEx('firewall_common_tip', errmsg, '%l', 'menu.firewallswitch', '#firewallswitch');
EMUI.LanguageController.transLangEx();
return true;
}
$('#' + disableId).show();
return false;
}
function isHexString(str) {
var constNum = {
CHARCODE_A: 65,
CHARCODE_F: 70,
CHARCODE_a: 97,
CHARCODE_f: 102,
CHARCODE_0: 48,
CHARCODE_9: 57
}
for (var i = 0; i < str.length; i++) {
var c = str.charCodeAt(i);
if (!((c >= constNum.CHARCODE_0 && c <= constNum.CHARCODE_9)
|| (c >= constNum.CHARCODE_A && c <= constNum.CHARCODE_F)
|| (c >= constNum.CHARCODE_a && c <= constNum.CHARCODE_f)
)) {
return false;
}
}
return true;
}
function secondaryAccountFlag() {
EMUI.LoginStateController.load( function () {
}, false);
if (EMUI.LoginStateController.content.response && EMUI.LoginStateController.content.response.accounts_number
&& EMUI.LoginStateController.content.response.accounts_number === '2' && EMUI.LoginStateController.content.response.userlevel
&& EMUI.LoginStateController.content.response.userlevel === '1') {
GLOBAL.isSecondaryAccount = true;
} else {
GLOBAL.isSecondaryAccount = false;
}
}
function twoAccountVersionFlag() {
EMUI.LoginStateController.load( function () {
}, false);
if (EMUI.LoginStateController.content.response && EMUI.LoginStateController.content.response.accounts_number
&& EMUI.LoginStateController.content.response.accounts_number === '2') {
GLOBAL.hasTwoAccountFlag = true;
} else {
GLOBAL.hasTwoAccountFlag = false;
}
}
function addSelectItem(id, value) {
if ($('#' + id).length === 0) {
return;
}
var fatherid = id;
if ($('#' + fatherid + '_items').length !== 0) {
fatherid = fatherid + '_items';
}
var index = $('#' + fatherid).children().length + 1;
var itemid = id + '_item_' + index;
var templateData = {
itemid: itemid,
option: value.option,
langid: value.langid,
text: value.text
};
var itemhtml = '<div id={{itemid}} option="{{option}}" class="select_medium" lang-id="{{langid}}" >{{text}}</div>';
$('#' + fatherid).secureAppend(itemhtml, templateData);
}
function clearSelectItme(id) {
if ($('#' + id).hasClass('mCustomScrollbar')) {
$('#' + id).mCustomScrollbar('destroy');
}
$('#' + id).empty();
}
Date.prototype.Format = function (format) {
var o = {
'M+': this.getMonth() + 1,
'd+': this.getDate(),
'H+': this.getHours(),
'm+': this.getMinutes(),
's+': this.getSeconds()
};
var k;
if (/(y+)/.test(format)) {
format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
}
for (k in o) {
if (new RegExp('(' + k + ')').test(format)) {
format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
}
}
return format;
}
function intelligenceOpenStatus() {
EMUI.intelligenceConStaObjCtrl.load( function () {
}, false);
return EMUI.intelligenceConStaObjCtrl.isIntellComplete;
}
function isIntelligenceConnect() {
if (GLOBAL.modules.hilink_enabled === '1' && GLOBAL.modules.isIntellOpen) {
return intelligenceOpenStatus();
} else {
return true;
}
}
function setLanguageListScroll() {
$('#language_select_list_content').mCustomScrollbar({
theme: 'minimal-dark',
scrollButtons: {
enable: true
},
mouseWheel: {
enable: true,
scrollAmount: 32
},
autoHideScrollbar: false,
scrollInertia: 0,
horizontalScroll: false,
callbacks: {
onScroll: function () {
}
}
});
}
function addSelectedBorder(obj) {
var curElement = $(obj);
var curClassArray = curElement.parent().attr('class').split(' ');
var curClass = '';
for (var i=0; i < curClassArray.length; i++) {
if(curClassArray[i].indexOf('input') !== -1 && curClassArray[i].indexOf('_selected') === -1) {
curClass = curClassArray[i];
}
};
if (curClass) {
curElement.parent().removeClass(curClass).addClass(curClass + '_selected');
}
}
function hideSelectedBorder(obj) {
var curElement = $(obj);
var curClassArray = curElement.parent().attr('class').split(' ');
var curClass = '';
for (var i=0; i < curClassArray.length; i++) {
if(curClassArray[i].indexOf('input') !== -1) {
curClass = curClassArray[i];
}
};
if (curClass) {
curElement.parent().removeClass(curClass).addClass(curClass.substr(0, curClass.indexOf('_selected')));
}
}
function checkServerAddress (url) {
var index = '';
rgExp = /^((https|http):\/\/)[a-zA-Z0-9\.\-\[\]\:]+[\:\/]?/;
if(!rgExp.test(url)) {
return false;
}
url = url.replace(/((https|http):\/\/)/,'');
if( /\//.test(url) ) {
index = url.indexOf('/');
var path = url.substring(index + 1);
url = url.substring(0, index);
for (var i = 0; i < path.length; i++) {
if (!(path.charCodeAt(i) >= 32 && path.charCodeAt(i) <= 126)) {
return false;
}
}
}
var sumColon = 0;
for (var i=0;i<url.length;i++) {
if(/\:/.test(url[i])) {
sumColon++;
}
}
if(sumColon>1) {
var ipv6 = url;
index = url.indexOf(']');
if (index !== -1) {
var port = url.substring(index+2);
ipv6 = url.substring(1,index-1);
if( !checkPort(port) ) {
return false;
}
}
if (!checkIpv6(ipv6)) {
return false;
}
} else {
var ipv4Domain = url;
if(sumColon === 1 ) {
index = url.indexOf(':');
var port = url.substring(index+1);
if( !checkPort(port) ) {
return false;
}
ipv4Domain = url.substring(0,index);
}
if(/^[0-9]+[0-9\.]+[0-9]+$/.test(ipv4Domain)) {
if(!checkIpv4(ipv4Domain)) {
return false;
}
} else {
if(!checkDomainName(ipv4Domain)) {
return false;
}
}
}
function checkPort(port) {
if(!(0 < port && port <= 65535) || /^0\d+/.test(port)) {
return false;
}
return true;
}
function checkIpv6(ip) {
return VALIDATION.isIPv6(ip)
}
return true;
}
function checkIpv4(ip) {
if( /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip)) {
return VALIDATION.isValidStaticIpAddress(ip);
}
return false;
}
function checkDomainName( urlDomain ) {
if ( /^[a-zA-Z0-9].*[a-zA-Z0-9]$/.test(urlDomain) ) {
for (var i=0;i<urlDomain.length;i++) {
if (!(/[a-zA-Z0-9\.\/\-]/.test(urlDomain[i]))) {
return false;
}
}
if  ((urlDomain.indexOf('.') === -1 && urlDomain !== '') || (urlDomain.indexOf('..') !== -1)) {
return false;
}
return true;
}
return false;
}
var language_cultures = {};
language_cultures["ar_sa"] = {
numberFormat: '.',
timeFormat: 'dd/MM/yyyy HH:mm:ss'
};
language_cultures["bg_bg"] = {
numberFormat: ',',
timeFormat: 'd.M.yyyy HH:mm:ss'
};
language_cultures["cs_cz"] = language_cultures["fi_fi"] = language_cultures["sl_sl"] = language_cultures["sr_cs"] = {
numberFormat: ',',
timeFormat: 'd.M.yyyy H:mm:ss'
};
language_cultures["da_dk"] = language_cultures["pt_pt"] = {
numberFormat: ',',
timeFormat: 'dd-MM-yyyy HH:mm:ss'
};
language_cultures["de_de"] = language_cultures["mk_mk"] = language_cultures["no_no"] = language_cultures["ro_ro"] = language_cultures["tr_tr"] = {
numberFormat: ',',
timeFormat: 'dd.MM.yyyy HH:mm:ss'
};
language_cultures["el_gr"] = {
numberFormat: ',',
timeFormat: 'd/M/yyyy H:mm:ss'
};
language_cultures["en_us"] = {
numberFormat: '.',
timeFormat: 'M/d/yyyy H:mm:ss'
};
language_cultures["es_ar"] = {
numberFormat: ',',
timeFormat: 'dd/MM/yyyy HH:mm:ss'
};
language_cultures["es_es"] = language_cultures["id_id"] = {
numberFormat: ',',
timeFormat: 'dd/MM/yyyy H:mm:ss'
};
language_cultures["et_ee"] = {
numberFormat: ',',
timeFormat: 'd.MM.yyyy H:mm:ss'
};
language_cultures["fa_fa"] = {
numberFormat: '.',
timeFormat: 'MM/dd/yyyy HH:mm:ss'
};
language_cultures["fr_fr"] = language_cultures["it_it"] = language_cultures["pt_br"] = {
numberFormat: ',',
timeFormat: 'dd/MM/yyyy HH:mm:ss'
};
language_cultures["he_il"] = language_cultures["mt_mt"] = {
numberFormat: '.',
timeFormat: 'dd/MM/yyyy HH:mm:ss'
};
language_cultures["hr_hr"] = {
numberFormat: ',',
timeFormat: 'd.M.yyyy. H:mm:ss'
};
language_cultures["hu_hu"] = language_cultures["lv_lv"] = {
numberFormat: ',',
timeFormat: 'yyyy.MM.dd. H:mm:ss'
};
language_cultures["ja_jp"] = {
numberFormat: '.',
timeFormat: 'yyyy/MM/dd H:mm:ss'
};
language_cultures["ko_kr"] = {
numberFormat: '.',
timeFormat: 'yyyy-MM-dd H:mm:ss'
};
language_cultures["lt_lt"] = {
numberFormat: ',',
timeFormat: 'yyyy.MM.dd HH:mm:ss'
};
language_cultures["nl_nl"] = {
numberFormat: ',',
timeFormat: 'd-M-yyyy H:mm:ss'
};
language_cultures["pl_pl"] = language_cultures["sv_se"] = {
numberFormat: ',',
timeFormat: 'yyyy-MM-dd HH:mm:ss'
};
language_cultures["ru_ru"] = language_cultures["uk_ua"] = {
numberFormat: ',',
timeFormat: 'dd.MM.yyyy H:mm:ss'
};
language_cultures["sk_sk"] = {
numberFormat: ',',
timeFormat: 'd. M. yyyy H:mm:ss'
};
language_cultures["sq_al"] = {
numberFormat: ',',
timeFormat: 'yyyy-MM-dd H:mm:ss'
};
language_cultures["vi_vn"] = {
numberFormat: ',',
timeFormat: 'dd/MM/yyyy H:mm:ss'
};
language_cultures["zh_cn"] = {
numberFormat: '.',
timeFormat: 'yyyy/M/d H:mm:ss'
};
language_cultures["zh_hk"] = {
numberFormat: '.',
timeFormat: 'd/M/yyyy H:mm:ss'
};
language_cultures["zh_tw"] = {
numberFormat: '.',
timeFormat: 'yyyy/M/d HH:mm:ss'
};
function formatNumberAndTime(value, culture) {
culture = culture.replace(/-/, '_');
if (value instanceof Date) {
value = formatDate(value, culture);
} else if (typeof value === "number") {
value = formatNumber(value, culture);
}
return value;
}
function formatDate(value, culture) {
var ret = [],
format = language_cultures[culture].timeFormat;
var tokenRegExp = /\/|dd|d|MM|M|yyyy|hh|h|HH|H|mm|ss/g;
for (; ;) {
var index = tokenRegExp.lastIndex,
array = tokenRegExp.exec(format);
if (!array) {
break;
}
var preMatch = format.slice(index, array ? array.index : format.length);
ret.push(preMatch);
var current = array[0],
clength = current.length;
switch (current) {
case "d":
case "dd":
var days = value.getDate();
ret.push(
padZeros(days, clength)
);
break;
case "M":
case "MM":
var months = value.getMonth() + 1;
ret.push(
padZeros(months, clength)
);
break;
case "yyyy":
var years = value.getFullYear();
ret.push(
padZeros(years, clength)
);
break;
case "h":
case "hh":
var hours = value.getHours() % 12;
if (hours === 0)
hours = 12;
ret.push(
padZeros(hours, clength)
);
break;
case "H":
case "HH":
ret.push(
padZeros(value.getHours(), clength)
);
break;
case "mm":
ret.push(
padZeros(value.getMinutes(), clength)
);
break;
case "ss":
ret.push(
padZeros(value.getSeconds(), clength)
);
break;
case "/":
ret.push("/");
break;
default:
break;
}
}
return ret.join("");
}
function formatNumber(value, culture) {
var ret = "",
numberString = value + "",
format = language_cultures[culture].numberFormat;
if (format == '.') {
ret = numberString;
} else {
ret = numberString.replace('.', format);
}
return ret;
}
function padZeros(num, c) {
var zeros = ["0", "00", "000"];
var r, s = num + "";
if (c > 1 && s.length < c) {
r = ( zeros[c - 2] + s);
return r.substr(r.length - c, c);
} else {
r = s;
}
return r;
}
function formatFloat(src, pos) {
return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
}
function createSubFolderTree(objId) {
if ($('#' + objId).hasClass('lastExpandable')) {
$('#' + objId).addClass('collapsable');
$('#' + objId).removeClass('expandable');
$('#' + objId).addClass('lastCollapsable');
$('#' + objId).removeClass('lastExpandable');
$('#' + objId).children('div').addClass('collapsable-hitarea');
$('#' + objId).children('div').removeClass('expandable-hitarea');
$('#' + objId).addClass('loaded_sublist');
} else {
$('#' + objId).addClass('collapsable');
$('#' + objId).removeClass('expandable');
$('#' + objId).children('div').addClass('collapsable-hitarea');
$('#' + objId).children('div').removeClass('expandable-hitarea');
$('#' + objId).addClass('loaded_sublist');
}
}
function showSubFolderTree(objId) {
if ($('#' + objId).hasClass('lastExpandable')) {
$('#' + objId).addClass('collapsable');
$('#' + objId).removeClass('expandable');
$('#' + objId).addClass('lastCollapsable');
$('#' + objId).removeClass('lastExpandable');
$('#' + objId).children('div').addClass('collapsable-hitarea');
$('#' + objId).children('div').removeClass('expandable-hitarea');
$('#' + objId).children('ul').css({
'display': 'block'
});
} else {
$('#' + objId).addClass('collapsable');
$('#' + objId).removeClass('expandable');
$('#' + objId).children('div').addClass('collapsable-hitarea');
$('#' + objId).children('div').removeClass('expandable-hitarea');
$('#' + objId).children('ul').css({
'display': 'block'
});
}
}
function hideSubFolderTree(objId) {
if ($('#' + objId).hasClass('lastCollapsable')) {
$('#' + objId).addClass('expandable');
$('#' + objId).removeClass('collapsable');
$('#' + objId).addClass('lastExpandable');
$('#' + objId).removeClass('lastCollapsable');
$('#' + objId).children('div').addClass('expandable-hitarea');
$('#' + objId).children('div').removeClass('collapsable-hitarea');
$('#' + objId).children('ul').css({
'display': 'none'
});
} else {
$('#' + objId).addClass('expandable');
$('#' + objId).removeClass('collapsable');
$('#' + objId).children('div').addClass('expandable-hitarea');
$('#' + objId).children('div').removeClass('collapsable-hitarea');
$('#' + objId).children('ul').css({
'display': 'none'
});
}
}
function setCustomizedScroll(gParentId) {
$('#' + gParentId).mCustomScrollbar({
theme: 'minimal-dark',
scrollButtons: {
enable: true
},
mouseWheel: {
enable: true,
scrollAmount: 70
},
autoHideScrollbar: false,
scrollInertia: 0,
horizontalScroll: false,
callbacks: {
onScroll: function () {
}
}
});
}
var singleComplexRule = {
rules: function(count) {
var self = this;
var setName = self.lang2rule();
var str = self[setName](count);
return str;
},
lang2rule: function() {
var self = this;
var x = '1';
switch (LANGUAGE_DATA.current_language) {
case 'zh_cn':
case 'id_id':
case 'ja_jp':
case 'ko_kr':
case 'vi_vn':
case 'zh_hk':
case 'zh_tw':
x = '1';
break;
case 'bg_bg':
case 'da_dk':
case 'de_de':
case 'el_gr':
case 'en_us':
case 'es_ar':
case 'es_es':
case 'et_ee':
case 'fi_fi':
case 'hu_hu':
case 'it_it':
case 'nl_nl':
case 'no_no':
case 'pt_br':
case 'pt_pt':
case 'sq_al':
case 'sv_se':
case 'tr_tr':
x = '2';
break;
case 'fa_fa':
case 'fr_fr':
x = '2_1';
break;
case 'mk_mk':
x = '2_2';
break;
case 'hr_hr':
case 'sr_cs':
x = '3';
break;
case 'lv_lv':
x = '3_1';
break;
case 'ro_ro':
x = '3_2';
break;
case 'lt_lt':
x = '3_3';
break;
case 'pl_pl':
x = '3_4';
break;
case 'ru_ru':
x = '3_5';
break;
case 'uk_ua':
x = '3_6';
break;
case 'cs_cz':
case 'sk_sk':
x = '4';
break;
case 'he_il':
x = '4_1';
break;
case 'mt_mt':
x = '4_2';
break;
case 'sl_sl':
x = '4_3';
break;
case 'ar_sa':
x = '6';
break;
}
return 'set' + x;
},
set1: function(count) {
return 'other';
},
set2: function(count) {
if (count === 1) {
return 'one';
} else {
return 'other';
}
},
set2_1: function(count) {
if (count === 0 || count === 1) {
return 'one';
} else {
return 'other';
}
},
set2_2: function(count) {
if (count % 10 === 1 && count !== 11) {
return 'one';
} else {
return 'other';
}
},
set3: function(count) {
if (Math.floor(count / 10) === 1) {
return 'other';
} else if (count % 10 === 1) {
return 'one';
} else if (count % 10 >= 2 || count % 10 <= 4) {
return 'few';
} else {
return 'other';
}
},
set3_1: function(count) {
if (count === 0) {
return 'zero';
} else if (count % 10 === 1 && count !== 11) {
return 'one';
} else {
return 'other';
}
},
set3_2: function(count) {
if (count === 1) {
return 'one';
} else if (count === 0 || count % 100 >= 1 || count % 100 <= 19) {
return 'few';
} else {
return 'other';
}
},
set3_3: function(count) {
if (count % 10 === 0 || Math.floor(count / 10) === 1) {
return 'other';
} else if (count % 10 === 1) {
return 'one';
} else {
return 'few';
}
},
set3_4: function(count) {
if (count === 1) {
return 'one';
} else if ((count % 10 >= 2 || count % 10 <= 4) && Math.floor(count / 10) !== 1) {
return 'few';
} else {
return 'many';
}
},
set3_5: function(count) {
if (count % 10 === 1 && count !== 11) {
return 'one';
} else if ((count % 10 >= 2 || count % 10 <= 4) && Math.floor(count / 10) !== 1) {
return 'other';
} else {
return 'many';
}
},
set3_6: function(count) {
if (count % 10 === 1 && Math.floor(count / 10) !== 1) {
return 'one';
} else if ((count % 10 >= 2 || count % 10 <= 4) && Math.floor(count / 10) !== 1) {
return 'few';
} else {
return 'many';
}
},
set4: function(count) {
if (count === 1) {
return 'one';
} else if (count >= 2 || count <= 4) {
return 'few';
} else {
return 'other';
}
},
set4_1: function(count) {
if (count === 1) {
return 'one';
} else if (count === 2) {
return 'two';
} else if (count % 10 === 0 && count !== 0 && count !== 10) {
return 'many';
} else {
return 'other';
}
},
set4_2: function(count) {
if (count === 1) {
return 'one';
} else if (count === 0 || count % 100 >= 2 || count % 100 <= 10) {
return 'few';
} else if (count % 100 >= 11 || count % 100 <= 19) {
return 'many';
} else {
return 'other';
}
},
set4_3: function(count) {
if (count % 100 === 1) {
return 'one';
} else if (count % 100 === 2) {
return 'two';
} else if (count % 100 === 3 || count % 100 === 4) {
return 'few';
} else {
return 'other';
}
},
set6: function(count) {
if (count === 0) {
return 'zero';
} else if (count === 1) {
return 'one';
} else if (count === 2) {
return 'two';
} else if (count % 100 >= 3 || count % 100 <= 10) {
return 'few';
} else if (count % 100 >= 11 || count % 100 <= 99) {
return 'many';
} else {
return 'other';
}
}
}
