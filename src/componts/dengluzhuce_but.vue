 

<style scoped>
.mui-button-row {
  margin-top: 20px;
  border: 1px solid blueviolet;
}
.mui-button-row button {
  border: none;
  color: #666666;
  background: none;
  font-size: 26px;
}
</style>


<!--  -->
<template>
   <div class="mui-button-row">
        <button type="button" class="   "  id="login">登录</button>
        <button type="button" class="   " >注册</button>
    </div>
</template>

<script>
 import $ from 'jquery'
 import Mock from 'Mock'
export default {
  data () {
    return {
  
    }
  },

  components: {},

  props: [],

  watch: {
},

  computed: {},

  mounted () {
    Mock.mock('http://123.com',{
    'name':'test',
    'age':25,
 })
 
 $.ajax({
    url:'http://123.com',
    dataType:'json',
    success:function(e){
       console.log("sssssssssssss",e) //现在什么问题啊？ 用mock 创建了一个数据 把这个ajax里面的这个成功 console打印出来在浏览器 你这个脚手架不知道怎么搞的啊，先死的不是这个文件啊 嗯  你先搞定脚手架吧 嗯
    }
})
  },

  methods: {}
}

</script>
 


