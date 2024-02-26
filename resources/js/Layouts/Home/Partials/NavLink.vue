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
    },
    variant: {
      type: String,
      default: 'white'
    }
  });

  const classes = [
    'rounded',
    'text-outline',
    'hover:text-primary-200',
    'focus:text-primary-200',
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
    'disabled:pointer-events-none',
    'font-bold'
  ];
</script>

<template>
  <Link
    v-if="props.zRoute"
    :class="[
      classes,
      { 'text-white': props.variant === 'white' },
      { 'text-primary-900': props.variant === 'color' }
    ]"
    :href="route(props.zRoute.name, props.zRoute.params, props.zRoute.absolute)"
  >
    <slot />
  </Link>
  <a
    v-else
    :class="[
      classes,
      { 'text-white': props.variant === 'white' },
      { 'text-primary-900': props.variant === 'color' }
    ]"
    :href="props.linkTo"
  >
    <slot />
  </a>
</template>
