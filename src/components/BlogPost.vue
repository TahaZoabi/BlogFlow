<script setup lang="ts">
import { Button } from '@/components/ui/button'
const tags = ['Tech', 'Tools', 'Categories']
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>

<template>
  <Card class="max-w-[350px] shadow-md rounded-lg overflow-hidden">
    <!-- Card Header with Title -->
    <CardHeader class="p-3 border-b">
      <CardTitle class="text-xl font-semibold text-primary">Post Title</CardTitle>
      <CardDescription class="text-sm">Posted on January 1, 2024</CardDescription>
    </CardHeader>

    <!-- Card Content with Image and Description -->
    <CardContent class="p-4">
      <div class="mb-4">
        <!-- Post Image -->
        <img
          src="../../public/blog1.png"
          alt="Blog Post Image"
          class="w-[85%] h-auto rounded-lg mx-auto"
        />
      </div>
      <div>
        <!-- Short Description -->
        <p class="text-sm">
          This is a short description of the blog post. It provides a brief overview of the content,
          enticing the reader to click through and read more.
        </p>
      </div>
    </CardContent>

    <!-- Card Footer with Read More Button -->
    <CardFooter class="p-4">
      <Button class="w-full">Read More</Button>
    </CardFooter>
  </Card>
</template>
