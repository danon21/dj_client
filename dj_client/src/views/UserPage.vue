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
          <h1 class="featurette-heading">{{ user.nickname }}</h1>
          <h5 class="featurette-heading">#{{ user.tag }}</h5>
          <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <!--   class="active" - выбранный начальныйй слайд, нужно создавать остальные без этого говна   -->
              <button
                  v-for="achiv in user.achievements" :key="achiv.name"
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="{{achiv.id}}"
                  class=""
              ></button>
            </div>
            <div class="carousel-inner">
              <!--   div class="carousel-item {active}" - добавляем только первой кнопке   -->
              <div
                  v-for="achiv in user.achievements" :key="achiv.name"
                  class="carousel-item active"
              >
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
                          <h4>{{ achiv.name }}</h4>
                          <!--                          <p>Описание достижения {{achiv.name}}</p>-->
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
        </div>
      </div>
      <hr class="featurette-divider">
      <h2>Friends</h2>
      <hr class="featurette-divider">

      <div
          class="friend"
      >
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

export default {
  name: `UserPage`,
  data() {
    return {
      user: {}
    }
  },
  components: {Nav},
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
.carousel-caption.text-start {
  height: 89%;
}

.achievement {
  margin-left: 40px;
}
</style>