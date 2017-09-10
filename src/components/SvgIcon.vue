<template>
  <span v-html="icon" :class="classes"></span>
</template>

<script>
export default {
  name: 'svg-icon',
  props: ['icon', 'modifier'],
  data() {
    return {
      classes: [
        'SvgIcon',
        this.modifier ? `SvgIcon-${this.modifier}` : '',
      ],
    };
  },
};
</script>

<style scoped>
.SvgIcon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
}
</style>
