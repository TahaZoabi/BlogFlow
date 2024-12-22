<script setup lang="ts">
import { SearchInput } from '@/components/ui/search_input'
const navLinks = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
]
</script>

<template>
  <div class="relative flex items-center">
    <h3
      class="text-2xl sm:text-3xl md:text-4xl text-primary font-semibold select-none hover:text-primary cursor-pointer"
    >
      BlogFlow
    </h3>
    <nav class="absolute left-1/2 transform -translate-x-1/2">
      <ul class="md:flex justify-center items-center gap-5 hidden">
        <li v-for="({ text, path }, index) in navLinks" :key="index">
          <RouterLink :to="path">{{ text }}</RouterLink>
        </li>
      </ul>
    </nav>
    <SearchInput class="w-1/3 md:w-1/4 ml-auto" />
  </div>
</template>
