import {onBeforeUnmount, onMounted, reactive} from "vue";

//vue3使用组合式api相比于vue2的配置项的方式，可以将每个功能的数据、方法、计算属性等放在一起，放在一个自定义hook里
//vue2将每个功能的数据、方法、计算属性等分开配置不方便修改管理

export default function () {
  //实现获取鼠标点击位置的数据
  let point = reactive({
    x: 0,
    y: 0
  })

  //实现获取鼠标点击位置的方法
  function savePoint(event){
    point.x = event.pageX;
    point.y = event.pageY;
  }

  //实现获取鼠标点击位置的生命周期钩子
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })

  return point;
}
