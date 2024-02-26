<script setup>
  import { useForm } from '@inertiajs/vue3';

  import Button from '@/Components/Button.vue';
  import Error from '@/Components/Form/Error.vue';
  import Input from '@/Components/Form/Input.vue';
  import Label from '@/Components/Form/Label.vue';
  import HeadMeta from '@/Components/HeadMeta.vue';
  import Link from '@/Components/Link.vue';
  import AuthLayout from '@/Layouts/AuthLayout.vue';

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
  <AuthLayout>
    <HeadMeta title="Register" />

    <form @submit.prevent="submit">
      <div>
        <Label for="name" value="Name" />
        <Input
          id="name"
          type="text"
          class="mt-1 block w-full"
          v-model="form.name"
          required
          autofocus
          autocomplete="name"
        />
        <Error class="mt-2" :message="form.errors.name" />
      </div>

      <div class="mt-4">
        <Label for="email" value="Email" />
        <Input
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email"
          required
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
          autocomplete="new-password"
        />
        <Error class="mt-2" :message="form.errors.password" />
      </div>

      <div class="mt-4">
        <Label for="password_confirmation" value="Confirm Password" />
        <Input
          id="password_confirmation"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password_confirmation"
          required
          autocomplete="new-password"
        />
        <Error class="mt-2" :message="form.errors.password_confirmation" />
      </div>

      <div class="mt-4 flex items-center justify-end">
        <Link :z-route="{ name: 'login' }"> Already registered? </Link>

        <Button class="ms-4" :processing="form.processing" variant="primary" type="submit">
          Register
        </Button>
      </div>
    </form>
  </AuthLayout>
</template>
