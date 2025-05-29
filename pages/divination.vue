<template>
    <div class="z-divination-box">
      <AstroHouse></AstroHouse>
      <AstroEnergyTraits></AstroEnergyTraits>
      <AstroPlanet></AstroPlanet>
      <AstroConclusion></AstroConclusion>
      <AstrologDivination :height="800"></AstrologDivination>
    </div>
    <!-- <Recommend title="卜卦文章" :article="article" type="divination_related"></Recommend> -->
</template>
<script setup>
import zhunzhun_weixin from '@/assets/img/weixin-code_10.png'
useSeoMeta({
  title: '准准占卜 - 准准网',
  keywords: '卜卦,占卜,准准,准准卜卦,准准占卜,占卜师',
  description: '输入问题，联系准准，进行卜卦吧！问题越精细，结果越精准！',
})
definePageMeta({
  layout: 'divination'
})

</script>
<style lang="scss" scoped>
.z-divination-box {
  width: 1400px;overflow:hidden;margin: auto;
  padding-top: 20px;margin-bottom: 50px;
}
</style>