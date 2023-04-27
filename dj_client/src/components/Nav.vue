<template>
  <div class="v-nav">
    <header class="p-3 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span class="fs-2">Dungeons & Dranics</span>
          </a>

          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1"
             data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" class="rounded-circle" width="42" height="42">
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1" style="">
            <li><a class="dropdown-item  active" href="#">Game</a></li>
            <li><a class="dropdown-item" href="#">Wiki</a></li>
            <li><a class="dropdown-item" href="#">User page</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: `Nav`
}
</script>

<style scoped>
span.fs-2 {
  color: aliceblue;
  align-items: center;
}
</style>