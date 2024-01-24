<script setup>
  import { useForm } from '@inertiajs/vue3';
  import { nextTick, ref } from 'vue';

  import AppButton from '@/Components/AppButton.vue';
  import FormError from '@/Components/FormError.vue';
  import FormInput from '@/Components/FormInput.vue';
  import FormLabel from '@/Components/FormLabel.vue';
  import Modal from '@/Components/Modal.vue';

  const confirmingUserDeletion = ref(false);
  const passwordInput = ref(null);

  const form = useForm({
    password: ''
  });

  const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value.focus());
  };

  const deleteUser = () => {
    form.delete(route('profile.destroy'), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.value.focus(),
      onFinish: () => form.reset()
    });
  };

  const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
  };
</script>

<template>
  <section class="space-y-6">
    <header>
      <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Delete Account</h2>

      <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
        Once your account is deleted, all of its resources and data will be permanently deleted.
        Before deleting your account, please download any data or information that you wish to
        retain.
      </p>
    </header>

    <AppButton @click="confirmUserDeletion">Delete Account</AppButton>

    <Modal :show="confirmingUserDeletion" @close="closeModal">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
          Are you sure you want to delete your account?
        </h2>

        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Once your account is deleted, all of its resources and data will be permanently deleted.
          Please enter your password to confirm you would like to permanently delete your account.
        </p>

        <div class="mt-6">
          <FormLabel for="password" value="Password" class="sr-only" />

          <FormInput
            id="password"
            ref="passwordInput"
            v-model="form.password"
            type="password"
            class="mt-1 block w-3/4"
            placeholder="Password"
            @keyup.enter="deleteUser"
          />

          <FormError :message="form.errors.password" class="mt-2" />
        </div>

        <div class="mt-6 flex justify-end">
          <AppButton @click="closeModal" variant="secondary" type="button"> Cancel </AppButton>

          <AppButton
            class="ms-3"
            :processing="form.processing"
            variant="danger"
            type="button"
            @click="deleteUser"
          >
            Delete Account
          </AppButton>
        </div>
      </div>
    </Modal>
  </section>
</template>
