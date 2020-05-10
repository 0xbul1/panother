<template>
  <a-layout>
    <a-layout-content>
      <banner-content></banner-content>
    </a-layout-content>
    <!-- <a-layout-footer>Footer</a-layout-footer> -->
  </a-layout>
</template>

<script>
import BannerContent from '../views/home/BannerContent';
export default {
  name: 'Home',
  components: {
    BannerContent,
  },
};
</script>
