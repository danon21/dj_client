<template>
  <div class="px-4 py-5 my-5 text-center">
    <div class="px-4 py-1 my-5 text-center">
      <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="100" height="100">
      
      <form class="center-form" method="get" id="auth" action="user">
        <h1 class="form-header">Dungeons & Dranics</h1>
        <label class="form-question">Login</label>
        <div>
          <input name="name" id="login" type="text" placeholder="baaf" size="30" maxlength="100">
        </div>
        <label class="form-question">Password</label>
        <div>
          <input name="password" id="pass" type="password" size="30" maxlength="100">
        </div>
        <input id="input" class="btn btn-primary my-2" type="submit" value="Send">
        <div>
          <a class="btn btn-secondary my-2" href="#" id="href1">sign up</a>
        </div>
      </form>


    </div>
  </div>
</template>

<script>
export default {
  name: `Login`,
  data() {
    return {
      user: {}
    }
  },
  created() {

  },
  methods: {
    async loadUser() {
      this.user = await fetch(
          `${this.$store.getters.getServerUrl}/authorization/sendd`
      ).then(response => response.json())
      console.log(this.user)
    }
  }
}
</script>

<style scoped>

</style>