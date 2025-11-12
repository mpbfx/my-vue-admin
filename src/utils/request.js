import axios from 'axios'

const service = axios.create({
    baseURL: 'api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config;
    },
    error => {
        console.error('请求拦截器错误', error);
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data;
        if(res.code && res.code !== 200){
            console.warn('业务错误', res.message);
            return Promise.reject(new Error(res.message));
        }
        return res.data;
    },error => {
        const status = error.response?.status;
        switch(status){
            case 400:
                console.error('请求参数错误');
                break;
            case 401:
                console.error('未授权，请登录');
                break;
            case 403:
                console.error('拒绝访问');
                break;
            case 404:
                console.error('请求地址不存在');
                break;
            case 500:
                console.error('服务器内部错误');
                break;
            default:
                console.error('请求失败');
        }
    }
)

export default service;