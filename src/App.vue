<template>
  <div id="app">
    <aHeader></aHeader>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    "aHeader": Header
  },
  data(){
    return {

    }
  }
}
</script>

<style>

</style>