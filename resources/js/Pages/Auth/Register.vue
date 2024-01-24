<script setup>
  import { Head, useForm } from '@inertiajs/vue3';

  import AppButton from '@/Components/AppButton.vue';
  import AppLink from '@/Components/AppLink.vue';
  import FormError from '@/Components/FormError.vue';
  import FormInput from '@/Components/FormInput.vue';
  import FormLabel from '@/Components/FormLabel.vue';
  import GuestLayout from '@/Layouts/GuestLayout.vue';

  const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const submit = () => {
    form.post(route('register'), {
      onFinish: () => form.reset('password', 'password_confirmation')
    });
  };
</script>

<template>
  <GuestLayout>
    <Head title="Register" />

    <form @submit.prevent="submit">
      <div>
        <FormLabel for="name" value="Name" />

        <FormInput
          id="name"
          type="text"
          class="mt-1 block w-full"
          v-model="form.name"
          required
          autofocus
          autocomplete="name"
        />

        <FormError class="mt-2" :message="form.errors.name" />
      </div>

      <div class="mt-4">
        <FormLabel for="email" value="Email" />

        <FormInput
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email"
          required
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
        <AppLink :href="route('login')"> Already registered? </AppLink>

        <AppButton class="ms-4" :processing="form.processing" variant="primary" type="submit">
          Register
        </AppButton>
      </div>
    </form>
  </GuestLayout>
</template>
