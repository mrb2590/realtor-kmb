<script setup>
  import { useForm } from '@inertiajs/vue3';

  import Button from '@/Components/Button.vue';
  import FeaturedListings from '@/Components/FeaturedListings.vue';
  import Error from '@/Components/Form/Error.vue';
  import Input from '@/Components/Form/Input.vue';
  import Label from '@/Components/Form/Label.vue';
  import Select from '@/Components/Form/Select.vue';
  import HeadMeta from '@/Components/HeadMeta.vue';
  import HomeLayout from '@/Layouts/Home/HomeLayout.vue';

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
    <HeadMeta title="Listings" />

    <!-- Search Homes Form -->
    <div class="relative h-full w-full bg-primary-900 p-6">
      <div class="container mx-auto flex items-center justify-center px-6">
        <form
          @submit.prevent="updatePassword"
          class="z-10 my-8 mt-6 w-full max-w-4xl space-y-6 rounded"
        >
          <div>
            <Label for="address" value="Address" class="text-xl !font-light text-white" />
            <Input
              id="address"
              v-model="form.address"
              type="text"
              class="mt-1 block w-full"
              placeholder="123 My Dream Home Ave, Jacksonville, FL"
            />
            <Error :message="form.errors.address" class="mt-2" />
          </div>

          <div class="flex space-x-6">
            <div class="grow">
              <Label for="price_min" value="Min Price" class="text-xl !font-light text-white" />
              <Select
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
              <Error :message="form.errors.price_min" class="mt-2" />
            </div>

            <div class="grow">
              <Label for="price_max" value="Max Price" class="text-xl !font-light text-white" />
              <Select
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
              <Error :message="form.errors.price_max" class="mt-2" />
            </div>

            <div class="grow">
              <Label for="beds" value="Beds" class="text-xl !font-light text-white" />
              <Select
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
              <Error :message="form.errors.beds" class="mt-2" />
            </div>

            <div class="grow">
              <Label for="baths" value="Baths" class="text-xl !font-light text-white" />
              <Select
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
              <Error :message="form.errors.baths" class="mt-2" />
            </div>
          </div>

          <div class="flex justify-end">
            <Button type="submit" class="mt-4" variant="secondary"> Search </Button>
          </div>
        </form>
      </div>
    </div>

    <div class="mx-auto w-full p-6 sm:container">
      <FeaturedListings />
    </div>
  </div>
</template>
