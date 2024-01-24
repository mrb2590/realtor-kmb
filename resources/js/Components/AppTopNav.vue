<script setup>
  import AppButton from '@/Components/AppButton.vue';
  import SocialLinks from '@/Components/SocialLinks.vue';
  import { links } from '~data/app-links';

  const { cellPhone, officePhone, email } = links.contact.subLinks;
  const contactLinks = { cellPhone, officePhone, email };
</script>

<template>
  <nav class="z-20 h-12 w-full border-primary-700 bg-white text-sm font-light">
    <div
      class="mx-auto flex h-full w-full flex-row items-center justify-between space-x-6 px-4 py-2 sm:container"
    >
      <SocialLinks size="xs" />

      <ul class="flex w-full items-center justify-end space-x-3">
        <li
          class="flex-row items-center space-x-2"
          v-for="(link, linkName) in contactLinks"
          :key="linkName"
        >
          <AppButton
            :z-route="link.zRoute"
            :link-to="link.href"
            :title="link.title"
            variant="secondary"
            size="xs"
            square
            class="flex flex-row items-center md:border-transparent md:bg-transparent md:hover:bg-transparent md:active:bg-transparent"
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
