<script setup>
  const listings = [
    {
      beds: 3,
      baths: 2,
      sqft: 12345,
      price: 250000,
      image: 'https://via.placeholder.com/300',
      address: '123 Main St, Anytown, USA 12345',
      agrency: 'RE/MAX, LLC'
    },
    {
      beds: 2,
      baths: 1,
      sqft: 12345,
      price: 250000,
      image: 'https://via.placeholder.com/300',
      address: '123 Main St, Anytown, USA 12345',
      agrency: 'RE/MAX, LLC'
    },
    {
      beds: 1,
      baths: 1.5,
      sqft: 12345,
      price: 250000,
      image: 'https://via.placeholder.com/300',
      address: '123 Main St, Anytown, USA 12345',
      agrency: 'RE/MAX, LLC'
    },
    {
      beds: 3,
      baths: 2,
      sqft: 12345,
      price: 250000,
      image: 'https://via.placeholder.com/300',
      address: '123 Main St, Anytown, USA 12345',
      agrency: 'RE/MAX, LLC'
    },
    {
      beds: 3,
      baths: 2,
      sqft: 12345,
      price: 250000,
      image: 'https://via.placeholder.com/300',
      address: '123 Main St, Anytown, USA 12345',
      agrency: 'RE/MAX, LLC'
    },
    {
      beds: 3,
      baths: 2,
      sqft: 12345,
      price: 250000,
      image: 'https://via.placeholder.com/300',
      address: '123 Main St, Anytown, USA 12345',
      agrency: 'RE/MAX, LLC'
    },
    {
      beds: 3,
      baths: 2,
      sqft: 12345,
      price: 250000,
      image: 'https://via.placeholder.com/300',
      address: '123 Main St, Anytown, USA 12345',
      agrency: 'RE/MAX, LLC'
    },
    {
      beds: 3,
      baths: 2,
      sqft: 12345,
      price: 250000,
      image: 'https://via.placeholder.com/300',
      address: '123 Main St, Anytown, USA 12345',
      agrency: 'RE/MAX, LLC'
    },
    {
      beds: 3,
      baths: 2,
      sqft: 12345,
      price: 250000,
      image: 'https://via.placeholder.com/300',
      address: '123 Main St, Anytown, USA 12345',
      agrency: 'RE/MAX, LLC'
    }
  ];
</script>

<template>
  <div class="grid grid-cols-1 grid-rows-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div
      v-for="(listing, i) in listings"
      :key="i"
      class="flex cursor-pointer select-none overflow-hidden rounded-md border border-gray-200 shadow-md transition hover:scale-105 hover:transform hover:shadow-lg active:scale-95 xs:flex-col"
    >
      <div class="relative h-40 w-full">
        <div
          class="h-40 w-full bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${listing.image})` }"
        />
        <div
          class="absolute left-0 top-0 z-10 flex h-full w-full items-end justify-end bg-gradient-to-tl from-black/50 to-transparent to-50% p-2 text-2xl font-bold text-white"
        >
          {{
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0
            }).format(listing.price)
          }}
        </div>
      </div>
      <div class="p-4">
        <div
          class="mb-2 overflow-hidden text-ellipsis text-nowrap text-sm"
          :title="listing.address"
        >
          {{ listing.address }}
        </div>
        <div class="mb-4 flex flex-row items-center justify-start space-x-4">
          <div>
            <strong>{{ listing.beds }}</strong> {{ listing.beds > 1 ? 'beds' : 'bed' }}
          </div>
          <div>
            <strong>{{ listing.baths }}</strong> {{ listing.baths > 1 ? 'baths' : 'bath' }}
          </div>
          <div>
            <strong>{{ new Intl.NumberFormat('en-US').format(listing.sqft) }}</strong>
            sqft
          </div>
        </div>
        <div class="text-right">
          {{ listing.agrency }}
        </div>
      </div>
    </div>
  </div>
</template>
