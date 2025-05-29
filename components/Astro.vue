<template>
    <div class="astro">
        <h2 class="astrolog-title">
            <span class="float-left"><el-icon class="z-icon"><Star /></el-icon><span class="z-title-span">十二星座</span></span>
            <a :href="`${runtimeConfig.public.APP_URL}/astro`" class="float-right" targer="_blank">详情>></a>
            
        </h2>
        <div class="astro-list">
            <a :href="`${runtimeConfig.public.APP_URL}/astro/${item.id}`" class="z-link" v-for="item in astro" :key="item.id" :title="item.title">
                <img :src="`https://file.zhunzx.cn/${astroConfig[item.name]}.png`" :alt="item.title" class="z-img" height="60" width="60">
                <span class="z-span">{{ item.title }}</span>
            </a>    
        </div>
        
    </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const apis = useApis()
const res = await apis.getAstro()
const astro = ref([])
astro.value = res.data.value.data.list
const astroConfig = {
    'Aries': 'baiyang-kt',
    'Taurus': 'jinniu-kt',
    'Gemini': 'shuangzi-kt',
    'Cancer': 'juxie-kt',
    'Leo': 'shizi-kt',
    'Virgo': 'chunv-kt',
    'Libra': 'tiancheng-kt',
    'Scorpio': 'tianxie-kt',
    'Sagittarius': 'sheshou-kt',
    'Capricorn': 'mojie-kt',
    'Aquarius': 'shuiping-kt',
    'Pisces': 'shuangyu-kt'

}
</script>
<style lang="scss" scoped>
.astro {
    overflow: hidden;width:460px;float:left;border: 1px solid #e0e0e0;
    background-color:#fff;box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;padding-bottom: 20px;margin-left: 20px;
    .astrolog-title {
        font-size: 16px;
        font-weight: 700;
        color: #333;
        padding: 10px 0px;
        border-bottom: 1px solid #f3b8db;
        margin: 0px 20px;
        overflow: hidden;
    }
    .float-left {
        float:left;
    }
    .float-right {
        float:right;
        font-size: 12px;color:#ff0097;font-weight: 100;text-decoration: none;
    }
    .z-title-span,.z-icon {
        vertical-align: middle;margin-right: 10px;color: #ff0097;
    }
    .astro-list {
        margin: 0px 20px;padding: 20px 0px 10px 0px;;
    }
    .z-link {
        display: block;width: 25%;height: 103px;float:left;text-align: center;text-decoration: none;
    }
    .z-img {
        height: 60px;border-radius: 6px;;
    }
    .z-span {
        display: block;text-decoration: none;padding-top: 3px;color:#333;
    }
}
</style>