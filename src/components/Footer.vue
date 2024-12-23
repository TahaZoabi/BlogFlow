<script setup lang="ts">
const time = new Date()
const year = time.getFullYear()
</script>

<template>
  <footer class="flex flex-col items-center justify-center gap-4">
    <h5 class="text-md sm:text-lg">&copy; {{ year }} Taha Zoabi. All Rights Reserved.</h5>
  </footer>
</template>
