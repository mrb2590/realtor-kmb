<script setup>
  import ApplicationLogo from '@/Components/ApplicationLogo.vue';
  import AppLink from '@/Components/AppLink.vue';
  import { links } from '@/../data/app-links';
</script>

<template>
  <nav class="z-20 h-44 w-full border-b border-sky-900 bg-white backdrop-blur-md">
    <div class="container mx-auto h-full w-full">
      <ul
        class="flex h-full w-full items-center justify-center space-x-6 text-xl font-light uppercase"
      >
        <li class="flex flex-row items-center transition">
          <AppLink :href="links.about.href" :router="links.about.router">
            {{ links.about.title }}
          </AppLink>
        </li>

        <li class="flex flex-row items-center transition">
          <AppLink :href="links.services.href" :router="links.services.router">
            {{ links.services.title }}
          </AppLink>
        </li>

        <li class="flex flex-row items-center transition">
          <AppLink :href="links.home.href" :router="links.home.router">
            <ApplicationLogo
              :is="links.home.icon.component"
              v-if="links.home.icon"
              class="mx-6 h-36 w-auto"
              :class="links.home.icon.classes"
            />
          </AppLink>
        </li>

        <li class="flex flex-row items-center transition">
          <AppLink :href="links.contact.href" :router="links.contact.router">
            {{ links.contact.title }}
          </AppLink>
        </li>

        <li class="flex flex-row items-center transition">
          <AppLink :href="links.contact.href" :router="links.contact.router">
            {{ links.contact.title }}
          </AppLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
