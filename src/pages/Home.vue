<template>
  <div class="Home">
    <h1>{{ msg }}</h1>

    <fancy-link href='foo' content='bar'></fancy-link>
  </div>
</template>

<script>
import FancyLink from '@/components/FancyLink';

const name = 'Robert';

export default {
  name: 'home',
  components: {
    FancyLink,
  },
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
