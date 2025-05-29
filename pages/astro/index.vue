<template>
    <div class="z-astro">
      <div class="z-astro-box">
        <h1 class="z-title">十二星座</h1>
        <a :href="`${runtimeConfig.public.APP_URL}/astro/${item.id}`" v-for="item in astro" class="z-astro-link">
          <img :src="item.img" :alt="`${item.title}图片`" height="130" width="130" class="z-astro-img">
          <div class="z-right">
            <h2 class="z-title-h2">{{ item.title }}-{{item.name}}</h2>
            <p class="z-p">生日：{{ item.date }}</p>
            <p class="z-p">相容星座：{{ item.astro }}</p>
            <p class="z-p">简单描述：{{ item.description }}</p>
            <p class="z-p"><span class="z-more">详情>></span></p>
          </div>
        </a>
      </div>
    </div>
</template>
<script setup>
definePageMeta({
  layout: 'astrolog'
})
useSeoMeta({
    title: `十二星座 - 准准`,
    keywords: "十二星座,白羊座,金牛座, 双子座, 巨蟹座, 狮子座, 处女座, 天秤座, 天蝎座, 射手座, 摩羯座, 水瓶座, 天秤座, 双鱼座,准准",
    description: "这是准准占星师的一个网站，专门提供占卜事情、星座查询、运势分析、星座查询、星盘生成、星盘分析、情感分析、心理咨询、占星视频课程等服务。",
});
const runtimeConfig = useRuntimeConfig();
const apis = useApis()
const res = await apis.getAstro()
const astro = ref([])
astro.value = res.data.value.data.list
</script>
<style scoped lang="scss">
.z-astro {
  min-height: 80vh;background-color: #fef4d7;
  padding: 20px;margin-top: 20px;width: 100%;margin:auto;
  .z-astro-box {
    width: 1400px;margin:auto;padding: 30px 30px 0px 30px;background-color: #fff;border-radius: 10px;
  }
  .z-title {
    display: block;
    padding-bottom: 20px;
    font-size: 22px;
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