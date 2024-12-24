<script setup lang="ts">
import { SideBar } from '@/components/ui/side-bar'
import MobileSideBar from '@/components/MobileSideBar.vue'
import BlogPost from '@/components/BlogPost.vue'
</script>

<template>
  <div class="flex flex-col md:flex-row min-h-screen w-full my-3">
    <!-- Sidebar -->
    <SideBar class="hidden md:block" />
    <MobileSideBar />
    <!-- Main Content -->
    <main class="flex-grow p-4">
      <h1 class="text-2xl font-semibold">Welcome to the Homepage</h1>
      <p>This is the main content area.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 my-4 gap-8">
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </main>
  </div>
</template>
