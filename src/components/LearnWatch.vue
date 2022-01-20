<template>
  <h1>#######Watch相关########</h1>
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
import {reactive, ref, watch} from "vue";

export default {
  name: "LearnWatch",
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

    //一、监视ref定义的一个响应式数据
    //sum是基本数据类型，这里不用sum.value，这样的话就是监听的这个数值而不是监听这个属性了
    //如果监听ref定义的对象类型，就需要使用XXX.value,或者配置deep: true
    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum变了,new：', newValue, ',old：', oldValue);
    // })

    //二、监视ref定义的多个响应式数据
    //此时newValue和oldValue是一个数组
    // watch([sum, msg], (newValue, oldValue) => {
    //   console.log('sum或msg变了,new：', newValue, ',old：', oldValue);
    // }, {immediate: true})

    //三、监视reactive定义的一个响应式数据的全部属性
    //问题1：此处无法正确的获得oldValue
    //问题1：强制开启了深度监视（deep配置无效）
    // watch(person, (newValue, oldValue) => {
    //   console.log('person变了,new：', newValue, ',old：', oldValue);
    // }, {deep: false})//此处的deep配置无效

    //四、监视reactive定义的一个响应式数据的某个属性
    // watch(() => person.age, (newValue, oldValue) => {
    //   console.log('age变了,new：', newValue, ',old：', oldValue);
    // })

    //四、监视reactive定义的一个响应式数据的某些属性
    // watch([() => person.age, () => person.name], (newValue, oldValue) => {
    //   console.log('age或name变了,new：', newValue, ',old：', oldValue);
    // })

    //五、特殊情况
    watch(() => person.job, (newValue, oldValue) => {
      console.log('job变了,new：', newValue, ',old：', oldValue);
    }, {deep: true})//此处监视的是reactive定义的对象中的某个属性，所以deep配置有效

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