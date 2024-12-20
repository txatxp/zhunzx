<template>
    <h1 class="z-divination-title">卜卦</h1>
    <Recommend></Recommend>
    <div class="z-divination">
      <h3 class="z-subtitle"><span class="z-subtitle-text">注册</span></h3>
      <form id="zDivination" class="z-form z-form-reg" @submit.prevent="handleSubmit" style="margin:auto;">
        <div class="z-form-item">
          <label for="phone" class="z-label">用户名：</label>
          <input type="text" class="z-input" placeholder="请输入联系方式" v-model="userName">
        </div>
        <div class="z-form-item">
          <label for="phone" class="z-label">密码：</label>
          <input type="password" class="z-input" placeholder="请输入姓名" v-model="passWord">
        </div>
        <div class="z-form-item z-border0"><button type="submit" class="z-sbumit">注册</button></div>
      </form>
    </div>
</template>
<script setup>
useSeoMeta({
  title: '注册 - 准准',
  keywords: '注册',
  description: '注册',
})
const userName = ref('');
const passWord = ref('');

definePageMeta({
  layout: 'divination'
})
const apis = useApis();
const handleSubmit = async () => {
    const res = await apis.addUser({
        userName: userName.value,
        passWord: passWord.value,
    })
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/form.scss';
.z-divination {
    .z-form-reg {
        margin:auto;position: static;
    }    
    .z-subtitle {
        position: static;padding-left:50px;
        margin: 50px 0px 50px 0px;
    }
}

</style>