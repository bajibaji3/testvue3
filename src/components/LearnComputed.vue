<template>
  <h1>#######计算属性相关########</h1>
  姓：
  <label>
    <input type="text" v-model="person.firstName">
  </label>
  名：
  <label>
    <input type="text" v-model="person.lastName">
  </label>
<!--  <p>全名：{{ fullName }}</p>-->
  <p>全名：{{ person.fullName }}</p>
</template>

<script>
import {reactive, computed} from "vue";

export default {
  name: "LearnComputed",
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三',
    })

    //计算属性
    // let fullName = computed(() => {
    //   return person.firstName + person.lastName;
    // })
    //计算属性--简写（没有考虑计算属性被修改的情况）
    person.fullName = computed(() => {
      return person.firstName + person.lastName;
    })
    //计算属性--完整写法（考虑读和写）
    person.fullName = computed({
      get() {
        return person.firstName + person.lastName;
      },
      set(value) {
        person.fullName = value;
      }
    })

    return {
      person,
      // fullName,
    }
  }
}
</script>

<style scoped>

</style>