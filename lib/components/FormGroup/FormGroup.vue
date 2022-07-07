<script setup lang="ts">
withDefaults(defineProps<{
  inputId: string,
  label: string,
}>(), {
  inputId: '',
  label: '',
});
</script>
<template>

  <div style="font-size: 0;">

    <div class="flex justify-between text-sm mb-1.5">

      <label
        v-if="label"
        :for="inputId"
        class="block font-medium text-gray-700 dark:text-gray-200">
        {{ label }}
      </label>

      <slot name="right-hint" />

    </div>

    <slot />

    <slot name="bottom-block" />

  </div>

</template>
