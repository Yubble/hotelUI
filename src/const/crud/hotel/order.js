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
      label: 'ItineraryID',
      prop: 'id',
      search: true,
    },
    {
      label: 'CheckTime1',
      prop: 'date',
      type: 'date',
      search: true,
      more: true,
    },
    {
      label: 'GuestName',
      prop: 'name',
      search: true,
    },
    {
      label: 'HotelName',
      prop: 'hotel',
    },
    {
      label: 'RoomType',
      prop: 'type',
    },
    {
      label: 'Price',
      prop: 'price',
    },
    {
      label: 'GuestPhone',
      prop: 'tel',
      search: true,
    }
  ]
}
