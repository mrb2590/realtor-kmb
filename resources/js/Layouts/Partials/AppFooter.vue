<script setup>
  import ApplicationLogo from '@/Components/ApplicationLogo.vue';
  import AppLink from '@/Components/AppLink.vue';
  import { links } from '~data/app-links';

  const navLinks = {
    about: { ...links.about },
    contact: { ...links.contact },
    services: { ...links.services },
    listing: { ...links.listing },
    social: { ...links.social }
  };
</script>

<template>
  <footer class="w-full border-primary-700 bg-gray-100">
    <!-- Container-->
    <div class="container mx-auto flex flex-row flex-wrap justify-evenly px-4 py-8 md:flex-nowrap">
      <!-- Left Side -->
      <div
        class="mt-12 flex basis-full items-center justify-center md:mr-12 md:mt-0 md:basis-2/5 lg:basis-1/6"
      >
        <!-- Logo Wrapper -->
        <div class="flex w-full flex-col items-center justify-center space-y-2">
          <ApplicationLogo class="mb-4 h-auto w-full max-w-52" />

          <div class="text-center text-xs text-gray-600">
            &copy; {{ new Date().getFullYear() }} Karen Buonomo, realtorkmb.com. All rights
            reserved.
          </div>

          <div class="text-center text-gray-600">
            <AppLink href="#" class="mr-2 text-xs"> Privacy Policy </AppLink>
            <AppLink href="#" class="text-xs"> Terms & Conditions </AppLink>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <nav
        class="items-cemter order-first flex basis-full items-center justify-center md:order-last md:basis-3/5 lg:basis-5/6"
      >
        <div
          class="flex w-full max-w-[30rem] flex-row flex-wrap items-start justify-between lg:max-w-full"
        >
          <!-- Nav Links -->
          <div class="w-full max-w-48 p-2" v-for="(navLink, linkName) in navLinks" :key="linkName">
            <h3 class="mb-2 text-xl font-bold">{{ navLink.title }}</h3>
            <ul>
              <li
                class="mb-1 flex flex-row items-center space-x-2 text-sm"
                v-for="(link, subLinkName) in navLink.subLinks"
                :key="`${linkName}-${subLinkName}`"
              >
                <component :is="link.icon.component" v-if="link.icon" :class="link.icon.classes" />
                <AppLink :href="link.href" :router="link.router">
                  {{ link.title }}
                </AppLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>
