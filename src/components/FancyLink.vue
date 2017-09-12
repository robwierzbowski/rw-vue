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
@import 'assets/styles/links.css';

.FancyLink {
  @mixin link-reset;
  @mixin link;

  color: initial;
}
</style>
