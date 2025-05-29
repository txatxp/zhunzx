<template>
    <div class="astrolog-img-box">
        <h2 class="astrolog-title astrolog-title2">
            <span class="float-left">
                <el-icon class="z-icon"><Star /></el-icon><span class="z-title-span">综合解骰方法论</span>
            </span>
        </h2>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">一、三维定位法则</h3>
            <p class="z-list-p">行星（动力源）→ 星座（表达方式）→ 宫位（作用领域）</p>
            <p class="z-list-p">例：火星/双子/3宫：通过信息沟通（双子3宫）快速推进（火星）</p>
        </div>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">二、相位模拟技巧</h3>
            <p class="z-list-p">当骰子元素形成星座三分/对冲等关系时，需考虑能量联动</p>
            <p class="z-list-p">（如出现太阳/狮子/5宫：三重自我强调，需注意过度表现风险）</p>
        </div>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">三、时空动态权重</h3>
            <p class="z-list-p">短期事件侧重个人行星+变动星座+角宫</p>
            <p class="z-list-p">长期趋势关注外行星+固定星座+续宫</p>
        </div>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">四、进阶提示</h3>
            <p class="z-list-p">掌握行星界状态（尊贵/落陷）可精准判断能量流通效率，如金星双鱼（入庙）与金星处女（落陷）在感情议题中的显化差异。</p>
            <p class="z-list-p">长期趋势关注外行星+固定星座+续宫</p>
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
        border-bottom: 1px dashed #cfcfcf;
        text-decoration: none;color:#333;margin: 0px 20px;
        white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 45%;float:left;padding: 30px 0px;
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