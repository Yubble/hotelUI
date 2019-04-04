<template>
  <div class="scroll-graph-box" id="scroll-graph-box">

  </div>
</template>

<script>
import { getHotelImage } from "@/api/charts/echartApi";
let options = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center',
        show: false
    },
    tooltip : {
        trigger: 'item',
        formatter: "quantity of hotel which has {b} images</br>{c}</br>({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'center'
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
                // ,
                // normal:{
                //     color:function(params) {
                //     //自定义颜色
                //     var colorList = [          
                //             '#00FFFF', '#00FF00', '#FFFF00', '#FF8C00', '#FF0000', '#FE8463',
                //         ];
                //         return colorList[params.dataIndex]
                //       }
                // }
            }
        }
    ]
}
export default {
  name: 'scrollGraph',
  data() {
    return {}
  },
  methods: {
    init () {
      getHotelImage().then(data => {
        if (data.status == 200) {
          let scrollData = data.data.data
          let legData = []
          let serData = []
          for (let i of scrollData) {
            legData.push(i.section)
            serData.push({ 'name': i.section, 'value': i.hotelQuantity })
          }

          options.legend.data = legData
          options.series[0].data = serData
          const scrollChart = this.echarts.init(document.getElementById('scroll-graph-box'))
          scrollChart.setOption(options)
        }
      })
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="scss">
  .scroll-graph-box {
    height: 100%;
    min-height: 600px;
    margin: 0 auto;
    max-width: 1000px;
  }
</style>
