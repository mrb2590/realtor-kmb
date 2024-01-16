<script setup>
  import ApplicationLogo from '@/Components/ApplicationLogo.vue';
  import FacebookIcon from '@/Components/SocialIcons/FacebookIcon.vue';
  import LinkedInIcon from '@/Components/SocialIcons/LinkedInIcon.vue';
  import InstagramIcon from '@/Components/SocialIcons/InstagramIcon.vue';
  import { PhoneIcon, EnvelopeIcon, ChatBubbleLeftIcon } from '@heroicons/vue/24/outline';
  import AppLink from '@/Components/AppLink.vue';
</script>

<template>
  <footer class="w-full border-t border-primary-700 bg-primary-100 px-4 py-8">
    <!-- Container-->
    <div class="container mx-auto flex flex-row flex-wrap justify-evenly md:flex-nowrap">
      <!-- Left Side -->
      <div
        class="mt-12 flex basis-full items-center justify-center md:mr-12 md:mt-0 md:basis-2/5 lg:basis-1/4"
      >
        <!-- Logo Wrapper -->
        <div class="flex w-full flex-col items-center justify-center space-y-2">
          <ApplicationLogo class="mb-4 h-auto w-full max-w-52" />

          <div class="text-center text-sm text-gray-600">
            &copy; 2024 Karen Buonomo, realtorkmb.com. All rights reserved.
          </div>

          <div class="text-center text-sm text-gray-600">
            <AppLink href="#" class="text-sm">Privacy Policy</AppLink>
            |
            <AppLink href="#" class="text-sm"> Terms & Conditions </AppLink>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <nav
        class="items-cemter order-first flex basis-full items-center justify-center md:order-last md:basis-3/5 lg:basis-3/4"
      >
        <div
          class="flex w-full max-w-sm flex-row flex-wrap items-start justify-between md:max-w-full lg:max-w-full xl:max-w-full"
        >
          <!-- About Links -->
          <div class="w-auto min-w-40 max-w-48 p-3">
            <h3 class="mb-2 text-xl font-bold">About</h3>
            <ul>
              <li class="mb-1"><AppLink href="#" class="text-sm"> Meet the Team </AppLink></li>
              <li class="mb-1"><AppLink href="#" class="text-sm"> Meet the Team </AppLink></li>
            </ul>
          </div>

          <!-- Services Links -->
          <div class="w-auto min-w-40 max-w-48 p-3">
            <h3 class="mb-2 text-xl font-bold">Services</h3>
            <!-- <p class=" text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p> -->
            <ul>
              <li class="mb-1"><AppLink href="#" class="text-sm"> Buying Your Home </AppLink></li>
              <li class="mb-1"><AppLink href="#" class="text-sm"> Selling Your Home </AppLink></li>
              <li class="mb-1"><AppLink href="#" class="text-sm"> Staging Your Home </AppLink></li>
              <li class="mb-1"><AppLink href="#" class="text-sm"> Expired Listings </AppLink></li>
            </ul>
          </div>

          <!-- Contact Links -->
          <div class="w-auto min-w-40 max-w-48 p-3">
            <h3 class="mb-2 text-xl font-bold">Contact</h3>
            <ul>
              <li class="mb-1">
                <AppLink href="#" class="flex flex-row space-x-2 text-sm">
                  <ChatBubbleLeftIcon class="h-auto w-4" />
                  <span>Message Me</span>
                </AppLink>
              </li>
              <li class="mb-1">
                <AppLink
                  href="tel:+1-732-207-8154"
                  :router="false"
                  class="flex flex-row space-x-2 text-sm"
                >
                  <PhoneIcon class="h-auto w-4" />
                  <span>(732) 207-8154</span>
                </AppLink>
              </li>
              <li class="mb-1">
                <AppLink
                  href="mailto:realtorkmb@gmail.com"
                  :router="false"
                  class="flex flex-row space-x-2 text-sm"
                >
                  <EnvelopeIcon class="h-auto w-4" />
                  <span>realtorkmb@gmail.com</span>
                </AppLink>
              </li>
            </ul>
          </div>

          <!-- Social Media Links -->
          <div class="w-auto min-w-40 max-w-48 p-3">
            <h2 class="mb-2 text-xl font-bold">Social Media</h2>
            <ul>
              <li class="mb-1">
                <AppLink href="#" :router="false" class="flex flex-row space-x-2 text-sm">
                  <LinkedInIcon class="h-auto w-4 fill-[#0a66c2]" />
                  <span>LinkedIn</span>
                </AppLink>
              </li>
              <li class="mb-1">
                <AppLink href="#" :router="false" class="flex flex-row space-x-2 text-sm">
                  <FacebookIcon class="h-auto w-4 fill-[#0866ff]" />
                  <span>Facebook</span>
                </AppLink>
              </li>
              <li class="mb-1">
                <AppLink href="#" :router="false" class="flex flex-row space-x-2 text-sm">
                  <InstagramIcon class="h-auto w-4" />
                  <span>Instagram</span>
                </AppLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>
