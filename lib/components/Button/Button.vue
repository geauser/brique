<script setup lang="ts">

withDefaults(defineProps<{
  loading?: boolean;
}>(), {
  loading: false,
})

</script>
<template>

  <button
    type="button"
    :disabled="loading"
    class="
    inline-flex
    items-center
    border
    shadow-sm
    rounded
    active:shadow-none
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">

    <div class="flex flex-1 justify-start items-center">
      <slot name="icon" />
    </div>

    <div class="flex justify-center items-center">
      <slot />
    </div>

    <!--
      Invisible element to push icon to the left and
      still center the button's text.
      See here: https://stackoverflow.com/a/69838293/5203275
     -->
    <div class="flex flex-1" />

  </button>

</template>
<style lang="scss" scoped>

.sm {
  @apply px-2.5 py-1.5 text-xs rounded;
}

.md {
  @apply px-3 py-2 text-sm leading-4 rounded-md;
}

.lg {
  @apply px-4 py-2 text-base rounded-md;
}

.primary {
  @apply
  border-transparent
  text-white
  bg-indigo-600
  hover:bg-indigo-700
  focus:ring-indigo-500;
}

.secondary {
  @apply
  border-transparent
  text-indigo-700
  bg-indigo-100
  hover:bg-indigo-200
  focus:ring-indigo-500;
}

.white {
  @apply
  border-gray-300
  text-gray-700
  bg-white
  hover:bg-gray-50
  focus:ring-indigo-500;
}

</style>