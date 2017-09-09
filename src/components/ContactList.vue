<template>
  <ul class='ContactList'>
    <li class='ContactList-item' v-for="contact in contacts">
     <fancy-link :href='contact.href' :content='contact.content' />
    </li>
  </ul>
</template>

<script>
import FancyLink from '@/components/FancyLink';

export default {
  name: 'contact-list',
  components: {
    FancyLink,
  },
  data() {
    return {
      contacts: [
        {
          href: 'mailto:rob.wierzbowski@gmail.com',
          content: 'rob.wierzbowski@gmail.com',
        },
        {
          href: 'https://twitter.com/robwierzbowski',
          content: '@robwierzbowski',
        },
        {
          href: 'https://github.com/robwierzbowski',
          content: 'robwierzbowski',
        },
      ],
    };
  },
};
</script>

<style scoped>
.ContactList {
  list-style-type: none;
}
</style>
