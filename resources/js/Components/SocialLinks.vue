<script setup>
  import Link from '@/Components/Link.vue';
  import { links } from '~data/app-links';

  const props = defineProps({
    variant: {
      type: String,
      default: 'secondary'
    },
    size: {
      type: String,
      default: 'sm'
    },
    iconVariant: {
      type: String,
      default: 'color',
      validator: (value) => {
        return ['white', 'color'].includes(value);
      }
    }
  });
</script>

<template>
  <ul class="flex basis-0 items-center space-x-3">
    <li
      class="flex flex-row items-center"
      v-for="(link, linkName) in links.social.subLinks"
      :key="linkName"
    >
      <Link :z-route="link.route" :link-to="link.href" :title="link.title" :variant="props.variant">
        <component
          :is="props.iconVariant === 'white' ? link.icon.whiteComponent : link.icon.component"
          v-if="link.icon"
          :class="{ ...link.icon.classes, 'text-white': props.iconVariant === 'white' }"
        />
      </Link>
    </li>
  </ul>
</template>
