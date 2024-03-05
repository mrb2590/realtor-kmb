<script setup>
  import { computed } from 'vue';

  import LogoHorizontal from '@/Components/AppLogo/Partials/LogoHorizontal.vue';
  import LogoHorizontalAlt from '@/Components/AppLogo/Partials/LogoHorizontalAlt.vue';
  import LogoHorizontalAlt2 from '@/Components/AppLogo/Partials/LogoHorizontalAlt2.vue';
  import LogoIcon from '@/Components/AppLogo/Partials/LogoIcon.vue';
  import LogoMain from '@/Components/AppLogo/Partials/LogoMain.vue';

  const props = defineProps({
    variant: {
      type: String,
      default: 'main',
      validator: (value) => {
        return ['main', 'horizontal', 'horizontal-alt', 'horizontal-alt-2', 'icon'].includes(value);
      }
    },
    theme: {
      type: String,
      default: 'color',
      validator: (value) => {
        return ['white', 'color'].includes(value);
      }
    }
  });

  const themeClasses = computed(() => {
    return {
      trees: {
        fill: props.theme === 'white' ? '#fff' : '#cce4ed',
        stroke: props.theme === 'white' ? '#fff' : '#cce4ed',
        strokeWidth: props.theme === 'white' ? 0 : 1
      },
      kb: {
        fill: props.theme === 'white' ? '#fff' : '#075985',
        stroke: props.theme === 'white' ? '#fff' : '#075985',
        strokeWidth: props.theme === 'white' ? 0 : 1
      },
      slogan: {
        fill: props.theme === 'white' ? '#fff' : '#cc2936',
        stroke: props.theme === 'white' ? '#fff' : '#cc2936',
        strokeWidth: props.theme === 'white' ? 0 : 1
      }
    };
  });
</script>

<template>
  <LogoMain v-if="props.variant === 'main'" :theme-classes="themeClasses" />
  <LogoHorizontal v-else-if="props.variant === 'horizontal'" :theme-classes="themeClasses" />
  <LogoHorizontalAlt v-else-if="props.variant === 'horizontal-alt'" :theme-classes="themeClasses" />
  <LogoHorizontalAlt2
    v-else-if="props.variant === 'horizontal-alt-2'"
    :theme-classes="themeClasses"
  />
  <LogoIcon v-else-if="props.variant === 'icon'" :theme-classes="themeClasses" />
</template>
