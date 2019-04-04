/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */

export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  editBtn: false,
  delBtn: false,
  addBtn: false,
  column: [
	  {
      label: '主键ID',
      prop: 'userId'
    },
	  {
      label: '用户名',
      prop: 'username'
    },
	  {
      label: '',
      prop: 'password'
    },
	  {
      label: '随机盐',
      prop: 'salt'
    },
	  {
      label: '简介',
      prop: 'phone'
    },
	  {
      label: '头像',
      prop: 'avatar'
    },
	  {
      label: '部门ID',
      prop: 'deptId'
    },
	  {
      label: '创建时间',
      prop: 'createTime'
    },
	  {
      label: '修改时间',
      prop: 'updateTime'
    },
	  {
      label: '0-正常，9-锁定',
      prop: 'lockFlag'
    },
	  {
      label: '0-正常，1-删除',
      prop: 'delFlag'
    },
	  {
      label: '微信openid',
      prop: 'wxOpenid'
    },
	  {
      label: 'QQ openid',
      prop: 'qqOpenid'
    },
	  {
      label: '所属租户',
      prop: 'tenantId'
    },
  ]
}
