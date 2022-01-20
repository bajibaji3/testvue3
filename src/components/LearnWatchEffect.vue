<template>
  <h1>#######WatchEffect相关########</h1>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">+1</button>
  <hr>
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg += '1111111'">修改msg</button>
  <hr>
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <h2>{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">修改薪水</button>
</template>

<script>
import {reactive, ref, watch, watchEffect} from "vue";

export default {
  name: "LearnWatchEffect",
  setup() {
    let sum = ref(0);
    let msg = ref('你好');
    let person = reactive({
      name: '张三',
      age: 23,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    //监视
    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum变了,new：', newValue, ',old：', oldValue);
    // })

    //不用指明监听谁，在回调里面用了谁，谁就会被监听
    //有点类似于computed，里面依赖的属性变了就要变
    //但是computed注重计算出来的值（回调函数的返回值），watchEffect注重的是过程（回调函数的函数体）
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.job.j1.salary;
      console.log('watchEffect监听回调了');
    })

    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style scoped>

</style>