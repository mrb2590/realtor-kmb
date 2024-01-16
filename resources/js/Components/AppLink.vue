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
    class="rounded text-primary-600 visited:text-primary-600 hover:text-primary-400 focus:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:text-primary-800"
  >
    <slot />
  </Link>
  <a
    v-else
    class="rounded text-primary-600 visited:text-primary-600 hover:text-primary-400 focus:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:text-primary-800"
  >
    <slot />
  </a>
</template>
