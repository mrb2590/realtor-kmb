<script setup>
  import HeadMeta from '@/Components/HeadMeta.vue';
  import HomeLayout from '@/Layouts/Home/HomeLayout.vue';

  defineOptions({ layout: HomeLayout });

  const teamMembers = [
    {
      name: 'Karen Buonomo',
      bio: 'Karen Buonomo is a real estate agent with a passion for helping people find their dream home. She has been in the industry for over 20 years and has helped hundreds of families find the perfect home. Karen is a member of the National Association of Realtors and has received numerous awards for her outstanding service to her clients. She is dedicated to providing the highest level of service and is committed to helping her clients achieve their real estate goals. Karen is a native of Jacksonville and has a deep knowledge of the local real estate market. She is committed to helping her clients find the perfect home in the perfect neighborhood.',
      img: 'https://via.placeholder.com/300'
    },
    {
      name: 'Karen Buonomo',
      bio: 'Karen Buonomo is a real estate agent with a passion for helping people find their dream home. She has been in the industry for over 20 years and has helped hundreds of families find the perfect home. Karen is a member of the National Association of Realtors and has received numerous awards for her outstanding service to her clients. She is dedicated to providing the highest level of service and is committed to helping her clients achieve their real estate goals. Karen is a native of Jacksonville and has a deep knowledge of the local real estate market. She is committed to helping her clients find the perfect home in the perfect neighborhood.',
      img: 'https://via.placeholder.com/300'
    },
    {
      name: 'Karen Buonomo',
      bio: 'Karen Buonomo is a real estate agent with a passion for helping people find their dream home. She has been in the industry for over 20 years and has helped hundreds of families find the perfect home. Karen is a member of the National Association of Realtors and has received numerous awards for her outstanding service to her clients. She is dedicated to providing the highest level of service and is committed to helping her clients achieve their real estate goals. Karen is a native of Jacksonville and has a deep knowledge of the local real estate market. She is committed to helping her clients find the perfect home in the perfect neighborhood.',
      img: 'https://via.placeholder.com/300'
    },
    {
      name: 'Karen Buonomo',
      bio: 'Karen Buonomo is a real estate agent with a passion for helping people find their dream home. She has been in the industry for over 20 years and has helped hundreds of families find the perfect home. Karen is a member of the National Association of Realtors and has received numerous awards for her outstanding service to her clients. She is dedicated to providing the highest level of service and is committed to helping her clients achieve their real estate goals. Karen is a native of Jacksonville and has a deep knowledge of the local real estate market. She is committed to helping her clients find the perfect home in the perfect neighborhood.',
      img: 'https://via.placeholder.com/300'
    },
    {
      name: 'Karen Buonomo',
      bio: 'Karen Buonomo is a real estate agent with a passion for helping people find their dream home. She has been in the industry for over 20 years and has helped hundreds of families find the perfect home. Karen is a member of the National Association of Realtors and has received numerous awards for her outstanding service to her clients. She is dedicated to providing the highest level of service and is committed to helping her clients achieve their real estate goals. Karen is a native of Jacksonville and has a deep knowledge of the local real estate market. She is committed to helping her clients find the perfect home in the perfect neighborhood.',
      img: 'https://via.placeholder.com/300'
    }
  ];
</script>

<template>
  <div>
    <HeadMeta title="About" description="To do..." />

    <div class="mx-auto w-full p-6 sm:container">
      <h2 class="mb-12 mt-6 text-center text-4xl font-bold">Meet the Team</h2>

      <div
        v-for="(member, i) in teamMembers"
        :key="i"
        class="mb-10 flex w-full flex-col items-center space-y-4 sm:flex-row sm:space-x-10 sm:space-y-0"
      >
        <div class="w-full max-w-72">
          <img
            src="https://via.placeholder.com/300"
            alt="Karen Buonomo"
            class="h-auto w-full rounded-full"
          />
        </div>
        <div>
          <h3 class="mb-2 text-2xl font-bold">Karen Buonomo</h3>
          <p class="mb-4 text-lg">
            Karen Buonomo is a real estate agent with a passion for helping people find their dream
            home. She has been in the industry for over 20 years and has helped hundreds of families
            find the perfect home.
          </p>
          <p class="mb-4 text-lg">
            Karen is a member of the National Association of Realtors and has received numerous
            awards for her outstanding service to her clients. She is dedicated to providing the
            highest level of service and is committed to helping her clients achieve their real
            estate goals.
          </p>
          <p class="mb-4 text-lg">
            Karen is a native of Jacksonville and has a deep knowledge of the local real estate
            market. She is committed to helping her clients find the perfect home in the perfect
            neighborhood.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
