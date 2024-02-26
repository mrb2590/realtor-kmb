<script setup>
  import { useForm } from '@inertiajs/vue3';

  import Button from '@/Components/Button.vue';
  import Checkbox from '@/Components/Form/Checkbox.vue';
  import Error from '@/Components/Form/Error.vue';
  import Input from '@/Components/Form/Input.vue';
  import Label from '@/Components/Form/Label.vue';
  import HeadMeta from '@/Components/HeadMeta.vue';
  import Link from '@/Components/Link.vue';
  import AuthLayout from '@/Layouts/AuthLayout.vue';

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
  <AuthLayout>
    <HeadMeta title="Log in" />

    <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
      {{ status }}
    </div>

    <form @submit.prevent="submit">
      <div>
        <Label for="email" value="Email" />
        <Input
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email"
          required
          autofocus
          autocomplete="username"
        />
        <Error class="mt-2" :message="form.errors.email" />
      </div>

      <div class="mt-4">
        <Label for="password" value="Password" />
        <Input
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          required
          autocomplete="current-password"
        />
        <Error class="mt-2" :message="form.errors.password" />
      </div>

      <div class="mt-4 block">
        <label class="flex items-center">
          <Checkbox name="remember" v-model:checked="form.remember" />
          <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
        </label>
      </div>

      <div class="mt-4 flex items-center justify-end">
        <Link v-if="canResetPassword" :z-route="{ name: 'password.request' }">
          Forgot your password?
        </Link>

        <Button class="ms-4" :processing="form.processing" variant="primary" type="submit">
          Log in
        </Button>
      </div>
    </form>
  </AuthLayout>
</template>
