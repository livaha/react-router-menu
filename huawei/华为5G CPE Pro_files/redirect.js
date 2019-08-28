
var CONST = {
MACRO_SAVE_PIN_ENABLED: '1',
MACRO_SAVE_PIN_DISABLED: '0',
SIM_PIN_TIMES_DEFAULT: '3',
SIM_SAVE_PIN_SCID: '0',
SIM_SAVE_PIN_DEFAULT: '0',
SIM_PUK_TIMES_DEFAULT: '10',
MACRO_SIM_LOCK_ENABLE: '1',
MACRO_SIM_REMAIN_TIMES: '10',
MACRO_SIM_PLOCK_ENABLE: '0',
MACRO_NETOWRK_SERVICE_AVAILABILITY: '2',
ETHERNET_LAN_MODE: '5',
MACRO_NO_SIM_CARD: '255',
MACRO_CPIN_FAIL: '256',
MACRO_PIN_REQUIRED: '260',
MACRO_PUK_REQUIRED: '261',
CELLLOCK_STATUS_LOCKED: '2',
SIMLOCK_REMAINTIMES: '0'
};
var DISCONNECT_TYPE = {
DIS_ETHACCONT_ERR: '#cradleDisconnected',
DIS_NOCARD: '#nocard',
DIS_SIMLOCK: '#simlock',
DIS_PINLOCK: '#pinlock',
DIS_PUKLOCK: '#puklock',
DIS_PROFILE_ERR: '#profileErr',
DIS_NETWORK_UNVISIBLE: '#networkUnvisiable',
DIS_SINGLE_POOR: '#singlePoor',
DIS_DATASWITCH_DISABLE: '#dataSwtichDisable',
DIS_ROAM_NETWORK: '#roamNetwork',
DIS_ROAMDIAL_DISABLE: '#roamdialdisable',
DIS_ROAM_AUTODIAL_DISABLE: '#roamdialautodisable',
DIS_CELLLOCK: "#celllock",
DIS_MANNAL_DIAL: "#mannalDial",
DIS_STATISTIC_OVER: "#statisticOver",
DIS_NO_SERVER: "#noServer",
DIS_OTHER: '#other',
DIS_ETHDIALUPERRONE: "#ethdialuperrone",
DIS_ETHDIALUPERRTWO: "#ethdialuperrtwo",
DIS_ETHDIALUPERRTHREE: "#ethdialuperrthree",
DIS_ETHDIALUPERRFOUR: "#ethdialuperrfour",
DIS_ETHDIALUPERRFIVE: "#ethdialuperrfive",
DIS_ETHDIALUPERRSIX: "#ethdialuperrsix",
DIS_ETHDIALUPERRSEVEN: "#ethdialuperrseven"
};
var apiPinStatus = {};
var apiSimLockStauts = {};
var apiCradleStatus = {};
var apiCelllockStatus = {};
var apiMonitoringStauts = {};
var apiDualwaninfoStatus = {};
var apiwanpathinfoStatus = {};
function loadData() {
getAjaxData('api/pin/status', statusGetDate, {sync: true});
getAjaxData('api/cradle/status-info', statusInfoGetDate, {sync: true});
getAjaxData('api/pin/simlock', simlockGetDate, {sync: true});
getAjaxData('api/ntwk/celllock', cellockGetDate, {sync: true});
getAjaxData('api/ntwk/dualwaninfo', dualwaninfoGetDate, {sync: true});
getAjaxData('api/staticroute/wanpath', wanpathinfoGetDate, {sync: true});
}
function statusGetDate(ret){
apiPinStatus = ret.response;
}
function statusInfoGetDate(ret) {
apiCradleStatus =  ret.response;
}
function simlockGetDate(ret) {
apiSimLockStauts =  ret.response;
}
function cellockGetDate(ret) {
apiCelllockStatus =  ret.response;
}
function dualwaninfoGetDate(ret) {
apiDualwaninfoStatus =  ret.response;
}
function wanpathinfoGetDate(ret) {
apiwanpathinfoStatus = ret.response;
}
function getEthPage() {
if ( typeof GLOBAL.modules.cradle_enabled !== 'undefined'
&& GLOBAL.modules.cradle_enabled === '1'
&& apiCradleStatus.cradlestatus === '1'
&& GLOBAL.deviceInfo.restore_default_status !== '1'
&& (window.location.href.indexOf('redirectdisconnect.html') === -1 || window.location.hash === DISCONNECT_TYPE.DIS_ETHACCONT_ERR)) {
if ( apiCradleStatus.connectstatus === '905'
|| apiCradleStatus.connectstatus === '906') {
return DISCONNECT_TYPE.DIS_ETHACCONT_ERR;
}
}
return null;
}
function getSimPage() {
if (CONST.MACRO_NO_SIM_CARD === apiPinStatus.SimState) {
return null;
}
if ( GLOBAL.modules.pinlock_Enabled === '1' ) {
if (CONST.MACRO_PIN_REQUIRED === apiPinStatus.SimState) {
return DISCONNECT_TYPE.DIS_PINLOCK;
} else if (CONST.MACRO_PUK_REQUIRED === apiPinStatus.SimState) {
return DISCONNECT_TYPE.DIS_PUKLOCK;
}
}
if (CONST.MACRO_SIM_LOCK_ENABLE === apiSimLockStauts.SimLockEnable) {
return DISCONNECT_TYPE.DIS_SIMLOCK;
}
return null;
}
function getOtherPage() {
var  monitoringStatus = {};
getAjaxData('api/monitoring/status',
function ( ret ) {
monitoringStatus = ret.response;
},
{ sync: true});
if ( GLOBAL.modules.celllock_enabled === '1' ) {
if ( CONST.CELLLOCK_STATUS_LOCKED === apiCelllockStatus.celllockStatus
&& monitoringStatus === '901') {
return DISCONNECT_TYPE.DIS_CELLLOCK;
}
}
if ( monitoringStatus['ConnectionStatus'] === '901') {
return null;
}
if (CONST.MACRO_NO_SIM_CARD === apiPinStatus.SimState) {
return DISCONNECT_TYPE.DIS_NOCARD;
}
if ( typeof GLOBAL.modules['dataswitch_enabled'] !== 'undefined' ) {
var connectstatus = parseInt(monitoringStatus['ConnectionStatus'], 10);
var errCodeParaErr = [2, 3, 5, 8, 20, 21, 23, 27, 28, 29, 30, 31, 32, 33, 65538, 65539, 65567, 65568, 131073, 131074, 131076, 131078];
if ( $.inArray(connectstatus, errCodeParaErr) !== -1 ) {
return DISCONNECT_TYPE.DIS_PROFILE_ERR;
}
var errCodeNetWorkUnvisiable = [7, 11, 14, 37, 131079, 131080, 131081, 131082, 131083, 131084, 131085, 131086, 131087, 131088, 131089 ];
if ( $.inArray(connectstatus, errCodeNetWorkUnvisiable) !== -1 ) {
return DISCONNECT_TYPE.DIS_NETWORK_UNVISIBLE;
}
var errCodeSingalPoor = [905];
if ( $.inArray(connectstatus, errCodeSingalPoor) !== -1 ) {
return DISCONNECT_TYPE.DIS_SINGLE_POOR;
}
var errCodeTrafficExceed = [201];
if ( $.inArray(connectstatus, errCodeTrafficExceed) !== -1 ) {
return DISCONNECT_TYPE.DIS_STATISTIC_OVER;
}
var errCodeRoam = [12, 13];
if ( $.inArray(connectstatus, errCodeRoam) !== -1 ) {
return DISCONNECT_TYPE.DIS_ROAM_NETWORK;
}
var errCodeRoamDialDisable = [113, 114];
if ( $.inArray(connectstatus, errCodeRoamDialDisable) !== -1 ) {
if ( parseInt( monitoringStatus['RoamingStatus'], 10) === 1 ) {
return DISCONNECT_TYPE.DIS_ROAMDIAL_DISABLE;
}
}
}
var connectType;
if (typeof monitoringStatus.CurrentNetworkTypeEx !== 'undefined' && monitoringStatus.CurrentNetworkTypeEx !== '') {
connectType = monitoringStatus.CurrentNetworkTypeEx;
} else {
connectType = monitoringStatus.CurrentNetworkType;
}
if ( connectType === '0'
|| monitoringStatus.CurrentServiceDomain === '0'
|| monitoringStatus.ServiceStatus !== '2' ) {
return DISCONNECT_TYPE.DIS_NO_SERVER;
}
return DISCONNECT_TYPE.DIS_OTHER;
}
function redirectOnCondition(prefix, postfix, savePage, isOrigin) {
loadData();
var post = '';
if ( postfix ) {
post = '?' + postfix;
}
if ( GLOBAL.config.special_redirect === '0' ) {
return false;
}
if ( window.location.search.indexOf('noredirect') !== -1 ) {
return false;
}
var hasSim = (apiPinStatus.SimState !== CONST.MACRO_NO_SIM_CARD) ? true : false;
var hasCradle = (GLOBAL.modules.cradle_enabled === '1' && apiCradleStatus.cradlestatus === '1') ? true : false;
if (isOrigin && typeof GLOBAL.modules.dualwan_enable !== 'undefined' && GLOBAL.modules.dualwan_enable === '1' && hasSim && hasCradle) {
var dualConnectRes = dualConnectResFun();
var isconnectUmts = dualConnectRes.isconnectUmts;
var isconnectEth = dualConnectRes.isconnectEth;
if (!isconnectUmts && !isconnectEth) {
EMUI.LoginStateController.load(null, false);
if (GLOBAL.deviceInfo.restore_default_status === '1') {
gotoPageWithoutHistory('guide.html?noredirect');
} else {
if (EMUI.LoginStateController.loginState !== '0') {
gotoPageWithoutHistory(GLOBAL.INDEX_NO_SIMREDIRECT_PAGE_URL);
} else {
gotoPageWithoutHistory(GLOBAL.HOME_PAGE_URL);
}
}
return true;
}
}
var ethPage = getEthPage();
if (savePage !== 'eth' && ethPage !== null) {
gotoPageWithoutHistory('redirectdisconnect.html' + post + ethPage);
return true;
}
var simPage = getSimPage();
if ( simPage !== null ) {
var needReload = window.location.href.indexOf('redirectdisconnect.html') !== -1;
gotoPageWithoutHistory('redirectdisconnect.html' + post + simPage);
if ( needReload ) {
location.reload();
}
return true;
}
return false;
}
function getOnekeyEthErr(){
var  onekeyethinfo = {};
getAjaxData('api/monitoring/onekey_diag',
function ( ret ) {
onekeyethinfo = ret.response;
},
{ sync: true});
if(onekeyethinfo.ethdialup_err === '1'){
return DISCONNECT_TYPE.DIS_ETHDIALUPERRONE;
}
if(onekeyethinfo.ethdialup_err === '2'){
return DISCONNECT_TYPE.DIS_ETHDIALUPERRTWO;
}
if(onekeyethinfo.ethdialup_err === '3'){
return DISCONNECT_TYPE.DIS_ETHDIALUPERRTHREE;
}
if(onekeyethinfo.ethdialup_err === '4'){
return DISCONNECT_TYPE.DIS_ETHDIALUPERRFOUR;
}
if(onekeyethinfo.ethdialup_err === '5'){
return DISCONNECT_TYPE.DIS_ETHDIALUPERRFIVE;
}
if(onekeyethinfo.ethdialup_err === '6'){
return DISCONNECT_TYPE.DIS_ETHDIALUPERRSIX;
}
if(onekeyethinfo.ethdialup_err === '7'){
return DISCONNECT_TYPE.DIS_ETHDIALUPERRSEVEN;
}
}
function dualConnectResFun() {
var dualConnectRes = {};
var ethaccesstypeEth = [];
var ethaccesstypeUmts = [];
for (var i = 0; i < apiwanpathinfoStatus.wanpaths.wanpath.length; i++) {
if (apiwanpathinfoStatus.wanpaths.wanpath[i].AccessType === 'umts') {
ethaccesstypeUmts.push(apiwanpathinfoStatus.wanpaths.wanpath[i].WanPathStatusV4);
ethaccesstypeUmts.push(apiwanpathinfoStatus.wanpaths.wanpath[i].WanPathStatusV6);
} else {
ethaccesstypeEth.push(apiwanpathinfoStatus.wanpaths.wanpath[i].WanPathStatusV4);
ethaccesstypeEth.push(apiwanpathinfoStatus.wanpaths.wanpath[i].WanPathStatusV6);
}
}
dualConnectRes.isconnectUmts = (ethaccesstypeUmts.indexOf('connected') !== -1) ? true : false;
dualConnectRes.isconnectEth = (ethaccesstypeEth.indexOf('connected') !== -1) ? true : false;
return dualConnectRes
}
function dualConnectResPage(hasSim, hasCradle, dualConnectRes) {
var isconnectUmts = dualConnectRes.isconnectUmts;
var isconnectEth = dualConnectRes.isconnectEth;
if (!hasSim && hasCradle) {
if (!isconnectEth) {
redirectPage = getEthPage();
if (redirectPage !== null) {
return redirectPage;
}
redirectPage = getOnekeyEthErr();
if (redirectPage !== null) {
return redirectPage;
}
}
} else if ((hasSim && !hasCradle && !isconnectUmts) || (!hasSim && !hasCradle)) {
redirectPage = getSimPage();
if (redirectPage !== null) {
return redirectPage;
}
redirectPage = getOtherPage();
if (redirectPage !== null) {
return redirectPage;
}
} else {}
return null;
}
function disconnectRedirect() {
loadData();
var hasSim = (apiPinStatus.SimState !== CONST.MACRO_NO_SIM_CARD) ? true : false;
var hasCradle = (GLOBAL.modules.cradle_enabled === '1' && apiCradleStatus.cradlestatus === '1') ? true : false;
if (typeof GLOBAL.modules.dualwan_enable !== 'undefined' && GLOBAL.modules.dualwan_enable === '1' && (!hasSim || !hasCradle)) {
var dualConnectRes = dualConnectResFun();
var redirectPage = dualConnectResPage(hasSim, hasCradle, dualConnectRes);
if (redirectPage !== null) {
return redirectPage;
}
return null;
} else {
var redirectPage = getEthPage();
if ( redirectPage !== null ) {
return redirectPage;
}
redirectPage = getSimPage();
if ( redirectPage !== null ) {
return redirectPage;
}
redirectPage = getOtherPage();
if ( redirectPage !== null ) {
return redirectPage;
}
}
return null;
}
function checkRedirectHash( hash ) {
for (i in DISCONNECT_TYPE) {
var temphash = DISCONNECT_TYPE[i];
var hashbegin = DISCONNECT_TYPE[i].indexOf('#');
if ( hashbegin !== -1 ) {
temphash = temphash.substr(hashbegin);
}
if ( temphash === hash) {
return true;
}
}
return false;
}
function simRedirect(prefix, postfix){
loadData();
var redirectpage = '';
var url_prefix = "";
var pageName = "#" + postfix + "_page ";
if ("string" == typeof(prefix)) {
url_prefix = prefix;
}
if("string" == typeof(postfix)) {
postfix = "?" + postfix;
} else {
postfix="";
}
$(".pin_unuseable").empty();
if ((CONST.MACRO_NO_SIM_CARD === apiPinStatus.SimState) || (CONST.MACRO_CPIN_FAIL === apiPinStatus.SimState)) {
$(".pin_unuseable").show();
$(".pin_unuseable").secureHtml('<div class="color_descroption_gray" style="width:auto;margin-top:200px;font-size:18px;line-height:120%;"><span lang-id="nocard.describe" >' + publicLang['nocard.describe'] + '</span></div>');
return true;
} else if (CONST.MACRO_PIN_REQUIRED === apiPinStatus.SimState) {
redirectpage = url_prefix + "redirectdisconnect.html" + postfix + DISCONNECT_TYPE.DIS_PINLOCK;
langid = "pin.insertPin";
} else if (CONST.MACRO_PUK_REQUIRED === apiPinStatus.SimState) {
redirectpage = url_prefix + "redirectdisconnect.html" + postfix + DISCONNECT_TYPE.DIS_PUKLOCK;
langid = "pin.insertPuk";
} else if (CONST.MACRO_SIM_LOCK_ENABLE === apiSimLockStauts.SimLockEnable) {
redirectpage = url_prefix + "redirectdisconnect.html" + postfix + DISCONNECT_TYPE.DIS_SIMLOCK;
langid = "simlock.insertSimlock";
} else {
return false;
}
$(pageName + ".pin_unuseable").show();
$(pageName + ".pin_unuseable").secureHtml('<div class="color_descroption_gray" style="width:auto;margin-top:200px;font-size:18px;line-height:120%;"><span id="redirectlink" ></span></div>');
if ( CONST.MACRO_SIM_LOCK_ENABLE === apiSimLockStauts.SimLockEnable && CONST.SIMLOCK_REMAINTIMES === apiSimLockStauts.SimLockRemainTimes ) {
$('#redirectlink').attr('lang-id', 'simlock_foreverLock');
langStr('redirectlink', 'simlock_foreverLock');
} else {
EMUI.LanguageController.registerLanguageEx('redirectlink', 'pin.savePin', '%l', langid, redirectpage);
}
EMUI.LanguageController.transLangEx();
return true;
}
