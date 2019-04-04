<template>
  <div>
    <basic-container>
      <div class="banner-text">
        <span>
          <a href="https://avue.top/#/pay" target="_blank">
            <img src="https://img.shields.io/badge/Avue-2.5-green.svg" alt="Build Status">
          </a>
          <img src="https://img.shields.io/badge/Spring%20Boot-2.1.2.RELEASE-yellowgreen.svg" alt="Downloads">
          <img src="https://img.shields.io/badge/Spring%20Cloud-Greenwich.RELEASE-blue.svg" alt="Coverage Status">
        </span>
        <br/>
        <span>
          <el-collapse v-model="activeNames">
            <el-collapse-item title="Complete Microsoft Service Architecture" name="1">
              <div>base on Spring Cloud Gateway</div>
              <div>base on Spring Cloud Greenwich.RELEASE</div>
              <div>base on Spring Boot 2.1.2.RELEASE</div>
            </el-collapse-item>
            <el-collapse-item title="Perfect authority control" name="2">
              <div>Implementation of Authentication System Based on Spring Security OAuth；</div>
              <div>Login Authorization Supporting Whole Process，Server Resource</div>
            </el-collapse-item>
            <el-collapse-item title="Perfect container support" name="3">
              <div>Support docker deployment</div>
              <div>Support Rancher 2 + Kubernetes deployment</div>
              <div>Support enterprise levelPass Rainbond Department</div>
            </el-collapse-item>
            <el-collapse-item title="Ultimately Consistent Distributed Transactions" name="4">
              <div>Deep Customization of Distributed Transaction Solutions Based on Open Source LCN</div>
              <div>Perfect Compatibility 2.X, Optimizing Cluster Deployment and Improving Performance</div>
            </el-collapse-item>
            <el-collapse-item title="SAAS multi-tenancy" name="5">
              <div>Extended Spring Cache Seamless Compatibility</div>
              <div>Supporting development process insensitivity</div>
            </el-collapse-item>
            <el-collapse-item title="Activiti Work Flow" name="6">
              <div>Integration of OAuth2 based on activiti 5.22</div>
              <div>Support online process design</div>
            </el-collapse-item>
            <el-collapse-item title="Dynamic routing" name="7">
              <div>Supporting database to store SCG routing information</div>
              <div>Support front-end dynamic editing</div>
            </el-collapse-item>
            <el-collapse-item title="Other functions" name="8">
              <div>Single sign on</div>
              <div>Extended SBA Support Service Listening Event redis Save</div>
              <div>Extend Turbine to customize presentation UI</div>
              <div>Extending ResourceServer to completely shield implementation details is simpler to develop</div>
            </el-collapse-item>
          </el-collapse>
        </span>
      </div>

    </basic-container>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'wel',
    data() {
      return {
        activeNames: ['1', '2', '3', '4'],
        DATA: [],
        text: '',
        actor: '',
        count: 0,
        isText: false
      }
    },
    computed: {
      ...mapGetters(['website'])
    },
    methods: {
      getData() {
        if (this.count < this.DATA.length - 1) {
          this.count++
        } else {
          this.count = 0
        }
        this.isText = true
        this.actor = this.DATA[this.count]
      },
      setData() {
        let num = 0
        let count = 0
        let active = false
        let timeoutstart = 5000
        let timeoutend = 1000
        let timespeed = 10
        setInterval(() => {
          if (this.isText) {
            if (count == this.actor.length) {
              active = true
            } else {
              active = false
            }
            if (active) {
              num--
              this.text = this.actor.substr(0, num)
              if (num == 0) {
                this.isText = false
                setTimeout(() => {
                  count = 0
                  this.getData()
                }, timeoutend)
              }
            } else {
              num++
              this.text = this.actor.substr(0, num)
              if (num == this.actor.length) {
                this.isText = false
                setTimeout(() => {
                  this.isText = true
                  count = this.actor.length
                }, timeoutstart)
              }
            }
          }
        }, timespeed)
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .wel-contailer {
    position: relative;
  }

  .banner-text {
    position: relative;
    padding: 0 20px;
    font-size: 20px;
    text-align: center;
    color: #333;
  }

  .banner-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    display: none;
  }

  .actor {
    height: 250px;
    overflow: hidden;
    font-size: 18px;
    color: #333;
  }

  .actor:after {
    content: '';
    width: 3px;
    height: 25px;
    vertical-align: -5px;
    margin-left: 5px;
    background-color: #333;
    display: inline-block;
    animation: blink 0.4s infinite alternate;
  }

  .typeing:after {
    animation: none;
  }

  @keyframes blink {
    to {
      opacity: 0;
    }
  }
</style>
