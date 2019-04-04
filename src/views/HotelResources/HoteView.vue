<template>
  <div class="app-container calendar-list-container">
    <basic-container class="introduction">
      <div class="block">
        <div class="demonstration-data">
          <span class="demonstration">Select date</span>
          <el-date-picker
            v-model="from.data"
            type="daterange"
             @change="dateChangebirthday"
            range-separator="to"
            start-placeholder="start date"
            end-placeholder="End date">
          </el-date-picker>
        </div>
        <div  class="demonstration-wrap">
          <span class="demonstration">Number of adults</span>
          <el-input v-model="from.adultsNum" placeholder="Number of adults"></el-input>
        </div>
        <div  class="demonstration-wrap">
          <span class="demonstration">Number of children</span>          
          <el-input v-model="from.ChildrenNum" placeholder="Number of children"></el-input>
        </div>
        <div class='demonstration-search'>
          <el-button type="primary"
            @click.native.prevent="goSearch()"          
          >search</el-button>
        </div>
      </div>
    </basic-container>
    <basic-container class="introduction">
           <el-table
            :data="itemList"
            height="450"
            border
            style="width: 100%">
            <el-table-column
                label="RoomName"
                prop="room.roomName"
                width="150">
            </el-table-column>
            <el-table-column
                label="RoomTypeCode"
                prop="room.roomTypeCode"
                width="150">
            </el-table-column>
            <el-table-column
                label="BreakFeast"
                prop="rpInfo.rpBooking.serviceTypeList[0].serviceType"
                width="150">
            </el-table-column>
            <el-table-column
                label="QuotedOccupancy"
                prop="rpInfo.rpBooking.quotedOccupancy"
                width="150">
            </el-table-column>
            <el-table-column
                label="PriceMode"
                prop="rateInfo.priceMode"
                width="110">
            </el-table-column>
            <el-table-column
                label="CurrencyCode"
                prop="rateInfo.currencyCode"
                width="150">
            </el-table-column>
            <el-table-column
                label="Price(Cent)"
                prop="rateInfo.roomFeeInfo.roomInfoDetails[0].price"
                width="150">
            </el-table-column>
            <el-table-column
                label="Refundable"
                prop="rpInfo.rpCancel.refundable"
                width="200"
                >
                <template slot-scope="scope">
                  <span>{{scope.row.rpInfo.rpCancel.refundable}}</span>
                  <el-tooltip placement="top">
                    <div slot="content">{{scope.row.rpInfo.rpCancel.cpChargeList}}</div>
                    <el-button>CancellationPolicy</el-button>
                  </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
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
import { mapGetaters } from 'vuex'
// import { mockData } from '@/api/hotel/mock-introduction.js'
import request from '@/router/axios'

export default {
  name: 'SupplierHotelResources',
  data() {
    return {
      Refundable:'',
      hotelId: '',
      itemList: [],
      from: {
        date: '',
        adultsNum: '',
        ChildrenNum: ''
      },
      startData:'',
      chirlData: ''
    }
  },

  created() {
    // this.data = mockData.data
  },

  methods: {
    dateChangebirthday (val) {
      console.log(val)
      this.startData = val[0]
      this.chirlData = val[1]
    },
    goSearch() {
      console.log(this.$route.params);
      let { hotelid } = this.$route.params
        request({
            url: '/switch/hotelbedsTest/getGoodsListAbility',
            method: 'post',
            data: 
            {
              "hotelId":hotelid,
              "ohotaGoodsQuery":{
                "checkinDateStr":this.startData,
                "checkoutDateStr":this.chirlData,
                "numberOfAdults":this.from.adultsNum,
                "numberOfChildren":this.from.ChildrenNum
                }
            }
            //  {
            //   "hotelId":'6474',
            //   "ohotaGoodsQuery":{
            //     "checkinDateStr":'11/19/2019',
            //     "checkoutDateStr":'11/20/2019',
            //     "numberOfAdults":2,
            //     "numberOfChildren":1
            //     }
            // }
        }).then(response => {
          console.log(response.data.goodsListResult);
            if (response.data.goodsListResult) {
            this.tableShow=true
            this.itemList = response.data.goodsListResult
            let goodsListResult = response.data.goodsListResult
            console.log(String(goodsListResult[0].rpInfo.rpCancel.refundable));
            for (let i=0; i<goodsListResult.length; i++) {
              this.itemList[i].rpInfo.rpCancel.refundable = String(goodsListResult[i].rpInfo.rpCancel.refundable)
            // rpInfo.rpCancel.cpChargeList
              // this.itemList[i].rpInfo.rpCancel.cpChargeList = rpInfo.rpCancel.cpChargeList.

            }
            // for (let i of response.data.goodsListResult) {
            //   this.itemList[i].rpInfo.rpCancel.refundable = toString(response.data.goodsListResult[i].rpInfo.rpCancel.refundable)
            // }
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
.demonstration-wrap{
  margin-left: 20px;
  float: left;
  width: 30%;
  // display: flex;
  span{
    width: 40%;
    text-align: center;
    line-height: 40px;
    // display: inline-block;
  }
}
.demonstration-data{
    float: left;
  width: 30%;
  // display: flex;
  span{
    width: 20%;
    text-align: center;
    line-height: 40px;
    // display: inline-block;
  }
}
.demonstration-search{
  margin-top: 20px;
  float: left;
}
</style>
