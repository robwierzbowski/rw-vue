<template>
  <span v-html='icon' class='SvgIcon'></span>
</template>

<script>
export default {
  name: 'svg-icon',
  props: ['icon', 'modifier'],
};
</script>

<style scoped>
.SvgIcon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
}
</style>
