// https://nuxt.com/docs/api/configuration/nuxt-config
const { API_URL, APP_URL, APP_ENV } = process.env
export default defineNuxtConfig({
  ssr: true, // 启用服务端渲染（SSG 需要 ssr: true）
  target: 'static', // 指定为静态生成模式
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        {
          innerHTML: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?bfcde78a93a680f3733f1d69a448441a";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `,
          type: 'text/javascript',
          charset: 'utf-8'
        },
        { src: 'https://api.map.baidu.com/api?type=webgl&v=1.0&ak=sMRzMt7GPkOFhtf79yC4CgTaqzjeLtMq' },
        {src: 'https://file.zhunzx.cn/Macy.js'}
      ],
      meta: [
        {
          name: 'renderer',
          content: 'webkit'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        },
        {
          name: 'baidu-site-verification',
          content: 'codeva-VGzycwJyFa'
        },
        {
          name: 'baidu-site-verification',
          content: 'codeva-RQCYClm7yC'
        }
      ]
    }
  },
  
  plugins: [
    '~/plugins/element-ui.js',
  ],
  modules: ['@element-plus/nuxt'],
  runtimeConfig: {
    // 只在服务器端可用的私有键
    apiSecret: '123',
    // public中的键也可以在客户端使用
    public: {
      API_URL,
      APP_URL,
      APP_ENV
    }
  }
})
