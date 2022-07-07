<script setup lang="ts">
withDefaults(defineProps<{
  v: any,
  type?: 'error' | 'warn',
}>(), {
  type: 'error',
});
</script>
<template>

  <div
    v-if="v.$error"
    class="mt-1 text-sm"
    :class="{ [type]: true }">

    <p>
      {{ v.$errors[0].$message }}
    </p>

  </div>

</template>
<style lang="scss" scoped>

  .error {
    @apply text-red-800;
  }

  .warn {
    @apply text-yellow-700;
  }

</style>
