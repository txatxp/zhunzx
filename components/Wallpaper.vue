<template>
    <div class="announcement">
        <h2 class="astrolog-title">
            <span class="float-left">
                <el-icon class="z-icon"><PictureFilled /></el-icon><span class="z-title-span">星座壁纸</span>
            </span>
            <a :href="`${runtimeConfig.public.APP_URL}/astroWallpaper`" class="float-right">更多>></a>
        </h2>
        
        <div class="wallpaper-box">
            <swiper
            :loop="true"
            :autoplay="true"
            :modules="modules"
            :slides-per-view="8"
            :space-between="10"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            navigation
            :pagination="{ clickable: true }"
            class="swiper"
        >
                <swiper-slide v-for="items in wallpaper" class="wallpaper-item">
                    <a :href="`${runtimeConfig.public.APP_URL}/wallpaperDetail?astroWallpaperName=${items.wallpaper_title}&astroWallpaperUrl=${encodeURIComponent(items.wallpaper_img)}&wallpaper_types=${items.wallpaper_types}`" target="_blank" class="z-banner-link" :title="items.wallpaper_title">
                        <img :src="items.wallpaper_img + '?v=1'" :alt="items.wallpaper_title" class="z-banner-img" width="200">
                        <span class="z-banner-text">{{ items.wallpaper_title }}</span>
                    </a>
                </swiper-slide>
            </swiper>
        </div>
      
       
        
    </div>
  
</template>
<script setup>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative'
import 'swiper/css/thumbs'
const apis = useApis();
const runtimeConfig = useRuntimeConfig();
// 获取api接口
const fortune = ref([])
const result2 = await apis.getWallpaperList({
    pageNum: 1,
    pageSize: 10,
    type: 'mobileWallpaper'
})
console.log(result2, '----result2')
const wallpaper = result2.data.value
const modules = ref([Navigation, Pagination, Scrollbar, A11y, Autoplay])
</script>
<style lang="scss" scoped>
.announcement {
    overflow: hidden;width:100%;float:left;border: 1px solid #e0e0e0;
    background-color:#fff;box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;padding-bottom: 20px;height: 350px;
    box-sizing: border-box;
    .astrolog-title {
        font-size: 16px;
        font-weight: 700;
        color: #333;
        padding: 10px 0px;
        border-bottom: 1px solid #e3e0e0;
        margin: 0px 20px;overflow: hidden;
    }
    
    .z-title-span,.z-icon {
        vertical-align: middle;margin-right: 10px;color: #b88230;
    }
   
    .z-list-icon {
        font-size: 12px;
    }
    .z-list-icon,.z-list-span {
        vertical-align: middle;color: #b83030;

    }
    .z-list-span {
        padding-left: 5px;
        font-size: 14px;
    }
}
.float-left {float:left;}
.float-right{float:right;font-weight: 100;font-size: 12px;position: relative;top: 5px;text-decoration: none;color:#b88230;}
.wallpaper-box {
    height: 280px;position: relative;padding-top: 10px;margin: 0px 20px;
}
.wallpaper-item {
    height: 280px;overflow: hidden;
    
}
.z-banner-text {
    width: 0px;height: 0px;display:inline-block;font-size: 0px;
}
.z-banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>