<script setup>
  import { useForm, usePage } from '@inertiajs/vue3';

  import AppButton from '@/Components/AppButton.vue';
  import AppLink from '@/Components/AppLink.vue';
  import FormError from '@/Components/FormError.vue';
  import FormInput from '@/Components/FormInput.vue';
  import FormLabel from '@/Components/FormLabel.vue';

  defineProps({
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  });

  const user = usePage().props.auth.user;

  const form = useForm({
    name: user.name,
    email: user.email
  });
</script>

<template>
  <section>
    <header>
      <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Profile Information</h2>

      <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
        Update your account's profile information and email address.
      </p>
    </header>

    <form @submit.prevent="form.patch(route('profile.update'))" class="mt-6 space-y-6">
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

      <div>
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

      <div v-if="mustVerifyEmail && user.email_verified_at === null">
        <p class="mt-2 text-sm text-gray-800 dark:text-gray-200">
          Your email address is unverified.
          <AppLink :href="route('verification.send')" method="post" as="button" class="underline">
            Click here to re-send the verification email.
          </AppLink>
        </p>

        <div
          v-show="status === 'verification-link-sent'"
          class="mt-2 text-sm font-medium text-green-600 dark:text-green-400"
        >
          A new verification link has been sent to your email address.
        </div>
      </div>

      <div class="flex items-center gap-4">
        <AppButton :processing="form.processing" type="submit">Save</AppButton>

        <Transition
          enter-active-class="transition ease-in-out"
          enter-from-class="opacity-0"
          leave-active-class="transition ease-in-out"
          leave-to-class="opacity-0"
        >
          <p v-if="form.recentlySuccessful" class="text-sm text-gray-600 dark:text-gray-400">
            Saved.
          </p>
        </Transition>
      </div>
    </form>
  </section>
</template>
