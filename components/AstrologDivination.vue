<template>
    <div class="announcement" :style="height ? `height:${height}px;` : ''">
        <div class="astrolog-title">
            <div class="float-left">
                <el-icon class="z-icon"><Help /></el-icon><h2 class="z-title-span">占星占卜</h2>
            </div>

            <el-button type="success" round @click="showDialog" class="analysis-pattern"><el-icon><PhoneFilled /></el-icon>分析卦象</el-button>

            <div class="float-right">
                <span class="list-sp"><span class="label-sp">宫位: </span>{{ house }}{{house === '--' ? '' : '宫'}}</span>
                <span class="list-sp"><span class="label-sp">星座: </span><span v-if="sign.Symbol" class="color-white2">{{ sign.Symbol }}</span> {{ sign.name }}</span>
                <span class="list-sp"><span class="label-sp">行星: </span><span v-if="planet.Symbol" class="color-white">{{ planet.Symbol }}</span> {{ planet.name }}</span>
            </div>
            
        </div>
        <div class="astro-box" :style="height ? `height:${height}px;` : ''">
            <div class="divination-box" id="divinationBox1" :style="height ? `height:${height}px;` : ''">
            </div>
            <div class="divination-box" id="divinationBox2" :style="height ? `height:${height}px;` : ''">
            </div>
            <div class="divination-box" id="divinationBox3" :style="height ? `height:${height}px;` : ''">
            </div>
        </div>
        <div class="start-divination" @click="start()" v-if="isShowDivinationBtn">开始占卜</div>

        <div class="modal" v-if="modalShow">
            <div class="modal-header">
                <div class="modal-close" @click="cancel"><el-icon><CloseBold /></el-icon></div>
            </div>
            <div class="modal-body">
                <p class="question-label" style="padding: 10px 0px 15px 0px;">输入你想问的问题（占卜问题）</p>
                <span class="question-label"></span><el-input v-model="question" style="width: 400px;height: 50px;padding: 0px 10px;" placeholder="输入占卜问题, 点击立即占卜！" />
            </div>
            <div class="modal-footer">
                <el-button round @click="cancel" size="large">取消</el-button>
                <el-button type="success" round @click="confirm" size="large" color="#626aef">立即占卜</el-button>
                
            </div>
        </div>
        <div class="modal" v-if="modalShow2">
            <div class="modal-header">
                <div class="modal-close" @click="cancel"><el-icon><CloseBold /></el-icon></div>
            </div>
            <div class="modal-body">
                <div class="z-title">占卜结果</div>
                <div class="modal-result">
                    <span class="list-sp"><span class="label-sp">宫位: </span>{{ house }}宫</span>
                    <span class="list-sp"><span class="label-sp">星座: </span><span v-if="sign.Symbol" class="color-white2">{{ sign.Symbol }}</span> {{ sign.name }}</span>
                    <span class="list-sp"><span class="label-sp">行星: </span><span v-if="planet.Symbol" class="color-white">{{ planet.Symbol }}</span> {{ planet.name }}</span>
                </div>
                <div class="concat" style="padding-top: 30px;">
                    <el-button type="success" round @click="showDialog" size="large"><el-icon><PhoneFilled /></el-icon>联系准准，分析卦象</el-button>
                </div>
            </div>
        </div>
        <el-dialog
            v-model="visible"
            title="真人咨询！"
            width="600"
            :append-to-body="true"
        >
            <div style="text-align: center;">
                <img class="z-consult-img" :src="zhunzhun_weixin" alt="联系准准人工分析卦象" width="400" height="400">
                <div class="z-text-align-center" style="font-size: 16px;font-weight: bold;">联系方式：15158808166，加准准微信，真人分析卦象</div>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="cancelDialog">取消</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
import DiceBox from '@3d-dice/dice-box'
import { ElMessage } from 'element-plus'
import zhunzhun_weixin from '@/assets/img/weixin-code_10.png'
let diceBox1 = null
let diceBox2 = null
let diceBox3 = null
let question = ref('')
let modalShow = ref(true)
let modalShow2 = ref(false)
let visible = ref(false)
let isClickConfirmPending  = ref(false)
// 初始抛掷状态
let isThrowing = ref(false)
let isShowDivinationBtn = ref(false)
// 宫位
let house = ref('--')
console.log(DiceBox, '---')
const props = defineProps({
    height: {
        type: Number,
        default: null
    }
})


