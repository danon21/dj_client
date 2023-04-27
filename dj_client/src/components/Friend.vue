<template>
  <div class="friend">
      <div class="col-lg-4">
        <svg
            class="bd-placeholder-img rounded-circle"
            width="140" height="140"
            xmlns="http://www.w3.org/2000/svg" role="img"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"><title>Placeholder
            </title><rect width="100%" height="100%" fill="#777"></rect>
            <text x="40%" y="50%" fill="#111" >DK</text>
        </svg>
        <h2>{NAME}</h2>
        <p>{STATUS}</p>
        <p><a class="btn btn-secondary my-2" href="#">View profile >></a></p>
      </div>
  </div>
</template>

<script>
export default {
  name: `Friend`
}
</script>

<style scoped>

</style>