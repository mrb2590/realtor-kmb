<script setup>
  import { Link } from '@inertiajs/vue3';

  const props = defineProps({
    linkTo: {
      type: String,
      default: null
    },
    zRoute: {
      type: Object,
      default: null
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
  <Link
    v-if="props.zRoute"
    :class="classes"
    :href="route(props.zRoute.name, props.zRoute.params, props.zRoute.absolute)"
  >
    <slot />
  </Link>
  <a v-else :class="classes" :href="props.linkTo">
    <slot />
  </a>
</template>
