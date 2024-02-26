<script setup>
  import AppLogo from '@/Components/AppLogo/AppLogo.vue';
  import BackgroundSlider from '@/Components/BackgroundSlider.vue';
  import Button from '@/Components/Button.vue';
  import HeadMeta from '@/Components/HeadMeta.vue';
  import HomeLayout from '@/Layouts/Home/HomeLayout.vue';
  import ChevronDownIcon from '~icons/heroicons-outline/chevron-down';
  import AwardImg from '~img/pages/home/award.png';
  import PersonArmsFolded from '~img/pages/home/person-arms-folded.png';

  defineOptions({ layout: HomeLayout });

  const scrollPast = () => {
    window.scrollTo({
      top: window.innerHeight - 125,
      behavior: 'smooth'
    });
  };
</script>

<template>
  <div>
    <HeadMeta />

    <div
      class="relative -mt-24 flex h-full min-h-screen w-full items-center justify-center bg-white bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <BackgroundSlider
        class="absolute left-0 top-0 z-0 h-full min-h-screen w-full"
        slider-name="home"
      />

      <h1 class="relative max-w-4xl rounded bg-black/50 p-8 text-center font-normal text-white">
        <div class="mb-6 text-4xl font-bold uppercase">Discover Unmatched Expertise:</div>
        <div class="text-2xl text-gray-100">
          Karen Buonomo Leads the Way in Expired Listings, Home Staging, and Seamless Home Matches!
        </div>
      </h1>

      <div class="absolute bottom-0 left-0 z-20 flex w-full justify-center">
        <Button
          class="flex h-32 w-52 flex-col items-center justify-center rounded-full p-4 transition duration-300"
          type="button"
          @click="scrollPast()"
          variant="transparent"
        >
          <div class="mb-4 text-xl font-medium uppercase text-white">Learn More</div>
          <ChevronDownIcon class="h-6 w-6 animate-bounce text-white" />
        </Button>
      </div>
    </div>

    <!-- Intro -->
    <div class="container relative z-10 mx-auto my-12 w-full rounded-lg bg-white p-6">
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-row items-stretch justify-center space-x-6">
          <div
            class="min-h-52 w-1/3 bg-contain bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${PersonArmsFolded})` }"
          />
          <div class="flex w-2/3 items-center">
            <p class="text-xl font-light">
              Are you gearing up for your home selling journey but unsure where to begin? Look no
              further! Our team specializes in selling expired listings and provides comprehensive
              home staging services, offering unmatched expertise to navigate you through the
              process. Whether it's rejuvenating expired listings or enhancing the allure of your
              current property through staging, we're here to elevate your real estate experience.
              With our unwavering commitment to excellence and dedication to your satisfaction, we
              lead the way in selling expired listings and home staging, ensuring a seamless and
              successful journey every step of the way. Let us turn your selling vision into a
              lucrative reality!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-14 flex flex-col space-y-20 overflow-x-hidden bg-primary-800 px-6 py-12 text-white"
    >
      <h2 class="text-center text-4xl font-extrabold uppercase">More Awards Than Others</h2>

      <div class="flex flex-row space-x-6">
        <div class="animate-scroll-left flex w-max flex-row justify-center space-x-6">
          <div class="flex h-36 w-36 flex-col items-stretch justify-center space-y-4">
            <img :src="AwardImg" class="h-full w-full rounded-full border-2 border-primary-100" />
            <div class="text-center text-xl">Best Realtor 2023</div>
          </div>
          <div class="flex h-36 w-36 flex-col items-stretch justify-center space-y-4">
            <img :src="AwardImg" class="h-full w-full rounded-full border-2 border-primary-100" />
            <div class="text-center text-xl">Best Realtor 2022</div>
          </div>
          <div class="flex h-36 w-36 flex-col items-stretch justify-center space-y-4">
            <img :src="AwardImg" class="h-full w-full rounded-full border-2 border-primary-100" />
            <div class="text-center text-xl">Best Realtor 2021</div>
          </div>
          <div class="flex h-36 w-36 flex-col items-stretch justify-center space-y-4">
            <img :src="AwardImg" class="h-full w-full rounded-full border-2 border-primary-100" />
            <div class="text-center text-xl">Best Realtor 2020</div>
          </div>
          <div class="flex h-36 w-36 flex-col items-stretch justify-center space-y-4">
            <img :src="AwardImg" class="h-full w-full rounded-full border-2 border-primary-100" />
            <div class="text-center text-xl">Best Realtor 2019</div>
          </div>
          <div class="flex h-36 w-36 flex-col items-stretch justify-center space-y-4">
            <img :src="AwardImg" class="h-full w-full rounded-full border-2 border-primary-100" />
            <div class="text-center text-xl">Best Realtor 2018</div>
          </div>
        </div>
        <div class="animate-scroll-left flex w-max flex-row justify-center space-x-6">
          <div class="flex h-36 w-36 flex-col items-stretch justify-center space-y-4">
            <img :src="AwardImg" class="h-full w-full rounded-full border-2 border-primary-100" />
            <div class="text-center text-xl">Best Realtor 2023</div>
          </div>
          <div class="flex h-36 w-36 flex-col items-stretch justify-center space-y-4">
            <img :src="AwardImg" class="h-full w-full rounded-full border-2 border-primary-100" />
            <div class="text-center text-xl">Best Realtor 2022</div>
          </div>
          <div class="flex h-36 w-36 flex-col items-stretch justify-center space-y-4">
            <img :src="AwardImg" class="h-full w-full rounded-full border-2 border-primary-100" />
            <div class="text-center text-xl">Best Realtor 2021</div>
          </div>
          <div class="flex h-36 w-36 flex-col items-stretch justify-center space-y-4">
            <img :src="AwardImg" class="h-full w-full rounded-full border-2 border-primary-100" />
            <div class="text-center text-xl">Best Realtor 2020</div>
          </div>
          <div class="flex h-36 w-36 flex-col items-stretch justify-center space-y-4">
            <img :src="AwardImg" class="h-full w-full rounded-full border-2 border-primary-100" />
            <div class="text-center text-xl">Best Realtor 2019</div>
          </div>
          <div class="flex h-36 w-36 flex-col items-stretch justify-center space-y-4">
            <img :src="AwardImg" class="h-full w-full rounded-full border-2 border-primary-100" />
            <div class="text-center text-xl">Best Realtor 2018</div>
          </div>
        </div>
      </div>

      <p class="mx-auto w-full max-w-2xl text-center text-xl font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nunc quis sagittis
        dictum, quam velit ultricies libero, vitae semper nisl velit eget felis.
      </p>
    </div>

    <div
      class="relative flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden p-8"
    >
      <div class="h-56 w-56">
        <Transition
          enter-active-class="transition ease-out duration-500 delay-500"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition ease-in duration-500"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          appear
          mode="out-in"
        >
          <div>
            <AppLogo class="block h-full w-auto fill-current" />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style>
  .animate-scroll-left {
    animation: scrollLeft 30s linear infinite;
  }
  .animate-bounce {
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0%,
    100%,
    20%,
    50%,
    80% {
      transform: translateY(12px);
    }

    40% {
      transform: translateY(-12px);
    }

    60% {
      transform: translateY(-6px);
    }
  }

  @keyframes scrollLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
