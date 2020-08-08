import Vue from 'vue'
import { baseUrl } from './env'
/**
 * 异步函数
 * @param { string } type 'get,post'
 * @param { string } url '请求地址' 
 * @param { object } data '可选，发送的数据'
 * @param { object } headers '可选，get方式要携带的headers' 
 */
export default async (type, url, data, headers) => {
  type = type.toLowerCase() || 'get';
  url = baseUrl + url;
  
  if (type === 'get') {
    return new Promise((resolve, reject) => {
      let params = {params:data};
      if (headers) {
        params.headers = headers;
      }
      Vue.http.get(url, params).then(response => {
        resolve(response.body);
      }, response => {
        reject(response);
      });
    })
  } else if (type === 'post') {
    return new Promise((resolve, reject) => {
      Vue.http.post(url, data).then(response => {
        resolve(response.body);
      }, response => {
        reject(response);
      });
    })
  }
}