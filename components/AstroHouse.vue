<template>
    <div class="astrolog-img-box">
        <h2 class="astrolog-title astrolog-title2">
            <span class="float-left">
                <el-icon class="z-icon"><Star /></el-icon><span class="z-title-span">十二宫位（时空场域定位）</span>
            </span>
        </h2>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">一、显性象限（1-3宫）</h3>
            <p class="z-list-p">第一宫：主体能动性范围</p>
            <p class="z-list-p">第二宫：价值创造系统</p>
            <p class="z-list-p">第三宫：近端信息网络</p>
            
        </div>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">二、显性象限（2-6宫）</h3>
            <p class="z-list-p">第四宫：根源支持结构</p>
            <p class="z-list-p">第五宫：创造性输出场</p>
            <p class="z-list-p">第六宫：日常运维体系</p>
        </div>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">三、关系象限（7-9宫）</h3>
            <p class="z-list-p">第七宫：契约性交互</p>
            <p class="z-list-p">第八宫：深度整合机制</p>
            <p class="z-list-p">第九宫：意义扩展维度</p>
        </div>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">四、关系象限（10-12宫）</h3>
            <p class="z-list-p">第十宫：社会成就坐标</p>
            <p class="z-list-p">第十一宫：群体共振频率</p>
            <p class="z-list-p">第十二宫：业力释放空间</p>
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
        white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 20%;float:left;padding: 30px 0px;
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
}
</style>