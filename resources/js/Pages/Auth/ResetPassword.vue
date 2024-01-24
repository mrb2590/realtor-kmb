<script setup>
  import { Head, useForm } from '@inertiajs/vue3';

  import AppButton from '@/Components/AppButton.vue';
  import FormError from '@/Components/FormError.vue';
  import FormInput from '@/Components/FormInput.vue';
  import FormLabel from '@/Components/FormLabel.vue';
  import GuestLayout from '@/Layouts/GuestLayout.vue';

  const props = defineProps({
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  });

  const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: ''
  });

  const submit = () => {
    form.post(route('password.store'), {
      onFinish: () => form.reset('password', 'password_confirmation')
    });
  };
</script>

<template>
  <GuestLayout>
    <Head title="Reset Password" />

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

      <div class="mt-4">
        <FormLabel for="password" value="Password" />

        <FormInput
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          required
          autocomplete="new-password"
        />

        <FormError class="mt-2" :message="form.errors.password" />
      </div>

      <div class="mt-4">
        <FormLabel for="password_confirmation" value="Confirm Password" />

        <FormInput
          id="password_confirmation"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password_confirmation"
          required
          autocomplete="new-password"
        />

        <FormError class="mt-2" :message="form.errors.password_confirmation" />
      </div>

      <div class="mt-4 flex items-center justify-end">
        <AppButton :processing="form.processing" variant="primary" type="submit">
          Reset Password
        </AppButton>
      </div>
    </form>
  </GuestLayout>
</template>
