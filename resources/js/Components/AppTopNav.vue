<script setup>
  import AppButton from '@/Components/AppButton.vue';
  import SocialLinks from '@/Components/SocialLinks.vue';
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
          <AppButton
            :z-route="link.zRoute"
            :href="link.href"
            :title="link.title"
            variant="secondary"
            class="flex flex-row items-center rounded-full bg-white !p-1 md:rounded md:border-transparent md:!text-xs"
          >
            <component
              v-if="linkName === 'cellPhone2' ? link.iconAlt : link.icon"
              :is="linkName === 'cellPhone2' ? link.iconAlt.component : link.icon.component"
              :class="link.icon.classes"
            />
            <span class="ml-1 hidden md:block"> {{ link.title }} </span>
          </AppButton>
        </li>
      </ul>
    </div>
  </nav>
</template>
