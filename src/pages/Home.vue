<template>
  <article class='Home'>
    <p>I'm a design-minded developer focusing on front-end systems, process, and teamwork. I automate everything, love the good parts of JavaScript, and actually think CSS is awesome.</p>

    <p>I work as a lead front-end developer at <a href="https://www.stitchfix.com">Stitch Fix</a>. When I'm not escaping to some other metropolis, you'll find me at home in Pittsburgh, PA.</p>
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
  margin-bottom: 4rem;

  a {
    @mixin link;
  }

  p {
    margin-bottom: 1rem;
  }
}
</style>
