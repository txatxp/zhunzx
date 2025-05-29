<template>
  <header class="z-header">
    <div class="z-menu-box">
      <a :href="APP_URL" title="准准" class="z-logo"
        ><img :src="APP_URL + logo" alt="准准" class="z-logo-img"
      /></a>
      <nav class="z-nav">
        <ul class="z-menu">
          <li
            :class="{
              'z-menu-list': true,
              'z-menu-active': routeName === 'index',
            }"
          >
            <a :href="APP_URL" class="z-menu-link">首页</a>
          </li>
          <li
            :class="{
              'z-menu-list': true,
              'z-menu-active': routeName === 'divination',
            }"
          >
            <a :href="APP_URL + '/divination'" class="z-menu-link">占卜</a>
          </li>
          <li
            :class="{
              'z-menu-list': true,
              'z-menu-active': routeName === 'fortune',
            }"
          >
            <a :href="APP_URL + '/fortune'" class="z-menu-link">星座运势</a>
          </li>
          <li
            :class="{
              'z-menu-list': true,
              'z-menu-active': routeName === 'astrolabe',
            }"
          >
            <a :href="APP_URL + '/astrolabe'" class="z-menu-link">星盘生成</a>
          </li>
          <li
            :class="{
              'z-menu-list': true,
              'z-menu-active': routeName === 'course',
            }"
          >
            <a :href="APP_URL + '/course'" class="z-menu-link">占星课程</a>
          </li>
          <li
            :class="{
              'z-menu-list': true,
              'z-menu-active': routeName === 'astro',
            }"
          >
            <a :href="APP_URL + '/astro'" class="z-menu-link">十二星座</a>
          </li>
          <li
            :class="{
              'z-menu-list': true,
              'z-menu-active': routeName === 'astroWallpaper',
            }"
          >
            <a :href="APP_URL + '/astroWallpaper'" class="z-menu-link">星座壁纸</a>
          </li>
          <li
            :class="{
              'z-menu-list': true,
              'z-menu-active': routeName === 'zhunzhun',
            }"
          >
            <a :href="APP_URL + '/zhunzhun'" class="z-menu-link">准准</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
import logo from "/assets/img/logo.png";
const apis = useApis();
const route = useRoute();
const routeName = route.name;
const APP_URL = ref("/");
const runtimeConfig = useRuntimeConfig();
APP_URL.value = runtimeConfig.public.APP_URL ?? "/";
const { data } = await apis.getDemo();
console.log(data.value.data, "-------");
onMounted(() => {
  console.log(data.value, "-------!!!", routeName);
});
</script>

<style scoped lang="scss">

@media screen and (min-width: 1400px) {
  .z-header {
    height: 60px;
    background: url("/xingkong.png") repeat,#120f35;
    background-size: 100% auto;
    .z-menu-box {
      width: 1400px;
      margin: auto;
    }
    .z-logo,
    .z-nav {
      float: left;
    }
    .z-logo {
      width: 172px;
      height: 60px;
      
      text-align: center;
      background-color: #fff;
      .z-logo-img {
        position: relative;
        top: 10px;height: 40px;
      }
    }
    .z-nav {
      overflow: hidden;
      height: 60px;
      line-height: 60px;
      .z-menu {
        padding-left: 35px;
        display: block;
        overflow: hidden;
      }
      .z-menu-active {
        background: url("/assets/img/menu-left-icon.png") no-repeat 0px center;
        .z-menu-link {
          background: url("/assets/img/menu-right-icon.png") no-repeat right 4px;
        }
      }
      .z-menu-list {
        float: left;
        padding-left: 35px;
      }
      .z-menu-link {
        color: #fff;
        text-decoration: none;
        padding-right: 35px;
      }
    }
  }
}
@media screen and (max-width: 1400px) {
  .z-header {
    height: 60px;;
    background: url("/xingkong.png") repeat,#120f35;
    background-size: 100% auto;
    .z-menu-box {
      .z-logo {
        display: block;
        overflow:hidden;background: #fff;;
        height: 50px;padding-top: 10px;padding-left: 10px;
        width: 160px;
      }
      .z-logo-img {
        height: 40px;
      }
      .z-nav {
        display: block;position: fixed;z-index: 9999;
        width: 100%;height: 50px;bottom:0px;left:0px;
        background-color: #fff;border-top: 1px solid #eee;
        .z-menu-list {
          float:left;
        }
        .z-menu {
          display: flex;
          justify-content: space-between;
          overflow: hidden;padding-top: 10px;
          padding: 0px 15px;height: 50px;
        }
        .z-menu-active {
          .z-menu-link {
            color:orange;
          }
        }
        .z-menu-list {
          float: left;
        }
        .z-menu-link {
          color: #000;
          text-decoration: none;
          font-size: 14px;
          line-height: 50px;;
        }
      }
    }
  }
  
}
</style>
