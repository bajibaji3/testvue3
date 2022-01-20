<template>
  <!--vue3中模板可以没有根标签-->
<!--  <h2>{{ name }}</h2>-->
<!--  <h2>{{ age }}</h2>-->
<!--  <h2>{{ job.type }}</h2>-->
<!--  <h2>{{ job.salary }}</h2>-->
<!--  <h2>{{ job.a.b.c }}</h2>-->
<!--  <h2>{{ hobby }}</h2>}-->

  <h2 v-show="person.name">{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <h2>{{ person.job.type }}</h2>
  <h2>{{ person.job.salary }}</h2>
  <h2>{{ person.job.a.b.c }}</h2>
  <h2>{{ person.hobby }}</h2>
  <h2 v-show="person.sex">{{ person.sex }}</h2>
  <button @click="alertMessage">按钮</button>
  <br>
  <br>
  <button @click="changeInfo">修改信息</button>
  <br>
  <br>
  <button @click="addSex">添加一个sex属性</button>
  <br>
  <br>
  <button @click="deleteName">删除name属性</button>

  <LearnComputed/>
  <LearnWatch/>
  <LearnWatchEffect/>
  <hr>
  <button @click="isShowLearnLifeCycle = !isShowLearnLifeCycle">切换隐藏/显示</button>
  <LearnLifeCycle v-if="isShowLearnLifeCycle"/>
  <LearnCustomHook/>
  <LearnToRef/>
  <LearnShallowReactiveAndShallowRef/>
  <LearnReadonlyAndShallowReadonly/>
  <LearnToRawAndMarkRaw/>
  <LearnCustomRef/>
</template>

<script>
import {reactive, ref} from 'vue';
import LearnComputed from './components/LearnComputed'
import LearnWatch from './components/LearnWatch'
import LearnWatchEffect from './components/LearnWatchEffect'
import LearnLifeCycle from './components/LearnLifeCycle'
import LearnCustomHook from './components/LearnCustomHook'
import LearnToRef from './components/LearnToRef'
import LearnShallowReactiveAndShallowRef from './components/LearnShallowReactiveAndShallowRef'
import LearnReadonlyAndShallowReadonly from './components/LearnReadonlyAndShallowReadonly'
import LearnToRawAndMarkRaw from './components/LearnToRawAndMarkRaw'
import LearnCustomRef from './components/LearnCustomRef'
export default {
  name: 'App',
  props: [],
  components: {
    LearnComputed,
    LearnWatch,
    LearnWatchEffect,
    LearnLifeCycle,
    LearnCustomHook,
    LearnToRef,
    LearnShallowReactiveAndShallowRef,
    LearnReadonlyAndShallowReadonly,
    LearnToRawAndMarkRaw,
    LearnCustomRef,
  },
  //setup()在beforeCreate()生命周期之前执行的，这时this是undefined的
  //setup(props, context),setup可以有两个参数props和context，props是别的组件给这个组件传的参数，使用props要先声明
  //context是一个上下文对象
  setup() {
    // let name = ref('张三');
    // let age = ref(23);
    // let job = ref({
    //   type: '前端',
    //   salary: '30'
    // });

    //使用reactive时，不用再写job.value了，直接job
    //ref通过Object.defineProperty()的get和set实现响应式
    //reactive使用了ES6的Proxy实现响应式，Proxy是window内置的函数
    //使用ref处理对象时实际也是ref使用了reactive，然后reactive再使用Proxy
    //基本数据类型不能使用reactive
    // let job = reactive({
    //   type: '前端',
    //   salary: '30',
    //   a: {
    //     b: {
    //       c: 666
    //     }
    //   }
    // });
    // let hobby = reactive(['抽烟', '喝酒', '烫头']);

    let person = reactive({
      name: '张三',
      age: 23,
      job: {
        type: '前端',
        salary: '30',
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })

    let isShowLearnLifeCycle = ref(true);

    function alertMessage() {
      alert('alertMessage');
    }

    function changeInfo() {
      // name.value = '李四';
      // age.value = 25;
      // job.value.type = '后端';
      // job.value.salary = '20';
      // job.type = '后端';
      // job.salary = '20';
      // job.a.b.c = 999;
      // hobby[0] = '学习';

      person.name = '李四';
      person.age = 25;
      person.job.type = '后端';
      person.job.salary = '20';
      person.job.a.b.c = 999;
      person.hobby[0] = '学习';
    }

    //因为vue3使用reactive，所以添加一个属性时也能实现响应式
    //vue2使用Object.defineProperty，在添加一个属性时不能实现响应式,要使用this.$set()解决
    function addSex() {
      person.sex = '男';
    }

    //删除元素同增加元素，vue要解决这个问题可以使用this.$delete()
    function deleteName() {
      delete person.name;
    }
    return {
      // name,
      // age,
      // job,
      // hobby,
      person,
      isShowLearnLifeCycle,
      alertMessage,
      changeInfo,
      addSex,
      deleteName,
    }
  }
}
</script>

<style>

</style>
