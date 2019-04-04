<template>
  <div class="barGraph_box" id="barGraph_box">
    Loading.....Please wait patiently!
    <br/><br/>
  </div>
</template>

<script>
import { getHotelNumber } from "@/api/charts/echartApi";

let options = {
    xAxis: {
        type: 'category',
        name: 'Country',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        name: 'Number of hotels',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        }
      }
    ],
    title: {
            text: "Countries with the largest number of hotels",
            //subtext: "混合的",
            x: '16',
            textStyle: {
                fontWeight: 'normal'
            }
    }
}

export default {
  name: 'barGraph',
  data() {
    return {}
  },
  methods: {
    init() {
      getHotelNumber().then(data => {
        if (data.status == 200) {
          let barData = data.data.data
          let xData = []
          let seriesData = []
          for (let i of barData) {
            xData.push(i.section)
            seriesData.push(i.hotelQuantity)
          }

          options.xAxis.data = xData
          options.series[0].data = seriesData
          const barChart = this.echarts.init(document.getElementById('barGraph_box'))
          barChart.setOption(options)
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
  .barGraph_box {
    height: 100%;
    min-height: 600px;
    margin: 0 auto;
    max-width: 1000px;
  }
</style>
