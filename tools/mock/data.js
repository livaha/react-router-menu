function setcookie(){    
    //window is not defined
    //window.document.cookie='SESSION_ID=1'; 
}
module.exports = function (data) {
    switch(data.cgid){
        /**登陆页面 login */
        case 0:
            if((data.username==='admin')&&(data.password==='admin'))
                return {
                    restcode:2000,
                    errmsg:'success',
                    first_boot:0
                }
            else return{
                restcode:4006,
                errmsg:'unauthorized',
                first_boot:0
            }
        /** 登陆页面 auth */
        case 1:
            return {
                restcode:2000,
                errmsg:'success',
                first_boot:1
            }
        /**获取NTP配置 */
        case 2:
            return {
                "result":	{
                    "tz":"UTC+0",
                    "ntpServerIp": "pool.ntp.org*cn.pool.ntp.org*europe.pool.ntp.org",
                    "ntpClientEnabled":1,
                    "ntpHostFlag":1,
                    "currentTime": "Tue Apr 30 07:02:11 UTC 2019",
                    "languageType":"en",
                    "operationMode":0
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            }
            
        /**获取系统日志配置 */
        case 5:
            return {
                "result":	{
                    "syslogEnabled":	1,
                    "syslog":	"May  5 15:49:44 TOTOLINK user.notice syslog: DDNS update faild.\nMay  5 15:49:55 TOTOLINK user.notice syslog: DDNS update faild.\nMay  "
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }
        /**#### 获取无线扫描列表*/
        case 7:
            return {
                "result":	{
                    "opmode":	2,
                    "rep_status":	0,
                    "ssid_24g": "wifi_5g",
                    "encryption_24g": 0,
                    "key_24g"		: "12345678",
                    "ssid_58g": "wifi_5g",
                    "encryption_58g": 0,
                    "key_58g"		: "12345678"
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            }
        /**获取定时重启配置 */
        case 9:
            return {
                "result":	{
                    "scheEn":	1,
                    "scheWeek":	"0,5,6",
                    "scheHour":	2,
                    "scheMin":	2,
                    "scheSystemTime": 1559516703,
                    "scheCountDown": 3,
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }
            /**#### 获取扫描状态*/
            case 14:
                return {
                    "result":	{
                        "scan_status":	2,
                    },
                    "errmsg":	"success",
                    "restcode":	2000,
                    "locktime":	0
                }
            /**#### 获取扫描结果*/
            case 15:
                return {
                    "result":	{
                        "scan_list":	[{
                                "idx":	0,
                                "bssid":	"F4:28:53:B9:DC:00",
                                "ssid":	"Tony_5G_O",
                                "channel":	"149",
                                "signal":	"-58dBm",
                                "authmode":	"WPAWPA2-PSK",
                                "encryption":	"TKIPAES"
                            }, {
                                "idx":	1,
                                "bssid":	"F4:28:53:A6:ED:F1",
                                "ssid":	"PIX-LINK_5G",
                                "channel":	"36",
                                "signal":	"-70dBm",
                                "authmode":	"NONE",
                                "encryption":	"(null)"
                            }, {
                                "idx":	2,
                                "bssid":	"A8:5A:F3:02:B5:A8",
                                "ssid":	"SiWiFi-b5a8",
                                "channel":	"161",
                                "signal":	"-63dBm",
                                "authmode":	"WPA2-PSK",
                                "encryption":	"AES"
                            }, {
                                "idx":	3,
                                "bssid":	"F4:28:53:B9:DC:04",
                                "ssid":	"Tony_24G_O",
                                "channel":	"10",
                                "signal":	"-100dBm",
                                "authmode":	"WPAWPA2-PSK",
                                "encryption":	"TKIPAES"
                            }, {
                                "idx":	4,
                                "bssid":	"A8:5A:F3:02:B5:A4",
                                "ssid":	"SiWiFi-b5a4-2.4G",
                                "channel":	"1",
                                "signal":	"-73dBm",
                                "authmode":	"WPA2-PSK",
                                "encryption":	"AES"
                            }, {
                                "idx":	5,
                                "bssid":	"F4:02:62:94:46:86",
                                "ssid":	"wifi_288568",
                                "channel":	"1",
                                "signal":	"-81dBm",
                                "authmode":	"NONE",
                                "encryption":	"(null)"
                            }, {
                                "idx":	6,
                                "bssid":	"D8:32:14:55:CE:E8",
                                "ssid":	"532",
                                "channel":	"5",
                                "signal":	"-73dBm",
                                "authmode":	"WPAWPA2-PSK",
                                "encryption":	"AES"
                            }, {
                                "idx":	7,
                                "bssid":	"F4:28:53:A6:ED:F0",
                                "ssid":	"PIX-LINK_2.4G",
                                "channel":	"6",
                                "signal":	"-72dBm",
                                "authmode":	"WPAWPA2-PSK",
                                "encryption":	"TKIPAES"
                            }, {
                                "idx":	8,
                                "bssid":	"14:4D:67:40:27:88",
                                "ssid":	"VICKY_RE_2G",
                                "channel":	"11",
                                "signal":	"-73dBm",
                                "authmode":	"WPAWPA2-PSK",
                                "encryption":	"TKIPAES"
                            }]
                    },
                    "errmsg":	"success",
                    "restcode":	2000,
                    "locktime":	0
                }
        /**获取WAN口配置 */
        case 17:
            return {
                "result":	{
                    "multiwan":	[{
                            "wannum":	1,
                            "proto":	"dhcp",
                            "hostname":	"Vista",
                            "pc_macaddr":	"1a:fd:dd:03:46:36",
                            "def_macaddr":	"aa:ce:cc:03:46:37",
                            "macaddr":	"aa:ce:cc:03:46:38",
                            "dhcp_mtu":	1500,
                            "upbandw":	"100",
                            "downbandw":	"100"
                        }]
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            }
            if(data.proto==='dhcp'){
                return {
                    "result":	{
                        "multiwan":	[{
                            "wannum":	1,
                            "proto":	"dhcp",
                            "hostname":	"Vista",
                            "def_macaddr":	"1A:F5:DD:03:46:36",
                            "macaddr":	"1A:F5:DD:03:46:30",
                            "dhcp_mtu":	1500,
                            "upbandw":	"100",
                            "downbandw":	"100"
                            }]
                    },
                    "errmsg":	"success",
                    "restcode":	2000,
                    "locktime":	0
                }
            }
            else if(data.proto==='static'){
                return {
                    "result":	{
                        "multiwan":	[{

                            "wannum":	2,
                            "proto":	"static",
                            "ipaddr":	"10.6.165.10",
                            "netmask":	"255.255.255.0",
                            "gateway":	"10.6.165.1",
                            "dnspri":	"114.114.114.114",
                            "dnssec":	"8.8.8.8",
                            "def_macaddr":	"1a:f5:dd:03:46:38",
                            "macaddr":	"1a:f5:dd:03:46:38",
                            "static_mtu":	1500,
                            "upbandw":	"100",
                            "downbandw":	"100"
                            }]
                    },
                    "errmsg":	"success",
                    "restcode":	2000,
                    "locktime":	0
                }
            }
            else if(data.proto==='pppoe'){
                return {
                    "result":	{
                        "multiwan":	[{
                            "wannum":	3,
                            "proto":	"pppoe",
                            "username":	"1234",
                            "password":	"1235",
                            "service":	"aaa",
                            "def_macaddr":	"1a:f5:dd:03:46:3a",
                            "macaddr":	"1a:f5:dd:03:46:3a",
                            "ppp_mtu":	1492,
                            "upbandw":	"100",
                            "downbandw":	"100"
                            }]
                    },
                    "errmsg":	"success",
                    "restcode":	2000,
                    "locktime":	0
                }
            }
            break;
            /**获取lan口配置 */
            case 19:
                return {
                    "result":	{
                        "ipaddr":	"192.168.7.1",
                        "netmask":	"255.255.255.0"
                        },
                    "errmsg":	"success",
                    "restcode":	2000,
                    "locktime":	0
                }
            /**获取dhcp服务配置 */
            case 21:
                return{
                    "result":	{
                        "enable":	"1",
                        "minip":	"192.168.7.0",
                        "maxip":	"192.168.7.255",
                        "startip":	"192.168.7.100",
                        "endip":	"192.168.7.249",
                        "leasetime":	7200,
                    },
                    "errmsg":	"success",
                    "restcode":	2000,
                    "locktime":	0
                }                
            /**获取DHCP静态IP配置 */
            case 23:
            return{
                "result":	{
                    "dhcpstatic_list":	[{
                            "index":	3,
                            "ip":	"192.168.7.98",
                            "hostname":	"xxx",
                            "mac":	"1A:F5:DD:03:46:36",
                        }, {
                            "index":	1,
                            "ip":	"192.168.7.99",
                            "hostname":	"xxx",
                            "mac":	"14:F5:DD:03:46:34",
                        }]
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            } 
            /**重新检测wan口类型 */
            case 26:
            return{
                "result":	{
                    "link":	1,
                    "wan_proto":	0
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            }
            /**获取升级信息 */
            case 27:
            return{
                "result":	{
                    "product_model":	"IP04384",
                    "fw_version":	104,
                    "flash_size":	3989504,
                    "buildtime" :"2019-01-17 22:37:34"
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            } 
            /**获取远程管理配置 */
            case 36:
                return{
                    "result":	{
                        "remote_enable":	0,
                        "port":	8080
                    },
                    "errmsg":	"success",
                    "restcode":	2000,
                    "locktime":	0
                }
            /**获取DHCP检测结果 */
            case 44:
                return{
                    "result":	{
                        "dhcp_detct":	2,
                        "action_result":	[{
                                "ip":	"192.168.0.253",
                                "mac":	"F4:28:53:00:32:C4"
                            }]
                    },
                    "errmsg":	"success",
                    "restcode":	2000,
                    "locktime":	0
                }
            /**获取静态路由配置 */
            case 47:
                return{
                    "result":	{
                        "num":	2,
                        "static_router_list":	[{
                                "index":	0,
                                "interfaces":	"lan",
                                "target":	"192.168.7.99",
                                "gateway":	"192.168.7.1",
                                "netmask":	"255.255.255.0",
                                "metric":	1,
                                "comment":	"aaaaa"
                            }, {
                                "index":	1,
                                "interfaces":	"wan1",
                                "target":	"192.168.5.99",
                                "gateway":	"192.168.5.1",
                                "netmask":	"255.255.255.0",
                                "metric":	1,
                                "comment":	"bbbbb"
                            }],
                        "interfaces_list":	[{
                                "id":	0,
                                "interfaces":	"lan"
                            }, {
                                "id":	1,
                                "interfaces":	"wan1"
                            }]
                    },
                    "errmsg":	"success",
                    "restcode":	2000,
                    "locktime":	0
                }
            /**获取IP/端口过滤 */
            case 49: 
            return{
                "result":	{
                    "enable":	'0',
                    "num":	3,
                    "rules":	[{
                            "index":	3,
                            "ipaddr":	"192.168.0.100",
                            "protocol":	"TCP+UDP",
                            "fromport":	"22222",
                            "toport":	"33333",
                            "comment":	"abc123"
                        }, {
                            "index":	4,
                            "ipaddr":	"192.168.0.101",
                            "protocol":	"TCP",
                            "fromport":	"11111",
                            "toport":	"11111",
                            "comment":	"abc123"
                        }, {
                            "index":	5,
                            "ipaddr":	"192.168.0.102",
                            "protocol":	"UDP",
                            "fromport":	"55555",
                            "toport":	"65535",
                            "comment":	"abc123"
                        }]
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            } 
            /**获取MAC过滤 */
            case 51: 
            return{
                "result":	{
                    "enable":	1,
                    "num":	3,
                    "rules":	[{
                            "index":	6,
                            "macaddress":	"00:11:E3:2E:28:0F",
                            "comment":	"WQEASD"
                        }, {
                            "index":	5,
                            "macaddress":	"00:22:E6:83:02:AE",
                            "comment":	"abc123"
                        }, {
                            "index":	4,
                            "macaddress":	"00:A2:E6:83:68:AE",
                            "comment":	"abc123"
                        }]
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            } 
            /**获取URL过滤 */
            case 53: 
            return{
                "result":	{
                    "enable":	1,
                    "num":	3,
                    "rules":	[{
                            "index":	3,
                            "url":	"sina"
                        }, {
                            "index":	9,
                            "url":	"qq"
                        }, {
                            "index":	6,
                            "url":	"xiaomi"
                        }]
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            } 
            /**获取DMZ */
            case 55: 
            return{
                "result":	{
                    "enable":	"1",
                    "dmzaddr":	"192.168.0.24",
                    "stationip":	"192.168.0.20"
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            } 
            /**获取端口转发 */
            case 57:
            return{
                "result":	{
                    "enable":	1,
                    "num":	3,
                    "remoteport":	1024,
                    "rules":	[{
                            "index":	3,
                            "ipaddr":	"192.168.0.100",
                            "protocol":	"TCP+UDP",
                            /*"externalportfrom":	2000,
                            "externalportto":	2010,
                            "internalportfrom":	3000,
                            "internalportto":	3010,*/
                            "externalport":	3000,
                            "internalport":	3010,
                            "comment":	"abc123"
                        }, {
                            "index":	6,
                            "ipaddr":	"192.168.0.101",
                            "protocol":	"TCP",
                            /*"externalportfrom":	2000,
                            "externalportto":	2010,
                            "internalportfrom":	3000,
                            "internalportto":	3010,*/
                            "externalport":	3030,
                            "internalport":	3040,
                            "comment":	"abc123"
                        }, {
                            "index":	9,
                            "ipaddr":	"192.168.0.102",
                            "protocol":	"UDP",
                            /*"externalportfrom":	2000,
                            "externalportto":	2010,
                            "internalportfrom":	3000,
                            "internalportto":	3010,*/
                            "externalport":	3050,
                            "internalport":	3060,
                            "comment":	"abc123"
                        }]
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }
            /**获取UPNP配置 */
            case 59:
            return{
                "result":	{
                    "upnpEnabled":	1,
                    "upnp_list":	[
                        {
                            "proto":	"TCP",
                            "name":	"Kugou\n",
                            "ip":	"192.168.90.119",
                            "iport":	7000,
                            "eport":	7000
                        }, {
                            "proto":	"TCP",
                            "name":	"MiniTP SDK\n",
                            "ip":	"192.168.90.99",
                            "iport":	54322,
                            "eport":	54322
                        }, {
                            "proto":	"UDP",
                            "name":	"MiniTP SDK\n",
                            "ip":	"192.168.90.99",
                            "iport":	12346,
                            "eport":	54322
                        }, {
                            "proto":	"TCP",
                            "name":	"MiniTP SDK\n",
                            "ip":	"192.168.90.76",
                            "iport":	54321,
                            "eport":	54321
                        }, {
                            "proto":	"UDP",
                            "name":	"MiniTP SDK\n",
                            "ip":	"192.168.90.76",
                            "iport":	12345,
                            "eport":	54321
                        }, {
                            "proto":	"TCP",
                            "name":	"DVR_NVR PORT MAP\n",
                            "ip":	"192.168.90.17",
                            "iport":	8000,
                            "eport":	8000
                        }]
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            }           
            /**获取DDNS配置 */
            case 61:
            return{
                "result":	{
                    "ddnsEnabled":	1,
                    "ddnsProvider":	2,
                    "ddnsDomain":	"host.dyndns.org",
                    "ddnsAccount":	"abcaaa",
                    "ddnsPassword":	"abccaaa"
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }            
            /**获取快速设置配置 */
            case 64:
            return{
                "result":	{
                    "ssid_config":{
                    "ssid_24g": "wifi_5g",
                    "encryption_24g": 0,
                    "key_24g"		: "12345678",
                    "ssid_58g": "wifi_5g",
                    "encryption_58g": 1,
                    "key_58g"		: "12345678",
                    },
                    "link":	1,
                    "wan_proto":	1,
                    "hostname":	"Vista",
                    'dnspri': "192.168.3.5",
                    'dnssec': "192.168.3.5",
                    'gateway': "192.168.3.5",
                    'ipaddr': "192.168.3.5",
                    'netmask': "255.255.255.0",
                    "username":	"adminsd",
                    "password":	"admin123"
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            } 
            /**获取系统信息 */
            case 66:
            return{
                "result":	{
                    "product_name":	"G101", 
                    "fw_version":	104, 
                    "buildtime":	"2019-06-08 03:53:17", 
                    "company_website":	"www.baidu.com", 
                    "time_of_day":	"2019-06-08 03:53:17"/*1552003729*/,
                    "uptime":	14900,
                    "cpu_rt_usage":	1,
                    "mem_rt_usage":	35
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            }
            /**获取网络信息 */
            case 67:
            return{
                "result":	{
                    "mesh_enable":1,
                    "mesh_info":{
                            "enable":	1,
                            "slave_num":	8
                    },
                    "network_info":	[{
                            "section":	"device_port0",
                            "link":	1,
                            "speed":	1000,
                            "mac_address":	"1A:F5:DD:03:46:36",
                            "ip_address":	"192.168.7.1",
                            "netmask":	"255.255.255.0",
                            "client_num":	3
                        }, {
                            "section":	"device_port1",
                            "link":	1,
                            "speed":	100,
                            "network_type":	0
                        }, {
                            "section":	"device_port2",
                            "link":	1,
                            "speed":	100,
                            "network_type":	0
                        }, {
                            "section":	"device_port3",
                            "link":	0, 
                            "speed":	10,
                            "network_type":	0
                        }, {
                            "section":	"device_port4",
                            "link": 0,
                            "speed":	1000,
                            "network_type":	1,//  networktyp==1 port is wan mode
                            "mac_address":	"1A:F5:DD:03:46:37",
                            "ip_address":	"192.168.5.127",
                            "netmask":	"255.255.255.0",
                            "gateway":	"192.168.5.1",
                            "dnspre":	"202.96.134.133", 
                            "dnssec":   "202.96.128.166",
                            "tx_bps":	"424890",
                            "rx_bps":	"339877"
                        }],
                    "wireless_info":	[{
                            "section":	"2",  //      5G
                            "enable":   1,    //       up
                            "band":  9,
                            "bw":  3,
                            "channel":  11,
                            "autochannel": 1,
                            "ssid":"wifi2.4G",
                            "bssid": "00:11:22:33:44:66",
                            "authmode":"WPA-PSK",
                            "encryptype":"AESTKIP",
                            "key":"12345678",
                            "wlantx":"1024",          
                            "wlanrx":"1024",
                            "client_num":	3
                    }, {
                            "section":	"1",
                            "enable":	1,
                            "band":  14,
                            "bw":  2,
                            "channel":  0,
                            "autochannel": 1,
                            "ssid":"wifi2.4G",
                            "bssid": "00:11:22:44:66:88",
                            "authmode":"WPA2-PSK",
                            "encryptype":"AESTKIP",
                            "key":"12345678",
                            "wlantx":"1024",
                            "wlanrx":"1024",
                            "client_num":	3
                        }]
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            }
            /**获取无线基础配置 */
            case 68:
            if(data.wlan_index===1)
            return{
                "result":	{
                    "enable":	1,
                    "band":	9,
                    "bw":	3,
                    "channel":	0,
                    "txpower":3,
                    "autochannel":	1,
                    "ssid":	"TOTOLINK_280466",
                    "key":	"",
                    "pskformat":	0,
                    "hssid":	0,
                    "country":	"EU",
                    "authmode":	"NONE",
                    "encryptype":	"NONE"
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }
            if(data.wlan_index===2)
            return{
                "result":	{
                    "enable":	1,
                    "band":	14,
                    "bw":	2,
                    "channel":	149,
                    "txpower":2,
                    "autochannel":	149,
                    "ssid":	"TOTOLINK_5G_280462",
                    "key":	"",
                    "pskformat":	0,
                    "hssid":	0,
                    "country":	"OT",
                    "authmode":	"NONE",
                    "encryptype":	"NONE"
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }            
            /**获取无线高级配置 */
            case 70:
            return{
                "result":	{
                    "maxsta":32,
                    "bgprotection":	1,
                    "beaconperiod":	100,
                    "htBSScoexistence":	0,
                    "dtimperiod":	1,
                    "fragthreshold":	2346,
                    "rtsthreshold":	2347,
                    "txpreamble":	1,
                    "noforwarding":	0,
                    "beamforming":	1,
                    "txpower":	0,
                    "wmmcapable":	1
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }
            /**获取多ap配置 */
            case 72:
            return{
                "result":	{
                    "majorwlanenable":	1, 
                    "va0wlanenable":	1, 
                    "va0hssid":	0,
                    "va0ssid":	"5G_ssid1",
                    "va0key":	"88888888",
                    "va0authmode":	"WPA-PSK",
                    "va0encryptype":	"TKIPAES",
                    "va0keyformat":	0,
                    "va1wlanenable": 0,	
                    "va1hssid":	0,
                    "va1ssid":	"5G_ssid2",
                    "va1key":	"66666666",
                    "va1authmode":	"WPAWPA2-PSK",
                    "va1encryptype":	"TKIPAES",
                    "va1keyformat":	0
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }
            /**获取无线终端列表 */
            case 74:
            if(data.wlan_index===1)
            return{
                "result":	{
                    "wifista_list":	[{
                            "idx":	0,
                            "ip":	"192.168.7.98",
                            "mac":	"1A:F5:FF:03:46:32",
                            "ssid": "wifi_5g",
                            "rssi": 74,
                            "conn_time": 456789
                        }, {
                            "idx":	1,
                            "ip":	"192.168.7.99",
                            "mac":	"1A:FF:CC:03:46:11",
                            "ssid": "wifi_5g",
                            "rssi": 74,
                            "conn_time": 456789
                        }]
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            }
            if(data.wlan_index===2)
            return{
                "result":	{
                    "wifista_list":	[{
                            "idx":	0,
                            "ip":	"192.168.7.98",
                            "mac":	"1A:F5:DD:03:46:36",
                            "ssid": "wifi_5g",
                            "rssi": 74,
                            "conn_time": 456789
                        }, {
                            "idx":	1,
                            "ip":	"192.168.7.99",
                            "mac":	"00:E0:4C:69:00:52",
                            "ssid": "wifi_5g",
                            "rssi": 74,
                            "conn_time": 456789
                        }, {
                            "idx":	2,
                            "ip":	"192.168.7.99",
                            "mac":	"00:E0:4C:69:00:DD",
                            "ssid": "wifi_5g",
                            "rssi": 74,
                            "conn_time": 456789
                        }]
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            }
            /**获取防火墙类型 */
            case 75:
            return{                            
                "result":	{
                    "firewalltype":	"1"
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }
            /**获取VPN穿透配置 */
            case 77:
            return{                            
                "result":	{
                    "wanping":	"0",
                    "l2tppassthru":	"1",
                    "pptppassthru":	"1",
                    "ipsecpassthru":	"1"
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }
            /**获取防火墙调度 */
            case 79:
            return{                            
                "result":	{
                    "rulesnum":	6,
                    "filterrules":	[{
                            "filtertype":	"ipport",
                            "ipaddr":	"192.168.0.100",
                            "protocol":	"TCP+UDP",
                            "fromport":	22222,
                            "toport":	33333,
                            "ipportindex":	0
                        }, {
                            "filtertype":	"ipport",
                            "ipaddr":	"192.168.0.111",
                            "protocol":	"TCP+UDP",
                            "fromport":	22222,
                            "toport":	33333,
                            "ipportindex":	1
                        }, {
                            "filtertype":	"ipport",
                            "ipaddr":	"192.168.0.122",
                            "protocol":	"TCP+UDP",
                            "fromport":	22222,
                            "toport":	33333,
                            "ipportindex":	2
                        }, {
                            "filtertype":	"mac",
                            "mac":	"00:22:E6:83:02:AE",
                            "macindex":	0
                        }, {
                            "filtertype":	"mac",
                            "mac":	"00:22:E6:83:0F:AE",
                            "macindex":	1
                        }, {
                            "filtertype":	"mac",
                            "mac":	"00:22:E6:83:0F:EF",
                            "macindex":	2
                        }],
                    "schedulenum":	3,
                    "filterschedule":	[{
                            "schfiltertype":	"ipport",
                            "schipaddr":	"192.168.0.100",
                            "schprotocol":	"TCP+UDP",
                            "schfromport":	22222,
                            "schtoport":	33333,
                            "schweek":	"1,3,5,7",
                            "schstime":	"11:11",
                            "schttime":	"22:22",
                            "schindex":	0
                        }, {
                            "schfiltertype":	"mac",
                            "mac":	"00:22:E6:83:0F:AE",
                            "schweek":	"2,4,6",
                            "schstime":	"09:00",
                            "schttime":	"19:00",
                            "schindex":	1
                        }, {
                            "schfiltertype":	"mac",
                            "mac":	"00:22:E6:83:0F:EF",
                            "schweek":	"6,7",
                            "schstime":	"09:00",
                            "schttime":	"12:00",
                            "schindex":	2
                        }]
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }

            /**QOS setting */
            case 82:
            return{       
                "result":	{
                    "enable":	"0",
                    "totalupBandwidth":	100,
                    "totaldwBandwidth":	100,
                    "num":	3,
                    "rules":	[{
                            "index":	3,
                            "ipstart":	"192.168.0.22",
                            "ipend":	"192.168.0.22",
                            "upBandwidth":	23,
                            "dwBandwidth":	22,
                            "comment":	"abc"
                        }, {
                            "index":	4,
                            "ipstart":	"192.168.0.35",
                            "ipend":	"192.168.0.40",
                            "upBandwidth":	20,
                            "dwBandwidth":	20,
                            "comment":	"abc123"
                        }, {
                            "index":	2,
                            "ipstart":	"192.168.0.25",
                            "ipend":	"192.168.0.30",
                            "upBandwidth":	20,
                            "dwBandwidth":	20,
                            "comment":	"abc123"
                        }]
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }
            /**获取telnet配置 */
            case 84:
            return{
                "result":	{
                    "telnet_enabled":0
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }
            /**获取DDNS的状态 */
            case 86:
            return{         
                "result":	{
                    "ddnsStatus": "fail",
                    "ddnsIp": ""
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }
            /**获取无线mesh设备拓扑 */
            case 94:
            return{
            "result":	{
                "macaddr":    	"e0:d5:5e:f8:1d:11",
                "slave_list":
                [
                  {
                    "macaddr":    	"e0:d5:5e:f8:1d:2",
                    "slave_list":
                    [
                      {
                        "macaddr":    	"e0:d5:5e:f8:1d:2",
                        "slave_list":
                        [
                        ]
                      },
                      {
                        "macaddr":    	"e0:d5:5e:f8:1d:2",
                        "slave_list":
                        [
                          {
                            "macaddr":    	"e0:d5:5e:f8:1d:2",
                            "slave_list":
                            [
                            ]
                          },
                        ]
                      }
                    ]
                  }, 
                  {
                    "macaddr":    	"e0:d5:5e:f8:1d:33",
                    "slave_list":
                    [
                      {
                        "macaddr":    	"e0:d5:5e:f8:1d:33",
                        "slave_list":
                        [
                          {
                            "macaddr":    	"e0:d5:5e:f8:1d:33",
                            "slave_list":
                            [
                            ]
                          },
                          {
                            "macaddr":    	"e0:d5:5e:f8:1d:33",
                            "slave_list":
                            [
                            ]
                          }
                        ]
                      },
                    ]
                  },
                ]
              },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            }
            /**获取无线mesh从设备列表 */
            case 95:
            return{
                "result":	{
                    "slave_list":	[{
                            "name":	"T6",
                            "ipAddr":	"192.168.7.98",
                            "macAddr":	"e0:d5:5e:f8:1d:38",
                            "fwVersion":      "V5.9c.188",
                            "date":      "05/19/19:11:13:13",
                            "online":0
                        }, {
                            "name":	"T6",
                            "ipAddr":	"192.168.7.98",
                            "macAddr":	"e0:d5:5e:f8:1d:38",
                            "fwVersion":      "V5.9c.188",
                            "date":      "05/19/19:11:13:13",
                            "online":1
                        }]
                },
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	0
            }            
            /**获取无线MAC认证 */
            case 98:
            return{
                "result":	{
                    "enable":	1,
                    "num":	3,
                    "rules":	[{
                            "index":	0,
                            "macaddress":	"00:11:E3:2E:28:0F",
                            "comment":	"WQEASD"
                        }, {
                            "index":	1,
                            "macaddress":	"00:22:E6:83:02:AE",
                            "comment":	"abc123"
                        }, {
                            "index":	2,
                            "macaddress":	"00:A2:E6:83:68:AE",
                            "comment":	"abc123"
                        }, {
                            "index":	3,
                            "macaddress":	"11:22:33:44:33:55",
                            "comment":	"abc123"
                        }, {
                            "index":	4,
                            "macaddress":	"00:11:22:33:22:55",
                            "comment":	"abc123"
                        }]
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }
            
            /**获取arp列表 */
            case 103:
            return{
                "result":	{
                    "arp_list":	[{
                            "index":	0,
                            "ip":	"192.168.7.2",
                            "mac":	"50:3e:aa:dd:c4:88"
                        }]
                },
                "restcode":	2000,
                "errmsg":	"success",
                "locktime":	0
            }   
            /**获取内网设置 */
            case 104:
            return{
                "result": {
                    "proto":"static",  //static或者dhcp
                    "ipaddr":"192.168.0.253",
                    "netmask":"255.255.255.0",
                    "gateway":"192.168.0.1",
                    "pridns":"114.114.114.114",
                    "secdns":"8.8.4.4"
                },
                "restcode": 2000,
                "errmsg": "success",
                "locktime": 0
            }
            /**获取廋AP接口 */
            case 106:
            return{
                "result": {
                    "apmode":1,//1:瘦AP,FIT;0:胖AP,FAT
                    'wtpname':'asdfi',
                    "acipaddr":"192.168.0.1",
                    "capclistatus":1,
                    "runtime":600,
                },
                "restcode": 2000,
                "errmsg": "success",
                "locktime": 0
            }
            
            


            /**-----------返回成功带有locktime -------*/
            /**设置WAN口配置 */
            case 11:
            case 16:
            case 18:
            case 17:
            case 63:
            return {
                "errmsg":	"success",
                "restcode":	2000,
                "locktime":	6
            }
            case 88:
                return {
                    "errmsg":	"err",
                    "restcode":	4006,
                    "locktime":	0
                }
            /**-----------返回成功,带有locktime,且有跳转IP -------*/
            /**设置lan口配置 */
            case 12:
            case 20:
            case 81:
            case 105:
                return {
                    "errmsg":	"success",
                    "restcode":	2000,
                    "locktime":	5,
                    "redir":"192.168.90.1"
                }
        /**-----------返回成功,locktime=0 -------*/
        default:            
            return{
                'restcode':2000,
                'error':'success',
                "locktime":	3,
            }
    }
  };
  