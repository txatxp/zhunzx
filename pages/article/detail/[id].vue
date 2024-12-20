<template>
    <div class="z-article-detail">
        <div class="z-left">
            <h1 class="z-title">{{ data.title }}</h1>
            <p class="z-info">
                <span class="z-author">作者：准准</span>
                <span class="z-time">发布时间：{{ data.createTime || data.updateTime }}</span>
                <span class="z-label">标签：<a :href="runtimeConfig.public.APP_URL" class="z-link">{{ data.name }}</a></span>
            </p>
            <br>
            <div v-html="data.text" class="z-article-content"></div>
        </div>
        <div class="z-right">
            <h3 class="z-right-title">相关文章</h3>
            <ul class="z-right-ul">
                <li class="z-right-item" v-for="item in article"><a :href="`${runtimeConfig.public.APP_URL}/article/detail/${item.id}`" class="z-recomment-link" :title="item.title">{{ item.title }}</a></li>
            </ul>
        </div>
        <gg :auto-with="true"></gg>
    </div>
</template>
<script setup>
// 路由
const route = useRoute()
const apis = useApis()
const runtimeConfig = useRuntimeConfig();
const { id } = route.params
let res = await apis.getArticleDetail({ id })
const data = res.data.value.data.data
useSeoMeta({
  title: `准准文章详情_${data.title} - 准准`,
  keywords: `准准,准准文章详情,${data.title}`,
})


// 获取api接口
const article = ref([])
const result = await apis.getArticleList2({})
article.value = result.data.value.data.list
</script>
<style lang="scss" scoped>
.z-article-detail {
    padding: 30px;
    background-color:#fff;margin-top: 20px;
    overflow: hidden;
    .z-article-content {
        :deep(img) {
            max-width: 100%!important;
        }
        :deep(p) {
            font-size: 16px;
            color:#474747;
        }
    }
    
    .z-right,.z-left {
        float:left;
    }
    .z-left {
        width: 1000px;;
    }
    .z-right {
        width: 340px;padding-top: 54px;
    }
    .z-right-ul {
        padding-left: 30px;padding-top: 10px;
    }
    .z-right-item {
        display: block;padding-bottom: 5px;
        .z-recomment-link {
            color:#0088db;font-size: 15px;
        }
    }
    .z-title {
        font-size: 30px;
        line-height: 40px;
        margin-bottom: 10px;
        border-bottom: 1px solid #dedede;
        padding-bottom: 20px;
    }
    .z-right-title {
        padding-left: 30px;
    }
    .z-info {
        overflow: hidden;font-size: 13px;color:#999;
    }
    .z-author,.z-time,.z-label {
        float:left;padding-right: 20px;
    }
    .z-link {
        color:#0070ff;text-decoration: none;
    }
}
</style>