// 行星列表
let planets = {
    1: {name: '太阳', Symbol: '☉'},
    2: {name: '月亮', Symbol: '☽'},
    3: {name: '水星', Symbol: '☿'},
    4: {name: '金星', Symbol: '♀'},
    5: {name: '火星', Symbol: '♂'},
    6: {name: '木星', Symbol: '♃'},
    7: {name:  '土星', Symbol: '♄'},
    8: {name: '天王星', Symbol: '♅'},
    9: {name: '海王星', Symbol: '♆'},
    10: {name: '冥王星', Symbol: '⯓'},
    11: {name: '北交点', Symbol: '☊'},
    12: {name: '南交点', Symbol: '☋'}
}
// 星座列表
let signs = {
    1: {name: '白羊座', Symbol: '♈'},
    2: {name: '金牛座', Symbol: '♉'},
    3: {name: '双子座', Symbol: '♊'},
    4: {name: '巨蟹座', Symbol: '♋'},
    5: {name: '狮子座', Symbol: '♌'},
    6: {name: '处女座', Symbol: '♍'},
    7: {name: '天秤座', Symbol: '♎'},
    8: {name: '天蝎座', Symbol: '♏'},
    9: {name: '射手座', Symbol: '♐'},
    10: {name: '摩羯座', Symbol: '♑'},
    11: {name: '水瓶座', Symbol: '♒'},
    12: {name: '双鱼座', Symbol: '♓'},
}

// 行星
let planet = ref({
    name: '--',
    Symbol: ''
})
// 星座
let sign = ref({
    name: '--',
    Symbol: ''
})
// 是否获取宫位结果
let isGetResultHouse = ref(false)
// 是否获取星座结果
let isGetResultSign = ref(false)
// 是否获取行星结果
let isGetResultPlanet = ref(false)


const cancelDialog = () => {
  visible.value = false
}
const cancel = () => {
    modalShow.value = false
    modalShow2.value = false
    question.value = ''
}
const showDialog = () => {
  visible.value = true
}
onMounted(async  () => {

    // 宫位
    diceBox1 = new DiceBox({
        container: "#divinationBox1",
        scale: props.height ? 8 :11,
        assetPath: '/dice-box/', // include the trailing backslash
        themeColor: '#ffffff',
        theme: 'rock',
        // 弹性
        restitution: 0.5,
        // 重力
        gravity: 1.5,
        linearDamping: 0.5,
        startingHeight: 10,
        onRollComplete(r) {
            house.value = r[0].rolls[0].value
            isGetResultHouse.value = true
        },
    })
    isThrowing.value = true
    diceBox1 && diceBox1.init().then(() => {
        diceBox1 && diceBox1.roll("1d12",{themeColor: '#bf00b8', theme: 'rock'});
        
    });




    // 星座
    diceBox2 = new DiceBox({
        container: "#divinationBox2",
        scale: props.height ? 8 :11,
        assetPath: '/dice-box/', // include the trailing backslash
        themeColor: '#ffffff',
        theme: 'diceOfRolling',
        restitution: 0.5,
        gravity: 1.5,
        linearDamping: 0.5,
        startingHeight: 10,
        onRollComplete(r) {
            sign.value = signs[r[0].rolls[0].value]
            isGetResultSign.value = true
        },
    })
    diceBox2 && diceBox2.init().then(() => {
        diceBox2 && diceBox2.roll("1d12",{themeColor: '#bf00b8', theme: 'diceOfRolling'});
    });

    
    // 行星
    diceBox3 = new DiceBox({
        container: "#divinationBox3",
        scale: props.height ? 8 :11,
        assetPath: '/dice-box/', // include the trailing backslash
        themeColor: '#ffffff',
        theme: 'wooden',
        restitution: 0.5,
        gravity: 1.5,
        onRollComplete(r) {
            planet.value = planets[r[0].rolls[0].value]
            isGetResultPlanet.value = true
        },
        linearDamping: 0.5,
        startingHeight: 10
    })
    diceBox3 && diceBox3.init().then(() => {
        diceBox3 && diceBox3.roll("1d12",{themeColor: '#4bac09', theme: 'wooden'});
        
    });
    
})
const start = () => {
    // isClick.value = true
    modalShow.value = true
    isGetResultHouse.value = false
    isGetResultSign.value = false
    isGetResultPlanet.value = false
    isShowDivinationBtn.value = false
}
const confirm  = () => { 
    if (isThrowing.value) {
        return false
    }
    if (!question.value) {
        ElMessage({
            message: '请输入您想占卜的问题！',
            type: 'warning',
        })
        return false
    }
    // 滚动中
    isClickConfirmPending.value = true
    isGetResultHouse.value = false
    isGetResultSign.value = false
    isGetResultPlanet.value = false
    // 宫位
    diceBox1 && diceBox1.roll("1d12",{themeColor: '#bf00b8', theme: 'rock'});
    // 星座
    diceBox2 && diceBox2.roll("1d12",{themeColor: '#bf00b8', theme: 'diceOfRolling'});
    // 行星
    diceBox3 && diceBox3.roll("1d12",{themeColor: '#4bac09', theme: 'wooden'});
    modalShow.value = false
}
const isDone = computed(() => {
    if (isGetResultHouse.value && isGetResultSign.value && isGetResultPlanet.value) {
        return true
    } else {
        return false
    }
})
watchEffect(() => { 
    if (isDone.value) {
        isThrowing.value = false
    } 
})
watchEffect(() => { 
    if (isDone.value && isClickConfirmPending.value) {
        modalShow2.value = true
        // 滚动停止
        isClickConfirmPending.value = false
    } 
})
watchEffect(() => { 
    if (!modalShow2.value && !modalShow.value && !isClickConfirmPending.value) {
        // 显示占卜按钮
        isShowDivinationBtn.value = true
    } 
})

