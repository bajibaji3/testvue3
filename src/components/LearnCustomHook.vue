<template>
  <h1>#######自定义Hook相关########</h1>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">+1</button>
  <hr>
  <h2>当前点击时鼠标的坐标：X：{{point.x}},Y：{{point.y}}</h2>
</template>

<script>
import {ref} from "vue";
import usePoint from "../hooks/usePoint";

export default {
  name: "LearnCustomHook",
  setup() {
    let sum = ref(0);

    //使用自定义的hook,类似于vue2中的mixin
    let point = usePoint()

    return {
      sum,
      point,
    }
  }
}
</script>

<style scoped>

</style>