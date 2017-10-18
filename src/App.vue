<template>
  <main class='App'>
    <h1 class='title'>Rob Wierzbowski</h1>

    <router-view></router-view>

    <footer class='footer'>
      <contact-list></contact-list>
    </footer>
  </main>
</template>

<script>
import ContactList from '@/components/ContactList';

export default {
  name: 'app',
  components: {
    ContactList,
  },
};
</script>

<!-- Global styles -->
<style>
@import 'assets/styles/base.css';
</style>

<style scoped>
@import 'assets/styles/utils/type.css';

.App {
  padding: 1.5rem;
  max-width: 35rem;
}

.title {
  @mixin t-one;
  margin-top: .75rem;
  margin-bottom: 1.25rem;
}

.footer {}
</style>
