import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default defineNuxtPlugin(nuxtApp => {
    // const app = nuxtApp(App)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      nuxtApp.vueApp.component(key, component)
    }
})