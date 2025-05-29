<template>
      <allWallpaper :list="wallpaper" v-if="wallpaper" :pageNum="pageNum"></allWallpaper>
</template>
<script setup>
const route = useRoute();
useSeoMeta({
  title: '星座壁纸 - 准准',
  keywords: '星座壁纸,星座壁纸下载,手机壁纸,电脑壁纸,pc壁纸',
  description: '这个一个提供星座壁纸的网站',
})

const apis = useApis();

const pageNum = ref((!isNaN(route.query.page) ? Number(route.query.page) : null) || 1);
const pageSize = ref(60);
const result2 = await apis.getWallpaperList({
    pageNum: pageNum,
    pageSize: pageSize,
})

const wallpaper = result2.data.value
wallpaper.forEach((item, index) => {
    item.url = item.wallpaper_img
    item.title = item.wallpaper_title
    item.index = index
    item.item = item
})
</script>
<style lang="scss" scoped>
.z-wallpaper {
  width: 100%;
  .z-wallpaper-box {
    width: 1400px;margin:auto;
  }
}
</style>