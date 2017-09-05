<template>
  <div class="Home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
const name = 'Robert';

export default {
  name: 'home',
  data() {
    return {
      msg: `Welcome Home, ${name}`,
    };
  },
};
</script>

<style scoped>
.Home {
  font-weight: normal;
}
</style>
