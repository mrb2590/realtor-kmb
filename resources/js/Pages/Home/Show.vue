<script setup>
  import HomeLayout from '@/Layouts/HomeLayout.vue';
  import ApplicationLogo from '@/Components/ApplicationLogo.vue';
  import AppHead from '@/Components/AppHead.vue';
  import BackgroundVideo from '@/../img/home/background-video-all.gif';
  import InputLabel from '@/Components/InputLabel.vue';
  import InputError from '@/Components/InputError.vue';
  import TextInput from '@/Components/TextInput.vue';
  import FormSelect from '@/Components/FormSelect.vue';
  import PrimaryButton from '@/Components/PrimaryButton.vue';
  import PersonArmsFolded from '@/../img/home/person-arms-folded.png';
  import AwardImg from '@/../img/home/award.png';
  import ChevronDownIcon from '~icons/heroicons-outline/chevron-down';
  import { useForm } from '@inertiajs/vue3';

  defineOptions({ layout: HomeLayout });

  const form = useForm({
    address: '',
    price_min: 'any',
    price_max: 'any',
    beds: 'any',
    baths: 'any'
  });
</script>

<template>
  <div>
    <AppHead />

    <!-- Search Homes Form -->
    <div
      class="relative flex h-full min-h-[calc(100vh_-_5rem)] w-full items-center justify-center bg-white bg-cover bg-fixed bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${BackgroundVideo})` }"
    >
      <div class="absolute left-0 top-0 h-full w-full"></div>
      <form
        @submit.prevent="updatePassword"
        class="z-10 mt-6 w-full max-w-4xl space-y-6 rounded bg-black/50 p-8 shadow-lg"
      >
        <div>
          <InputLabel for="address" value="Address" class="text-xl !font-light text-white" />

          <TextInput
            id="address"
            v-model="form.address"
            type="text"
            class="mt-1 block w-full"
            placeholder="123 My Dream Home Ave, Jacksonville, FL"
          />

          <InputError :message="form.errors.address" class="mt-2" />
        </div>

        <div class="flex space-x-6">
          <div class="grow">
            <InputLabel for="price_min" value="Min Price" class="text-xl !font-light text-white" />

            <FormSelect
              id="price_min"
              v-model="form.price_min"
              class="mt-1 block w-full"
              :options="[
                { label: 'Any Price', value: 'any' },
                { label: '$50,000', value: '50000' },
                { label: '$100,000', value: '100000' },
                { label: '$150,000', value: '150000' },
                { label: '$200,000', value: '200000' },
                { label: '$250,000', value: '250000' },
                { label: '$300,000', value: '300000' },
                { label: '$350,000', value: '350000' },
                { label: '$400,000', value: '400000' },
                { label: '$450,000', value: '450000' },
                { label: '$500,000', value: '500000' },
                { label: '$550,000', value: '550000' },
                { label: '$600,000', value: '600000' },
                { label: '$650,000', value: '650000' },
                { label: '$700,000', value: '700000' },
                { label: '$750,000', value: '750000' },
                { label: '$800,000', value: '800000' },
                { label: '$850,000', value: '850000' },
                { label: '$900,000', value: '900000' },
                { label: '$950,000', value: '950000' }
              ]"
            />

            <InputError :message="form.errors.price_min" class="mt-2" />
          </div>

          <div class="grow">
            <InputLabel for="price_max" value="Max Price" class="text-xl !font-light text-white" />

            <FormSelect
              id="price_max"
              v-model="form.price_max"
              class="mt-1 block w-full"
              :options="[
                { label: 'Any Price', value: 'any' },
                { label: '$50,000', value: '50000' },
                { label: '$100,000', value: '100000' },
                { label: '$150,000', value: '150000' },
                { label: '$200,000', value: '200000' },
                { label: '$250,000', value: '250000' },
                { label: '$300,000', value: '300000' },
                { label: '$350,000', value: '350000' },
                { label: '$400,000', value: '400000' },
                { label: '$450,000', value: '450000' },
                { label: '$500,000', value: '500000' },
                { label: '$550,000', value: '550000' },
                { label: '$600,000', value: '600000' },
                { label: '$650,000', value: '650000' },
                { label: '$700,000', value: '700000' },
                { label: '$750,000', value: '750000' },
                { label: '$800,000', value: '800000' },
                { label: '$850,000', value: '850000' },
                { label: '$900,000', value: '900000' },
                { label: '$950,000', value: '950000' },
                { label: '$1 M', value: '1000000' },
                { label: '$1.25 M', value: '1250000' },
                { label: '$1.50 M', value: '1500000' },
                { label: '$1.75 M', value: '1750000' },
                { label: '$2 M', value: '2000000' },
                { label: '$2.25 M', value: '2250000' },
                { label: '$2.50 M', value: '2500000' },
                { label: '$2.75 M', value: '2750000' },
                { label: '$3 M', value: '3000000' },
                { label: '$3.25 M', value: '3250000' },
                { label: '$3.50 M', value: '3500000' },
                { label: '$3.75 M', value: '3750000' },
                { label: '$4 M', value: '4000000' },
                { label: '$4.25 M', value: '4250000' },
                { label: '$4.50 M', value: '4500000' },
                { label: '$4.75 M', value: '4750000' },
                { label: '$5 M', value: '5000000' },
                { label: '$6 M', value: '6000000' },
                { label: '$7 M', value: '7000000' },
                { label: '$8 M', value: '8000000' },
                { label: '$9 M', value: '9000000' },
                { label: '$10 M', value: '10000000' },
                { label: '$11 M', value: '11000000' },
                { label: '$12 M', value: '12000000' },
                { label: '$13 M', value: '13000000' },
                { label: '$14 M', value: '14000000' },
                { label: '$15 M', value: '15000000' },
                { label: '$16 M', value: '16000000' },
                { label: '$17 M', value: '17000000' },
                { label: '$18 M', value: '18000000' },
                { label: '$19 M', value: '19000000' },
                { label: '$20 M', value: '20000000' }
              ]"
            />

            <InputError :message="form.errors.price_max" class="mt-2" />
          </div>

          <div class="grow">
            <InputLabel for="beds" value="Beds" class="text-xl !font-light text-white" />

            <FormSelect
              id="beds"
              v-model="form.beds"
              class="mt-1 block w-full"
              :options="[
                { label: 'Any', value: 'any' },
                { label: '1 Bed', value: '1' },
                { label: '2 Beds', value: '2' },
                { label: '3 Beds', value: '3' },
                { label: '4 Beds', value: '4' }
              ]"
            />

            <InputError :message="form.errors.beds" class="mt-2" />
          </div>

          <div class="grow">
            <InputLabel for="baths" value="Baths" class="text-xl !font-light text-white" />

            <FormSelect
              id="baths"
              v-model="form.baths"
              class="mt-1 block w-full"
              :options="[
                { label: 'Any', value: 'any' },
                { label: '1 Bath', value: '1' },
                { label: '2 Baths', value: '2' },
                { label: '3 Baths', value: '3' },
                { label: '4 Baths', value: '4' }
              ]"
            />

            <InputError :message="form.errors.baths" class="mt-2" />
          </div>
        </div>

        <div class="flex justify-end">
          <PrimaryButton type="submit" class="mt-4"> Search </PrimaryButton>
        </div>
      </form>
    </div>

    <!-- Intro -->
    <div
      class="relative z-10 mx-auto -mt-28 w-full max-w-4xl rounded-lg border border-logo-primary bg-white p-6"
    >
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-center text-4xl font-extrabold uppercase">Find Your Dream Home</h1>
        <button
          class="mb-6 mt-2 flex h-20 w-full max-w-32 justify-center rounded-full bg-white p-4 px-4 transition duration-300 hover:bg-primary-100"
        >
          <ChevronDownIcon class="h-6 w-6 animate-bounce text-logo-primary" />
        </button>
        <div class="flex flex-row items-stretch justify-center space-x-6">
          <div
            class="min-h-52 w-1/3 bg-contain bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${PersonArmsFolded})` }"
          ></div>
          <div class="flex w-2/3 items-center">
            <p class="text-center text-xl font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nunc quis
              sagittis dictum, quam velit ultricies libero, vitae semper nisl velit eget felis.
              Donec ut ullamcorper nunc. Nulla facilisi. Donec euismod, nunc quis sagittis dictum,
              quam velit ultricies libero, vitae semper nisl velit eget felis. Donec ut ullamcorper
              nunc. Nulla facilisi.
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
            <ApplicationLogo class="block h-full w-auto fill-current" />
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
      transform: translateY(0);
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
