import axios from 'axios'
import {cgid_loading} from '../cgid';

export default class Axios{
    static ajax_post(options){
        /*加载Loading*/
        let loading;
        if(options.data && cgid_loading[options.data.cgid] !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let baseApi = '';
        return new Promise((resolve,reject)=>{
            axios({
                baseApi,
                //url:post_url,
                url:options.url,
                method:'post',
                //timeout:5000,
                data: options.data
            }).then((response)=>{
                if(options.data && cgid_loading[options.data.cgid] !== false){
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if(response.status === 200){
                    resolve(response.data);
                }else{
                    reject(response.data);
                }
            }).catch(() => {
                loading = document.getElementById('ajaxLoading');
                loading.style.display = 'none';
                /*Modal.info({
                    title:"提示",
                    content:post_url+'数据请求错误'
                })    */       
                console.error('数据请求错误') 
            })
        })
    }

}