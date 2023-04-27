<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <!--   class="active" - выбранный начальныйй слайд, нужно создавать остальные без этого говна   -->
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></button>
    </div>
    <div class="carousel-inner">
      <!--   div class="carousel-item {active}" - добавляем только первой кнопке   -->
      <div class="carousel-item active">
        <svg
            class="bd-placeholder-img"
            width="100%" height="100%"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
            preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="#777"></rect>
        </svg>

        <div class="container">
          <div class="carousel-caption text-start ">
            <div class="row featurette">
              <div class="col-md-2 order-md-1">
                <svg
                    class="bd-placeholder-img rounded-circle"
                    width="120" height="120"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img" aria-label="Placeholder: 50x50"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"><title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#111"></rect>
                  <text x="50%" y="50%" fill="#999" dy=".3em">120x120</text>
                </svg>
              </div>
              <div class="col-md-10 order-md-2">
                <div class="achievement">
                  <h4>{TITLE ACHIEV}</h4>
                  <p>{DISCRIPTION ACHIEV}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: `Сarousel`
  }
</script>

<style scoped>
.carousel-caption.text-start {
  height: 89%;
}

.achievement {
  margin-left: 40px;
}
</style>