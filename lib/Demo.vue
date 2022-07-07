<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button';
import InputText from '@/components/InputText';

const formValue = ref('');

</script>
<template>

  <div class="flex justify-center items-center h-full space-x-4">
    <!-- <Button class="md white font-semibold">
      Cost
    </Button> -->

    <InputText 
      type="text"
      placeholder="Cost"
      :model-value="formValue">
    
      <template #trailing-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
          class="h-4 w-4 fill-gray-600">
          <path d="M7 8C6.448 8 6 8.447 6 9c0 .553.448 1 1 1s1-.447 1-1C8 8.447 7.552 8 7 8zM17 8c-.552 0-1 .447-1 1 0 .553.448 1 1 1s1-.447 1-1C18 8.447 17.552 8 17 8z"/><path d="M22,4v10c0,0.552-0.448,1-1,1H3c-0.552,0-1-0.448-1-1V4c0-0.552,0.448-1,1-1h18C21.552,3,22,3.448,22,4z M4,13h16V5H4V13z"/><path d="M20.5 12A1.5 1.5 0 1 0 20.5 15 1.5 1.5 0 1 0 20.5 12zM20.5 3A1.5 1.5 0 1 0 20.5 6 1.5 1.5 0 1 0 20.5 3zM3.5 12A1.5 1.5 0 1 0 3.5 15 1.5 1.5 0 1 0 3.5 12zM3.5 3A1.5 1.5 0 1 0 3.5 6 1.5 1.5 0 1 0 3.5 3zM12 6A3 3 0 1 0 12 12 3 3 0 1 0 12 6zM3.99 17l15.238 3.968c.535.139 1.081-.182 1.22-.716L21.295 17h-2.067l-.235.901c-.449.039-.855.278-1.108.65L11.927 17H3.99z"/>
        </svg>
      </template>

    </InputText>

    <InputText 
      icon="mdi:email"
      type="text"
      placeholder="Email"
      :model-value="formValue">
    
    </InputText>
  </div>

</template>