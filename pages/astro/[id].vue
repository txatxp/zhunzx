<template>
    <div class="z-astro-box">
      <div class="z-astro">
        <h1 class="z-title">{{ astro.title }}</h1>
        <div v-html="astro.peculiarity"></div>
        <gg></gg> 
      </div>
      
    </div>
</template>
<script setup>
definePageMeta({
  layout: 'astrolog'
})
const route = useRoute()
const { id } = route.params

const apis = useApis()
const res = await apis.getAstroDetail(id)
const astro = ref([])
astro.value = res.data.value.data.list

useSeoMeta({
    title: `${astro.value.title}_${astro.value.name} - 准准`,
    keywords: `${astro.value.title},${astro.value.name},准准`,
    description: "这是准准占星师的一个网站，专门提供占卜事情、星座查询、运势分析、星座查询、星盘生成、星盘分析、情感分析、心理咨询、占星视频课程等服务。",
});
</script>
<style scoped lang="scss">
.z-astro-box {
  width: 100%;background:url("https://file.zhunzx.cn/zhanbu-bg2.png?v=3") no-repeat center top;
  background-size: cover;padding: 30px 0px;
}
.z-astro {
  min-height: 80vh;background: #fff;
  padding: 40px;margin-top: 20px;
  width: 1400px;margin:auto;border-radius: 12px;
  .z-title {
    display: block;
    padding-bottom: 30px;
    font-size: 22px;
    text-align: center;
  }
  .z-astro-link {
    display: block;overflow:hidden;position: relative;
    text-decoration: none;padding-bottom: 40px;
    .z-astro-img {
      position: absolute;
      left: 0px;left:0px;
    }
    .z-right {
      padding-left: 150px;
    }
    .z-title-h2 {
      font-size: 18px;
      color:#000;
    }
    .z-p {
      display: block;
      padding-top: 6px;
      font-size: 15px;
      color:#5d5d5d;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .z-more {
      color:#0187c9;
    }
  }
}
</style>