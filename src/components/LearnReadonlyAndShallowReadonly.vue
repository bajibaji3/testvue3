<template>
  <h1>#######readonly和shallowReadonly相关########</h1>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h2>{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">修改薪水</button>
  <hr>
  <h2>sum：{{ sum }}</h2>
  <button @click="sum++">x+1</button>
</template>

<script>
import {reactive, toRefs, ref, readonly, shallowReadonly} from "vue";

export default {
  name: "LearnReadonlyAndShallowReadonly",
  setup() {
    let person = reactive({
      name: '张三',
      age: 23,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    //readonly让这个对象只读不能改
    // person = readonly(person)

    //shallowReadonly只是对象里的浅层数据（第一层）只读
    person = shallowReadonly(person)

    let sum = ref(0)

    return {
      sum,
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>