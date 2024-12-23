<script setup lang="ts">
import { SideBar } from '@/components/ui/side-bar'
</script>

<template>
  <div class="flex h-screen w-full my-3">
    <!-- Sidebar -->
    <SideBar />

    <!-- Main Content -->
    <main class="flex-grow p-4">
      <h1 class="text-3xl font-semibold">Welcome to the Homepage</h1>
      <p>This is the main content area.</p>
    </main>
  </div>
</template>
