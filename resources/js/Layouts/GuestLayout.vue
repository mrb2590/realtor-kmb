<script setup>
  import AppLink from '@/Components/AppLink.vue';
  import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center bg-gray-100 pt-6 dark:bg-gray-900 sm:justify-center sm:pt-0"
  >
    <div>
      <AppLink href="/">
        <ApplicationLogo class="h-52 w-52" />
      </AppLink>
    </div>

    <div
      class="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md dark:bg-gray-800 sm:max-w-md sm:rounded-lg"
    >
      <slot />
    </div>
  </div>
</template>
