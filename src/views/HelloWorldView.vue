<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { useHead } from 'unhead'
import {useRoute} from "vue-router";

const route = useRoute();

useHead({
  title: 'Hello World',
  meta: [
    {
      name: 'description',
      content: 'This is a Hello World page.',
    },
  ],
})
</script>

<template>
  <main>
    <HelloWorld />
  </main>
</template>
