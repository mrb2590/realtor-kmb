<script setup>
  import resolveConfig from 'tailwindcss/resolveConfig';
  import { onMounted, onUnmounted, ref, watch } from 'vue';

  import tailwindConfig from '@/../../tailwind.config.js';
  import AppButton from '@/Components/AppButton.vue';
  import AppLink from '@/Components/AppLink.vue';
  import AppLogo from '@/Components/AppLogo.vue';
  import AppLogoHorz from '@/Components/AppLogoHorz.vue';
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
    services: { ...links.services },
    home: { ...links.home },
    listings: { ...links.listings },
    contact: { ...links.contact }
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
    <nav class="mx-auto w-full px-4 py-2 sm:container sm:h-auto sm:py-4">
      <ul
        class="mx-auto flex h-full w-full max-w-4xl items-center justify-between text-xl font-light uppercase sm:justify-center sm:space-x-6"
      >
        <li
          class="items-center justify-start"
          :class="{
            'hidden basis-1/6 sm:flex': linkName !== 'home',
            'flex basis-1/3': linkName === 'home'
          }"
          v-for="(navLink, linkName) in navLinks"
          :key="linkName"
        >
          <AppLink v-if="linkName === 'home'" :z-route="navLink.zRoute" :link-to="navLink.href">
            <AppLogo class="hidden h-full w-full max-w-24 sm:block sm:max-w-32 md:max-w-40" />
            <AppLogoHorz class="h-full w-full max-w-24 sm:hidden sm:max-w-32 md:max-w-40" />
          </AppLink>

          <AppLink
            v-else
            :z-route="navLink.zRoute"
            :link-to="navLink.href"
            class="text-center text-base md:text-xl"
          >
            {{ navLink.title }}
          </AppLink>
        </li>

        <!-- Mobile Nav toggle -->
        <li class="items-center justify-start sm:hidden">
          <AppButton
            class="border-transparent"
            variant="secondary"
            type="button"
            size="md"
            square
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
          </AppButton>
        </li>
      </ul>
    </nav>

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
        class="absolute inset-0 left-0 top-14 z-30 h-[calc(100vh_-_6rem)] w-screen border-t border-primary-700 bg-white"
        v-if="mobileNavOpen"
      >
        <div class="h-full w-full overflow-auto px-4 py-4">
          <ul class="w-full font-light uppercase" v-for="(link, linkName) in links" :key="linkName">
            <li class="mb-4 flex flex-col p-2" v-if="linkName !== 'home'">
              <AppLink
                @click="mobileNavOpen = false"
                :link-to="link.href"
                :z-route="link.zRoute"
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
                    :link-to="subLink.href"
                    :z-route="subLink.zRoute"
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
