<template>
      <div class="z-wallpaper">
      
      <div class="z-wallpaper-box">
        <div class="astro-header">
            <h1 class="astro-wallpaper">星座壁纸</h1>
            <a :href="runtimeConfig.public.APP_URL + '/astroWallpaper?page=1'" class="z-change">回到首页</a>
        </div>
        <a :href="astroWallpaperUrl" :download="img" class="download-img">下载该壁纸</a>
        <img :src="astroWallpaperUrl" :alt="astroWallpaperName" :style="`display: block;width:${wallpaper_types === 'mobileWallpaper' ? '50%;' : '100%;'}margin:50px auto;clear:both;`" />
      </div>
    </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const astroWallpaperName = route.query.astroWallpaperName;
const astroWallpaperUrl = route.query.astroWallpaperUrl;
const wallpaper_types = route.query.wallpaper_types
let arr = astroWallpaperUrl.split('/');
const img = arr[arr.length - 1]
useSeoMeta({
  title: `${astroWallpaperName}壁纸 - 准准`,
  keywords: '星座壁纸,星座壁纸下载,手机壁纸,电脑壁纸,pc壁纸',
  description: '这个一个提供星座壁纸的网站',
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
        margin-bottom: 20px; 
        .text {
            position: absolute;
            top: 15px;width: 100%;left:0px;text-align: center;color:#fff;font-size: 16px;
        }
    }
    .w-full {
        width: 100%;border-radius: 10px;
    }
    }
    .download-img {
        display: block;width: 160px;height:45px;border-radius: 12px;line-height: 45px;text-align: center;background-color:#1284f9;margin-bottom: 10px;text-decoration:none;color:#fff;
        float:right;
    }
</style>