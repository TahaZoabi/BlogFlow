// src/store.ts
import { ref, computed } from 'vue'
import { BlogPosts } from '@/lib/posts'
const categories = ['Tutorials', 'Technology', 'Programming']
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

const searchQuery = ref('') // Holds the search input
const isDropdownVisible = ref(false) // Controls visibility of the dropdown

// Filter posts based on the search query
const filteredResults = computed(() => {
  if (!searchQuery.value.trim()) return [] // If no input, return empty
  return BlogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

// Show or hide the dropdown based on input focus or blur
const handleFocus = () => (isDropdownVisible.value = true)
const handleBlur = () => {
  // Delay to ensure a click on the dropdown doesn't immediately hide it
  setTimeout(() => (isDropdownVisible.value = false), 200)
}

export default {
  categories,
  selectedCategories,
  filteredPosts,
  toggleCategory,
  filteredResults,
  handleBlur,
  handleFocus,
  searchQuery,
  isDropdownVisible,
}
