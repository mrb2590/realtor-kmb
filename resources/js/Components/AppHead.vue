<script setup>
  import { Head } from '@inertiajs/vue3';

  const props = defineProps({
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default:
        'Karen Buonomo is the top realtor to see serving Jacksonville, FL and Monmouth County, NJ.'
    }
  });

  // const appName = import.meta.env.VITE_APP_NAME ?? 'Realtor KMB';
  // const pageTitle = props.title ? `${props.title} - ${appName}` : appName;
</script>

<template>
  <Head :title="props.title">
    <meta head-key="description" name="description" :content="props.description" />

    <slot />
  </Head>
</template>
