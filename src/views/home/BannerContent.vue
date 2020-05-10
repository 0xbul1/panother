<template>
  <div class="banner-container">
    <div id="header-container">
      <a-row>
        <div class="mobile-menu-btn">
          <a-icon type="bars" />
        </div>
        <a-col
          class="header-nav-logo"
          :xs="24"
          :sm="24"
          :md="6"
          :lg="4"
          :xl="4"
          :xxl="4"
        >
          <img src="../../assets/homeimg/logo.svg" alt="" />
        </a-col>
        <a-col :xs="0" :sm="0" :md="18" :lg="20" :xl="20" :xxl="20">
          <div class="header-nav-menu">
            <a-button id="header-nav-menu-donation" type="primary">
              捐赠
            </a-button>
            <a-button id="header-nav-menu-coffee" type="primary">
              咖啡屋
            </a-button>
            <a-menu mode="horizontal" id="nav">
              <a-menu-item key="1">
                首页
              </a-menu-item>
              <a-menu-item key="2">
                关于
              </a-menu-item>
              <a-menu-item key="3">
                使用指南
              </a-menu-item>
            </a-menu>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="banner-container-module">
      <a-row>
        <a-col
          class="banner-container-left"
          :xs="24"
          :sm="24"
          :md="24"
          :lg="11"
          :xl="12"
          :xxl="12"
        >
          <div class="banner-container-show">
            <div
              class="banner-show-text wow fadeInUp"
              style="visibility: visible; animation-name: fadeInUp;"
            >
              让知识无处可藏
            </div>
            <p
              data-wow-delay="0.3s"
              class="banner-show-intro wow fadeInUp"
              style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
            >
              <strong>盘他</strong>
              是专注于提高工作效率的组织，致力于寻找多种知识资源，为所有用户提供简单高效、专业可靠的解决方案。
            </p>
            <div
              data-wow-delay="0.6s"
              class="banner-show-btn wow fadeInUp"
              style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
            >
              <a
                v-show="continueButton"
                @click="handleContinueButtonShow"
                href="javascript:void(0)"
                >探索</a
              >
              <transition enter-active-class="animated pulse">
                <!-- <transition enter-active-class="animated rollIn"> -->
                <!-- <transition enter-active-class="animated bounceInUp"> -->
                <!-- <transition enter-active-class="animated tada"> -->
                <a-input-search
                  v-show="!continueButton"
                  placeholder="Key words"
                  enter-button="盘他一下"
                  size="large"
                  id="wow"
                />
              </transition>
            </div>
          </div>
        </a-col>
        <a-col :xs="0" :sm="0" :md="0" :lg="13" :xl="12" :xxl="12">
          <div
            class="banner-show-lottie wow fadeInUp"
            style="visibility: visible; animation-name: fadeInUp;"
          >
            <div id="lottie"></div>
          </div>
        </a-col>
      </a-row>
      <div class="banner-container-ornament">
        <img
          src="../../assets/homeimg/banner1.svg"
          draggable="false"
          class="add-animations"
        />
        <img
          src="../../assets/homeimg/banner1.svg"
          draggable="false"
          class="add-animation"
        />
        <img
          src="../../assets/homeimg/banner2.svg"
          draggable="false"
          class="add-animation"
        />
        <img
          src="../../assets/homeimg/banner2.svg"
          draggable="false"
          class="add-animation"
        />
        <img
          src="../../assets/homeimg/banner3.svg"
          draggable="false"
          class="add-animation"
        />
        <img
          src="../../assets/homeimg/banner4.svg"
          draggable="false"
          class="add-animationr"
        />
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import datajson from '../../assets/lottie/lottie.json';
import WOW from 'wow.js';
export default {
  name: 'BannerContent',
  mounted() {
    this.lottieInit();
    this.wowInit();
  },
  data() {
    return {
      continueButton: true,
    };
  },
  methods: {
    wowInit() {
      const options = {
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
      };
      var wow = new WOW(options);
      wow.init();
    },
    lottieInit() {
      const icon = document.getElementById('lottie');
      lottie.loadAnimation({
        container: icon, // 包含动画的dom元素
        renderer: 'svg', // 渲染出来的是什么格式
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: datajson, // 动画json的路径
      });
    },
    show() {
      this.showloading = true;
      lottie.play();
    },
    hidden() {
      this.showloading = false;
      lottie.stop();
    },
    handleContinueButtonShow() {
      this.continueButton = false;
    },
  },
};
</script>

