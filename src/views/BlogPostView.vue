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
    <h2 class="text-xl font-semibold text-primary">{{ post.title }}</h2>
    <p class="text-sm text-muted-foreground">Posted on {{ post.created_at }}</p>
    <img :src="post.img" :alt="post.title" class="w-1/3" />
    <p>{{ post.description }}</p>
  </div>
  <div v-else>
    <p>Post not found.</p>
  </div>
</template>
