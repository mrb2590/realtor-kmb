<script setup>
  import AppTopNavLink from '@/Components/AppTopNavLink.vue';
  import { links } from '@/../data/app-links';
</script>

<template>
  <nav class="z-20 w-full bg-primary-800 font-light">
    <div
      class="container mx-auto flex w-full flex-row items-center justify-between space-x-6 px-4 py-2"
    >
      <ul class="flex w-full items-center space-x-6">
        <li
          class="flex flex-row items-center space-x-2 text-sm text-white"
          v-for="link in links.contact.subLinks"
        >
          <component
            :is="link.icon.component"
            v-if="link.icon"
            class="h-auto w-4"
            :class="link.icon.classes"
          />
          <AppTopNavLink :href="link.href" :router="link.router">
            {{ link.title }}
          </AppTopNavLink>
        </li>
      </ul>
      <ul class="flex w-full basis-0 items-center space-x-2">
        <li
          class="flex flex-row items-center text-sm text-white"
          v-for="link in links.social.subLinks"
        >
          <AppTopNavLink
            :href="link.href"
            :router="link.router"
            :title="link.title"
            class="rounded-full bg-white p-1"
          >
            <component
              :is="link.icon.component"
              v-if="link.icon"
              class="h-auto w-4"
              :class="link.icon.classes"
            />
          </AppTopNavLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
