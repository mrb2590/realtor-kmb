<script setup>
  import AppLink from '@/Components/AppLink.vue';
  import SocialLinks from '@/Layouts/Partials/SocialLinks.vue';
  import { links } from '~data/app-links';

  const { cellPhone, officePhone, email } = links.contact.subLinks;
  const contactLinks = { cellPhone, officePhone, email };
</script>

<template>
  <nav class="z-20 h-12 w-full bg-white text-sm font-light">
    <div
      class="mx-auto flex h-full w-full flex-row items-center justify-between space-x-6 px-4 py-2 sm:container"
    >
      <SocialLinks />
      <ul class="flex w-full items-center justify-end space-x-3">
        <li
          class="flex-row items-center space-x-2"
          v-for="(link, linkName) in contactLinks"
          :key="linkName"
        >
          <AppLink
            :href="link.href"
            :router="link.router"
            class="flex flex-row items-center whitespace-nowrap rounded-full border border-gray-200 bg-white p-1 shadow-sm sm:rounded sm:border-0 sm:p-0 sm:shadow-none"
          >
            <component
              v-if="linkName === 'cellPhone2' ? link.iconAlt : link.icon"
              :is="linkName === 'cellPhone2' ? link.iconAlt.component : link.icon.component"
              :class="link.icon.classes"
            />
            <span class="ml-1 hidden sm:block"> {{ link.title }} </span>
          </AppLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
