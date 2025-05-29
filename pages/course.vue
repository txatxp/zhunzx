<template>
  
  <div class="z-course">
    <div class="z-course-box">
      <div class="z-course-left">
        <h1 class="z-title">星盘课程（共{{ course.length }}门课程）</h1>
        <ul class="z-course-ul">
          <li class="z-course-li" v-for="(item, index) in course" :key="item.id">
            <span class="z-course-span">{{ index + 1 }}、{{ item.title }}</span>
            
            <ClientOnly>
              <span class="z-course-span-right" v-if="item.audition"
                ><el-button
                  type="primary"
                  size="small"
                  :icon="Microphone"
                  @click="playAudio(item)"
                  >试听</el-button
                ></span
              >
              <span class="z-course-span-right" v-else
                ><el-button
                  type="warning"
                  size="small"
                  :icon="Play"
                  @click="buyAll"
                  >购买</el-button
                ></span
              >  
            </ClientOnly>
          </li>
        </ul>
      </div>
      <div class="z-course-right">
        <div style="padding-right: 30px; position: relative">
          <button class="z-buy-btn" @click="buyAll">购买全部课程</button>
          <gg2 :auto-with="true"></gg2>
        </div>
      </div>
    </div>
    
    <el-dialog
      v-model="visible"
      title="支付完成，联系准准获取课程，联系：15158808166"
      width="600"
      :append-to-body="true"
    >
      <div style="text-align: center">
        <img
          class="z-consult-img"
          :src="runtimeConfig.public.APP_URL + zhunzhun_weixin"
          alt="联系准准人工推运势"
          width="400"
        />
        <div
          class="z-text-align-center"
          style="font-size: 16px; font-weight: bold"
        >
          联系方式：15158808166，加准准微信，联系准准购买课程
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog
      v-model="audioVisible"
      title="试听"
      width="500"
      :append-to-body="true"
      :before-close="close"
    >
      <div style="text-align: center">
        <audio
          :src="runtimeConfig.public.APP_URL + '/' + audioSrc"
          controls
          ref="audioRef"
          autoplay
        ></audio>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="cancelAudio">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import zhunzhun_weixin from "@/public/pay.jpg";
import { Microphone } from "@element-plus/icons-vue";
definePageMeta({
  layout: "course",
});
useSeoMeta({
  title: "占星课程 - 准准",
  keywords: "星盘课程,占星课程,准准",
  description: "星盘课程，准准为您提供星盘课程、占星课程服务！",
});
const audioSrc = ref("");
const audioRef = ref(null);
const audioVisible = ref(false);
const runtimeConfig = useRuntimeConfig();
// 获取api接口
const apis = useApis();
const course = ref([]);
const res = await apis.getCourseList({});
course.value = res.data.value.data.list;

const visible = ref(false);
const cancelAudio = () => {
  audioVisible.value = false;
  audioRef.value.pause();
};
const close = () => {
  cancelAudio();
};
const playAudio = (item) => {
  audioSrc.value = item.src;
  audioVisible.value = true;
  audioRef.value.play();
};
const cancel = () => {
  visible.value = false;
};
const buyAll = () => {
  visible.value = true;
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1400px) {
  .z-course {
    padding: 40px 0;
    background-color: #fef4d7;
    overflow: hidden;width: 100%;margin: 0px auto;
    .z-course-box {
      overflow: hidden;width: 1400px;margin:auto;background-color: #fff;padding-top: 30px;padding-bottom: 20px;
      border-radius: 10px;
    }
    .z-course-ul {
      padding: 0px 40px;
    }
    .z-course-li {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px dashed #e5e5e5;
      overflow: hidden;
      .z-course-span {
        float: left;
      }
      .z-course-span-right {
        float: right;
      }
    }
    .z-title {
      font-size: 20px;
      padding-bottom: 30px;
      padding-left: 40px;
      overflow: hidden;
    }
    .z-course-left {
      width: 1100px;
      float: left;
    }
    .z-course-right {
      width: 300px;
      float: right;
      position: relative;
      .z-buy-btn {
        height: 45px;
        width: 100%;
        display: block;
        line-height: 45px;
        text-align: center;
        background-color: #ff5e00;
        border: 0;
        cursor: pointer;
        border-radius: 10px;
        color: #fff;
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }
}
@media screen and (max-width: 1400px) {
  .z-course {
    padding: 20px 0;
    background-color: #fff;
    overflow: hidden;margin: 15px 0px;
    .z-course-ul {
      padding: 0px 15px;
    }
    .z-course-li {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px dashed #e5e5e5;
      overflow: hidden;
      .z-course-span {
        float: left;
      }
      .z-course-span-right {
        float: right;
      }
    }
    .z-title {
      font-size: 20px;
      padding-bottom: 15px;
      padding-left: 40px;
      overflow: hidden;
    }
 
    .z-course-right {
      padding-top: 30px;
      padding-bottom: 60px; 
      width: 300px;
      margin:auto;
      .z-buy-btn {
        height: 45px;
        width: 100%;
        display: block;
        line-height: 45px;
        text-align: center;
        background-color: #ff5e00;
        border: 0;
        cursor: pointer;
        border-radius: 10px;
        color: #fff;
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
