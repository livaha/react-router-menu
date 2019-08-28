
var gMenuEnableConfig = {
'bridge_enabled': 'bridgemode',
'lan_ipmodeswitch_enabled': 'iptype',
'aclEnabled': 'acl',
'cbs_enabled': 'cbssettings',
'cradle_enabled': 'ethernet',
'cwmp_enabled': 'tr069',
'ddns_enabled': 'ddns',
'diagnosis_enabled': 'diagnosis',
'fw_macfilter_enabled': 'macfilter',
'pb_enabled': 'phonebook',
'sdcard_enabled': 'sdcard',
'sms_enabled': 'smstool',
'sntp_enabled': 'sntp',
'statistic_enabled': 'statistic',
'vpn_enabled': 'vpnsettings',
'wifioffload_enabled': 'wifinetworks',
'celllock_enabled': 'celllock',
'voip_enabled': 'voip',
'stawpsenabled': 'wifinetworkswps',
'voiceprofile_enabled': 'voiceprofile',
'tr069profile_enabled': 'tr069profile',
'iptvprofile_enabled':'video',
'tr111_enabled': 'tr111settings',
'timerule_enable': 'childrenprotect',
'volte_enabled': 'volte',
'remotehttps_enabled': 'remotehttpsaccess',
'stk_enabled': 'stk',
'ussd_enabled': 'ussd',
'guestwifi_enable': 'guestwifi',
'timeserverdisplay_enabled': 'timesettings',
'pinlock_Enabled': 'pincodemanagement',
'dlna_enabled': 'dlna',
'sambashare_enabled': 'sambasettings',
'onekeydiag_enabled':'onekey',
'dns_enabled':'staticdns',
'dualwan_enable':'dualnetlink'
};
function isIgnorMenu (pagemane) {
if (pagemane === 'sharing' ) {
if ((GLOBAL.modules['dlna_enabled'] === '1'
|| GLOBAL.modules['sambashare_enabled'] === '1')) {
return false;
} else {
return true;
}
} else if (pagemane === 'voip') {
if (GLOBAL.modules['voip_enabled'] === '1') {
if ((GLOBAL.modules['voiper_enable'] === '1') || (typeof GLOBAL.modules['voiper_enable'] === 'undefined')) {
return false;
} else {
return true;
}
} else {
return true;
}
} else if (pagemane === 'volte') {
if (GLOBAL.modules['volte_enabled'] === '1') {
if ((GLOBAL.modules['voiper_enable'] === '1') || (typeof GLOBAL.modules['voiper_enable'] === 'undefined')) {
return false;
} else {
return true;
}
} else {
return true;
}
} else {
for (var key in gMenuEnableConfig) {
if (gMenuEnableConfig[key] === pagemane){
if (typeof GLOBAL.modules[key] !== 'undefined') {
if (GLOBAL.modules[key] === '1') {
return false;
}
return true;
}
return true;
}
}
return false;
}
}
var gMenu = [];
var gOldHomeText = '';
var gOldLanguage = '';
function getname(menu) {
for (var item1 in menu) {
var item = {};
item.menuid = item1;
item.pagename = item1;
var item1Value = menu[item1];
if (typeof item1Value === 'string') {
if (!getHideTwoacountMenu(item)) {
gMenu.push(item);
}
} else {
var submenus = [];
for (var subitem in item1Value) {
if (!isIgnorMenu(subitem)) {
var temp2 = {};
temp2.menuid = subitem;
temp2.pagename = subitem;
var temp2Value = item1Value[subitem];
if (typeof temp2Value === 'string') {
if (!getHideTwoacountMenu(temp2Value)) {
submenus.push(temp2);
}
} else {
var sub3menus = [];
for (var sub2item in temp2Value) {
if (!isIgnorMenu(sub2item)) {
var temp3 = {};
temp3.menuid = sub2item;
temp3.pagename = sub2item;
if (!getHideTwoacountMenu(sub2item)) {
sub3menus.push(temp3);
}
}
}
if (sub3menus.length > 0) {
if (sub3menus.length > 1) {
temp2.submenus = sub3menus;
} else {
temp2.menuid = sub3menus[0].menuid;
temp2.pagename = sub3menus[0].pagename;
}
submenus.push(temp2);
}
}
}
}
if (submenus.length > 0) {
if (submenus.length === 1) {
if (submenus[0].submenus) {
item = submenus[0]
} else {
item.menuid = submenus[0].menuid;
item.pagename = submenus[0].pagename;
}
} else {
item.submenus = submenus;
}
gMenu.push(item);
}
}
}
}
function getHideTwoacountMenu(itemMenu) {
var hideTwoacountPage = [];
var user_hide = {};
var admin_hide = {};
if (typeof GLOBAL.config.user_hide !== 'undefined') {
user_hide = GLOBAL.config.user_hide;
}
if (typeof GLOBAL.config.admin_hide !== 'undefined') {
admin_hide = GLOBAL.config.admin_hide;
}
if (GLOBAL.hasTwoAccountFlag) {
if (GLOBAL.isSecondaryAccount) {
for (var item in user_hide) {
hideTwoacountPage.push(user_hide[item]);
}
} else {
for (var item in admin_hide) {
hideTwoacountPage.push(admin_hide[item]);
}
}
}
for (var i = 0; i < hideTwoacountPage.length; i++) {
if (hideTwoacountPage[i] === itemMenu) {
return true;
}
}
return false;
}
var OldMenu = {
FirstMenu: 'home',
SecondMenu: '',
ThirdMenu: ''
};
var CurrentMenu = {
FirstMenu: 'home',
SecondMenu: '',
ThirdMenu: ''
};
var oldHref = '';
var newHref = window.location.href;
window.setInterval(listenHashChange, 200);
function listenHashChange() {
newHref = window.location.href;
if (gMenu.length === 0 ) {
return;
}
if (oldHref === newHref) {
return;
}
$('.submit_background,.out_win_content,.submit_white_content').hide();
$('#submit_fade').hide();
EMUI.LoginStateController.load();
var oldHash = oldHref.split('#')[1];
if (oldHash && (oldHash === 'sms' || oldHash === 'upgrade')) {
if (typeof window[oldHash + 'Destruction'] === 'function') {
window[oldHash + 'Destruction']();
}
} else {
if (typeof window[oldHash + 'Destruction'] === 'function') {
window[oldHash + 'Destruction']();
}
oldHref = newHref;
getCurrentMenu();
showNewPage(true);
}
}
function rememberOldMenu() {
OldMenu.FirstMenu = CurrentMenu.FirstMenu;
OldMenu.SecondMenu = CurrentMenu.SecondMenu;
OldMenu.ThirdMenu = CurrentMenu.ThirdMenu;
}
function initCurrentMenu(first, second, third) {
rememberOldMenu();
CurrentMenu.FirstMenu = first;
CurrentMenu.SecondMenu = second;
CurrentMenu.ThirdMenu = third;
}
function getCurrentMenu() {
var hash = window.location.hash;
debugInfo(hash);
if (hash.length <= 0) {
window.location.href = GLOBAL.INDEX_NO_SIMREDIRECT_PAGE_URL;
return;
}
var pagename = hash.substr(1);
var find = false;
debugInfo('getCurrentMenu pagename', pagename);
for (var i = 0; i < gMenu.length; i++) {
var topmenuitem = gMenu[i];
if (topmenuitem.pagename === pagename) {
if (typeof topmenuitem.submenus === 'undefined') {
initCurrentMenu(pagename, '', '');
find = true;
break;
} else {
pagename = topmenuitem.submenus[0].pagename;
initCurrentMenu(topmenuitem.pagename, pagename, '');
find = true;
}
} else {
if (typeof topmenuitem.submenus !== 'undefined') {
var Submenus = topmenuitem.submenus;
debugInfo('Submenus', Submenus);
for (var j = 0; j < Submenus.length; j++) {
debugInfo(j, Submenus[j].pagename);
var submenuj = Submenus[j];
if (pagename === submenuj.pagename) {
if (typeof submenuj.submenus === 'undefined') {
initCurrentMenu(topmenuitem.pagename, pagename, '');
find = true;
break;
} else {
debugInfo('submenuj', submenuj);
if (typeof submenuj.submenus !== 'undefined') {
pagename = submenuj.submenus[0].pagename;
initCurrentMenu(topmenuitem.pagename, submenuj.pagename, pagename);
} else {
pagename = submenuj.pagename;
initCurrentMenu(topmenuitem.pagename, pagename, '');
}
find = true;
break;
}
} else if (typeof submenuj.submenus !== 'undefined') {
var thirdmenu = submenuj.submenus;
var thirdmenulength = thirdmenu.length;
for (var k = 0; k < thirdmenulength; k++) {
if (pagename === thirdmenu[k].pagename) {
initCurrentMenu(topmenuitem.pagename, submenuj.pagename, pagename);
find = true;
break;
}
}
}
}
if (find) {
break;
}
}
if (find) {
break;
}
}
}
if (!find) {
window.location.href = GLOBAL.INDEX_NO_SIMREDIRECT_PAGE_URL;
}
}
function disSelectMenuItem(menuitem) {
if (menuitem !== '') {
$('#menu_' + menuitem).addClass('color_Darkgray').removeClass('selectmenu');
$('#menu_top_' + menuitem).addClass('topmenu_normal').removeClass('topmenu_selected');
$('#ic_' + menuitem + '_icon').addClass('ic_' + menuitem).removeClass('ic_' + menuitem + '_selected');
}
}
function selectMenu(menuitem) {
if (menuitem !== '') {
$('#menu_' + menuitem).addClass('selectmenu').removeClass('color_Darkgray');
$('#menu_top_' + menuitem).addClass('topmenu_selected').removeClass('topmenu_normal');
$('#ic_' + menuitem + '_icon').removeClass('ic_' + menuitem).addClass('ic_' + menuitem + '_selected');
}
}
function hideAllPage() {
for (var i = 0; i < gMenu.length; i++) {
var menuitems = gMenu[i];
$('#' + menuitems.pagename + '_page').hide();
disSelectMenuItem(menuitems.pagename);
if (typeof menuitems.submenus !== 'undefined') {
var subitems = menuitems.submenus;
$('#' + subitems.pagename + '_childrens_menu').hide();
for (var j = 0; j < subitems.length; j++) {
if (typeof subitems[j].submenus !== 'undefined') {
$('#' + subitems[j].pagename + '_childrens_menu').hide();
$('#menu_' + subitems[j].pagename + '_arrow').removeClass('menu_arrow_open').addClass('menu_arrow_close');
var thirdmenus = subitems[j].submenus;
for (var k = 0; k < thirdmenus.length; k++) {
$('#' + thirdmenus[k].pagename + '_page').hide();
disSelectMenuItem(thirdmenus[k].pagename);
}
}
$('#' + subitems[j].pagename + '_page').hide();
disSelectMenuItem(subitems[j].pagename);
}
}
if (OldMenu.FirstMenu !== CurrentMenu.FirstMenu) {
$('#' + menuitems.pagename + '_childrens_menu').hide();
}
}
}
function setWidth(isfull) {
if (isfull) {
$('#leftmenuarea').hide();
$('#rightpagearea').css('width', '100%');
} else {
$('#leftmenuarea').show();
$('#rightpagearea').css('width', '690px');
}
}
function beforeRenderPage( model ) {
var page = '#' + model + '_page';
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
$(page + ' .input_normal').addClass('input_normal_iphone');
}
return;
}
function afterRenderPage( model ) {
return;
}
function modelCallback(fn) {
var fun;
try {
fun = eval(fn);
} catch (e) {
debugInfo('modelCallback eval fail');
}
if (typeof fun === 'function') {
fun.call(this);
resetMenuheight();
}
}
function resetMenuheight() {
$('#leftmenuarea').css('height', 'auto');
setTimeout(function () {
var bodyHeight = $(document).height();
var colHeight = bodyHeight - 318;
var hash = window.location.hash;
if (hash === '#onekey') {
$('.bodycontainer').css('height','693px');
} else {
$('.bodycontainer').css('height','auto');
}
$('#leftmenuarea').css('height', colHeight + 'px');
}, 50);
}
if (window.addEventListener) {
window.addEventListener('resize', resetMenuheight, false);
} else {
window.attachEvent('resize', resetMenuheight);
}
function showNewPage(type) {
$(document).css('height', 'auto');
var href = window.location.href;
if (href.indexOf('/html/content.html') < 0) {
window.location.href = '/';
return;
}
if (typeof type === 'undefined') {
return;
}
hideAllPage();
var Firmenu = CurrentMenu.FirstMenu;
var Senmenu = CurrentMenu.SecondMenu;
var Thimenu = CurrentMenu.ThirdMenu;
var callback;
var page;
if (Senmenu === '' && Thimenu === '') {
if ( Firmenu === 'devicemanagement' || Firmenu === 'home') {
$('#rightpagearea').attr('class', 'rightpagearea margin-left-0');
} else {
$('#rightpagearea').attr('class', 'rightpagearea margin-left-165');
}
setWidth(true);
page = $('#' + Firmenu + '_page');
if (page.length > 0) {
callback = Firmenu + 'RenderPage';
modelCallback(callback);
page.show();
EMUI.LanguageController.adapterleftLabelStyle();
} else {
utilLoadPage('../js/' + Firmenu + '.js', function () {
callback = Firmenu + 'GenPage';
modelCallback(callback);
});
}
} else if (Senmenu !== '' && Thimenu === '') {
setWidth(false);
page = $('#' + Senmenu + '_page');
var childmenu = $('#' + Firmenu + '_childrens_menu');
if (childmenu.length <= 0) {
generateSecondMenu(Firmenu);
}
childmenu.show();
$('#rightpagearea').attr('class', 'rightpagearea margin-left-50');
if (page.length > 0) {
callback = Senmenu + 'RenderPage';
modelCallback(callback);
page.show();
EMUI.LanguageController.adapterleftLabelStyle();
} else {
utilLoadPage('../js/' + Senmenu + '.js', function () {
callback = Senmenu + 'GenPage';
modelCallback(callback);
});
}
} else if (Senmenu !== '' && Thimenu !== '') {
setWidth(false);
page = $('#' + Thimenu + '_page');
if ($('#' + Firmenu + '_childrens_menu').length <= 0) {
generateSecondMenu(Firmenu);
}
$('#' + Firmenu + '_childrens_menu').show();
$('#' + Senmenu + '_childrens_menu').show();
var menuArrowId = 'menu_' + Senmenu + '_arrow';
var arrowObj = $('#' + menuArrowId);
arrowObj.addClass('menu_arrow_open').removeClass('menu_arrow_close');
$('#rightpagearea').attr('class', 'rightpagearea margin-left-50');
if (page.length > 0) {
callback = Thimenu + 'RenderPage';
modelCallback(callback);
page.show();
EMUI.LanguageController.adapterleftLabelStyle();
} else {
utilLoadPage('../js/' + Thimenu + '.js', function () {
callback = Thimenu + 'GenPage';
modelCallback(callback);
});
}
} else {
window.location.href = 'index.html';
}
selectMenu(Firmenu);
selectMenu(Senmenu);
selectMenu(Thimenu);
}
function utilLoadPage(scriptName, callback) {
$.getScript(scriptName + '?r=' + Math.random() ).done(function () {
if (callback) {
callback();
}
showNationalLang();
EMUI.LanguageController.adapterleftLabelStyle();
$('.btn_new,.btn_edit').die();
$('.btn_new,.btn_edit').click(function() {
setTimeout(function(){EMUI.LanguageController.adapterleftLabelStyle('out_win_content');},100)
});
}).fail(function (xhr, setting, ex) {
debugInfo('error...', xhr, setting, ex);
});
}
function selectPage(pagename) {
var hashname = pagename;
var find = false;
for (var i = 0; i < gMenu.length; i++) {
var topmenuitem = gMenu[i];
if (topmenuitem.pagename === pagename) {
if (typeof topmenuitem.submenus === 'undefined') {
find = true;
break;
} else {
hashname = topmenuitem.submenus[0].pagename;
find = true;
}
} else {
if (typeof topmenuitem.submenus !== 'undefined') {
var Submenus = topmenuitem.submenus;
for (var j = 0; j < Submenus.length; j++) {
var submenuj = Submenus[j];
if (pagename === submenuj.pagename) {
if (typeof submenuj.submenus === 'undefined') {
find = true;
break;
} else {
if (typeof Submenus[0].submenus !== 'undefined') {
hashname = Submenus[0].submenus[0].pagename;
} else {
hashname = Submenus[0].pagename;
}
find = true;
break;
}
} else if (typeof submenuj.submenus !== 'undefined') {
var thirdmenu = submenuj.submenus;
var thirdmenulength = thirdmenu.length;
for (var k = 0; k < thirdmenulength; k++) {
if (pagename === thirdmenu[k].pagename) {
find = true;
break;
}
}
}
}
if (find) {
break;
}
}
if (find) {
break;
}
}
}
if (!find) {
hashname = 'home';
}
window.location.hash = '#' + hashname;
}
function selectThirdPage(pagename, objId) {
var obj = '#menu_' + objId;
if ($(obj).hasClass('selectmenu')) {
$('#' + objId + '_childrens_menu').hide();
$(obj).addClass('color_Darkgray').removeClass('selectmenu');
$('#menu_' + objId + '_arrow').addClass('menu_arrow_close').removeClass('menu_arrow_open');
} else {
$('#' + objId + '_childrens_menu').show();
$(obj).addClass('selectmenu').removeClass('color_Darkgray');
$('#menu_' + objId + '_arrow').addClass('menu_arrow_open').removeClass('menu_arrow_close');
if ($('#' + objId + '_childrens_menu').find('#menu_' + CurrentMenu.ThirdMenu).length === 0) {
selectPage(pagename);
}
}
}
function generateMenu() {
var menupage = [];
var right1 = '50px';
var left1 = $('.headcontainer').css('margin-left');
for (var i = 0; i < gMenu.length; i++) {
var menuitems = gMenu[i];
var hash = menuitems.pagename;
if (menuitems.submenus) {
var subitems = menuitems.submenus;
hash = subitems[0].pagename;
if (typeof subitems[0].submenus !== 'undefined') {
hash = subitems[0].submenus[0].pagename;
}
}
if (LANGUAGE_DATA.current_language === 'ar_sa' || LANGUAGE_DATA.current_language === 'he_il' || LANGUAGE_DATA.current_language === 'fa_fa') {
if (i === 0) {
right1 = '0px';
} else {
right1 = '50px';
}
} else {
if (i === gMenu.length - 1) {
right1 = '0px';
} else {
right1 = '50px';
}
}
menupage[i] = '<div class="pull-left topmenu" style="width:166px;" id="menu_' + gMenu[i].pagename + '" onClick="selectPage(\'' + hash + '\')">'
+ '<table style="margin-top:21px;margin-right:'+ right1 +'"><tr><td><div id="ic_' + gMenu[i].pagename + '_icon" class="ic_' + gMenu[i].pagename + '">&nbsp;</div></td><td><div id="menu_top_' + gMenu[i].pagename + '" class="topmenu_normal" lang-id="menu.' + gMenu[i].pagename + '"></div></td></tr></table></div>';
}
if (LANGUAGE_DATA.current_language === 'ar_sa' || LANGUAGE_DATA.current_language === 'he_il' || LANGUAGE_DATA.current_language === 'fa_fa') {
var menucontent = '<div style="width:1000px;margin:0 auto;right:' + left1 + ';">' + menupage.join('') + '</div>';
} else {
var menucontent = '<div style="width:1000px;margin:0 auto;left:' + left1 + ';">' + menupage.join('') + '</div>';
}
$(menucontent).appendTo('#topmenucontainer');
calculateWidth();
if (gMenu.length === 6) {
recalculateWidth();
}
}
function recalculateWidth() {
var totalWidth = 0;
var spaceWidth = 0;
$('.topmenu tbody').each(function(i) {
totalWidth += $($('.topmenu tbody')[i]).width();
})
spaceWidth = Math.floor((1000 - 4 * 5 - totalWidth) / 5);
$('.topmenu').css('width', 'auto');
$('.topmenu').children().css('border-spacing', '0px');
$('.topmenu').children().css('border-collapse', 'collapse');
if (LANGUAGE_DATA.current_language === 'ar_sa' || LANGUAGE_DATA.current_language === 'he_il' || LANGUAGE_DATA.current_language === 'fa_fa') {
$('.topmenu').children().css('margin-right',spaceWidth + 'px');
$('.topmenu').eq(0).children().css('margin-right','0px');
} else {
$('.topmenu').children().css('margin-right',spaceWidth + 'px');
$('.topmenu').eq($('.topmenu').length - 1).children().css('margin-right','0px');
}
}
function calculateWidth() {
var totalWidth = 0;
var spaceWidth = 0;
if ($('#menu_top_home').text() === '' || LANGUAGE_DATA.current_language === gOldLanguage) {
setTimeout(calculateWidth,1);
return;
}
gOldLanguage = LANGUAGE_DATA.current_language;
if (gMenu.length === 6) {
$('.topmenu tbody').each(function(i) {
totalWidth += $($('.topmenu tbody')[i]).width();
})
spaceWidth = Math.floor((1000 - 4 * 5 - totalWidth) / 5);
$('.topmenu').css('width', 'auto');
$('.topmenu').children().css('border-spacing', '0px');
$('.topmenu').children().css('border-collapse', 'collapse');
if (LANGUAGE_DATA.current_language === 'ar_sa' || LANGUAGE_DATA.current_language === 'he_il' || LANGUAGE_DATA.current_language === 'fa_fa') {
$('.topmenu').children().css('margin-right',spaceWidth + 'px');
$('.topmenu').eq(0).children().css('margin-right','0px');
} else {
$('.topmenu').children().css('margin-right',spaceWidth + 'px');
$('.topmenu').eq($('.topmenu').length - 1).children().css('margin-right','0px');
}
} else {
$('.topmenu').css('width','auto');
if (LANGUAGE_DATA.current_language === 'ar_sa' || LANGUAGE_DATA.current_language === 'he_il' || LANGUAGE_DATA.current_language === 'fa_fa') {
$('.topmenu').children().css('margin-right','50px');
$('.topmenu').eq(0).children().css('margin-right','0px');
} else {
$('.topmenu').children().css('margin-right','50px');
$('.topmenu').eq($('.topmenu').length - 1).children().css('margin-right','0px');
}
}
}
function generateSecondMenu(pagename) {
var showmenuflag = false;
if ($('#' + pagename + '_childrens_menu').length > 0) {
return;
}
var menucontent = '';
for (var i = 0; i < gMenu.length; i++) {
var topmenuitem = gMenu[i];
if (topmenuitem.pagename === pagename) {
if (typeof topmenuitem.submenus === 'undefined') {
return;
}
var submenus = topmenuitem.submenus;
for (var j = 0; j < submenus.length; j++) {
var hash = submenus[j].pagename;
if (typeof submenus[j].submenus !== 'undefined') {
hash = submenus[j].submenus[0].pagename;
}
if (typeof submenus[j].submenus !== 'undefined') {
$('#rightpagearea').attr('class', 'rightpagearea margin-left-50');
var thirdmenu = submenus[j].submenus;
var thirdmenulength = thirdmenu.length;
menucontent += '<div class="clearboth secondmenu" ' + ' id="menu_' + xss(submenus[j].pagename) + '" onClick="selectThirdPage(\'' + xss(hash) + '\',\'' + xss(submenus[j].pagename) + '\')">'
+ '<div class="pull-left pointer" lang-id="menu.' + xss(submenus[j].pagename) + '"></div>'
+ '<div class="pull-right menu_arrow_close" id="menu_' + xss(submenus[j].pagename) + '_arrow"></div></div>'
+ '<div id="' + xss(submenus[j].pagename) + '_childrens_menu" class="hide">';
for (var k = 0; k < thirdmenulength; k++) {
menucontent += '<div class="clearboth thirdleftmenu" id="menu_' + xss(thirdmenu[k].pagename) + '" onClick="selectPage(\'' + xss(thirdmenu[k].pagename) + '\')"><div class="pointer" lang-id="menu.' + xss(thirdmenu[k].pagename) + '"></div></div>';
}
menucontent += '</div>';
} else {
$('#rightpagearea').attr('class', 'rightpagearea margin-left-0');
menucontent += '<div class="clearboth secondmenu" ' + ' id="menu_' + xss(submenus[j].pagename) + '" onClick="selectPage(\'' + xss(hash) + '\')"><div class="pointer" lang-id="menu.' + xss(submenus[j].pagename) + '"></div></div>';
}
}
showmenuflag = true;
break;
}
}
var menuhtml = '<div id="' + xss(pagename) + '_childrens_menu">' + menucontent + '</div>';
$('#leftmenuarea').prepend(menuhtml);
if (showmenuflag) {
$('#leftmenuarea').show();
$('#rightpagearea').show();
resetMenuheight();
} else {
$('#leftmenuarea').hide();
$('#rightpagearea').hide();
}
}
