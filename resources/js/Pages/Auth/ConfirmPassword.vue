<script setup>
  import { useForm } from '@inertiajs/vue3';

  import Button from '@/Components/Button.vue';
  import Error from '@/Components/Form/Error.vue';
  import Input from '@/Components/Form/Input.vue';
  import Label from '@/Components/Form/Label.vue';
  import HeadMeta from '@/Components/HeadMeta.vue';
  import AuthLayout from '@/Layouts/AuthLayout.vue';

  const form = useForm({
    password: ''
  });

  const submit = () => {
    form.post(route('password.confirm'), {
      onFinish: () => form.reset()
    });
  };
</script>

<template>
  <AuthLayout>
    <HeadMeta title="Confirm Password" />

    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
      This is a secure area of the application. Please confirm your password before continuing.
    </div>

    <form @submit.prevent="submit">
      <div>
        <Label for="password" value="Password" />
        <Input
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          required
          autocomplete="current-password"
          autofocus
        />
        <Error class="mt-2" :message="form.errors.password" />
      </div>

      <div class="mt-4 flex justify-end">
        <Button
          class="ms-4"
          :class="{ 'opacity-25': form.processing }"
          :processing="form.processing"
          variant="primary"
        >
          Confirm
        </Button>
      </div>
    </form>
  </AuthLayout>
</template>
