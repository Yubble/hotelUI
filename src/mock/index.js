import Mock from 'mockjs'
import { baseUrl } from '@/config/env'

Mock.mock('/hotel/available/list', {
  'data|5-10': [
    {
      'name': '@cname',
      'type': '豪华观景大床房',
      'price|230-600': 325,
    },
  ]
})

// Mock.mock(baseUrl + '/hotelManager/hotelStatisticsData/getHotelQuantityGroupByCountryCode', {
//   'data': [
//     {'name': 'Bahamas', 'value': 2312} 
//   ]
// })