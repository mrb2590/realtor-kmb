<script setup>
  import { Head, useForm } from '@inertiajs/vue3';

  import AppButton from '@/Components/AppButton.vue';
  import FormError from '@/Components/FormError.vue';
  import FormInput from '@/Components/FormInput.vue';
  import FormLabel from '@/Components/FormLabel.vue';
  import GuestLayout from '@/Layouts/GuestLayout.vue';

  defineProps({
    status: {
      type: String
    }
  });

  const form = useForm({
    email: ''
  });

  const submit = () => {
    form.post(route('password.email'));
  };
</script>

<template>
  <GuestLayout>
    <Head title="Forgot Password" />

    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
      Forgot your password? No problem. Just let us know your email address and we will email you a
      password reset link that will allow you to choose a new one.
    </div>

    <div v-if="status" class="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
      {{ status }}
    </div>

    <form @submit.prevent="submit">
      <div>
        <FormLabel for="email" value="Email" />

        <FormInput
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email"
          required
          autofocus
          autocomplete="username"
        />

        <FormError class="mt-2" :message="form.errors.email" />
      </div>

      <div class="mt-4 flex items-center justify-end">
        <AppButton
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
          variant="primary"
        >
          Email Password Reset Link
        </AppButton>
      </div>
    </form>
  </GuestLayout>
</template>
