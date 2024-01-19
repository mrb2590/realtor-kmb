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
    'focus-visible::outline-none',
    'focus-visible::ring-2',
    'focus-visible::ring-primary-500',
    'focus-visible::ring-offset-2',
    'active:text-primary-800',
    'hover:transform',
    'hover:scale-105',
    'active:scale-95',
    'transition',
    'ease-in-out',
    'disabled:pointer-events-none'
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
