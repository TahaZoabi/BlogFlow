<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
</script>

<template>
  <div class="hidden md:block w-1/4">
    <!-- Sidebar -->
    <div class="flex flex-col h-full p-4 gap-20">
      <div>
        <h5 class="text-xl mb-2">Categories:</h5>
        <ul class="flex flex-col gap-3 p-2 justify-center">
          <li>Tech</li>
          <li>Tools</li>
          <li>Tutorials</li>
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
          <li class="hover:text-primary">
            <a href="mailto:range.dev7@gmail.com"><Mail /></a>
          </li>
          <li class="hover:text-primary"><Github /></li>
          <li class="hover:text-primary"><Linkedin /></li>
        </ul>
      </div>
    </div>
  </div>
</template>
