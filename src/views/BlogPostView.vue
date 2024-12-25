<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { BlogPosts } from '@/lib/posts'

import { type BlogPostType } from '@/lib/posts.ts'

// Use route hook to access the route params
const route = useRoute()

// Define a reactive post variable
const post = ref<BlogPostType | null>(null) // Type the post as BlogPostType or null

// Fetch the post based on the route parameter (id)
onMounted(() => {
  const postId = route.params.id as string // Get the post ID from the route
  post.value = BlogPosts.find((p) => String(p.id) === postId) || null // Find the post with matching ID or null if not found
})
</script>

<template>
  <div v-if="post" class="flex flex-col gap-5 items-center justify-center p-4">
    <!-- Title and Date -->
    <h2 class="text-4xl font-bold text-primary">{{ post.title }}</h2>
    <p class="text-sm text-muted-foreground mb-4">Posted on {{ post.created_at }}</p>

    <!-- Featured Image -->
    <img :src="post.img" alt="Blog Image" class="w-1/3 rounded mb-6" />

    <!-- Intro -->
    <div>
      <h3 class="text-2xl font-semibold mb-3 text-muted-foreground">Introduction</h3>
      <p class="mb-6">{{ post.intro }}</p>
    </div>

    <!-- Sections -->
    <div v-for="(section, index) in post.sections" :key="index" class="mb-6">
      <h3 class="text-2xl font-semibold mb-3 text-muted-foreground">{{ section.title }}</h3>
      <p>{{ section.content }}</p>
    </div>

    <!-- Conclusion -->
    <div>
      <h3 class="text-2xl font-semibold mb-3 text-muted-foreground">Conclusion</h3>
      <p class="mt-6">{{ post.conclusion }}</p>
    </div>
  </div>
  <div v-else>
    <p>Post not found.</p>
  </div>
</template>
