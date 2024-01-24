<script setup>
  import AppButton from '@/Components/AppButton.vue';
  import { links } from '~data/app-links';
</script>

<template>
  <ul class="flex w-full basis-0 items-center space-x-3">
    <li
      class="flex flex-row items-center"
      v-for="(link, linkName) in links.social.subLinks"
      :key="linkName"
    >
      <AppButton
        :z-route="link.route"
        :href="link.href"
        :title="link.title"
        variant="secondary"
        class="!p-1"
      >
        <component :is="link.icon.component" v-if="link.icon" :class="link.icon.classes" />
      </AppButton>
    </li>
  </ul>
</template>