</script>
<style lang="scss" scoped>
.announcement {
    overflow: hidden;width:100%;float:left;border: 1px solid #e0e0e0;position: relative;
    background:url("https://file.zhunzx.cn/zhanbu-bg.png?v=3") no-repeat center top;box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;padding-bottom: 20px;height: 372px;background-size: cover;
    .astrolog-title {
        font-size: 16px;
        font-weight: 700;
        color: #26446b;;
        border-bottom: 1px solid #e3e0e0;
        padding: 15px 20px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);position: relative;
        z-index: 1;
        overflow: hidden;
    }
    .float-left {
        float:left;
    }
    .float-right {
        float:right;height: 30px;background:rgba(255,255,255,0.2);line-height: 30px;;padding-right: 20px;border-radius: 8px;
    }
    .analysis-pattern {
        color:#fff;margin-left: 10px;cursor: pointer;float:right;position: relative;
    }
    .list-sp {
        padding-left: 20px;font-weight: 100;font-size: 12px;;
        display: inline-block;height: 22px;line-height: 22px;color:#fff;font-weight: bold;
    }
   
    .label-sp {
        color:#333;font-weight: 100;
    }
    .z-title-span,.z-icon {
        vertical-align: middle;margin-right: 5px;color: #fff;
    }
    .z-title-span {
        display: inline-block;font-size: 16px;;
    }
    .astro-box {
        height: 388px;position: relative;
    }
    
    .divination-box {
        height: 388px;width: 100%;position: absolute;top:-40px;left:0px;z-index: 0;
    }
    .divination {
        position: absolute; width: 450px;
        height: 393px;top:-40px;
    }
    .color-white {
        color:#fff;background-color:#9e58d3;font-size: 14px;display: inline-block;
        border-radius: 5px;font-weight: 100;width: 22px;height: 22px;line-height: 22px;text-align: center;
    }
    .color-white2 {
        font-size: 20px;vertical-align: bottom;
    }
    .modal {
        .list-sp {
            font-size: 20px;
        }
        .color-white {
            width: 26px;height: 26px;line-height: 26px;font-size: 20px;
        }
    }
    :deep(.dice-box-canvas) {
        width: 100%;height: 100%;
    }
    .z-icon {
        font-size: 18px;font-weight: bold;
    }
    .start-divination {
        position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);
        width: 220px;height: 60px;
        border-bottom: 1px solid #e3e0e0;
        padding: 0px 0px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);border-radius: 63px;;


        line-height: 60px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #ffff;
        white-space: 20px;
        letter-spacing: 7px;
        box-shadow: 1px 1px 15px #fafafa;

        cursor: pointer;
        transition: all 0.2s linear;
    }
    .start-divination:hover{
        box-shadow: 1px 1px 35px #fafafa;
    }
    .modal {
        position: absolute;
        width: 600px;
        height: 250px;
        top: 0px;left: 50%;margin-left: -300px;z-index: 10;
        top: 50%;margin-top: -95px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 10px;
        .modal-header {
            height: 45px;
            .modal-close {
                float: right;
                margin-right: 10px;
                width: 40px;height: 40px;;
                cursor: pointer;text-align: center;line-height: 40px;;
                font-size:20px;color:#fff;
            }
        }
        .modal-body {
            text-align: center;padding-top: 0px;
            .question-label {
                font-size: 16px;font-weight: bold;color:#fff;;
            }
            :deep(.el-input__wrapper) {
                padding: 0px 20px;border-radius: 12px;
            }
            .z-title {
                padding-bottom: 20px;font-weight: bold;
                font-size: 22px;
            }
        }
        .modal-footer {
                text-align: center;padding-top: 30px;
            }
    }
}
</style>