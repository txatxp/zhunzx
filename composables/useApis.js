export function useApis() {
    const runtimeConfig = useRuntimeConfig();
    return {
        getDemo: async () => {
            console.log(runtimeConfig.public.API_URL + '/api/demo')
            return await useFetch(runtimeConfig.public.API_URL + '/api/demo', {
                credentials: 'include', // 设置 credentials 选项
            })
        },
        // 获取今日运势
        getAstroTodayFortune: async () => {
            return await useFetch(runtimeConfig.public.API_URL + '/api/get/today/fortune', {
                credentials: 'include', // 设置 credentials 选项
            })
        },
        // 明日运势
        async getAstroTomorrowFortune() {
            return await useFetch(runtimeConfig.public.API_URL + '/api/get/tomorrow/fortune', {
                credentials: 'include', // 设置 credentials 选项
            })
        },
        // 本月运势
        async getAstroMonthFortune() {
            return await useFetch(runtimeConfig.public.API_URL + '/api/get/month/fortune', {
                credentials: 'include', // 设置 credentials 选项
            })
        },
        // 本年运势

        async getAstroYearsFortune() {
            return await useFetch(runtimeConfig.public.API_URL + '/api/get/years/fortune', {
                credentials: 'include', // 设置 credentials 选项
            })
        },

        // 根据条件获取单条运势
        async getFortune(fortuneDate, astro, fortuneType) {
            return await useFetch(runtimeConfig.public.API_URL + '/api/get/fortune', {
                query: {
                    fortuneDate: fortuneDate,
                    astro: astro,
                    fortuneType
                },
                credentials: 'include', // 设置 credentials 选项
            })
        },
        // 创建星盘
        async createAstro(params) {
            return await useFetch(runtimeConfig.public.API_URL + '/api/create/astro', {
                method: 'POST',
                body: params,
                credentials: 'include', // 设置 credentials 选项
            })
        },
        async getVerifyCode() {
            return await $fetch(runtimeConfig.public.API_URL + '/api/verifyCode', {
                credentials: 'include', // 设置 credentials 选项
                

            })
        },
        async getCode() {
            return await $fetch(runtimeConfig.public.API_URL + '/api/getVerifyCode', {
                credentials: 'include', // 设置 credentials 选项
            })
        },

        // 注册
        async addUser(params) {
            return await useFetch(runtimeConfig.public.API_URL + '/api/reg', {
                method: 'POST',
                body: params,
                credentials: 'include', // 设置 credentials 选项
            })
        },
        // 获取文章数据
        async getArticleList(query) {
            return await useFetch(runtimeConfig.public.API_URL + '/api/article/page', {
                query: query,
            })
        },
        // 获取文章数据
        async getArticleList2(query) {
            return await useFetch(runtimeConfig.public.API_URL + '/api/article/page2', {
                query: query,
            })
        },
        async getArticleDetail(query) {
            return await useFetch(runtimeConfig.public.API_URL + '/api/article/detail/' + query.id, {
                query: {
                    id: query.id,
                },
            })
        },
        // 添加卜卦
        async addDivination(params) {
            return await useFetch(runtimeConfig.public.API_URL + '/api/add/divination', {
                method: 'POST',
                body: params,
                credentials: 'include', // 设置 credentials 选项
            })
        },
        async getArticleType() {
            return await useFetch(runtimeConfig.public.API_URL + '/api/article/type', {
            })
        },
        async getAstro() {
            return await useFetch(runtimeConfig.public.API_URL + '/api/astro', {
            })
        },
        async getAstroDetail(id) {
            return await useFetch(runtimeConfig.public.API_URL + '/api/astro/' + id, {
            })
        },
        async getCourseList() {
            return await useFetch(runtimeConfig.public.API_URL + '/api/course/page', {
                query: {
                    pageNum: 1,
                    pageSize: 1000,
                    keywords: ''
                },
            })
        }
    }
}