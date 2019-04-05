<template>
    <div id="app">
        <mainHeader></mainHeader>
        <div class="app-container">
            <sideNav class="app-nav"></sideNav>
            <router-view class="app-view"></router-view>
        </div>
        <mainFooter></mainFooter>
    </div>
</template>

<script>
  import mainHeader from '../components/header.vue'
  import mainFooter from '../components/footer.vue'
  import sideNav from '../components/side-nav.vue'

  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      mainHeader,
      sideNav,
      mainFooter
    }
  }
</script>

<style lang="scss">
    @import '../assets/scss/index.scss';

    .app-container {
        margin: 48px auto;
        width: 90%;
        background-color: #fff;
        box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
        display: flex;
        min-height: calc(100vh - 224px - 96px);
        .app-nav {
            width: 210px;
        }
        .app-view {
            width: calc(100% - 215px);
            padding: 32px 48px 48px;
            box-sizing: border-box;
        }
    }
</style>
