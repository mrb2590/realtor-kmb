<script setup>
  import AppLink from '@/Components/AppLink.vue';
  import { links } from '~data/app-links';
</script>

<template>
  <ul class="flex w-full basis-0 items-center space-x-3">
    <li
      class="flex flex-row items-center"
      v-for="(link, linkName) in links.social.subLinks"
      :key="linkName"
    >
      <AppLink
        :href="link.href"
        :router="link.router"
        :title="link.title"
        class="rounded border border-gray-300 bg-white p-1 shadow-sm"
      >
        <component :is="link.icon.component" v-if="link.icon" :class="link.icon.classes" />
      </AppLink>
    </li>
  </ul>
</template>
