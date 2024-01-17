<script setup>
  import { Link } from '@inertiajs/vue3';

  const props = defineProps({
    router: {
      type: Boolean,
      default: true
    }
  });
</script>

<template>
  <Link
    v-if="props.router"
    class="rounded text-white visited:text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-700 active:text-gray-400"
  >
    <slot />
  </Link>
  <a
    v-else
    class="rounded text-white visited:text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-700 active:text-gray-400"
  >
    <slot />
  </a>
</template>
