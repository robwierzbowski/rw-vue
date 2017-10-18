<template>
  <ul class='ContactList'>
    <li class='item' v-for='contact in contacts'>
      <svg-icon class='icon' :icon='contact.icon' :modifier='contact.modifier'></svg-icon>

      <fancy-link :href='contact.href' :content='contact.content' />
    </li>
  </ul>
</template>

<script>
import FancyLink from '@/components/FancyLink';
import SvgIcon from '@/components/SvgIcon';
import iconTwitter from '@/assets/icons/twitter.svg';
import iconGithub from '@/assets/icons/github.svg';
import iconMail from '@/assets/icons/mail.svg';

export default {
  name: 'contact-list',
  components: {
    FancyLink,
    SvgIcon,
  },
  data() {
    return {
      contacts: [
        {
          icon: iconMail,
          modifier: 'mail',
          href: 'mailto:rob.wierzbowski@gmail.com',
          content: 'rob.wierzbowski@gmail.com',
        },
        {
          icon: iconTwitter,
          modifier: 'twitter',
          href: 'https://twitter.com/robwierzbowski',
          content: '@robwierzbowski',
        },
        {
          icon: iconGithub,
          modifier: 'github',
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

.icon {
  margin-right: 0.5rem;
}
</style>
