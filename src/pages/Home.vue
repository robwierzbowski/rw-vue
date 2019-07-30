<template>
  <article class='Home'>
    <p>
      As a brand-focused engineer, I grow teams and lead technical intiatives that move the idea of a product forward. I bring fifteen years of cross-disiplinary experience and a developed understanding of technical, tactical, and organizational interconenectedness to the groups I work with.
    </p>

    <p>
      I currently work as a lead engineer at <a href="https://www.stitchfix.com">Stitch Fix</a>. When I'm not escaping to another metropolis you'll find me at home in Pittsburgh, PA.
    </p>
  </article>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped lang="postcss">
@import 'assets/styles/utils/links.css';

.Home {
  margin-bottom: 2.5rem;

  a {
    @mixin link;
  }

  p {
    margin-bottom: 1rem;
  }
}
</style>
