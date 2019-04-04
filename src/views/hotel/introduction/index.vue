<template>
  <div class="app-container calendar-list-container">
    <basic-container class="introduction">
      <el-form>
        <el-form-item label="查询酒店信息">
          <el-input v-model="form.hotel" placeholder="请选择输入酒店ID。如 60000001"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="introduction__box" v-if="data.title">
        <h2 class="introduction__title">{{data.title}}</h2>
        <p class="introduction__brif">8 Port Road,港湾站地区,新加坡,新加坡</p>
        <div class="introduction__pic">
          <img v-for="(item, i) in data.pic" :key="i" :src="item">
        </div>
        <div class="introduction__desc">
          <h3>酒店介绍</h3>
          <p v-for="(item, i) in data.desc" :key="i">{{item}}</p>
        </div>
        <div class="introduction__facilities">
          <h3>酒店设施</h3>
          <ul>
            <li v-for="(item, i) in data.facilities" :key="i">
              <span :class="['iconfont', item.icon]"></span>
              <span class="introduction__facilities_text">{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </basic-container>
  </div>
</template>

<script>
import { tableOption } from '@/const/crud/hotel/order'
import { mapGetters } from 'vuex'
import { mockData } from '@/api/hotel/mock-introduction.js'

export default {
  data() {
    return {
      form: {
        hotel: ''
      },
      data: {}
    }
  },

  created() {
    // this.data = mockData.data
  },

  methods: {
    onSubmit(e) {
      e.preventDefault()
      if (this.form.hotel === '60000001') {
        this.data = mockData.data
      }
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
</style>
