<script setup>
  import { Link } from '@inertiajs/vue3';
  import { ref } from 'vue';

  const props = defineProps({
    href: {
      type: String,
      default: null
    },
    zRoute: {
      type: String,
      default: null
    },
    processing: {
      type: Boolean,
      default: false
    },
    processingText: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'success', 'danger'].includes(value);
      }
    },
    raised: {
      type: Boolean,
      default: false
    }
  });

  const classes = ref([
    'inline-flex',
    'items-center',
    'rounded-md',
    'border',
    'px-4',
    'py-2',
    'text-xs',
    'font-semibold',
    'uppercase',
    'tracking-widest',
    'transition',
    'ease-in-out',
    'hover:scale-105',
    'hover:transform',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-primary-500',
    'focus-visible:ring-offset-2',
    'active:scale-95',
    'disabled:opacity-25'

    // 'dark:bg-primary-200',
    // 'dark:text-primary-800',
    // 'dark:hover:bg-white',
    // 'dark:focus-visible:bg-white',
    // 'dark:focus-visible:ring-offset-primary-800',
    // 'dark:active:bg-primary-300',

    // // secondary
    // 'dark:border-gray-500',
    // 'dark:bg-gray-800',
    // 'dark:text-gray-300',
    // 'dark:hover:bg-gray-700',
    // 'dark:focus-visible:ring-offset-gray-800',
  ]);

  const variantClasses = {
    primary: [
      'border-transparent',
      'focus-visible:bg-primary-700',
      'bg-primary-800',
      'text-white',
      'hover:bg-primary-700',
      'active:bg-primary-900'
    ],
    secondary: [
      'border-gray-300',
      'focus-visible:bg-primary-700',
      'bg-white',
      'text-gray-700',
      'hover:bg-gray-50'
    ],
    success: ['active:bg-green-800', 'bg-green-700', 'border-green-700', 'text-white'],
    danger: ['active:bg-red-800', 'bg-red-700', 'border-red-700', 'text-white']
  };

  if (props.href) {
    classes.value.push('processing:pointer-events-none');
  }

  if (props.raised) {
    classes.value.push('raised');
  }
</script>

<template>
  <Link
    v-if="props.zRoute"
    :data-processing="props.processing"
    :href="props.zRoute"
    :class="classes.concat(variantClasses[props.variant])"
  >
    <span v-if="props.processingText && props.processing">
      {{ props.processingText }}
    </span>
    <slot v-else />
  </Link>
  <a
    v-else-if="props.href"
    :data-processing="props.processing"
    :href="props.href"
    :class="classes.concat(variantClasses[props.variant])"
  >
    <span v-if="props.processingText && props.processing">
      {{ props.processingText }}
    </span>
    <slot v-else />
  </a>
  <button
    v-else
    :data-processing="props.processing"
    :disabled="props.processing"
    :class="classes.concat(variantClasses[props.variant])"
  >
    <span v-if="props.processingText && props.processing">
      {{ props.processingText }}
    </span>
    <slot v-else />
  </button>
</template>
