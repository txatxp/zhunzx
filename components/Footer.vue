<template>
    <div class="footer-technology">
        <!-- 友情链接 -->
         <h3 class="z-footer-title">友情链接：</h3>
        <ul class="z-footer-ul">
            <li class="z-footer-li"><a href="https://web.zhunzx.cn" class="technology-link">准准web前端技术</a></li>
        </ul>
    </div>
    <div class="z-footer-copyright">
        <p>© 准准网 www.zhunzx.cn <a href="https://beian.miit.gov.cn/" class="link">ICP备案号：粤ICP备2024352283号-1</a> 版权和解释权归准准所有</p>
    </div>
</template>
<style scoped lang="scss">
.z-footer-copyright{
    color:#b5b0b0;text-align: center;padding-top: 10px;padding-bottom: 10px;
    background-color: #392268;font-size: 12px;
    
}

.link {
    color:#ffffff;
}
.z-footer-title,.z-footer-ul,.z-footer-li {
    display: inline-block;font-size: 12px;color: #333;
}
.footer-technology {
    text-align: center;padding-bottom: 15px;
}
.technology-link {
    color: rgb(0, 132, 255);
    text-decoration: none;

}

@media screen and (max-width: 768px) {
    .footer-technology {
        padding: 10px 10px 10px;
    }
    .z-footer-copyright {
        padding: 8px 10px;
        font-size: 11px;
        line-height: 1.6;
    }
}
</style>