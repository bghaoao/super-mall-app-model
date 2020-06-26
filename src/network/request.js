import axios from 'axios'
export function request(config) {
  const instance1 = axios.create({
    baseURL : 'http://152.136.185.210:8000/api/n3',
    timeout : 5000,
    headers : { 'X-Requested-With':'XMLHttpRequest' }
  })
  // axios.interceptors 拦截器
  instance1.interceptors.request.use(config => {
    return config;
  },err => {
    console.log(err);
  }); 

  instance1.interceptors.response.use(res => {
    return res.data;
  },err => {
    console.log(err);
  }); 
  return instance1(config);
}

