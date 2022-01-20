<template>
  <h1>#######生命周期相关########</h1>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">+1</button>
</template>

<script>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";

export default {
  name: "LearnLifeCycle",
  setup() {
    let sum = ref(0);

    //通过组合API的形式使用生命周期钩子
    //beforeCreate和created没有组合API，setup就相当于这两个
    onBeforeMount(() => {
      console.log('onBeforeMount');
    })
    onMounted(() => {
      console.log('onMounted');
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('onUpdated');
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    })
    onUnmounted(() => {
      console.log('onUnmounted');
    })
    return {
      sum,
    }
  },
  //通过配置项的形式使用生命周期钩子
  // beforeCreate() {
  //   console.log('beforeCreate');
  // },
  // created() {
  //   console.log('created');
  // },
  // beforeMount() {
  //   console.log('beforeMount');
  // },
  // mounted() {
  //   console.log('mounted');
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate');
  // },
  // updated() {
  //   console.log('updated');
  // },
  // beforeUnmount() {
  //   console.log('beforeUnmount');
  // },
  // unmounted() {
  //   console.log('unmounted');
  // }
}
</script>

<style scoped>

</style>