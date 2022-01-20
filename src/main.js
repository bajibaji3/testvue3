//相比于vue2，引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象----app(类似于vue2中的vm，但是app比vm更“轻”)
const app = createApp(App)
// console.log('app', app);
// createApp(App).mount('#app')
app.mount('#app')


//vue2中的写法
// const vm = new Vue({
//   render:h => h(App)
// })
// vm.$mount('#app')