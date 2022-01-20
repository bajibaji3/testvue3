<template>
  <h1>#######LearnCustomRef相关########</h1>
  <label>
    <input type="text" v-model="keyword">
  </label>
  <h2>{{ keyword }}</h2>

</template>

<script>
import {customRef} from "vue";

export default {
  name: "LearnCustomRef",
  setup() {
    //自定义一个名为myRef的ref
    //实现一个输入防抖
    function myRef(value, delay) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            track()//通知vue追踪数据的变化
            return value;
          },
          set(newValue) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue;
              trigger();//通知vue重新解析模板
            }, delay)
          }
        }
      })
    }

    // let keyword = ref(0)
    let keyword = myRef('hello', 500)//使用自定义ref

    return {
      keyword
    }
  }
}
</script>

<style scoped>

</style>