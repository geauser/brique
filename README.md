# Brique

## Installation

```sh
yarn add @geauser/brique -S
```

## Usage

Import the styles for the components:

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import '@geauser/brique/css';
import './styles.scss';

createApp(App).mount('#app');
```

```vue
// App.vue
<script setup lang="ts">
import { Button } from '@geauser/brique';
</script>
<template>
  <Button>My Button</Button>
</template>
```
