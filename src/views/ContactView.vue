<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
</script>

<template>
  <section class="max-w-[800px] mx-auto p-6 shadow-lg rounded-lg my-12">
    <!-- Contact Title -->
    <h2 class="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Get in Touch</h2>

    <!-- Contact Form -->
    <form>
      <div class="grid gap-6 md:grid-cols-2">
        <!-- Name Field -->
        <div class="flex flex-col gap-4">
          <Label for="name">Your Name</Label>
          <Input id="name" type="text" placeholder="Enter your name" />
        </div>

        <!-- Email Field -->
        <div class="flex flex-col gap-4">
          <Label for="email">Your Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
      </div>

      <!-- Message Field -->
      <div class="mt-6 flex flex-col gap-4">
        <Label for="message">Your Message</Label>
        <Textarea id="message" placeholder="Type your message here..." rows="8" />
      </div>

      <!-- Submit Button -->
      <div class="mt-6 text-center">
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  </section>
</template>
