<script setup>
  defineProps({
    type: {
      type: String,
      default: 'button'
    }
  });
</script>

<template>
  <button
    :type="type"
    class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition ease-in-out hover:scale-105 hover:transform hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 active:scale-95 disabled:opacity-25 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus-visible:ring-offset-gray-800"
  >
    <slot />
  </button>
</template>
