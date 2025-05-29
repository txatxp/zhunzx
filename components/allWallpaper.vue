<template>
    
    <div class="z-wallpaper">
      
      <div class="z-wallpaper-box">
        <div class="astro-header">
            <h1 class="astro-wallpaper">星座壁纸</h1>
            <a :href="runtimeConfig.public.APP_URL + '/astroWallpaper?page=' + (pageNum + 1)" class="z-change" v-if="list.length">换一批</a>
            <a :href="runtimeConfig.public.APP_URL + '/astroWallpaper?page=1'" class="z-change" v-else>回到首页</a>
        </div>
        <el-empty description="已经到头了，没有更多壁纸了！" v-if="list.length == 0" />
        <div class="wallpaper-box" ref="masonryContainer">
            <a :href="runtimeConfig.public.APP_URL + `/wallpaperDetail?astroWallpaperName=${img.wallpaper_title}&astroWallpaperUrl=${encodeURIComponent(img.wallpaper_img)}&wallpaper_types=${img.wallpaper_types}`" v-for="img in list" class="macy-item" :title="img.wallpaper_title">
                <img :src="img.wallpaper_img" class="w-full" :alt="img.wallpaper_title" />
                <span class='text'>{{ img.wallpaper_title }}</span>
            </a>    
        </div>
      </div>
    </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const props = defineProps({
    list: {
        type: Array,
        default: () => ([])
    },
    pageNum: {
        type: Number,
        default: 1
    }
})
const masonryContainer = ref(null)
console.log(props.list, 'props.list')
onMounted(() => {
  if (process.client) { // 确保仅在客户端执行
    // const Macy = require('macy')
    new Macy({
      container: masonryContainer.value,
      columns: 4,
      margin: 20,
      breakAt: {
        768: 2,
        480: 1
      }
    })
  }
})
</script>
<style lang="scss" scoped>
.z-wallpaper {
  width: 100%;background:url("https://file.zhunzx.cn/zhanbu-bg2.png?v=3") no-repeat center top;
  background-size: cover;padding: 30px 0px;
  .z-wallpaper-box {
    width: 1400px;
    margin: auto;padding: 0px 30px 20px 30px;box-sizing: border-box;background-color:#fff;border-radius: 10px;overflow: hidden;
  }
  .wallpaper-box {
    overflow: hidden;
  }
  .astro-header {
    overflow:hidden;line-height: 70px;border-bottom: 1px solid #5200ff;margin-bottom: 20px;
  }
  .astro-wallpaper {
    margin:auto;color:#333;clear: both;color: #6600d2;font-size: 22px;
    float:left;
  }
  .z-change {
    float:right;font-size: 16px;color:#6600d2;
  }
  .macy-item { 
    margin-bottom: 20px; display:block;overflow:hidden;
    .text {
        position: absolute;transition: all 0.3s ease-in-out;
        top: -50px;width: 100%;left:0px;text-align: center;color:#fff;font-size: 18px;
        height: 50px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        line-height: 50px;
    }
    &:hover {
        .text {
            top: 0px;
        }
            
    }
  }
  .w-full {
    width: 100%;border-radius: 10px;
  }
}
</style>