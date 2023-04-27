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
      <Friend/>
    </div>
    <hr class="featurette-divider">
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Friend from "@/components/Friend.vue";
import Carousel from "@/components/Сarousel.vue"

export default {
  name: `UserPage`,
  components: {Nav, Friend, Carousel}
}
</script>

<style scoped>

</style>