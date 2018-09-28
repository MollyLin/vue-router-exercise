<template>
    <div>
        <img class="card-img-top" :src="user.picture" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card 3</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        user: {
            picture: {}
        }
    }
  },
  created() {
      // 讀取route裡的參數裡的id
      // ex: id="epogkpr"
    //   console.log(this.$route.params.id);
    //   const id = this.$route.params.id;
    const vm = this;
      this.$http.get('https://randomuser.me/api/').then((response) => {
          console.log(response);
          vm.user = response.data.results[0];
          vm.user.picture = vm.user.picture.large
      })
  }
}
</script>
