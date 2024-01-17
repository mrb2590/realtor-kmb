<script setup>
  import AppLink from '@/Components/AppLink.vue';
  import { links } from '@/../data/app-links';

  const { messageForm, ...filteredContactLinks } = links.contact.subLinks; // Filter out messageForm
</script>

<template>
  <nav class="z-20 w-full border-b border-b-white bg-white font-light">
    <div
      class="container mx-auto flex w-full flex-row items-center justify-between space-x-6 px-4 py-2"
    >
      <ul class="flex w-full basis-0 items-center space-x-2">
        <li class="flex flex-row items-center text-sm" v-for="link in links.social.subLinks">
          <AppLink :href="link.href" :router="link.router" :title="link.title" class="rounded-full">
            <component
              :is="link.icon.component"
              v-if="link.icon"
              class="h-5"
              :class="link.icon.classes"
            />
          </AppLink>
        </li>
      </ul>
      <ul class="flex w-full items-center justify-end space-x-6">
        <li
          class="flex flex-row items-center space-x-2 text-sm"
          v-for="link in filteredContactLinks"
        >
          <component
            :is="link.icon.component"
            v-if="link.icon"
            class="h-5 w-5"
            :class="link.icon.classes"
          />
          <AppLink
            :href="link.href"
            :router="link.router"
            class="flex flex-row items-center space-x-2 whitespace-nowrap"
          >
            <span> {{ link.title }} </span>
          </AppLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
