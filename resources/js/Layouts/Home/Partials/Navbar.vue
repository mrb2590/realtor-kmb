<script setup>
  import resolveConfig from 'tailwindcss/resolveConfig';
  import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

  import tailwindConfig from '@/../../tailwind.config.js';
  import AppLogo from '@/Components/AppLogo/AppLogo.vue';
  import Button from '@/Components/Button.vue';
  import Link from '@/Components/Link.vue';
  import SocialLinks from '@/Components/SocialLinks.vue';
  import NavLink from '@/Layouts/Home/Partials/NavLink.vue';
  import { links } from '~data/app-links';
  import BarsIcon from '~icons/heroicons-outline/bars-3';
  import XMarkIcon from '~icons/heroicons-outline/x-mark';

  const scroll = ref(0);

  const onPageScroll = () => {
    scroll.value = window.scrollY;
  };
  const variant = computed(() => {
    return scroll.value > 100 || !route().current('home') ? 'color' : 'white';
  });
  const { cellPhone, officePhone, email } = links.contact.subLinks;
  const contactLinks = { cellPhone, officePhone, email };
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
    home: { ...links.home },
    about: { ...links.about },
    services: { ...links.services },
    listings: { ...links.listings },
    contact: { ...links.contact }
  };

  onMounted(() => {
    window.addEventListener('resize', closeMobileNav);
    window.addEventListener('scroll', onPageScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', closeMobileNav);
    window.removeEventListener('scroll', onPageScroll);
  });

  watch(mobileNavOpen, preventScroll);
</script>

<template>
  <div
    :class="[
      'fixed left-0 z-30 w-full border-b transition duration-700 ease-in-out',
      { 'border-b-primary-900 shadow-md': variant === 'color' },
      { 'border-b-transparent': variant === 'white' },
      variant === 'white' ? 'bg-transparent' : 'bg-white'
    ]"
  >
    <!-- Top Nav -->
    <nav class="z-20 h-12 w-full border-primary-700 bg-transparent text-sm">
      <div
        class="mx-auto flex h-full w-full flex-row items-center justify-between space-x-6 px-4 py-2 sm:container"
      >
        <SocialLinks size="xs" :icon-variant="variant" />

        <ul class="flex w-full items-center justify-end space-x-3">
          <li
            class="flex-row items-center space-x-2"
            v-for="(link, linkName) in contactLinks"
            :key="linkName"
          >
            <NavLink
              :z-route="link.zRoute"
              :link-to="link.href"
              :title="link.title"
              class="flex flex-row items-center"
              :variant="variant"
            >
              <component
                v-if="linkName === 'cellPhone2' ? link.iconAlt : link.icon"
                :is="linkName === 'cellPhone2' ? link.iconAlt.component : link.icon.component"
                :class="link.icon.classes"
              />
              <span class="ml-1 hidden md:block"> {{ link.title }} </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

    <div class="relative z-20 w-full">
      <!-- Desktop Nav -->
      <nav class="mx-auto w-full px-4 pb-2 pt-1 sm:container sm:h-auto sm:pb-4">
        <ul
          class="mx-auto flex h-full w-full items-center justify-between text-xl font-light uppercase sm:space-x-6"
        >
          <li
            class="items-center justify-start transition-all"
            :class="[
              {
                'hidden basis-1/6 sm:flex': linkName !== 'home'
              },
              { 'flex basis-1/3': linkName === 'home' && variant === 'color' },
              {
                'flex grow justify-center sm:basis-1/3 sm:justify-start':
                  linkName === 'home' && variant === 'white'
              }
            ]"
            v-for="(navLink, linkName) in navLinks"
            :key="linkName"
          >
            <NavLink v-if="linkName === 'home'" :z-route="navLink.zRoute" :link-to="navLink.href">
              <AppLogo
                :theme="variant"
                variant="horizontal"
                :class="[
                  'h-auto ',
                  { 'w-52': variant === 'white' },
                  { 'w-32': variant === 'color' }
                ]"
              />
            </NavLink>

            <NavLink
              v-else
              :z-route="navLink.zRoute"
              :link-to="navLink.href"
              class="text-center text-base md:text-xl"
              :variant="variant"
            >
              {{ navLink.title }}
            </NavLink>
          </li>

          <!-- Mobile Nav toggle -->
          <li class="items-center justify-start sm:hidden">
            <Button
              :variant="variant === 'white' ? 'transparent' : 'secondary'"
              type="button"
              :size="variant === 'white' ? 'xl' : 'sm'"
              square
              @click="toggleMobileNav"
            >
              <span class="sr-only">Open main menu</span>
              <Transition
                enter-active-class="transition ease-in-out duration-250"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition ease-in-out duration-250"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
                appear
                mode="out-in"
              >
                <XMarkIcon class="h-full w-full" v-if="mobileNavOpen" />
                <BarsIcon class="h-full w-full" v-else />
              </Transition>
            </Button>
          </li>
        </ul>
      </nav>

      <!-- Mobile Nav -->
      <Transition
        enter-active-class="transition ease-in-out duration-250"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in-out duration-250"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
        appear
        mode="out-in"
      >
        <nav
          class="absolute inset-0 left-0 top-[4.5rem] z-30 h-[calc(100vh_-_7.5rem)] w-screen border-t border-primary-700 bg-white"
          v-if="mobileNavOpen"
        >
          <div class="h-full w-full overflow-auto px-4 py-4">
            <ul
              class="w-full font-light uppercase"
              v-for="(link, linkName) in links"
              :key="linkName"
            >
              <li class="mb-4 flex flex-col p-2" v-if="linkName !== 'home'">
                <Link
                  @click="mobileNavOpen = false"
                  :link-to="link.href"
                  :z-route="link.zRoute"
                  class="flex flex-row items-center text-base font-bold !text-primary-900"
                >
                  <span> {{ link.title }} </span>
                </Link>

                <ul
                  class="w-full font-light uppercase"
                  v-for="(subLink, subLinkName) in link.subLinks"
                  :key="`${linkName}-${subLinkName}`"
                >
                  <li class="flex flex-row p-2">
                    <Link
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
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </Transition>
    </div>
  </div>
</template>
