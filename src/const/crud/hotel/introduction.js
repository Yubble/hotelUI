export const tableOption = {
  border: true,
  menu: false,
  align: 'center',
  refreshBtn: true,
  showClomnuBtn: false,
  searchSize: 'mini',
  addBtn: false,
  editBtn: false,
  delBtn: false,
  column: [
    {
      label: '酒店ID',
      prop: 'id',
      search: true,
    },
    {
      label: '酒店名称',
      prop: 'hotel',
    },
    {
      label: '可住房型',
      prop: 'type',
      search: true
    },
    {
      label: '价格',
      prop: 'price',
    },
    {
      label: '日期',
      prop: 'date',
      type: 'date',
      search: true,
      more: true,
    }
  ]
}
