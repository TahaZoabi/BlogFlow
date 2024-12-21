<script setup lang="ts">
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
  <Navbar />
  <div
    class="flex h-screen justify-center items-center flex-col gap-2 bg-background max-w-[1100px] mx-auto"
  >
    <h1 class="text-primary text-4xl font-semibold">Hello World</h1>
    <Button class="bg-secondary hover:bg-secondary-dark">Welcome</Button>
  </div>
  <Footer />
</template>
