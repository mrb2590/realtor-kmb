<script setup>
  import { Link } from '@inertiajs/vue3';

  const props = defineProps({
    router: {
      type: Boolean,
      default: true
    }
  });

  const classes = [
    'rounded',
    'text-primary-600',
    'visited:text-primary-600',
    'hover:text-primary-400',
    'focus:text-primary-400',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-primary-500',
    'focus:ring-offset-2',
    'active:text-primary-800',
    'hover:transform',
    'hover:scale-105',
    'transition',
    'duration-300',
    'ease-in-out'
  ];
</script>

<template>
  <Link v-if="props.router" :class="classes">
    <slot />
  </Link>
  <a v-else :class="classes">
    <slot />
  </a>
</template>
