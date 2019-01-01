 

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

 
<template>
   <div class="mui-button-row">
      <router-link to="denglu">
        <button type="button" class="   "  id="login">登录</button>
      </router-link>
      <router-link to="/zhuce">
        <button type="button" class="   " >注册</button>
      </router-link>
    </div>
</template>

<script>
import $ from "jquery";
import Mock from "Mock";
export default {
  mounted() {
    Mock.mock("http://123.com", {
      name: "test",
      age: 25
    });

    $.ajax({
      url: "http://123.com",
      dataType: "json",
      success: function(e) {
        console.log(e);
      }
    });
  }
};
</script>
 


