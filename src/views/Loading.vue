<template>
  <div id="loading"></div>
</template>

<script>
import lottie from 'lottie-web';
import datajson from '../assets/lottie/loading.json';
export default {
  name: 'Loading',
  mounted() {
    this.lottieInit();
  },
  methods: {
    lottieInit() {
      const icon = document.getElementById('loading');
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
  },
};
</script>

<style lang="less" scoped>
// .loading {
//   margin: 150px auto;
//   vertical-align: middle;
//   text-align: center;
//   border: 0 solid transparent;
//   border-radius: 50%;
//   position: relative;
//   width: 3em;
//   height: 3em;
//   pointer-events: none;
//   &::before,
//   &::after {
//     content: '';
//     border: 0.2em solid #f96b54;
//     border-radius: 50%;
//     width: inherit;
//     height: inherit;
//     position: absolute;
//     top: 0;
//     left: 0;
//     -webkit-animation: loading 1s linear infinite;
//     animation: loading 1s linear infinite;
//     opacity: 0;
//   }
//   &:before {
//     -webkit-animation-delay: 1s;
//     animation-delay: 1s;
//   }
//   &::after {
//     -webkit-animation-delay: 0.5s;
//     animation-delay: 0.5s;
//   }
// }
#loading {
  background-color: #38c172;
  width: 100%;
  height: 100vh;
  min-width: 31.25rem;
  display: block;
  overflow: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  text-align: center;
  opacity: 1;
}
</style>
