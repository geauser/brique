<script lang="ts">
export default { inheritAttrs: false };
</script>

<script setup lang="ts">
import { computed } from 'vue';
import Icon from '@/components/Icon';

const props = defineProps<{
  modelValue: string;
  icon?: string;
  error?: boolean,
  warn?: boolean,
  valid?: boolean,
}>();

const emit = defineEmits(['update:modelValue']);

const trailingIcon = computed(() => {
  switch (true) {
    case props.error: return 'mdi:error-outline';
    case props.warn:  return 'mdi:alert-outline';
    case props.valid: return 'mdi:check-circle-outline';
    default:          return '';
  }
});

</script>
<template>

  <!--
    Each state take precedence over the following:
    error > warn > valid
  -->
  <div
    :class="{
      'error': error,
      'warn': !error && warn,
      'valid': !error && !warn && valid }">

    <div class="relative">

      <!-- Leading icon -->
      <div
        v-if="$slots['leading-icon'] || icon"
        class="
        absolute
        left-0
        flex
        items-center
        pl-3
        inset-y-0">

        <div
          v-if="$slots['leading-icon']"
          class="leading-icon">
          <slot name="leading-icon" />
        </div>

        <Icon
          v-else
          class="leading-icon text-gray-400 dark:text-gray-300"
          :name="icon" />

      </div>

      <input
        class="
          input
          block
          w-full
          text-sm
          border
          border-gray-300
          dark:border-gray-600
          dark:text-gray-100
          rounded-md
          shadow-sm
          dark:bg-gray-800
          transition-colors
          focus:ring-indigo-500
          focus:border-indigo-500
          disabled:shadow-none
          disabled:bg-gray-50
          disabled:text-gray-400"
        :class="[ 
          icon || $slots['leading-icon'] ? 'pl-10' : 'pl-4',
          trailingIcon || $slots['trailing-icon'] ? 'pr-10' : 'pr-4'
        ]"
        v-bind="$attrs"
        :value="modelValue"
        :aria-invalid="error"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)">

      <!-- Trailing icon used to show state of the input -->
      <div
        v-if="trailingIcon || $slots['trailing-icon']"
        class="
        absolute
        right-0
        flex
        items-center
        pr-3
        inset-y-0">

        <div
          v-if="$slots['trailing-icon']"
          class="trailing-icon">
          <slot name="trailing-icon" />
        </div>

        <Icon
          v-else
          class="trailing-icon text-xl"
          :name="trailingIcon" />

      </div>

    </div>

  </div>

</template>
<style lang="scss">

.error {

  .input {
    @apply
    text-red-900
    border-red-300
    placeholder-red-300
    focus:ring-red-500
    focus:border-red-500;
}

  .leading-icon { 
    @apply text-red-300;
    svg {
      @apply fill-red-300;
    }
  };
  .trailing-icon {
    @apply text-red-500;
  }
}

.warn {

  .input {
    @apply
    text-yellow-900
    border-yellow-500
    placeholder-yellow-500/70
    focus:ring-yellow-500
    focus:border-yellow-500;
  }

  .leading-icon,
  .trailing-icon {
    @apply text-yellow-500;
  }
}

.valid {

  .input {
    @apply
      text-green-900
      border-green-300
      placeholder-green-900/50
      focus:ring-green-500
      focus:border-green-500;
  }

  .leading-icon,
  .trailing-icon {
    @apply text-green-500;
  }
}
</style>