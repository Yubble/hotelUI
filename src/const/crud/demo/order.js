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
      label: '',
      prop: 'id'
    },
	  {
      label: '名称',
      prop: 'name'
    },
	  {
      label: '排序',
      prop: 'sort'
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
      label: '是否删除  -1：已删除  0：正常',
      prop: 'delFlag'
    },
	  {
      label: '',
      prop: 'parentId'
    },
	  {
      label: '',
      prop: 'tenantId'
    },
  ]
}
