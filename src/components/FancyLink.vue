<template>
  <a v-bind:href="href">
    {{ content }}
  </a>
</template>

<script>

export default {
  name: 'fancy-link',
  props: ['href', 'content'],
};

</script>

<style scoped>
a {
  text-decoration: none;
  border-bottom: black 1px solid;
}

a:hover {
  border-bottom-color: pink;
}
</style>
