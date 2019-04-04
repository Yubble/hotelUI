<template>
  <div class='hotelDetail-wrap'>
    <basic-container class="hotelDetail">
      <el-container class="hotelDetail-container">
        <!-- <el-header>酒店详情</el-header> -->
        <el-main>
          <div class="hotelDetail-main">
            <h2 class="hotelDetail-title">{{hotelBaseInfo.name}}</h2>
            <p class="hotelDetail-address borderBot">{{hotelBaseInfo.address}}</p>

            <el-row class="form-row">
              <el-col :span="6">
                <label>HotelPhone : </label>
                <span>{{hotelBaseInfo.hotelPhone}}</span>
              </el-col>
              <el-col :span="6">
                <label>PostalCode : </label>
                <span>{{hotelBaseInfo.postalCode}}</span>
              </el-col>
              <el-col :span="6">
                <label>StarRating : </label>
                <span>{{hotelBaseInfo.starRating}}</span>
              </el-col>
            </el-row>

            <el-row class="borderBot">
              <el-col :span="24">
                <p class="description">{{hotelBaseInfo.overview}}</p>
              </el-col>
            </el-row>

            <el-row class="marTop10 borderBot">
              <label for="" class='titLable'>HotelFacilities :</label>
              <el-col :span="24">
                <el-tag class="hotel-tag" size="medium" v-for="(tag, index) in hotelBaseInfo.attributeList" :key="index">{{tag}}</el-tag>
              </el-col>
            </el-row>

            <el-row class="marTop10 borderBot padBot20">
              <label for="" class='titLable'>HotelImages :</label>
              <div class="imagesBox">
                <el-row :gutter="30">
                  <el-col :span="3" class="typesideBar">
                    <el-menu
                      default-active="0"
                      class="el-menu-vertical-demo">
                      <el-menu-item v-for="(type, index) in hotelImages" :index="index + ''" :key="index">
                        <i class="el-icon-menu"></i>
                        <span slot="title" @click="selectHotelImgs(index)">{{type.imageType}}</span>
                      </el-menu-item>
                    </el-menu>
                  </el-col>

                  <el-col :span="21" class="gallery">
                    <img v-for="(imgSrc, ind) in pureImgs" :src="imgSrc" alt="" :key="ind">
                  </el-col>
                </el-row>
              </div>
            </el-row>

            <div class="marTop10 form-row">
              <label for="" class='titLable'>RoomType :</label>
            </div>
            
            <el-row class="form-row roomBox" v-for="(room, index) in roomInfo" :key="index">
              <el-col :span="7">
                <label for="">roomNameEn : </label>
                <span>{{room.roomNameEn}}</span>
              </el-col>
              <el-col :span="5">
                <label for="">roomTypeCode : </label>
                <span>{{room.roomTypeCode}}</span>
              </el-col>
              <el-col :span="12" class="roomImgs">
                <img v-for="(img, ind) in room.imageUrls" :src="img" :key="ind" alt="">
              </el-col>
            </el-row>
            
          </div>
        </el-main>
      </el-container>
    </basic-container>
  </div>
</template>

<script>
import { viewDetail } from '@/api/hotel/introduction'
export default {
  data() {
    return {
      hotelBaseInfo: {
        name: '',
        address: '',
        hotelPhone: '',
        starRating: '',
        postalCode: '',
        overview: '',
        attributeList: []
      },
      hotelImages: [],
      pureImgs: [],
      roomInfo: []
    }
  },
  methods: {
    selectHotelImgs(index) {
      this.pureImgs = this.hotelImages[index].images
    },
    getHotelInfo() {
      let { hotelid, otaid } = this.$route.params
      viewDetail({'hotelId': hotelid, 'otaId': otaid}).then(data => {
        let reqData = data.data
        if (reqData.desc == 'success') {
          this.hotelBaseInfo.name = reqData.data.hotelBaseInfo.nameEn
          this.hotelBaseInfo.address = reqData.data.hotelBaseInfo.addressEn
          this.hotelBaseInfo.hotelPhone = reqData.data.hotelBaseInfo.phone
          this.hotelBaseInfo.starRating = reqData.data.hotelExtendInfo.starRating
          this.hotelBaseInfo.postalCode = reqData.data.hotelExtendInfo.postalCode
          this.hotelBaseInfo.overview = reqData.data.hotelExtendInfo.overview

          // 将特色放进数组队列
          reqData.data.hotelAttributeInfoVos.forEach(element => {
            if (element.hotelAttributeDescOta) {
              this.hotelBaseInfo.attributeList.push(element.hotelAttributeDescOta)
            }
          });

          // 将图片信息放入数组列表
          this.hotelImages = reqData.data.hotelImageInfoVos
          this.pureImgs = this.hotelImages[0].images
          
          // 将房间信息赋值近来
          this.roomInfo = reqData.data.roomBaseInfoVos
        }
      })
    }
  },
  created () {
    
  },
  mounted () {
    // 调用详情接口
    this.getHotelInfo()
  }
}
</script>

<style lang="scss">
  .hotelDetail-container {
    text-align: center;
  }

  .hotelDetail-main {
    text-align: left;

    .hotelDetail-title {
      padding-bottom: 5px;
      margin: 0;
    }

    .hotelDetail-address {
      margin-top: 5px;
      padding-bottom: 10px;
    }
  }

  .borderBot {
    border-bottom: 1px dashed khaki;
  }

  .marTop10 {
    margin-top: 10px;
  }

  .padBot20 {
    padding-bottom: 20px;
  }

  .hotel-tag {
    margin-right: 8px;
    margin-bottom: 8px;
  }

  .titLable {
    font-size: 20px !important;
    margin-bottom: 6px;
    display: block;
  }

  .form-row {
    label {
      font-size: 18px;
    }

    span {
      color: #656565;
    } 
  }

  .description {
    color: #656565;
    text-indent: 2em;
  }

  .imagesBox {
    border: 1px solid #acacac;
    overflow: hidden;
    height: 250px;
    // box-shadow: 0px 0px 5px #656565;

    .typesideBar {
      border-right: 1px solid #acacac;
      height: 240px;
      overflow-y: auto;
      box-sizing: border-box;
    }

    .gallery {
      display: flex;
      margin: 10px 0;
      overflow-x: auto;
      box-sizing: border-box;
      // height: 240px;
      img {
        // width: 30%;
        height: 230px;
        display: block;
        margin-right: 20px;
      }
    }
  }

  .roomtype-popoover {
    margin-right: 20px;
  }

  .roomBox:not(:last-child) {
    border-bottom: 1px solid #acacac;
    margin-bottom: 10px;
  }

  .roomImgs {
    overflow-x: auto;
    display: flex;
    border-left: 1px solid #acacac;
    padding-left: 10px;

    img {
      height: 230px;
      display: block;
      margin-right: 20px;
    }
  }

</style>
