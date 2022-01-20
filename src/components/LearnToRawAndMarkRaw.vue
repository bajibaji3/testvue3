<template>
  <h1>#######toRaw和markRaw相关########</h1>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h2>{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">修改薪水</button>
  <hr>
  <h2>sum：{{ sum }}</h2>
  <button @click="sum++">x+1</button>
  <button @click="showRawPerson">原始person</button>
  <button @click="addCar">对person添加一个车</button>
  <h2 v-show="person.car">{{ person.car }}</h2>
</template>

<script>
import {reactive, toRefs, ref, toRaw, markRaw} from "vue";

export default {
  name: "LearnToRawAndMarkRaw",
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

    let sum = ref(0)

    //toRaw将响应式对象转换回到原始数据,只能处理reactive定义的对象
    function showRawPerson() {
      console.log(toRaw(person));
    }

    //markRaw将某个数据标记为不是响应式的对象
    function addCar() {
      let car = {name: '奥迪', price: '60'}
      person.car = markRaw(car)
    }

    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    }
  }
}
</script>

<style scoped>

</style>