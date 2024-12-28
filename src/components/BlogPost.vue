<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { type BlogPostType } from '@/lib/posts.ts'
import type { PropType } from 'vue'

defineProps({
  post: {
    type: Object as PropType<BlogPostType>,
    required: true,
  },
})
</script>

<template>
  <Card class="max-w-[350px] shadow-md rounded-lg overflow-hidden flex flex-col h-full">
    <!-- Card Header with Title -->
    <CardHeader class="p-3 border-b">
      <CardTitle class="text-xl font-semibold text-primary">{{ post.title }}</CardTitle>
      <CardDescription class="text-sm">Posted on {{ post.created_at }}</CardDescription>
    </CardHeader>

    <!-- Card Content with Image and Description -->
    <CardContent class="p-4 flex-1">
      <div class="mb-4">
        <!-- Post Image -->
        <img
          :src="post.img"
          alt="Blog Post Image"
          class="w-[85%] h-48 object-cover rounded-lg mx-auto"
        />
      </div>
      <div>
        <!-- Short Description -->
        <p class="text-sm">
          {{ post.intro.slice(0, 150) + '...' }}
        </p>
      </div>
      <!-- Category Badge -->
      <div class="mt-4">
        <span class="bg-primary text-xs font-medium px-3 py-1 rounded-full shadow-sm">
          {{ post.category }}
        </span>
      </div>
    </CardContent>

    <!-- Card Footer with Read More Button -->
    <CardFooter class="p-4">
      <Button class="w-full">
        <RouterLink :to="`/posts/${post.id}`">Read More</RouterLink>
      </Button>
    </CardFooter>
  </Card>
</template>
