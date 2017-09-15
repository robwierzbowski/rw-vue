<template>
  <div class="App">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<!-- Global styles -->
<style>
@import 'assets/styles/base.css';
</style>

<style scoped>
.App {
  margin-top: 60px;
}
</style>
