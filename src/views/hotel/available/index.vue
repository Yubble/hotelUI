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
import { fetchList } from '@/api/hotel/available'
import { tableOption } from '@/const/crud/hotel/available'
import { mapGetters } from 'vuex'
import { listData } from '@/api/hotel/mock-available.js'

export default {
  name: 'available',
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
     * 筛选房型
     */
    filterType (type, types) {
      return types.some(v => type.indexOf(v) > -1)
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
        if (form.type && !form.adultAmount && !form.kidAmount) {
          flag = flag && v.type.indexOf(form.type) > -1
        }
        if (form.date && form.date.length > 1) {
          flag = flag && dateFormat(new Date(v.date)).split(' ')[0] >= dateFormat(form.date[1]).split(' ')[0] && dateFormat(new Date(v.date)).split(' ')[0] <= dateFormat(form.date[0]).split(' ')[0]
        }
        if (form.adultAmount || form.kidAmount) {
          const num = (form.adultAmount || 0) + (form.kidAmount || 0)
          let temp = false
          const two = ['双人', '大床', '套房', '海景']
          const three = ['套房', '三人间', '海景', '家庭']
          const exceed = ['套房', '海景', '超级', '别墅', '家庭']
          let types = []

          if (num > 3) {
            types = exceed
          } else if (num === 3) {
            types = three
          } else if (num === 2) {
            types = two
          } else {
            types = []
          }

          console.log('--types', types)

          flag = flag && this.filterType(v.type, types)
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