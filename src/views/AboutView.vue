<script setup lang="ts">
const knowledge = [
  'JavaScript',
  'TypeScript',
  'Java',
  'C Sharp',
  'Python',
  'HTML & CSS',
  'Node JS',
  'Express JS',
  'React JS',
  'Vue JS',
  'Git & GitHub',
  'SQL (PostgresSQL , MySQL)',
  'NoSQL (MongoDB)',
  'ORM (Prisma)',
]
</script>

<template>
  <div class="max-w-4xl mx-auto p-8">
    <!-- Introduction -->
    <section class="mb-8">
      <h1 class="text-3xl font-semibold text-muted-foreground">About Me</h1>
      <p class="mt-4 text-lg">
        Hi, I'm Taha Zoabi, a 25-year-old Software Practical Engineering student at the Technion
        Israel Institute of Technology. I'm passionate about software development and eager to share
        my journey and knowledge through blog posts. Currently in my second year of studies, I'm
        working to build a solid foundation in software engineering.
      </p>
    </section>

    <!-- Mission Statement -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-muted-foreground">My Mission</h2>
      <p class="mt-4 text-lg">
        I believe that technology has the power to shape the future, and I'm excited to share my
        experiences, challenges, and learnings along the way. This website serves as a platform
        where I write blog posts, share coding tutorials, and document my progress as a software
        developer.
      </p>
    </section>

    <!-- My Story -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-muted-foreground">My Story</h2>
      <p class="mt-4 text-lg">
        I started coding out of curiosity, and it quickly became my passion. I began learning
        programming through online resources, and now I'm pursuing a degree in software engineering.
        As a beginner, I’m focused on expanding my knowledge and growing my skills in the field.
        Through this blog, I aim to share my experiences as I progress in my journey to becoming a
        software developer.
      </p>
    </section>

    <!-- Familiarity & Knowledge -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-muted-foreground">Familiarity & Knowledge</h2>
      <ul class="mt-4 text-lg list-disc pl-5">
        <li v-for="(skill, index) in knowledge" :key="index">
          {{ skill }}
        </li>
      </ul>
    </section>

    <!-- Portfolio Link -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-muted-foreground">My Portfolio</h2>
      <p class="mt-4 text-lg">
        You can check out my portfolio to see some of the projects I’ve worked on so far.
        <a href="https://TahaZoabi.com" class="text-primary" target="_blank">View my Portfolio</a>.
      </p>
    </section>

    <!-- Call-to-Action -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-muted-foreground">Let’s Connect</h2>
      <p class="mt-4 text-lg">
        If you have any questions, would like to collaborate, or want to chat about software
        development, feel free to reach out! You can contact me through my
        <RouterLink class="text-primary" to="/contact">Contact Page</RouterLink>.
      </p>
    </section>
  </div>
</template>
