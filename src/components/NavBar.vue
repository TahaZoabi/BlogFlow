<script setup lang="ts">
import { SearchInput } from '@/components/ui/search_input'
import { Menu, CircleX } from 'lucide-vue-next'
import { ref } from 'vue'
const navLinks = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
]
const isOpen = ref(false)

const toggleSheet = () => {
  isOpen.value = !isOpen.value
  console.log('i clicked it!!!!', isOpen.value)
}
</script>

<template>
  <div class="relative flex items-center gap-4">
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
    <SearchInput class="w-1/2 md:w-1/3 lg:w-1/4 ml-auto" />
    <Menu class="md:hidden cursor-pointer" @click="toggleSheet" />
    <div
      class="md:hidden flex flex-col justify-center items-center mt-10 md:hidden w-1/4 bg-green-500 p-3"
    >
      <Sheet :isOpen="isOpen">
        <SheetClose as-child>
          <CircleX class="absolute top-2 right-2 cursor-pointer" @click="toggleSheet" />
        </SheetClose>

        <SheetContent class="max-w-[400px] md:hidden">
          <ul class="flex flex-col justify-center items-center gap-5 md:hidden">
            <li v-for="({ text, path }, index) in navLinks" :key="index">
              <RouterLink :to="path">{{ text }}</RouterLink>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</template>
