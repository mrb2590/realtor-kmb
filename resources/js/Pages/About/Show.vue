<script setup>
  import AppHead from '@/Components/AppHead.vue';
  import HomeLayout from '@/Layouts/HomeLayout.vue';

  defineOptions({ layout: HomeLayout });
</script>

<template>
  <div>
    <AppHead title="About" description="To do..." />
  </div>
</template>
