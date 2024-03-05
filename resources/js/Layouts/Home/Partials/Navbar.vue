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
  const currentPage = ref(null);
  const onPageScroll = () => {
    scroll.value = window.scrollY;
  };
  const navVariant = computed(() => {
    if (currentPage.value === 'home') {
      return scroll.value > 100 ? 'minimal' : 'expanded';
    }

    return 'minimal';
  });
  const detectRouteChange = () => {
    currentPage.value = route().current();
  };
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
    about: { ...links.about },
    services: { ...links.services },
    listings: { ...links.listings },
    contact: { ...links.contact }
  };

  onMounted(() => {
    currentPage.value = route().current();
    window.addEventListener('resize', closeMobileNav);
    window.addEventListener('scroll', onPageScroll);
    document.addEventListener('inertia:finish', detectRouteChange);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', closeMobileNav);
    window.removeEventListener('scroll', onPageScroll);
    document.removeEventListener('inertia:finish', detectRouteChange);
  });

  watch(mobileNavOpen, preventScroll);
</script>

<template>
  <div>
    <div :class="['w-full', navVariant === 'expanded' ? 'h-0' : 'h-28']" />
    <div
      :class="[
        'fixed left-0 top-0 z-30 w-full border-b transition duration-300 ease-in',
        { 'border-b-primary-900 bg-white shadow-md': navVariant === 'minimal' },
        { 'border-b-transparent bg-transparent': navVariant === 'expanded' }
      ]"
    >
      <!-- Top Nav -->
      <nav class="z-30 h-12 w-full border-primary-700 bg-transparent text-sm">
        <div
          class="mx-auto flex h-full w-full flex-row items-center justify-between space-x-6 px-6 sm:container"
        >
          <SocialLinks size="xs" :icon-variant="navVariant === 'expanded' ? 'white' : 'color'" />

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
                :variant="navVariant === 'expanded' ? 'white' : 'color'"
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

      <div :class="['relative z-30 w-full', navVariant === 'expanded' ? 'h-48' : 'h-16']">
        <!-- Desktop Nav -->
        <nav
          :class="[
            'mx-auto flex h-full w-full items-center justify-center space-x-6 px-6 sm:container',
            navVariant === 'expanded' ? 'flex-row sm:flex-col' : 'flex-row'
          ]"
        >
          <div :class="['w-full', navVariant === 'expanded' ? 'mb-6 max-w-48' : 'max-w-36']">
            <NavLink :z-route="{ name: 'home' }">
              <AppLogo
                :theme="navVariant === 'expanded' ? 'white' : 'color'"
                :variant="navVariant === 'expanded' ? 'main' : 'horizontal-alt-2'"
                class="w-full"
              />
              <div class="sr-only">home</div>
            </NavLink>
          </div>
          <ul class="flex grow items-center justify-end text-xl font-light uppercase sm:space-x-6">
            <li
              class="hidden items-center justify-start sm:flex"
              v-for="(navLink, linkName) in navLinks"
              :key="linkName"
            >
              <NavLink
                :z-route="navLink.zRoute"
                :link-to="navLink.href"
                class="text-center text-base md:text-xl"
                :variant="navVariant === 'expanded' ? 'white' : 'color'"
              >
                {{ navLink.title }}
              </NavLink>
            </li>

            <!-- Mobile Nav toggle -->
            <li class="items-center justify-start sm:hidden">
              <Button
                :variant="navVariant === 'expanded' ? 'transparent' : 'secondary'"
                type="button"
                :size="navVariant === 'expanded' ? 'xl' : 'sm'"
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
            :class="[
              'absolute inset-0 left-0 z-30 w-screen border-t border-primary-700 bg-white',
              navVariant === 'expanded'
                ? 'top-32 h-[calc(100vh_-_11rem)]'
                : 'top-16 h-[calc(100vh_-_7rem)]'
            ]"
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
  </div>
</template>
