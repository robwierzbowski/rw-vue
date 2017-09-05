<template>
  <div class="Hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: `Welcome to Your Moo.js App ${Date.now()}`,
    };
  },
};
</script>

<style scoped>
.Hello {
  font-weight: normal;
}
</style>