<style lang="less" scoped>
.banner-container {
  background: linear-gradient(225deg, #fff, #fff3f0);
  min-height: 620px;
  // max-height: 803px;
  height: 100vh;
  position: relative;
  overflow: hidden;
  #header-container {
    .ant-row {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      max-width: calc(100% - 80px) !important;
      .header-nav-logo {
        img {
          height: 50px;
        }
      }
      .mobile-menu-btn {
        display: none;
        height: 100%;
        position: absolute;
        font-size: 1.4375rem;
        margin-left: -1.25rem;
      }
      #nav {
        float: right;
        border: 0;
        font-size: 14px;
        background: transparent !important;
        &.ant-menu-horizontal {
          .ant-menu-item-selected {
            border-top: 2px solid @primary-color !important;
            border-bottom: 2px solid transparent !important;
          }
          .ant-menu-item,
          .ant-menu-submenu {
            text-align: center;
            height: 64px;
            line-height: 60px;
            min-width: 72px;
            border-top: 2px solid transparent;
            &:hover {
              border-top: 2px solid @primary-color !important;
              border-bottom: 2px solid transparent !important;
            }
          }
        }
      }
      #header-nav-menu-coffee,
      #header-nav-menu-donation {
        float: right;
        margin-top: 16px;
        margin-left: 16px;
      }
    }
  }
  .banner-container-module {
    width: 1440px;
    max-width: calc(100% - 80px);
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    .ant-row {
      height: inherit;
      .banner-container-left {
        height: inherit;
        .banner-container-show {
          position: relative;
          top: 20%;
          z-index: 1;
          margin-left: 8.5%;
          .banner-show-text {
            font-size: 3.4em;
            font-weight: 800;
            color: #000;
            position: relative;
          }
          .banner-show-intro {
            margin-top: 2.3%;
            margin-bottom: 0;
            color: #8c736a;
            font-size: 1.14em;
            font-weight: 200;
            position: relative;
            max-width: 700px;
          }
          .banner-show-btn {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            margin-top: 10%;
            a {
              padding-left: 30px;
              padding-right: 30px;
              display: block;
              height: 40px;
              min-width: 134px;
              line-height: 40px;
              color: #fff;
              font-size: 1.14em;
              text-align: center;
              -webkit-box-shadow: 0 8px 14px rgba(228, 107, 38, 0.2) !important;
              box-shadow: 0 8px 14px rgba(228, 107, 38, 0.2) !important;
              background: linear-gradient(
                25deg,
                #fe9855,
                #f95c54 80%,
                #f96b54
              ) !important;
              cursor: pointer;
              border-radius: 50px;
              -webkit-transition: all 0.3s;
              transition: all 0.3s;
              &:hover {
                color: #fff;
                background: linear-gradient(
                  60deg,
                  #fd8e31,
                  #ff4033 80%,
                  #f73f23
                ) !important;
                -webkit-box-shadow: 0 10px 10px rgba(228, 107, 38, 0.2) !important;
                box-shadow: 0 10px 10px rgba(228, 107, 38, 0.2) !important;
                -webkit-transform: translateY(-2px);
                transform: translateY(-2px);
              }
              &:active,
              &:hover,
              &:link,
              &:visited {
                border: none;
                outline: none;
                text-decoration: none;
              }
            }
          }
        }
      }
      .banner-show-lottie {
        margin-left: 18%;
        // margin-top: 20%;
        // width: 90%;
      }
    }
    .banner-container-ornament {
      img {
        &:first-child {
          height: 400px;
          position: absolute;
          bottom: -196px;
          left: -157px;
        }
        &:nth-child(2) {
          height: 100px;
          position: absolute;
          top: -69px;
          left: 385px;
        }
        &:nth-child(3) {
          height: 100px;
          position: absolute;
          bottom: 20px;
          right: 30px;
        }
        &:nth-child(4) {
          height: 80px;
          position: absolute;
          bottom: 100px;
          left: -30px;
        }
        &:nth-child(5) {
          height: 60px;
          position: absolute;
          top: 130px;
          left: 45%;
        }
        &:nth-child(6) {
          height: 250px;
          position: absolute;
          top: 27%;
          left: 37%;
          -webkit-transform: rotate(11deg);
          transform: rotate(11deg);
          opacity: 0.2;
        }
      }
      .add-animation {
        -webkit-animation: ornamentAni 3s infinite;
        animation: ornamentAni 3s infinite;
      }
      .add-animationr {
        -webkit-animation: ornamentAnir 60s infinite;
        animation: ornamentAnir 60s infinite;
      }
      .add-animations {
        -webkit-animation: ornamentAnis 60s infinite;
        animation: ornamentAnis 60s infinite;
      }
      @-webkit-keyframes ornamentAni {
        0% {
          -webkit-transform: translateY(-4px);
          transform: translateY(-4px);
        }
        50% {
          -webkit-transform: translateY(4px);
          transform: translateY(4px);
        }
        to {
          -webkit-transform: translateY(-4px);
          transform: translateY(-4px);
        }
      }
      @keyframes ornamentAni {
        0% {
          -webkit-transform: translateY(-4px);
          transform: translateY(-4px);
        }
        50% {
          -webkit-transform: translateY(4px);
          transform: translateY(4px);
        }
        to {
          -webkit-transform: translateY(-4px);
          transform: translateY(-4px);
        }
      }
      @keyframes ornamentAnir {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        50% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
        to {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
      }
      @keyframes ornamentAnis {
        0% {
          -webkit-transform: skew(0deg);
          transform: skew(0deg);
        }
        50% {
          -webkit-transform: skew(360deg);
          transform: skew(360deg);
        }
        to {
          -webkit-transform: skew(0deg);
          transform: skew(0deg);
        }
      }
    }
    #lottie {
      background-color: transparent;
      width: 100%;
      height: 100%;
      min-width: 31.25rem;
      display: block;
      overflow: hidden;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      text-align: center;
      opacity: 1;
    }
  }
}
</style>
