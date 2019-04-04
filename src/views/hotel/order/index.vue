<template>
  <div class="app-container calendar-list-container">
    <basic-container>
      <avue-crud
        ref="crud"
        :page="page"
        :data="tableData"
        :table-loading="tableLoading"
        :option="tableOption"
        @on-load="getList"
        @search-change="searchChange"
        @refresh-change="refreshChange"
        @search-reset="clear"
      ></avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { dateFormat } from '@/util/date.js'
import { fetchList } from '@/api/hotel/order'
import { tableOption } from '@/const/crud/hotel/order'
import { mapGetters } from 'vuex'
import { listData } from '@/api/hotel/mock-order.js'

export default {
  name: 'order',
  data() {
    return {
      tableData: [],
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20 // 每页显示多少条
      },
      tableLoading: false,
      tableOption: tableOption
    }
  },
  created() {
  },
  mounted: function () {
  let data = document.querySelectorAll('.el-range-input')
    let toData = document.querySelectorAll('.el-range-separator')
    let Elbutton = document.querySelectorAll('.el-button--small')
    for (let i=0; i<data.length; i++) {
      if (data[i].placeholder == '开始日期') {
        data[i].placeholder = 'start date'
      } else if (data[i].placeholder == '结束日期') {
        data[i].placeholder = 'End date'
      }
    }
    for (let i=0; i<toData.length; i++) {
      if (toData[i].innerHTML == '至') {
        toData[i].innerHTML = 'to'
      }
    }
    for (let i=0; i<Elbutton.length; i++) {
      if (Elbutton[i].children[1]) {
          // Elbutton[i].children[1].innerHTML = 'search'
          console.log(Elbutton[i].children[1].innerHTML)
        if (Elbutton[i].children[1].innerHTML == '搜 索') {
          Elbutton[i].children[1].innerHTML = 'search'
        } else if (Elbutton[i].children[1].innerHTML == '清 空') {
          Elbutton[i].children[1].innerHTML = 'clear'
        }
      }
    }
    
  },
  computed: {
    ...mapGetters(['permissions'])
  },
  methods: {
    getList(page, params) {
      this.tableLoading = true
      // fetchList(Object.assign({
      //   descs: 'create_time',
      //   current: page.currentPage,
      //   size: page.pageSize
      // }, params)).then(response => {
      //   console.log('----response', response)
      //   this.tableData = response.data.data.records
      //   this.page.total = response.data.data.total
      //   this.tableLoading = false
      // })
      this.tableData = listData.data
      this.page = {
        total: listData.total,
        currentPage: listData.currentPage,
        pageSize: listData.pageSize
      }
      this.tableLoading = false

    },
    /**
     * 搜索回调
     */
    searchChange(form) {
      console.log('----form', form)
      // this.getList(this.page, form)
      this.tableData = listData.data.filter(v => {
        let flag = true

        if (form.id) {
          flag = flag && form.id === v.id
        }
        if (form.date && form.date.length > 1) {
          flag = flag && dateFormat(new Date(v.date)).split(' ')[0] >= dateFormat(form.date[1]).split(' ')[0] && dateFormat(new Date(v.date)).split(' ')[0] <= dateFormat(form.date[0]).split(' ')[0]
        }
        if (form.tel) {
          flag = flag && form.tel === v.tel
        }
        if (form.name) {
          flag = flag && v.name.indexOf(form.name) > -1
        }

        return flag
      })
    },
    /**
     * 清空
     */
    clear(form) {
      this.tableData = listData.data
    },
    /**
     * 刷新回调
     */
    refreshChange(option) {
      console.log('---option', option)
      const form = option.searchForm
      this.tableData = listData.data.filter(v => v.name.indexOf(form.name) > -1 && v.type.indexOf(form.type) > -1)
      // this.getList(this.page)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

