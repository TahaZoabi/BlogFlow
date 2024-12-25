<script setup lang="ts">
import { SideBar } from '@/components/ui/side-bar'
import MobileSideBar from '@/components/MobileSideBar.vue'
import { BlogPosts } from '../lib/posts.ts'
import BlogPost from '@/components/BlogPost.vue'
</script>

<template>
  <div class="flex flex-col md:flex-row min-h-screen w-full my-3">
    <!-- Sidebar -->
    <SideBar class="hidden md:block" />
    <MobileSideBar />
    <!-- Main Content -->
    <main class="flex-grow p-4">
      <h1 class="text-2xl font-semibold">Discover the Latest Stories</h1>
      <p class="text-sm text-muted-foreground">
        Welcome to our blog! We share thoughtful posts on Web Development, including everything from
        expert advice to personal stories. Check out our latest articles below!
      </p>
      <div
        v-for="post in BlogPosts"
        :key="post.id"
        class="grid grid-cols-1 md:grid-cols-2 my-4 gap-8"
      >
        <BlogPost :post="post" />
      </div>
    </main>
  </div>
</template>
