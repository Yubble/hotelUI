import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/hotel/available/list',
    method: 'get',
    params: query
  })
}
