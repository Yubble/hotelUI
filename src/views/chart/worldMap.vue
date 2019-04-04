<template>
  <div class="world-map-box" id="world-map-box">
    <!-- 这里是世界地图 -->
  </div>
</template>

<script>

import { getHotelQuantity } from "@/api/charts/echartApi";
import lodash from 'lodash'
// const echarts = require('echarts')
import world from './world.js'
import mapOptions from './options.js'
// const d3 = require('d3')
export default {
  name: 'worldMap',
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init () {
      getHotelQuantity().then(data => {
        if (data.status == 200) {
          let cityData = data.data.data
          let options = lodash.cloneDeep(mapOptions)
          options.series[0].data = cityData
          const mapChart = this.echarts.init(document.getElementById('world-map-box'))
          mapChart.setOption(options)
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .world-map-box {
    height: 100%;
    min-height: 600px;
    // background: rgba($color: #6791f1, $alpha: 1.0);
    margin: 0 auto;
    max-width: 1000px;
    // background: navajowhite;
  }

</style>