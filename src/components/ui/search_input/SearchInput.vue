<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next'
import store from '@/store/store.ts'

const { searchQuery, handleFocus, handleBlur, isDropdownVisible, filteredResults } = store
</script>

<template>
  <div class="relative w-full max-w-sm items-center">
    <Input
      id="search"
      type="text"
      placeholder="Search Blogs..."
      class="pl-10"
      v-model="searchQuery"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-5 text-secondary" />
    </span>

    <!-- Dropdown for Search Results -->
    <div
      v-if="isDropdownVisible && searchQuery"
      class="absolute top-full left-0 w-full bg-background rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto"
    >
      <ul>
        <!-- Show filtered results -->
        <li v-for="result in filteredResults" :key="result.id" class="p-3 cursor-pointer">
          <RouterLink :to="`/posts/${result.id}`" class="block">
            {{ result.title }}
          </RouterLink>
        </li>

        <!-- No results found -->
        <li v-if="filteredResults.length === 0" class="p-3 text-muted-foreground">
          No blogs found.
        </li>
      </ul>
    </div>
  </div>
</template>
