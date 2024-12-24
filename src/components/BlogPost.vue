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
</script>

<template>
  <Card class="max-w-[300px] shadow-md rounded-lg overflow-hidden">
    <!-- Card Header with Title -->
    <CardHeader class="p-4 border-b">
      <CardTitle class="text-xl font-semibold text-primary">Post Title</CardTitle>
      <CardDescription class="text-sm">Posted on January 1, 2024</CardDescription>
    </CardHeader>

    <!-- Card Content with Image and Description -->
    <CardContent class="p-4">
      <div class="mb-4">
        <!-- Post Image -->
        <img src="../../public/blog1.png" alt="Blog Post Image" class="w-full h-auto rounded-lg" />
      </div>
      <div>
        <!-- Short Description -->
        <p class="text-sm mb-4">
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
