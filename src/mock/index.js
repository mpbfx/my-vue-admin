import Mock from 'mockjs'

export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: Mock.mock({
          'list|5-10': [
            {
              'id|+1': 1,
              name: '@cname',
              age: '@integer(18, 60)',
              avatar: '@image("100x100", "#50B347", "User")',
              birthday: '@date("yyyy-MM-dd")',
              email: '@email',
              isActive: '@boolean'
            }
          ]
        })
      }
    }
  }
]
