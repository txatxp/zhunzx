<template>
  <div class="z-article">
    <div class="z-article-left">
      <a
        :href="`${runtimeConfig.public.APP_URL}/article?type=${item.type}&name=${item.name}`"
        v-for="item in typeArr"
        :class="{
          'z-article-left-a': true,
          'z-article-left-a-active': item.type === type,
        }"
        :title="item.name"
        >{{ item.name }}</a
      >
    </div>
    <div class="z-article-right">
        <a :href="`${runtimeConfig.public.APP_URL}/article?type=${type}&pageNum=${pageNum + 1}&name=${name}`" class="z-next-btn" v-if="article.length">换一批文章</a>
        <ul class="z-article-right-ul" v-if="article.length">
            <li v-for="item in article" class="z-article-right-li">
                <a :href="`${runtimeConfig.public.APP_URL}/article/detail/${item.id}`" class="z-article-right-link">{{ item.title }}</a>
                <span class="z-create-time">{{ item.createTime || item.updateTime }}</span>
            </li>
        </ul>
        <gg :autoWith="true"></gg>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "astrolog",
});

const runtimeConfig = useRuntimeConfig();
const apis = useApis();
const route = useRoute();
const typeArr = ref([]);
const type = ref('');
const name = ref('');
const res = await apis.getArticleType();
typeArr.value = res.data.value.data;
if (!route.query.type) {
  type.value = typeArr.value[0].type;
  name.value = typeArr.value[0].name;
  useSeoMeta({
    title: `星座文章_占星文章_卜卦文章_运势文章_占星课程 - 准准`,
    keywords: "十二星座,占星,卜卦,运势,占星课程,算命,文章,准准",
    description:
        "这是准准占星师的一个网站，专门提供占卜事情、运势分析、星座查询、星盘生成、星盘分析、情感分析、心理咨询、占星视频课程等服务。",
    });
} else {
  type.value = route.query.type;
  name.value = route.query.name;
  useSeoMeta({
    title: `${route.query.name}文章 - 准准`,
    keywords: "十二星座,占星,卜卦,运势,占星课程,算命,文章,准准",
    description:
        "这是准准占星师的一个网站，专门提供占卜事情、运势分析、星座查询、星盘生成、星盘分析、情感分析、心理咨询、占星视频课程等服务。",
    });
}
const pageNum = ref(1)
if (route.query.pageNum) {
  pageNum.value = Number(route.query.pageNum);
}
// 获取api接口
const article = ref([])
const result = await apis.getArticleList({
    keywords: type.value,
    pageNum: pageNum.value,
    pageSize: 10
})
article.value = result.data.value.data.list
</script>
<style scoped lang="scss">
.z-article {
  margin-top: 20px;
  padding: 20px 20px 20px 0px;
  background-color: #fff;
  overflow: hidden;
  min-height: 80vh;
  position: relative;
  .z-article-left {
    width: 300px;
    float: left;
    border-right: 1px solid #ccc;
    position: absolute;
    top: 20px;
    bottom: 0px;
    .z-article-left-a {
      display: block;
      height: 45px;
      line-height: 45px;
      padding-left: 30px;
      color:#454242;
    }
    .z-article-left-a-active {
        background:url("../assets/img/menu-right-icon.png") no-repeat right center,#302e53;color:#fff;
    }
  }
  .z-article-right {
    width: 1040px;
    float: right;
    .z-next-btn {
        display: block;
        width: 100px;height: 30px;text-align: center;line-height: 30px;
        background-color:#ef610d;float: right;font-size: 16px;color:#fff;text-decoration: none;
    }
    .z-article-right-ul {
        display: block;
        overflow: hidden;
        width: 100%;padding-top: 10px;
    }
    .z-article-right-li {
        overflow:hidden;height: 45px;line-height: 45px;border-bottom: 1px dashed #e5e5e5;
        .z-article-right-link {
            float:left;text-decoration: none;color:#302e53;
        }
        .z-create-time {
            float:right;padding-right: 10px;
            font-size: 14px;
            color: #5f5f5f;
        }
    }
  }
}
</style>
