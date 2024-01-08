<script setup>
  import HomeLayout from '@/Layouts/HomeLayout.vue';
  import ApplicationLogo from '@/Components/ApplicationLogo.vue';
  import AppHead from '@/Components/AppHead.vue';

  defineOptions({ layout: HomeLayout });
</script>

<template>
  <div>
    <AppHead title="Home" />

    <div
      class="relative flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden p-8"
    >
      <div class="h-56 w-56">
        <Transition
          enter-active-class="transition ease-out duration-500 delay-500"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition ease-in duration-500"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          appear
          mode="out-in"
        >
          <div>
            <ApplicationLogo class="block h-full w-auto fill-current" />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
