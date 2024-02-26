<script setup>
  import Footer from '@/Layouts/Home/Partials/Footer.vue';
  import Navbar from '@/Layouts/Home/Partials/Navbar.vue';
</script>

<template>
  <div class="relative flex h-full min-h-screen w-full flex-col">
    <Navbar />

    <main class="mt-24 grow">
      <Transition
        enter-active-class="transition ease-in-out duration-500"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in-out duration-500"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        appear
        mode="out-in"
      >
        <slot />
      </Transition>
    </main>

    <Footer />
  </div>
</template>
