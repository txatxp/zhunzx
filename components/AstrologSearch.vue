<template>
    <div class="astrolog-img-box">
        <h2 class="astrolog-title"><el-icon class="z-icon"><Star /></el-icon><span class="z-title-span">星座查询</span></h2>
        <el-form label-width="auto" ref="astrologSearchRef" :model="ruleForm" class="astrolog-form">
            <el-form-item label="请输入你出生年份" prop="year">
                <el-select v-model="ruleForm.year" placeholder="请输入你出生年" class="w-200">
                    <el-option v-for="(items, index) in years" :key="index" :label="items + '年'" :value="items" />
                </el-select>
            </el-form-item>
            <el-form-item label="请输入你出生月份" prop="month">
                <el-select v-model="ruleForm.month" placeholder="请输入你出生月份" class="w-100">
                    <el-option v-for="(items, index) in months" :key="index" :label="items + '月'" :value="items" />
                </el-select>
            </el-form-item>
            <el-form-item label="请输入你出生日" prop="day">
                <el-select v-model="ruleForm.day" placeholder="请输入你出生日" class="w-100">
                    <el-option v-for="(items, index) in days" :key="index" :label="items + '日'" :value="items" />
                </el-select>
            </el-form-item>
            <el-form-item label=" ">
                <el-button type="danger" round @click="search" :loading="loading">立即查询</el-button>
            </el-form-item>

        </el-form>
        <div class="astrolog" v-if="astrolog">
            <div class="astrolog-item">
                <a href="https://www.zhunzx.cn/astro" class="z-astrolog-link" :title="astrolog.name">
                    <img :src="'https://file.zhunzx.cn/' + astrolog.name2 + '.png'" :alt="astrolog.name" class="z-astrolog-img" width="100" height="100"></img>
                </a>
                <div class="z-astrolog-content">
                    <span class="z-content">您的星座：<strong class="z-font">{{ astrolog.name }}</strong></span>
                    <span class="z-content">星座生日：{{ astrolog.dateRange }}</span>
                    <span class="z-content">您的生日：{{ ruleForm.year }}-{{ ruleForm.month }}-{{ ruleForm.day }}</span>
                    <span class="z-content">您的性格：{{ astrolog.keywords.join('、') }}</span>
                </div>    
            </div>
        </div>
    </div>
</template>
<script setup>
const ruleForm = ref({
    year: 1989,
    month: 1,
    day: 1,
    hours: 1
})
// 年
const years = ref([])
// 月
const months = ref([])
// 日
const days = ref([])
// loading
const loading = ref(false)


