
export default class Menu{
    static menulist(option){
    return [
    {
        title: window.__('Home'),
        icon:'&#xe612;',
        key: '/home',
        type:'',
    },{
        title: window.__('Network Setting'),
        icon:'&#xe624;',
        key: '/net',
        type:'',
        children:[
            {
                title:  window.__('Base Setting'),
                key: '/wlan/base',
                type:'',
                children:[
                    {
                        title:  window.__('Base Setting'),
                        key: '/wlan/base',
                        type:'',
                    },
                    {
                        title: window.__('Advanced Setting'),
                        key: '/wlan/advanced',
                        type:'',
                    },
                    {
                        title: window.__('Wireless MAC Filter'),
                        key: '/wlan/macauth',
                        type:'',
                    },
                ]
            },
            {
                title: window.__('Advanced Setting'),
                key: '/wlan/advanced',
                type:'',
                children:[
                    {
                        title:  window.__('Base Setting'),
                        key: '/wlan/base',
                        type:'',
                    },
                    {
                        title: window.__('Advanced Setting'),
                        key: '/wlan/advanced',
                        type:'',
                    },
                    {
                        title: window.__('Wireless MAC Filter'),
                        key: '/wlan/macauth',
                        type:'',
                    },
                ]
            },
            {
                title: window.__('Wireless MAC Filter'),
                key: '/wlan/macauth',
                type:'',
            },
        ]
    },
    {
        title: window.__('WLAN Setting'),
        icon:'&#xe60a;',
        key: '/wlan',
        type:'',
        children:[
            {
                title:  window.__('Base Setting'),
                key: '/wlan/base',
                type:'',
            },
            {
                title: window.__('Advanced Setting'),
                key: '/wlan/advanced',
                type:'',
            },
            {
                title: window.__('Wireless MAC Filter'),
                key: '/wlan/macauth',
                type:'',
            },
        ]
    },
    {
        title: window.__('Management'),
        icon:'&#xe61a;',
        key: '/man',
        type:'',
        children:[
            {
                title: window.__('Base Setting'),
                key: '/man/base',
                type:'',
            },
            {
                title: window.__('Advanced Setting'),
                key: '/man/advanced',
                type:'',
            },
            {
                title: window.__('Wireless MAC Filter'),
                key: '/man/macauth',
                type:'',
            },
        ]
    },
    {
        title: window.__('Advanced Setting'),
        icon:'&#xe66d;',
        key: '/adv',
        type:'',
        children: [
            {
                title: window.__('Administrator Setting'),
                key: '/adv/admin',
                type:'',
            },
            {
                title: window.__('Time Setting'),
                key: '/adv/timesetting',
                type:'',
            },
            {
                title: window.__('Firmware update'),
                key: '/adv/upgrade',
                type:'',
            },
            {
                title: window.__('System configuration'),
                key: '/adv/sysconfig',
                type:'',
            },
            {
                title: window.__('System log'),
                key: '/adv/syslog',
                type:'',
            },
            {
                title: window.__('Schedule restart'),
                key: '/adv/schedulReboot',
                type:'',
            },
        ]
    },
    
    ]}
}