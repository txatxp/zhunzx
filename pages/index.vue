<template>
    <div class="z-index">
        <div class="z-list">
            <AstrologSearch></AstrologSearch>
            <Astro></Astro>
            <Announcement></Announcement>
        </div>
        <div class="z-list">
            <AstrologDivination></AstrologDivination>
        </div>
        
        <div class="z-list">
            <AstroEmotions></AstroEmotions>
            <AstroFinancial></AstroFinancial>
            <AstroCareer></AstroCareer>
        </div>
        <div class="z-list">
            <Wallpaper></Wallpaper>
        </div>
    </div>
    
</template>
<script setup>

import AstrologSearch from '~/components/AstrologSearch.vue'
useSeoMeta({
  title: '十二星座_星盘生成_占星课程_星座运势_占卜 - 准准网',

  keywords: '准准网,星座,星盘,占星,星座运势,12星座,占卜',
  description: '这是准准占星师的一个网站，专门提供占卜事情、运势分析、星座查询、星盘生成、星盘分析、情感分析、心里咨询、占星视频课程等服务。',
})
// 获取api接口
const apis = useApis()
const article = ref([])
const res = await apis.getArticleList({
    keywords: 'zhunzhun',
    pageNum: 1,
    pageSize: 4
})
article.value = res.data.value.data.list

onMounted(() => {

})
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1400px) { 
    .z-index {
        width: 1400px;margin:auto;min-height: 50vh;
        padding: 40px 0;
        .z-list {
            overflow: hidden;padding-bottom: 20px;
        }
    }
}
@media screen and (max-width: 1400px) {
    
}
</style>