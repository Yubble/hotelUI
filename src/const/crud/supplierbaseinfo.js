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
      label: 'id',
      prop: 'id'
    },
	  {
      label: 'supplier_id',
      prop: 'supplierId'
    },
	  {
      label: 'supplier_name',
      prop: 'name'
    },
	  {
      label: 'status',
      prop: 'status'
    },
	  {
      label: 'supplierBusinessManagerName',
      prop: 'supplierBusinessManagerName'
    },
	  {
      label: 'supplierBusinessManagerPhone',
      prop: 'supplierBusinessManagerPhone'
    },
	  {
      label: 'mushuBusinessManagerName',
      prop: 'mushuBusinessManagerName'
    },
	  {
      label: 'mushuBusinessManagerPhone',
      prop: 'mushuBusinessManagerPhone'
    },
	  {
      label: 'create_time',
      prop: 'createTime'
    },
	  {
      label: 'update_by',
      prop: 'updateBy'
    },
	  {
      label: 'update_time',
      prop: 'updateTime'
    },
  ]
}
