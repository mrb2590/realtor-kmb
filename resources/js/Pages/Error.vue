<script setup>
  import { computed } from 'vue';

  import AppLogo from '@/Components/AppLogo/AppLogo.vue';
  import HeadMeta from '@/Components/HeadMeta.vue';

  const props = defineProps({
    status: {
      type: Number,
      default: null
    }
  });

  const title = computed(() => {
    return (
      {
        401: 'Unauthorized',
        402: 'Payment Required',
        403: 'Forbidden',
        404: 'Page Not Found',
        419: 'Page Expired',
        500: 'Server Error',
        503: 'Service Unavailable'
      }[props.status] ?? 'Error'
    );
  });

  const description = computed(() => {
    return (
      {
        401: 'Sorry you are unauthorized from accessing this page.',
        402: 'Payment is required to access this page.',
        403: 'Sorry you are forbidden from accessing this page.',
        404: 'Sorry the page you are looking for could not be found, but your dream home will be.',
        419: 'The page has expired. Please try again.',
        500: 'Whoops, something went wrong on our servers.',
        503: 'Sorry the site is down for maintenance. Please check back soon.'
      }[props.status] ?? 'An error occurred'
    );
  });
</script>

<template>
  <Transition
    enter-active-class="transition ease-in-out duration-1000"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition ease-in-out duration-1000"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
    appear
    mode="out-in"
  >
    <div class="flex h-screen w-full flex-col items-center justify-center p-6">
      <HeadMeta :title="`${props.status} ${title}`" :description="description" />
      <AppLogo class="mb-4 w-full max-w-60" />
      <h1 class="mb-4 text-center text-2xl">
        <strong>{{ props.status }}</strong> <br />
        {{ title }}
      </h1>
      <div class="mb-8 max-w-md text-center">
        {{ description }}
      </div>
    </div>
  </Transition>
</template>
