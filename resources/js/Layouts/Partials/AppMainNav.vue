<script setup>
  import resolveConfig from 'tailwindcss/resolveConfig';
  import { onMounted, onUnmounted, ref, watch } from 'vue';

  import tailwindConfig from '@/../../tailwind.config.js';
  import ApplicationLogo from '@/Components/ApplicationLogo.vue';
  import AppLink from '@/Components/AppLink.vue';
  import SecondaryButton from '@/Components/SecondaryButton.vue';
  import { links } from '~data/app-links';
  import BarsIcon from '~icons/heroicons-outline/bars-3';
  import XMarkIcon from '~icons/heroicons-outline/x-mark';

  const tailwindConfigRes = resolveConfig(tailwindConfig);

  const mobileNavOpen = ref(false);

  const toggleMobileNav = () => {
    mobileNavOpen.value = !mobileNavOpen.value;
  };

  const preventScroll = () => {
    if (mobileNavOpen.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMobileNav = () => {
    const maxSize = Number(tailwindConfigRes.theme.screens.sm.replace('px', ''));

    if (window.innerWidth >= maxSize) {
      mobileNavOpen.value = false;
    }
  };

  const navLinks = {
    about: { ...links.about },
    contact: { ...links.contact },
    home: { ...links.home },
    services: { ...links.services },
    listings: { ...links.listings }
  };

  onMounted(() => {
    window.addEventListener('resize', closeMobileNav);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', closeMobileNav);
  });

  watch(mobileNavOpen, preventScroll);
</script>

<template>
  <div class="relative z-20 w-full border-b border-solid border-primary-700 bg-white shadow-md">
    <!-- Desktop Nav -->
    <nav class="mx-auto h-20 w-full px-4 py-4 pt-0 sm:container sm:h-auto sm:pt-4">
      <ul
        class="mx-auto flex h-full w-full max-w-4xl items-center justify-center text-xl font-light uppercase sm:space-x-6"
      >
        <li
          :class="{
            'hidden basis-1/6 items-center justify-center sm:flex': linkName !== 'home',
            'flex items-center justify-center sm:basis-1/3': linkName === 'home'
          }"
          v-for="(navLink, linkName) in navLinks"
          :key="linkName"
        >
          <AppLink
            v-if="linkName !== 'home'"
            :href="navLink.href"
            :router="navLink.router"
            class="text-center text-base md:text-xl"
          >
            {{ navLink.title }}
          </AppLink>

          <AppLink
            v-else
            :href="links.home.href"
            :router="links.home.router"
            class="mx-6 w-full max-w-32 text-center sm:max-w-48"
          >
            <ApplicationLogo
              :is="links.home.icon.component"
              v-if="links.home.icon"
              class="h-full w-full"
              :class="links.home.icon.classes"
            />
          </AppLink>
        </li>
      </ul>
    </nav>

    <!-- Mobile Nav toggle -->
    <div class="absolute bottom-4 right-4 z-40 sm:hidden">
      <SecondaryButton
        class="border-0 !px-2 py-2 !shadow-none"
        type="button"
        @click="toggleMobileNav"
      >
        <span class="sr-only">Open main menu</span>
        <Transition
          enter-active-class="transition ease-out duration-250"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-250"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
          appear
          mode="out-in"
        >
          <XMarkIcon class="h-6 w-6 text-primary-700" v-if="mobileNavOpen" />
          <BarsIcon class="h-6 w-6 text-primary-700" v-else />
        </Transition>
      </SecondaryButton>
    </div>

    <!-- Mobile Nav -->
    <Transition
      enter-active-class="transition ease-out duration-250"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-250"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
      appear
      mode="out-in"
    >
      <nav
        class="absolute inset-0 left-0 top-20 z-30 h-[calc(100vh_-_8rem)] w-screen border-t border-primary-700 bg-white"
        v-if="mobileNavOpen"
      >
        <div class="h-full w-full overflow-auto px-4 py-4">
          <ul class="w-full font-light uppercase" v-for="(link, linkName) in links" :key="linkName">
            <li class="mb-4 flex flex-col p-2" v-if="linkName !== 'home'">
              <AppLink
                @click="mobileNavOpen = false"
                :href="link.href"
                :router="link.router"
                class="flex flex-row items-center text-base font-bold !text-primary-900"
              >
                <span> {{ link.title }} </span>
              </AppLink>

              <ul
                class="w-full font-light uppercase"
                v-for="(subLink, subLinkName) in link.subLinks"
                :key="`${linkName}-${subLinkName}`"
              >
                <li class="flex flex-row p-2">
                  <AppLink
                    @click="mobileNavOpen = false"
                    :href="subLink.href"
                    :router="subLink.router"
                    class="flex flex-row items-center space-x-2 text-sm !text-primary-900"
                  >
                    <component
                      :is="subLink.icon.component"
                      v-if="subLink.icon"
                      :class="subLink.icon.classes"
                    />
                    <span> {{ subLink.title }} </span>
                  </AppLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </Transition>
  </div>
</template>
