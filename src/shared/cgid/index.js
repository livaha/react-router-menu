export const posturl = '/cgi-bin/vista_cgi.cgi'
/**认证URL */
export const authurl = '/cgi-bin/vista_cgi.cgi?action=auth'

export const cgid = {
    /**获取廋AP接口 */
    get_thinap:106,
}
export const cgid_loading = [
    /**登陆页面 login   
    do_vista_login:0, */  false,  
    /**登陆页面 auth 
    do_vista_auth:1,*/false,
    /**获取NTP配置 
    get_ntp_cfg:2, */true,
    

]


export default {}