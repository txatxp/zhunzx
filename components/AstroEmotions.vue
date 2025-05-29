<template>
    <div class="astrolog-img-box">
        <h2 class="astrolog-title astrolog-title2">
            <span class="float-left">
                <el-icon class="z-icon"><Star /></el-icon><span class="z-title-span">星座情感</span>
            </span>
            <a :href="`${runtimeConfig.public.APP_URL}/allarticle?type=astroEmotions&name=星座情感`" class="float-right">更多>></a>
        </h2>
        <a :href="`${runtimeConfig.public.APP_URL}/article/detail/${item2.id}`" class="z-announcement-list" v-for="item2 in astroEmotions" :key="item2.id" target="_blank">
            <el-icon class="z-list-icon"><ArrowRight /></el-icon>
            <span class="z-list-span">{{ item2.title }}</span>
        </a>
    </div>
</template>
<script setup>
const apis = useApis();
const runtimeConfig = useRuntimeConfig();
// 获取api接口
const astroEmotions = ref([])
const result2 = await apis.getArticleList({
    keywords: 'astroEmotions',
    pageNum: 1,
    pageSize: 6
})
astroEmotions.value = result2.data.value.data.list
console.log(astroEmotions, '---astroEmotions')
</script>
<style lang="scss" scoped>
.astrolog-img-box {
    overflow: hidden;width:450px;float:left;border: 1px solid #e0e0e0;
    background-color:#fff;box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;padding-bottom: 20px;
    .astrolog-title {
        font-size: 16px;
        font-weight: 700;
        color: #333;
        padding: 10px 0px;
        border-bottom: 1px solid #f3b8db;
        margin: 0px 20px;overflow: hidden;
    }
    .z-title-span,.z-icon {
        vertical-align: middle;margin-right: 10px;color: #cc00ff;
    }
    .z-announcement-list {
        display: block;
        height: 45px;border-bottom: 1px dashed #eee;
        line-height: 45px;text-decoration: none;color:#333;margin: 0px 20px;
        white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
    }
    .z-list-icon {
        font-size: 12px;
    }
    .z-list-icon,.z-list-span {
        vertical-align: middle;color: #545252;

    }
    .z-list-span {
        padding-left: 5px;
        font-size: 14px;
    }
    .float-left {float:left;}
    .float-right{float:right;font-weight: 100;font-size: 12px;position: relative;top: 5px;text-decoration: none;color:#cc00ff;}
}
</style>