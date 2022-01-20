<template>
  <h1>#######shallowReactive和shallowRef相关########</h1>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h2>{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">修改薪水</button>
  <hr>
  <h2>x.y的值：{{x.y}}</h2>
  <button @click="x.y++">x+1</button>
</template>

<script>
import {reactive, toRef, toRefs, shallowReactive, shallowRef, ref} from "vue";

export default {
  name: "LearnShallowReactiveAndShallowRef",
  setup() {
    //shallowReactive浅层的响应式，只是对象类型的第一层能实现响应式，深层不能
    // let person = shallowReactive({
    let person = reactive({
      name: '张三',
      age: 23,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    //shallowRef同shallowReactive
    // let x = shallowRef({
    let x = ref({
      y: 0
    })

    return {
      x,
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>