<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
  <div class="bg-background mx-auto max-w-[1100px] p-2">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
