<script setup lang="ts">
const time = new Date()
const year = time.getFullYear()
</script>

<template>
  <Footer class="flex flex-col items-center justify-center gap-4">
    <h5>© {{ year }} Taha Zoabi. All rights reserved.</h5>
  </Footer>
</template>
