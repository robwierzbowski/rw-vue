<template>
  <div class="Home">
    <h1>{{name}}</h1>

    <p>I'm a design-minded developer focusing on front-end systems, process, and teamwork. I automate everything, love the good parts of JavaScript, and actually think CSS is awesome.</p>

    <p>You can find me living and working in Pittsburgh, PA.</p>

    <p>I'm free for consulting and full time remote work in 2017.</p>

    <contact-list></contact-list>
  </div>
</template>

<script>
import ContactList from '@/components/ContactList';

const name = 'Robert Wierzbowski';

export default {
  name: 'home',
  components: {
    ContactList,
  },
  data() {
    return {
      msg: name,
    };
  },
};
</script>

<style scoped>
.Home {
  font-weight: normal;
}
</style>
