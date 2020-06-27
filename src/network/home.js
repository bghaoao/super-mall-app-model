import { request } from './request';

export function getHomeMultidata() {
    return request ({
        // url:'./home/data?type=pop&page=1'
        url:'/home/multidata'
    })
}
export function getHomeGoods(type, page) {
 return request ({
//    url:'/home/data?type=pop&page=1'
   url:'/home/data',
   params: {
     type,
     page
   }
 })
}