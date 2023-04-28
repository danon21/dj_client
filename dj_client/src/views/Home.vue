<template>
  <div class="home">
    <Nav/>
    <div class="d-grid gap-xl-3 col-4 mx-auto">
        <a class="btn btn-primary btn-lg" type="button" href="http://localhost:8800/index.html">Start game >></a>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: `Home`,
  components: {Nav}
}

</script>

<style>
.d-grid {
  padding-top: 20%;
}
</style>