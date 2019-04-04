import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/demo/order/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/demo/order',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/demo/order/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/demo/order/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/demo/order',
    method: 'put',
    data: obj
  })
}
