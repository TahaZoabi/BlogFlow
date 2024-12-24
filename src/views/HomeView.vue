<script setup lang="ts">
import { SideBar } from '@/components/ui/side-bar'
import MobileSideBar from '@/components/MobileSideBar.vue'
</script>

<template>
  <div class="flex flex-col md:flex-row h-screen w-full my-3">
    <!-- Sidebar -->
    <SideBar class="hidden md:block" />
    <MobileSideBar />
    <!-- Main Content -->
    <main class="flex-grow p-4">
      <h1 class="text-2xl font-semibold">Welcome to the Homepage</h1>
      <p>This is the main content area.</p>
    </main>
  </div>
</template>
