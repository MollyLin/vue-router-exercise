<template>
  <div class="hello my-3">
    <ul class="nav">
        <li class="nav-item active">
            <router-link class="nav-link" to="/page">卡片 1</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/page/child2">卡片 2</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/page/child3">卡片 3</router-link>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="updatePath">切換到指定頁面 ex:卡片2</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="beforePath">切換到上一頁</a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
      updatePath() {
          // 由 main.js 將 router 方法掛載進來 router.push(location, onComplete?, onAbort?)
          this.$router.push('/page/child2');
          // this.$router.replace('/page/child2'); 直接取代當前頁
      },
      beforePath() {
          this.$router.back();
          // or this.$router.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
