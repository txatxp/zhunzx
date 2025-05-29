<template>
    <div class="astrolog-img-box">
        <h2 class="astrolog-title astrolog-title2">
            <span class="float-left">
                <el-icon class="z-icon"><Star /></el-icon><span class="z-title-span">行星+交点（动力原型）</span>
            </span>
        </h2>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">一、内行星（个人意识层）</h3>
            <p class="z-list-p">太阳<span class="color-white">☉</span>：核心动机识别</p>
            <p class="z-list-p">月亮<span class="color-white">☽</span>：情绪反应模式</p>
            <p class="z-list-p">水星<span class="color-white">☿</span>：信息处理算法</p>
            <p class="z-list-p">金星<span class="color-white">♀</span>：价值吸引法则</p>
            <p class="z-list-p">火星<span class="color-white">♂</span>：行动驱力类型</p>
            
        </div>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">二、外行星（集体潜意识层）</h3>
            <p class="z-list-p">木星<span class="color-white">♃</span>：扩张机遇点</p>
            <p class="z-list-p">土星<span class="color-white">♄</span>：制约结构化</p>
            <p class="z-list-p">天王<span class="color-white">♅</span>：范式突破力</p>
            <p class="z-list-p">海王<span class="color-white">♆</span>：消融渗透性</p>
            <p class="z-list-p">冥王<span class="color-white">⯓</span>：转化重构能</p>
        </div>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">三、月交点（灵魂演进轴线）</h3>
            <p class="z-list-p">北交<span class="color-white">☊</span>：进化性整合方向</p>
            <p class="z-list-p">南交<span class="color-white">☋</span>：惯性依赖模式</p>
        </div>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.astrolog-img-box {
    overflow: hidden;width:100%;float:left;border: 1px solid #e0e0e0;
    background-color:#fff;box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;box-sizing: border-box;margin-bottom: 20px;
    .astrolog-title {
        font-size: 16px;
        font-weight: 700;
        color: #333;
        padding: 20px 0px;
        border-bottom: 1px solid #f3b8db;
        margin: 0px 20px;overflow: hidden;
    }
    .z-title-span,.z-icon {
        vertical-align: middle;margin-right: 10px;color: #b400ff;
    }
    .z-announcement-list {
        display: block;
        text-decoration: none;color:#333;margin: 0px 20px;
        white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 30%;float:left;padding: 30px 0px;
        .z-list-p {
            margin-bottom: 10px;
        }
        &:nth-of-type(3) {
            border-bottom: none;
        }
        &:nth-of-type(4) {
            border-bottom: none;
        }
    }
    .z-list-icon {
        font-size: 12px;
    }
    .z-list-icon,.z-list-span {
        vertical-align: middle;color: #545252;
        padding-bottom: 15px;
    }
    .z-list-span {
        padding-left: 5px;
        font-size: 14px;
    }
    .float-left {float:left;}
    .float-right{float:right;font-weight: 100;font-size: 12px;position: relative;top: 5px;text-decoration: none;color:#b400ff;}
    .color-white {
        color:#fff;background-color:#9e58d3;font-size: 12px;display: inline-block;
        border-radius: 5px;font-weight: 100;width: 18px;height: 18px;line-height: 18px;text-align: center;vertical-align: middle;
        position: relative;top: -2px;margin-left: 2px;
    }
}
</style>