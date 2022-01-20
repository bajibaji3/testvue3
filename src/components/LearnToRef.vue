<template>
  <h1>#######toRef相关########</h1>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h2>{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">修改薪水</button>
</template>

<script>
import {reactive, toRef, toRefs} from "vue";

export default {
  name: "LearnToRef",
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

    //转换成ref对象,可以理解为name1和person.name关联了，使用name1时其实指向了person.name
    //toRef是引用一个ref对象，ref是创建一个ref对象
    // const name1 = toRef(person, 'name');
    // console.log('name1', name1);

    //
    const x = toRefs(person);
    console.log('x', x);

    return {
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // salary: toRef(person.job.j1, 'salary'),
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>