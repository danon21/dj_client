<template>
  <div class="userPage">
    <Nav/>
    <hr class="featurette-divider">
    <div class="container marketing">

      <div class="row featurette">

        <div class="col-md-3 order-md-1">
          <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="280"
               height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
               preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em">300х300</text>
          </svg>
        </div>
        <div class="col-md-9 order-md-2">
          <h1 class="featurette-heading">{USER NAME}</h1>
          <h5 class="featurette-heading">{#USER_TAG}</h5>
          <!--          <p class="lead">Каждый может кинуть камень в волка, но не каждый может кинуть волка в камень!</p>-->
          <Carousel/>
        </div>
      </div>
      <hr class="featurette-divider">
      <h2>Friends</h2>
      <hr class="featurette-divider">

      <div class="friend">
        <div class="col-lg-4">
          <svg
              class="bd-placeholder-img rounded-circle"
              width="140" height="140"
              xmlns="http://www.w3.org/2000/svg" role="img"
              preserveAspectRatio="xMidYMid slice"
              focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="40%" y="50%" fill="#111">DK</text>
          </svg>
          <h2>{NAME}</h2>
          <p>{STATUS}</p>
          <p><a class="btn btn-secondary my-2" href="#">View profile >></a></p>
        </div>
      </div>

    </div>
    <hr class="featurette-divider">
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Carousel from "@/components/Сarousel.vue"

export default {
  name: `UserPage`,
  data() {
    return {
      user: {}
    }
  },
  components: {Nav, Carousel},
  created() {
    this.loadUser()
  },
  methods: {
    async loadUser() {
      this.user = await fetch(
          `${this.$store.getters.getServerUrl}/home/baf`
      ).then(response => response.json())
      console.log(this.user)
    }
  }
}
</script>

<style scoped>

</style>