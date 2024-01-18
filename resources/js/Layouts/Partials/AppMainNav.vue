<script setup>
  import ApplicationLogo from '@/Components/ApplicationLogo.vue';
  import AppLink from '@/Components/AppLink.vue';
  import BarsIcon from '~icons/heroicons-outline/bars-3';
  import { links } from '@/../data/app-links';
  import SecondaryButton from '@/Components/SecondaryButton.vue';
</script>

<template>
  <nav
    class="relative z-30 w-full border-none bg-transparent sm:border-b sm:border-solid sm:border-primary-700 sm:bg-white sm:shadow-md"
  >
    <SecondaryButton class="absolute right-3 top-3 z-30 border-primary-700 !px-2 py-2 shadow-sm">
      <span class="sr-only">Open main menu</span>
      <BarsIcon class="h-6 w-6 text-primary-700" />
    </SecondaryButton>
    <div class="mx-auto h-full w-full px-4 py-4 sm:container">
      <ul
        class="mx-auto flex h-full w-full max-w-4xl items-center justify-center text-xl font-light uppercase sm:space-x-6"
      >
        <li class="hidden basis-1/6 items-center sm:flex">
          <AppLink
            :href="links.about.href"
            :router="links.about.router"
            class="text-base md:text-xl"
          >
            {{ links.about.title }}
          </AppLink>
        </li>

        <li class="hidden basis-1/6 items-center sm:flex">
          <AppLink
            :href="links.services.href"
            :router="links.services.router"
            class="text-base md:text-xl"
          >
            {{ links.services.title }}
          </AppLink>
        </li>

        <li class="flex basis-1/3 items-center">
          <AppLink
            :href="links.home.href"
            :router="links.home.router"
            class="mx-6 flex h-40 w-40 items-center justify-center rounded-full border border-primary-700 bg-white p-4 shadow-md sm:h-auto sm:w-full sm:rounded-none sm:border-none sm:p-0 sm:shadow-none"
          >
            <ApplicationLogo
              :is="links.home.icon.component"
              v-if="links.home.icon"
              class="h-full w-full"
              :class="links.home.icon.classes"
            />
          </AppLink>
        </li>

        <li class="hidden basis-1/6 items-center sm:flex">
          <AppLink
            :href="links.contact.href"
            :router="links.contact.router"
            class="text-base md:text-xl"
          >
            {{ links.contact.title }}
          </AppLink>
        </li>

        <li class="hidden basis-1/6 items-center sm:flex">
          <AppLink
            :href="links.contact.href"
            :router="links.contact.router"
            class="text-base md:text-xl"
          >
            {{ links.contact.title }}
          </AppLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