function getZodiacInfo(month, day) {
    // Define the zodiac signs with their respective date ranges
    const zodiacSigns = [
        { name: '摩羯座', name2: 'mojie-kt', num: 1, symbol: 'Capricorn', dateRange: '12月22日 - 1月19日', keywords: ['踏实', '自律', '目标明确'] },
        { name: '水瓶座', name2: 'shuiping-kt', num: 2, symbol: 'Aquarius', dateRange: '1月20日 - 2月18日', keywords: ['独立', '创新', '博爱'] },
        { name: '双鱼座', name2: 'shuangyu-kt', num: 3, symbol: 'Pisces', dateRange: '2月19日 - 3月20日', keywords: ['浪漫', '感性', '富有同情心'] },
        { name: '白羊座', name2: 'baiyang-kt', num: 4, symbol: 'Aries', dateRange: '3月21日 - 4月19日', keywords: ['热情', '冲动', '自信'] },
        { name: '金牛座', name2: 'jinniu-kt', num: 5, symbol: 'Taurus', dateRange: '4月20日 - 5月20日', keywords: ['稳重', '务实', '固执'] },
        { name: '双子座', name2: 'shuangzi-kt', num: 6, symbol: 'Gemini', dateRange: '5月21日 - 6月21日', keywords: ['灵活', '善变', '好奇心强'] },
        { name: '巨蟹座', name2: 'juxie-kt', num: 7, symbol: 'Cancer', dateRange: '6月22日 - 7月22日', keywords: ['温柔', '敏感', '家庭观念强'] },
        { name: '狮子座', name2: 'shizi-kt', num: 8, symbol: 'Leo', dateRange: '7月23日 - 8月22日', keywords: ['大方', '自信', '领导力强'] },
        { name: '处女座', name2: 'chunv-kt', num: 9, symbol: 'Virgo', dateRange: '8月23日 - 9月22日', keywords: ['细致', '严谨', '追求完美'] },
        { name: '天秤座', name2: 'tiancheng-kt', num: 10, symbol: 'Libra', dateRange: '9月23日 - 10月23日', keywords: ['优雅', '公正', '追求平衡'] },
        { name: '天蝎座', name2: 'tianxie-kt', num: 11, symbol: 'Scorpio', dateRange: '10月24日 - 11月22日', keywords: ['神秘', '执着', '洞察力强'] },
        { name: '射手座', name2: 'sheshou-kt', num: 12, symbol: 'Sagittarius', dateRange: '11月23日 - 12月21日', keywords: ['乐观', '自由', '爱冒险'] }
    ];

    // Normalize the month and day to ensure they are within valid ranges
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        return { error: 'Invalid month or day' };
    }

    // Check the zodiac sign based on the month and day
    let selectedZodiac;

    zodiacSigns.forEach(sign => {
        const [startDateStr, endDateStr] = sign.dateRange.split(' - ');
        const startDate = parseDate(startDateStr);
        const endDate = parseDate(endDateStr);

        if (
            (month === startDate.month && day >= startDate.day) ||
            (month === endDate.month && day <= endDate.day)
        ) {
            selectedZodiac = sign;
        }
    });

    if (!selectedZodiac) {
        return { error: 'Could not determine zodiac sign' };
    }

    return {
        name: selectedZodiac.name,
        name2: selectedZodiac.name2,
        symbol: selectedZodiac.symbol,
        dateRange: selectedZodiac.dateRange,
        keywords: selectedZodiac.keywords
    };
}

// Helper function to parse a date string into an object with month and day
function parseDate(dateStr) {
    const [monthStr, dayStr] = dateStr.match(/(\d+)/);
    const month = parseInt(monthStr, 10);
    const day = parseInt(dayStr, 10);
    return { month, day };
}

const　astrolog = ref(null);


for (let i = 1900; i < 2100; i++) {
    years.value.push(i)
}
for (let i = 1; i < 13; i++) {
    months.value.push(i)
}
for (let i = 1; i < 32; i++) {
    days.value.push(i)
}
onMounted(() => {
    astrolog.value = getZodiacInfo(1,1)
})


const search = () => {
    loading.value = true;
    setTimeout(() => {
        astrolog.value = getZodiacInfo(Number(ruleForm.value.month), Number(ruleForm.value.day))
        loading.value = false;
    }, 1000);
}

</script>
<style lang="scss" scoped>
.astrolog-img-box {
    overflow: hidden;width:450px;float:left;border: 1px solid #e0e0e0;
    background-color:#fff;box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;padding-bottom: 20px;
    .astrolog-title {
        font-size: 16px;
        font-weight: 700;
        color: #333;
        padding: 10px 0px;
        border-bottom: 1px solid #f3b8db;
        margin: 0px 20px;
    }
    .z-title-span,.z-icon {
        vertical-align: middle;margin-right: 10px;color: #ff0097;
    }
    .astrolog-form {
        margin: 0px 20px;padding: 20px 0px 10px 0px;;
    }
    .astrolog-list {
        display: block;
        width: 200px;float:left;margin-bottom: 30px;
    }
    .w-100 {
        width: 100px;
    }
    .w-200 {
        width: 200px;
    }
    .astrolog {
        display: flex;
        justify-content: center;
        height: 100px;padding: 0px 20px;

    }
    .astrolog-item {
        width: 370px;display: flex;
    }
    .z-astrolog-link {
        display: block;width: 100px;height: 100px;
    }
    .z-astrolog-img {
        width: 100px;border-radius: 9px;
    }
    .z-astrolog-content {
        flex: 1;
    }
    .z-content {
        display: block;padding-left: 15px;padding-bottom: 2px;padding-top: 2px;
    }
    .z-font {
        color:orange;font-weight: bold;
    }
}
</style>