<script setup>
  import ApplicationLogo from '@/Components/ApplicationLogo.vue';
  import AppFooter from '@/Layouts/Partials/AppFooter.vue';
  import EnvelopeIcon from '~icons/heroicons-outline/envelope';
  import PhoneIcon from '~icons/heroicons-outline/phone';
  import IdentificationIcon from '~icons/heroicons-outline/identification';
  import ClipboardIcon from '~icons/heroicons-outline/clipboard';
  import ChatBubbleLeftIcon from '~icons/heroicons-outline/chat-bubble-left';
  import MagnifyingGlassIcon from '~icons/heroicons-outline/magnifying-glass';
</script>

<template>
  <div class="relative flex h-full min-h-screen w-full flex-col">
    <!-- Top nav -->
    <nav class="z-20 h-8 w-full bg-primary-800 font-light">
      <div class="container mx-auto h-full w-full px-4">
        <ul class="flex h-full w-full items-center space-x-6">
          <li>
            <a href="#" class="flex items-center text-white hover:text-gray-200">
              <PhoneIcon class="mr-2 h-4 w-4" />
              123-456-7890
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center text-white hover:text-gray-200">
              <EnvelopeIcon class="mr-2 h-4 w-4" />
              test@example.com
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main nav -->
    <nav class="z-20 h-44 w-full border-b border-sky-900 bg-white/85 backdrop-blur-md">
      <div class="container mx-auto h-full w-full">
        <ul
          class="flex h-full w-full items-center justify-center space-x-6 text-xl font-light uppercase text-sky-900"
        >
          <li>
            <a
              href="#"
              class="text-primary-black hover:text-primary-black-700 flex items-center transition"
            >
              <MagnifyingGlassIcon class="mr-2 h-6 w-6" />
              Find Your Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-primary-black hover:text-primary-black-700 flex items-center transition"
            >
              <IdentificationIcon class="mr-2 h-6 w-6" />
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-primary-black hover:text-primary-black-700 flex items-center transition"
            >
              <ApplicationLogo class="mx-6 h-36 w-auto" />
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-primary-black hover:text-primary-black-700 flex items-center transition"
            >
              <ClipboardIcon class="mr-2 h-6 w-6" />
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-primary-black hover:text-primary-black-700 flex items-center transition"
            >
              <ChatBubbleLeftIcon class="mr-2 h-6 w-6" />
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main content -->
    <main>
      <Transition
        enter-active-class="transition ease-out duration-500"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-500"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        appear
        mode="out-in"
      >
        <slot />
      </Transition>
    </main>

    <AppFooter />
  </div>
</template>
