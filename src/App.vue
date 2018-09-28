<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <!-- 路徑切換方法一 -->
          <router-link class="nav-link" :to="{ name: '首頁' }">Home</router-link>
        </li>
        <li class="nav-item ">
          <!-- 路徑切換方法二 -->
          <router-link class="nav-link" to="/page">Page</router-link>
        </li>
      </ul>
    </div>
  </nav>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <!-- 自訂的 router-view -->
    <router-view name="menu"></router-view>
    <div class="container">
      <!-- 預設的 router-view -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

