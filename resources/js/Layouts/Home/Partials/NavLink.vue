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
      default: 'color'
    }
  });

  const classes = [
    'rounded',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'focus-visible:ring-offset-2',
    'hover:transform',
    'hover:scale-105',
    'active:scale-95',
    'transition',
    'ease-in-out',
    'disabled:pointer-events-none',
    'font-bold'
  ];

  const variantClasses = {
    white: [
      'text-white',
      'hover:text-primary-100',
      'focus:text-primary-100',
      'focus-visible:ring-white',
      'active:text-primary-200'
    ],
    color: [
      'text-primary-900',
      'hover:text-primary-800',
      'focus:text-primary-800',
      'focus-visible:ring-primary-900',
      'active:text-primary-700'
    ]
  };
</script>

<template>
  <Link
    v-if="props.zRoute"
    :class="[classes, variantClasses[variant]]"
    :href="route(props.zRoute.name, props.zRoute.params, props.zRoute.absolute)"
  >
    <slot />
  </Link>
  <a v-else :class="[classes, variantClasses[variant]]" :href="props.linkTo">
    <slot />
  </a>
</template>
