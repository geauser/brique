<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  name?: string;
}>();
</script>
<template>

  <Icon
    class="pointer-events-none transition-colors box-content"
    aria-hidden="true"
    :icon="name"
  />

</template>