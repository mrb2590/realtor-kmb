<script setup>
  import ApplicationLogo from '@/Components/ApplicationLogo.vue';
  import AppLink from '@/Components/AppLink.vue';
  import { links } from '@/../data/app-links';
</script>

<template>
  <nav
    class="z-30 w-full border-none bg-transparent sm:border-b sm:border-solid sm:border-primary-700 sm:bg-white sm:shadow-md"
  >
    <div class="mx-auto h-full w-full px-4 py-4 sm:container">
      <ul
        class="mx-auto flex h-full w-full max-w-4xl items-center justify-center space-x-6 text-xl font-light uppercase"
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
