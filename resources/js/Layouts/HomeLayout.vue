<script setup></script>

<template>
  <div class="relative flex h-full min-h-screen w-full flex-col">
    <main class="h-full grow">
      <Transition
        enter-active-class="transition ease-out duration-500"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-500"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        appear
        mode="out-in"
      >
        <slot />
      </Transition>
    </main>
  </div>
</template>
