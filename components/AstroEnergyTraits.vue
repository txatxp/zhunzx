<template>
    <div class="astrolog-img-box">
        <h2 class="astrolog-title astrolog-title2">
            <span class="float-left">
                <el-icon class="z-icon"><Star /></el-icon><span class="z-title-span">十二星座（行为模式与能量特质）</span>
            </span>
        </h2>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">一、火象星座</h3>
            <p class="z-list-p">白羊♈️：事件中的开创性行动（如快速决策/竞争性场景）</p>
            <p class="z-list-p">狮子♌️：自我表达维度（涉及尊严/领导权/创作表现）</p>
            <p class="z-list-p">射手♐️：意义追寻方向（教育/跨国事务/哲学层面）</p>
            
        </div>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">二、土象星座</h3>
            <p class="z-list-p">金牛♉️：价值固化领域（财务/感官体验/稳定性需求）</p>
            <p class="z-list-p">处女♍️：系统优化过程（细节处理/健康管理/服务性质）</p>
            <p class="z-list-p">摩羯♑️：结构化建设（事业规划/责任承担/长期目标）</p>
        </div>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">三、风象星座</h3>
            <p class="z-list-p">双子♊️：信息流动节点（沟通渠道/多方协调/短期学习）</p>
            <p class="z-list-p">天秤♎️：关系平衡点（合作协商/审美判断/法律事务）</p>
            <p class="z-list-p">水瓶♒️：范式创新区域（群体科技/人道主义/非传统方案）</p>
            
        </div>
        <div class="z-announcement-list" target="_blank">
            <h3 class="z-list-span">四、水象星座</h3>
            <p class="z-list-p">巨蟹♋️：情感安全机制（家庭事务/情绪滋养/历史回溯）</p>
            <p class="z-list-p">天蝎♏️：深度转化领域（资源整合/危机处理/心理洞察）</p>
            <p class="z-list-p">双鱼♓️：灵性渗透层面（艺术创作/潜意识/牺牲救赎）</p>
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
}
</style>