<template>
    <div class="z-banner">
        <swiper
            :loop="true"
            :autoplay="true"
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            navigation
            :pagination="{ clickable: true }"
            class="swiper"
        >
            <swiper-slide v-for="items in banner">
                <a :href="items.banner_link" target="_blank" class="z-banner-link">
                    <img :src="items.banner_img" :alt="items.banner_title" class="z-banner-img">
                    <span class="z-banner-text">{{ items.banner_title }}</span>
                </a>
            </swiper-slide>
        </swiper>
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
const apis = useApis()
const res = await apis.getBannerList()
const banner = res.data.value
const onSwiper = (swiper) => {
   
};
const onSlideChange = () => {
};
const modules = ref([Navigation, Pagination, Scrollbar, A11y, Autoplay])
</script>
<style lang="scss" scoped>
.z-banner {
    width: 100%;
    .z-banner-link {
        position: relative;display: block;
        .z-banner-text {
            display: block;
            height: 60px;position: absolute;
            line-height: 60px;width:100%;bottom:0px;left: 0px;
            color:#fff;font-size: 18px;background: rgba(255,255,255,0.2);
            padding-left: 20px;font-weight: bold;
        }
    }
    .z-banner-img {
        width: 100%;display: block;
    }
    :deep(.swiper-pagination) {
        bottom: 15px;
    }
    :deep(.swiper-pagination-bullet) {
        width: 15px;height: 15px;
        background-color:#b400ff;
        opacity: 1;
        transition: 0.5s linear;
        box-shadow: 0px 0px 5px #fff;
        border: 1px solid #fff;
    }
    :deep(.swiper-pagination-bullet-active) {
        background-color: #fff;width: 40px;
        border-radius: 7.5px;;
    }
}
</style>