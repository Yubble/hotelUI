<template>
  <div class="app-container calendar-list-container">
    <basic-container class="introduction">
      <el-form>
        <el-form-item label=".">
        <br>
            <!-- <el-form-item  label="OTAID:" style="width:10%"> -->
              <div class='container_from'>
                  <span style='float:left;'>Supplier  :</span>
                   <el-form-item style="width:70%; float:left;">
                      <el-select v-model="form.otaId" placeholder="HotelBeds">
                          <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          width='150'>
                          </el-option>
                      </el-select>
                   </el-form-item>
              </div>

              <div class='container_from'>
                  <span style='float:left;'>CountryCode  :</span>
                   <el-form-item style="width:50%; float:left;">
                      <el-input width='100' v-model="form.countryCode" placeholder="countryCode"></el-input>
                   </el-form-item>
              </div>
              <div class='container_from'>
                <span style='float:left;'>HotelId  :</span>
                   <el-form-item style="width:50%; float:left;">
                      <el-input v-model="form.hotelId" placeholder="hotelId"></el-input>
                   </el-form-item>
              </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">submit</el-button>
        </el-form-item>
      </el-form>
      <div v-if='tableShow'>
        <el-table
            :data="itemList"
            height="450"
            border
            style="width: 100%">
            <el-table-column
                prop="hotelBaseInfo.hotelId"
                label="HotelId"
                width="80">
            </el-table-column>
            <el-table-column
                label="SupplierName"
                width="120">
                <template slot-scope="scope">
                  <span>
                    hotelBeds
                  </span>
                </template>
            </el-table-column>
            <el-table-column
                prop="hotelBaseInfo.nameEn"
                label="NameEn"
                width="150">
            </el-table-column>
            <el-table-column
                prop="hotelExtendInfo.countryCode"
                label="CountryCode"
                width="120">
            </el-table-column>
            <el-table-column
                prop="hotelBaseInfo.addressEn"
                label="AddressEn"
                width="150">
            </el-table-column>
            <el-table-column
                prop="hotelExtendInfo.starRating"
                label="StarRating"
                width="110">
            </el-table-column>
            <el-table-column
                prop="hotelBaseInfo.gmtCreated"
                label="CreatedTime"
                width="150">
            </el-table-column>
            <el-table-column
                prop="hotelBaseInfo.gmtUpdated"
                label="UpdateTime"
                width="150">
            </el-table-column>
            <el-table-column
              label="Detail"
            >
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="GoHotelDetail(scope.row)"
                  type="text"
                  size="small">
                  viewDetail
                </el-button>
              </template>
            </el-table-column>
            <el-table-column
               label="AvailableSearch"
            >
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="GoHotelview(scope.row)"
                  type="text"
                  size="small">
                  Search
                </el-button>
              </template>
            </el-table-column>
        </el-table>
        <el-pagination
        class="pull-right clearfix"
        @current-change='handleSizeChange'
        layout="total, sizes, prev, pager, next, jumper"
        :total="100">
        </el-pagination>
      </div>
    </basic-container>
  </div>
</template>
// HotelId,                            hotelBaseInfo.hotelId
// SupplierName,                 写死：hotelBeds
// NameEn,                          hotelBaseInfo.nameEn
// CountryCode,                   hotelExtendInfo.countryCode
// AddressEn,                       hotelBaseInfo.addressEn
// StarRating,                        hotelExtendInfo.starRating
// CreatedTime,                    hotelBaseInfo.gmtCreated
// UpdateTime                      hotelBaseInfo.gmtUpdated
<script>
import { tableOption } from '@/const/crud/hotel/order'
import { mapGetters } from 'vuex'
// import { mockData } from '@/api/hotel/mock-introduction.js'
import request from '@/router/axios'

export default {
  name: 'SupplierHotelResources',
  data() {
    return {
      form: {
        hotelId: '',
        countryCode: '',
        otaId:''
      },
      data: {},
      itemList: [],
      value: [],
      options: [
          {key: 0, value: '370', label: 'HotelBeds'}
      ],
      pageSize: 1,
      tableShow: false
    }
  },

  created() {
    // this.data = mockData.data
  },

  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.onAxios(1)
    },
    onAxios (num = 1) {
        request({
            url: '/hotelManager/supplierHotelInfo/searchSupplierHotelList',
            method: 'post',
            data: {
                "countryCode":this.form.countryCode,
                "otaId":this.form.otaId,
                "hotelId":this.form.hotelId,
                "pageNum":this.pageSize,
                "pageSize":20
            }
        }).then(response => {
            if (response.data.data) {
            this.tableShow=true
            let tempItemList = response.data.data.itemList.map(ele => {
              ele.hotelBaseInfo.gmtCreated = ele.hotelBaseInfo.gmtCreated.replace('.000+0000', '').replace('T', ' ')
              ele.hotelBaseInfo.gmtUpdated = ele.hotelBaseInfo.gmtUpdated.replace('.000+0000', '').replace('T', ' ')
              return ele
            })
            this.itemList = tempItemList
            //this.itemList = response.data.data.itemList
            //this.$notify({
            //    title: '成功',
            //    message: '修改成功',
            //    type: 'success',
            //    duration: 2000
            //})
            } else {
            this.$notify({
                title: 'error',
                message: response.data.msg,
                type: 'error',
                duration: 2000
            })
            }
        }).catch(() => {
            this.$notify({
            title: 'error',
            message: 'internet error',
            type: 'error',
            duration: 2000
            })
        })
    },
    handleSizeChange(val) {
        this.pageSize = val
        this.onAxios(this.pageSize)
    },
    GoHotelDetail(hotelInfo) {
      // 从此跳到查看酒店详情的新页面
      let {hotelId, otaId} = hotelInfo.hotelBaseInfo
      this.$router.push({ path: `/hotelresources/hoteldetail/${hotelId}/${otaId}` });
    },
    GoHotelview (hotelInfo) {
      let {hotelId, otaId} = hotelInfo.hotelBaseInfo
      this.$router.push({ path: `/hotelresources/hotelView/${hotelId}/${otaId}` });
    }
  }
}
</script>

<style lang="scss" scoped>
.introduction {
  h3 {
    margin-top: 30px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed #ddd;
  }

  &__title {
    margin: 10px 0;
    padding-top: 10px;
    border-top: 1px solid #99999940;
  }
  &__brif {
    margin: 10px 0;
    font-size: 13px;
  }
  &__pic {
    display: flex;
    justify-content: space-between;
    img {
      width: 24%;
      height: 100%;
    }
  }
  &__desc {
    p {
      margin: 0;
      font-size: 12px;
      line-height: 24px;
    }
  }
  &__facilities {
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
    }
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100px;
      padding: 10px 0;
      color: #666;
      & + & {
      }
    }
    .iconfont {
      font-size: 20px;
    }
    &_text {
      margin-top: 4px;
      font-size: 12px;
    }
  }
}
.container_from{
  width: 250px;
  height: 80px;
  float: left;
  margin-right: 20px;

}
</style>
