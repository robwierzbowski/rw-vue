<template>
  <a class="FancyLink" :href="href">
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
.FancyLink {
  text-decoration: none;
  border-bottom: black 1px solid;
}

.FancyLink:hover {
  border-bottom-color: pink;
}
</style>
