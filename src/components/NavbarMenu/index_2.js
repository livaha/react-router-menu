/**
 * Created by 14566 on 2016/10/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Component1 from './component.js';
import './test.css'

let tree2 = [
    {
        title:  ('Home'),
        icon:'&#xe612;',
        key: '/home',
        type:'',
    },{
        title:  ('Network Setting'),
        icon:'&#xe624;',
        key: '/net',
        type:'',
        children:[
            {
                title:   ('Base Setting++'),
                key: '/net/base',
                type:'',
                children:[
                    {
                        title:   ('Base Setting'),
                        key: '/net/base/1',
                        type:'',
                    },
                    {
                        title:  ('Advanced Setting'),
                        key: '/net/base/2',
                        type:'',
                    },
                    {
                        title:  ('Wireless MAC Filter'),
                        key: '/net/base/3',
                        type:'',
                    },
                ]
            },
            {
                title:  ('Advanced Setting++'),
                key: '/net/adv',
                type:'',
                children:[
                    {
                        title:   ('Base Setting'),
                        key: '/net/adv/1',
                        type:'',
                    },
                    {
                        title:  ('Advanced Setting'),
                        key: '/net/adv/2',
                        type:'',
                    },
                    {
                        title:  ('Wireless MAC Filter'),
                        key: '/net/macauths',
                        type:'',
                    },
                ]
            },
            {
                title:  ('Wireless MAC Filter++'),
                key: '/net/adv/3',
                type:'',
            },
        ]
    },
    {
        title:  ('WLAN Setting'),
        icon:'&#xe60a;',
        key: '/net/wlan',
        type:'',
        children:[
            {
                title:   ('Base Setting'),
                key: '/net/wlan/base',
                type:'',
                children:[
                    {
                        title:   ('Base Setting'),
                        key: '/net/wlan/3',
                        type:'',
                    },
                    {
                        title:  ('Advanced Setting'),
                        key: '/net/wlan/asa',
                        type:'',
                    },
                    {
                        title:  ('Wireless MAC Filter'),
                        key: '/net/wlan/ss',
                        type:'',
                    },
                ]
            },
            {
                title:  ('Advanced Setting'),
                key: '/net/wlan/s',
                type:'',
            },
            {
                title:  ('Wireless MAC Filter'),
                key: '/net/wlan/a',
                type:'',
            },
        ]
    },
    {
        title:  ('Management'),
        icon:'&#xe61a;',
        key: '/man',
        type:'',
        children:[
            {
                title:  ('Base Setting'),
                key: '/man/base',
                type:'',
            },
            {
                title:  ('Advanced Setting'),
                key: '/man/advanced',
                type:'',
            },
            {
                title:  ('Wireless MAC Filter'),
                key: '/man/macauth',
                type:'',
            },
        ]
    },
    {
        title: ('Advanced Setting'),
        icon:'&#xe66d;',
        key: '/adv',
        type:'',
        children: [
            {
                title:  ('Administrator Setting'),
                key: '/adv/admin',
                type:'',
            },
            {
                title:  ('Time Setting'),
                key: '/adv/timesetting',
                type:'',
            },
            {
                title:  ('Firmware update'),
                key: '/adv/upgrade',
                type:'',
            },
            {
                title:  ('System configuration'),
                key: '/adv/sysconfig',
                type:'',
            },
            {
                title:  ('System log'),
                key: '/adv/syslog',
                type:'',
            },
            {
                title:  ('Schedule restart'),
                key: '/adv/schedulReboot',
                type:'',
            },
        ]
    },
    
    ]
let tree = {
    title: "American Government System",
    childNodes: [
        {title: "Legislative", childNodes: [
            {title: "Congress", childNodes: [
                {title: "Agencies"}
            ]}
        ]},
        {title: "Executive", childNodes: [
            {title: "President", childNodes: [
                {title: "Cabinet"},
                {title: "Exec Office Of The President"},
                {title: "Vice-president"},
                {title: "Independent Agencies", childNodes: [
                    {title: "Agriculture"},
                    {title: "Commerce"},
                    {title: "Defense"},
                    {title: "Education"},
                    {title: "......"}
                ]}
            ]}
        ]},
        {title: "Judicial", childNodes: [
            {title: "Supreme Court", childNodes: [
                {title: "Lower Courts"}
            ]}
        ]}
    ]
};
export default  class NavbarMenu extends React.Component {
  render(){
    return(
      <Component1 node={tree}/>
    )
  }
}



