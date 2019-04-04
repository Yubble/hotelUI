export default {
  title: {
    text: 'Map of Global Hotel Distribution Group By Country',
    x:'center'
    // textAlign: 'center'
  },
  tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return params.name + '</br>' + 'Quantity Of Hotel : ' + params.value;
      }
  },
  visualMap: {
    type: 'continuous',
    min: 0,
    max: 20000,
    realtime: false,
    calculable: true,
  },
  series: [
    {
        type: 'map',
        mapType: 'world',
        roam: false,
        itemStyle:{
            emphasis:{label:{show:true}}
        },
        data:[]
    }
]
}