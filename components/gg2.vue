<template>
    <img :src="gg" alt="联系准准" style="display: block;margin:auto;cursor: pointer;" @click="showDialog" :class="{'autoWith': autoWith}">
    <el-dialog
        v-model="visible"
        title="真人咨询！"
        width="600"
        :append-to-body="true"
    >
        <div style="text-align: center;">
            <img class="z-consult-img" :src="zhunzhun_weixin" alt="联系准准人工推运势" width="400" height="400">
            <div class="z-text-align-center" style="font-size: 16px;font-weight: bold;">联系方式：15158808166，加准准微信，真人卜卦</div>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="cancel">取消</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup>
import gg from '../public/gg2.png'
import zhunzhun_weixin from '@/assets/img/weixin-code_10.png'
defineProps({
    autoWith: Boolean
})
const runtimeConfig = useRuntimeConfig();
const visible = ref(false)
const cancel = () => {
  visible.value = false
}
const showDialog = () => {
  visible.value = true
}
</script>
<style scoped lang="scss">
.autoWith {
    width: 100%;
}
</style>