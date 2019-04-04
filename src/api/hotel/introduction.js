import request from '@/router/axios'

export function viewDetail(obj) {
  return request({
    url: '/hotelManager/supplierHotelInfo/getSupplierHotelDetail',
    method: 'post',
    data: obj
  })
}