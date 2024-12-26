<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { TriangleAlert } from 'lucide-vue-next'
</script>

<template>
  <section class="flex flex-col gap-4 justify-center items-center h-screen">
    <div><TriangleAlert class="size-[150px] text-yellow-400" /></div>
    <h2 class="text-4xl">404 Not Found</h2>
    <p class="text-muted-foreground text-xl">this page does not exist</p>
    <Button><RouterLink to="/">Go Back</RouterLink></Button>
  </section>
</template>

<style scoped></style>
