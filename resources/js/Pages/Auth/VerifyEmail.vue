<script setup>
  import { useForm } from '@inertiajs/vue3';
  import { computed } from 'vue';

  import Button from '@/Components/Button.vue';
  import HeadMeta from '@/Components/HeadMeta.vue';
  import Link from '@/Components/Link.vue';
  import AuthLayout from '@/Layouts/AuthLayout.vue';

  const props = defineProps({
    status: {
      type: String
    }
  });

  const form = useForm({});

  const submit = () => {
    form.post(route('verification.send'));
  };

  const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
  <AuthLayout>
    <HeadMeta title="Email Verification" />

    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
      Thanks for signing up! Before getting started, could you verify your email address by clicking
      on the link we just emailed to you? If you didn't receive the email, we will gladly send you
      another.
    </div>

    <div
      class="mb-4 text-sm font-medium text-green-600 dark:text-green-400"
      v-if="verificationLinkSent"
    >
      A new verification link has been sent to the email address you provided during registration.
    </div>

    <form @submit.prevent="submit">
      <div class="mt-4 flex items-center justify-between">
        <Button :processing="form.processing" variant="primary" type="submit">
          Resend Verification Email
        </Button>

        <Link :z-route="{ name: 'logout' }" method="post" as="button" class="underline">
          Log Out
        </Link>
      </div>
    </form>
  </AuthLayout>
</template>
