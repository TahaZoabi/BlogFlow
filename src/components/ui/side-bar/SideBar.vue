<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { Checkbox } from '@/components/ui/checkbox'
const categories = ['Tech', 'Tools', 'Tutorials']
</script>

<template>
  <div class="md:block w-1/4">
    <!-- Sidebar -->
    <div class="flex flex-col h-full p-4 gap-20">
      <div>
        <h5 class="text-xl mb-2">Categories:</h5>
        <ul class="flex flex-col gap-3 p-2 justify-center">
          <li v-for="category in categories" :key="category">
            <div class="flex items-center space-x-2">
              <Checkbox :id="category" />
              <Label
                :for="category"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {{ category }}
              </Label>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h5 class="text-xl mb-2">Recent Posts:</h5>
        <ul class="flex flex-col gap-3 p-2 justify-center">
          <li>Title One</li>
          <li>Title Two</li>
          <li>Title Three</li>
        </ul>
      </div>
      <div>
        <h5 class="text-xl mb-2">Social Media:</h5>
        <ul class="flex gap-3 p-2 justify-start items-center">
          <li class="hover:text-primary cursor-pointer">
            <a href="mailto:range.dev7@gmail.com"><Mail /></a>
          </li>
          <li class="hover:text-primary cursor-pointer">
            <a target="_blank" href="https://github.com/TahaZoabi"><Github /></a>
          </li>
          <li class="hover:text-primary cursor-pointer">
            <a target="_blank" href="https://www.linkedin.com/in/tahazoabi/"><Linkedin /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
