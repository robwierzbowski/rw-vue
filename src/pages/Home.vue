<template>
  <article class='Home'>
    <p>I'm a design-minded developer focusing on front-end systems, process, and teamwork. I automate everything, love the good parts of JavaScript, and actually think CSS is awesome.</p>

    <p>You can find me living and working in Pittsburgh, PA.</p>

    <p>I work as a lead front-end developer at <a href="https://www.stitchfix.com">Stitch Fix.</a></p>
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
  margin-bottom: 2.75rem;

  a {
    @mixin link;
  }
}

p {
  margin-bottom: 1rem;
}
</style>
