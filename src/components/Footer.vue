<script setup lang="ts">
const time = new Date()
const year = time.getFullYear()
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4">
    <ul class="flex justify-center items-center gap-5">
      <li>About</li>
      <li>Privacy Policy</li>
      <li>Terms of Service</li>
    </ul>
    <h5>© {{ year }} Taha Zoabi. All rights reserved.</h5>
  </div>
</template>
