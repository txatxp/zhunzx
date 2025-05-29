<template>
    <div class="z-recommend">
        <h3 class="z-recomment-title">{{title}}</h3>
    
        <ul class="z-recomment-ul">
            <li class="z-recomment-li" v-for="item in article"><a :href="`${runtimeConfig.public.APP_URL}/article/detail/${item.id}?type=${type}`" class="z-recomment-link" :title="item.title">{{ item.title }}</a></li>
        </ul>    
        <a :href="runtimeConfig.public.APP_URL + '/allarticle'" class="z-more">更多</a>
    </div>
</template>
<script setup>
const props = defineProps({
    article: Array,
    title: String,
    type: String
})
const runtimeConfig = useRuntimeConfig();
</script>

<style scoped lang="scss">
@media screen and (min-width: 1400px) {
    .z-recommend {
        display: block;
        padding-top: 15px;
        padding-bottom: 15px;
        
    }
    .z-recomment-title {
        color:#999999;font-weight: bold;font-size:0px;width:0px;overflow:hidden;height: 0px;
    }
    .z-recommend,.z-recomment-ul {
        overflow:hidden;
    }
    .z-recomment-title,.z-recomment-ul,.z-recomment-li {
        float:left;font-size: 16px;
        .z-recomment-link {
            color:#999999;text-decoration: none;padding-right: 20px;
        }
    }
    .z-marquee {
        float: left;
    }
    .z-change,.z-more {
        float:left;padding-right: 20px;color:#fff;text-decoration: underline;
    }
}
@media screen and (max-width: 1400px) {
    .z-recommend {
        display: block;
        padding-top: 15px;
        padding-bottom: 15px;
        margin-left: 15px;margin-right: 15px;background-color:#fff;
        border-radius: 9px;
    }
    .z-recomment-title {
        color:#999999;font-weight: bold;font-size:0px;width:0px;overflow:hidden;height: 0px;
    }
    .z-recommend,.z-recomment-ul {
        overflow:hidden;
    }
    .z-recomment-title,.z-recomment-li {
        font-size: 16px;
        .z-recomment-link {
            color:#000;padding-left:15px;
        }
    }
    .z-recomment-li {
        padding-top: 10px;;
    }
    .z-marquee {
        float: left;
    }
    .z-change,.z-more {
        float:left;padding-right: 20px;color:#fff;padding-left: 15px;
    }
}

</style>
  