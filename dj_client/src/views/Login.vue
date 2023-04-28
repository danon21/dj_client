<template>
  <div class="px-4 py-5 my-5 text-center">
    <div class="px-4 py-1 my-5 text-center">
      <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="100" height="100">
      <form class="center-form" method="post" id="auth">
        <h1 class="form-header">Dungeons & Dranics</h1>
        <label class="form-question">Email address</label>
        <div>
          <input name="login" id="login" type="email" placeholder="email@example.com" size="30" maxlength="100">
        </div>
        <label class="form-question">Password</label>
        <div>
          <input name="pass" id="pass" type="password" size="30" maxlength="100">
        </div>
        <input id="input" class="btn btn-primary my-2" type="submit" value="login">
        <div>
          <a class="btn btn-secondary my-2" href="#" id="href1">sign up</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: `Login`
}
</script>

<style scoped>

</style>