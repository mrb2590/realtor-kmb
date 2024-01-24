<script setup>
  import { Head, useForm } from '@inertiajs/vue3';

  import AppButton from '@/Components/AppButton.vue';
  import AppLink from '@/Components/AppLink.vue';
  import FormCheckbox from '@/Components/FormCheckbox.vue';
  import FormError from '@/Components/FormError.vue';
  import FormInput from '@/Components/FormInput.vue';
  import FormLabel from '@/Components/FormLabel.vue';
  import GuestLayout from '@/Layouts/GuestLayout.vue';

  defineProps({
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  });

  const form = useForm({
    email: '',
    password: '',
    remember: false
  });

  const submit = () => {
    form.post(route('login'), {
      onFinish: () => form.reset('password')
    });
  };
</script>

<template>
  <GuestLayout>
    <Head title="Log in" />

    <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
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

      <div class="mt-4">
        <FormLabel for="password" value="Password" />

        <FormInput
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          required
          autocomplete="current-password"
        />

        <FormError class="mt-2" :message="form.errors.password" />
      </div>

      <div class="mt-4 block">
        <label class="flex items-center">
          <FormCheckbox name="remember" v-model:checked="form.remember" />
          <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
        </label>
      </div>

      <div class="mt-4 flex items-center justify-end">
        <AppLink v-if="canResetPassword" :z-route="route('password.request')">
          Forgot your password?
        </AppLink>

        <AppButton class="ms-4" :processing="form.processing" variant="primary" type="submit">
          Log in
        </AppButton>
      </div>
    </form>
  </GuestLayout>
</template>
