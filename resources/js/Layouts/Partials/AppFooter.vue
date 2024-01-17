<script setup>
  import ApplicationLogo from '@/Components/ApplicationLogo.vue';
  import AppLink from '@/Components/AppLink.vue';
  import { links } from '@/../data/app-links';

  const navLinks = {
    about: { ...links.about },
    contact: { ...links.contact },
    services: { ...links.services },
    social: { ...links.social }
  };
</script>

<template>
  <footer class="w-full border-t border-primary-700 bg-primary-100 px-4 py-8">
    <!-- Container-->
    <div class="container mx-auto flex flex-row flex-wrap justify-evenly md:flex-nowrap">
      <!-- Left Side -->
      <div
        class="mt-12 flex basis-full items-center justify-center md:mr-12 md:mt-0 md:basis-2/5 lg:basis-1/4"
      >
        <!-- Logo Wrapper -->
        <div class="flex w-full flex-col items-center justify-center space-y-2">
          <ApplicationLogo class="mb-4 h-auto w-full max-w-52" />

          <div class="text-center text-sm text-gray-600">
            &copy; 2024 Karen Buonomo, realtorkmb.com. All rights reserved.
          </div>

          <div class="text-center text-sm text-gray-600">
            <AppLink href="#" class="text-sm"> Privacy Policy </AppLink>
            |
            <AppLink href="#" class="text-sm"> Terms & Conditions </AppLink>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <nav
        class="items-cemter order-first flex basis-full items-center justify-center md:order-last md:basis-3/5 lg:basis-3/4"
      >
        <div
          class="flex w-full max-w-sm flex-row flex-wrap items-start justify-between md:max-w-full"
        >
          <!-- Nav Links -->
          <div class="w-auto min-w-40 max-w-52 p-3" v-for="navLink in navLinks">
            <h3 class="mb-2 text-xl font-bold">{{ navLink.title }}</h3>
            <ul>
              <li
                class="mb-1 flex flex-row items-center space-x-2 text-sm"
                v-for="link in navLink.subLinks"
              >
                <component
                  :is="link.icon.component"
                  v-if="link.icon"
                  class="h-auto w-4"
                  :class="link.icon.classes"
                />
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
