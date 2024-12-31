<script setup lang="ts">
import { SearchInput } from '@/components/ui/search_input'
import { Menu } from 'lucide-vue-next'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode()

const navLinks = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' }
]
</script>

<template>
  <section class="flex items-center justify-between gap-4">
    <h3
      class="text-2xl sm:text-3xl md:text-4xl text-primary font-semibold select-none hover:text-primary cursor-pointer"
    >
      <RouterLink to="/"> BlogFlow</RouterLink>
    </h3>

    <!-- Desktop Navigation -->
    <nav class="absolute left-1/2 transform -translate-x-1/2">
      <ul class="md:flex justify-center items-center gap-5 hidden">
        <li v-for="{ text, path } of navLinks" :key="text">
          <RouterLink
            class="text-foreground hover:text-primary transition-colors duration-300"
            :to="path"
          >{{ text }}
          </RouterLink
          >
        </li>
      </ul>
    </nav>

    <!-- Search Input -->
    <SearchInput class="w-1/2 md:w-1/4 ml-auto" />

    <!--    Dark Mode-->
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline">
          <Icon
            icon="radix-icons:moon"
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            icon="radix-icons:sun"
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem @click="mode = 'light'"> Light</DropdownMenuItem>
        <DropdownMenuItem @click="mode = 'dark'"> Dark</DropdownMenuItem>
        <DropdownMenuItem @click="mode = 'auto'"> System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <!-- Mobile Navigation -->
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" class="md:hidden cursor-pointer">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent class="max-w-[400px] md:hidden">
        <!-- DialogTitle -->
        <DialogTitle></DialogTitle>
        <!-- DialogDescription -->
        <DialogDescription></DialogDescription>

        <!-- Navigation Links -->
        <ul class="flex flex-col justify-center items-center gap-5">
          <li v-for="({ text, path }, index) in navLinks" :key="index">
            <RouterLink
              class="text-foreground hover:text-primary transition-colors duration-300"
              :to="path"
            >{{ text }}
            </RouterLink
            >
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  </section>
</template>
