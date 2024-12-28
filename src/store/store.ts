// src/store.ts
import { ref, computed } from 'vue'
import { BlogPosts } from '@/lib/posts'
const categories = ['Tutorials', 'Tech', 'Programming']
const selectedCategories = ref<string[]>([]) // Shared selected categories
const posts = ref(BlogPosts) // All posts

// Computed property to filter posts
const filteredPosts = computed(() => {
  if (selectedCategories.value.length === 0) {
    return posts.value // Show all posts if no categories are selected
  }
  return posts.value.filter((post) => selectedCategories.value.includes(post.category))
})

// Function to toggle category
const toggleCategory = (category: string) => {
  if (selectedCategories.value.includes(category)) {
    selectedCategories.value = selectedCategories.value.filter((c) => c !== category) // Remove if selected
  } else {
    selectedCategories.value.push(category)
  }
}

export default {
  categories,
  selectedCategories,
  filteredPosts,
  toggleCategory,
}
