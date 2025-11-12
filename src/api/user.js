import request from '@/utils/request'

export function getUserList(){
    return request({
        url: '/user/info',
        method: 'get'
    })
} 