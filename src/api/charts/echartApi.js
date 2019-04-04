import request from '@/router/axios'

export function getHotelQuantity(obj) {
  return request({
    url: '/hotelManager/hotelStatisticsData/getHotelQuantityGroupByCountryCode',
    method: 'post',
    data: obj
  })
}

export function getHotelNumber(obj) {
  return request({
    url: 'hotelManager/hotelStatisticsData/getHotelNumberGroupByCountryForZhuXingTu',
    method: 'post',
    data: obj
  })
}

export function getHotelImage(obj) {
  return request({
    url: 'hotelManager/hotelStatisticsData/getHotelImmageQuantityInHotel',
    method: 'post',
    data: obj
  })
}