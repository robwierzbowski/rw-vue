<template>
  <ul class='ContactList'>
    <li class='item' v-for='contact in contacts' :key='contact.key'>
      <a class='link' :href='contact.href'>
        <svg-icon class='icon' :icon='contact.icon' />
        <span class='content'>{{ contact.content }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import SvgIcon from '@/components/SvgIcon';
import iconTwitter from '@/assets/icons/twitter.svg';
import iconGithub from '@/assets/icons/github.svg';
import iconMail from '@/assets/icons/mail.svg';

export default {
  name: 'contact-list',
  components: {
    SvgIcon,
  },
  data() {
    return {
      contacts: [
        {
          key: 'iconMail',
          icon: iconMail,
          href: 'mailto:rob.wierzbowski@gmail.com',
          content: 'rob.wierzbowski@gmail.com',
        },
        {
          key: 'iconTwitter',
          icon: iconTwitter,
          href: 'https://twitter.com/robwierzbowski',
          content: '@robwierzbowski',
        },
        {
          key: 'iconGithub',
          icon: iconGithub,
          href: 'https://github.com/robwierzbowski',
          content: 'robwierzbowski',
        },
      ],
    };
  },
};
</script>

<style scoped lang="postcss">
@import 'assets/styles/utils/vars.css';
@import 'assets/styles/utils/links.css';

.ContactList {
  list-style-type: none;
}

.link {}

.icon {
  margin-right: 0.5rem;

  .link:hover &,
  .link:focus & {
    fill: $pink-desat;
  }
}

.content {
  @mixin link-base;

  .link:hover &,
  .link:focus & {
    @mixin link-activated;
  }
}
</style>
