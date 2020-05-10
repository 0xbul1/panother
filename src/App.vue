<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <loading v-if="loading"></loading>
    <router-view v-else />
  </div>
</template>
<script>
import loading from './views/Loading';
export default {
  name: 'app',
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  },
  components: {
    loading,
  },
};
</script>
<style lang="less"></style>
