<script setup>
  import { computed, onMounted, onUnmounted, ref } from 'vue';

  import { sliders } from '~data/sliders';

  const props = defineProps({
    sliderName: {
      type: String,
      required: true
    }
  });

  const slides = sliders[props.sliderName];
  let interval = null;
  const slideIndex = ref(0);
  const totalSlides = computed(() => slides.length);
  const currentSlide = computed(() => slides[slideIndex.value]);

  onMounted(() => {
    interval = setInterval(() => {
      slideIndex.value += 1;

      if (slideIndex.value >= totalSlides.value) {
        slideIndex.value = 0;
      }
    }, 10000);
  });

  onUnmounted(() => {
    clearInterval(interval);
  });
</script>

<template>
  <div class="h-full w-full bg-black">
    <Transition
      enter-active-class="transition ease-in-out duration-[3s]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in-out duration-[3s]"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      appear
    >
      <div
        v-if="slideIndex % 2 === 0"
        class="absolute left-0 top-0 h-full w-full overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat"
        :style="{
          backgroundImage: `url(${currentSlide.img.webpX3.src}), url(${currentSlide.img.jpgX3.src})`,
          backgroundImage: `image-set(url(${currentSlide.img.webpX1.src}) 1x, url(${currentSlide.img.jpgX1.src}) 1x, url(${currentSlide.img.webpX2.src}) 2x, url(${currentSlide.img.jpgX2.src}) 2x, url(${currentSlide.img.webpX3.src}) 3x, url(${currentSlide.img.jpgX3.src}) 3x)`,
          backgroundImage: `-webkit-image-set(url(${currentSlide.img.webpX1.src}) 1x, url(${currentSlide.img.jpgX1.src}) 1x, url(${currentSlide.img.webpX2.src}) 2x, url(${currentSlide.img.jpgX2.src}) 2x, url(${currentSlide.img.webpX3.src}) 3x, url(${currentSlide.img.jpgX3.src}) 3x)`
        }"
      />
      <div
        v-else
        class="absolute left-0 top-0 h-full w-full overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat"
        :style="{
          backgroundImage: `url(${currentSlide.img.webpX3.src}), url(${currentSlide.img.jpgX3.src})`,
          backgroundImage: `image-set(url(${currentSlide.img.webpX1.src}) 1x, url(${currentSlide.img.jpgX1.src}) 1x, url(${currentSlide.img.webpX2.src}) 2x, url(${currentSlide.img.jpgX2.src}) 2x, url(${currentSlide.img.webpX3.src}) 3x, url(${currentSlide.img.jpgX3.src}) 3x)`,
          backgroundImage: `-webkit-image-set(url(${currentSlide.img.webpX1.src}) 1x, url(${currentSlide.img.jpgX1.src}) 1x, url(${currentSlide.img.webpX2.src}) 2x, url(${currentSlide.img.jpgX2.src}) 2x, url(${currentSlide.img.webpX3.src}) 3x, url(${currentSlide.img.jpgX3.src}) 3x)`
        }"
      />
    </Transition>
    <div class="absolute left-0 top-0 h-full w-full bg-black/35" />
  </div>
</template>
