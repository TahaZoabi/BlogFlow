export interface BlogPostType {
  id: number
  title: string
  created_at: string
  img: string
  intro: string
  sections: { title: string; content: string }[] // For multiple sections
  conclusion: string
}

export const BlogPosts: BlogPostType[] = [
  {
    id: 1,
    title: 'Welcome to My Coding Blog',
    created_at: new Date().toLocaleDateString('en-GB'),
    img: '../public/web-dev.png',
    intro:
      'Welcome to my blog! 🎉 This is the beginning of an exciting journey where I share my experiences, challenges, and learning as a new programmer diving into the world of Web Development. My goal is to document my progress, write about topics that fascinate me, and hopefully inspire others who are on a similar path.',
    sections: [
      {
        title: 'Why I Started This Blog',
        content:
          "As a student learning programming, I realized that writing about what I learn helps me understand it better. Plus, it’s a great way to connect with others who share the same passion for coding. Whether you're just starting or already a seasoned developer, I hope my posts can offer something useful or spark new ideas.",
      },
      {
        title: 'What to Expect',
        content:
          "On this blog, I'll be exploring a variety of topics related to web development. I'll start with the basics, offering tips and tricks for working with HTML, CSS, and JavaScript. As I continue, I'll share my journey with frontend frameworks, particularly Vue.js, highlighting both the challenges and victories along the way. I'll also dive into backend development, covering areas like databases, server-side programming, and more. Additionally, I’ll tackle programming fundamentals, exploring key concepts such as algorithms, data structures, and problem-solving strategies.",
      },
      {
        title: 'A Little About Me',
        content:
          'I’m a programming student passionate about building projects and learning as I go. My current focus is on web development, particularly creating dynamic websites. When I’m not coding, you can find me exploring new design trends or reading about tech innovations.',
      },
    ],
    conclusion:
      'Thank you for stopping by and being part of my journey. I’d love to hear from you, so feel free to ask questions. Let’s learn and grow together! Stay tuned for my next post.',
  },
  {
    id: 2,
    title: 'Overcoming Challenges in Learning to Code',
    created_at: new Date().toLocaleDateString('en-GB'),
    img: '../public/learn-to-code.webp',
    intro:
      'Learning to code is a rewarding but challenging journey. In this post, I’ll share some of the struggles I’ve faced as a new programmer and the strategies I’ve used to overcome them. Whether you’re just starting out or looking for ways to push through a tough coding problem, I hope you’ll find something helpful here.',
    sections: [
      {
        title: 'The Initial Hurdles',
        content:
          'When I first started learning to code, everything seemed overwhelming. Concepts like variables, loops, and functions felt like a completely new language. Debugging errors was frustrating, and imposter syndrome crept in every time I compared myself to more experienced developers.',
      },
      {
        title: 'How I Stayed Motivated',
        content:
          'To keep going, I set small, achievable goals for myself. Instead of trying to learn everything at once, I focused on mastering one concept at a time. Celebrating small victories, like solving a simple coding challenge or building a basic project, kept me motivated to tackle the next step.',
      },
      {
        title: 'Resources That Helped Me',
        content:
          'I leaned heavily on online resources like freeCodeCamp, MDN Web Docs, and coding tutorials on YouTube. Joining coding communities on platforms like Reddit and Discord also gave me a space to ask questions and get feedback from others. Practice platforms like LeetCode and Codewars helped me build confidence by solving coding problems at my own pace.',
      },
      {
        title: 'Lessons Learned',
        content:
          'One of the biggest lessons I’ve learned is that it’s okay to make mistakes. Every error message and bug is an opportunity to learn something new. Patience and persistence are key when it comes to coding, and progress often comes in small, incremental steps.',
      },
    ],
    conclusion:
      'Learning to code has been one of the most challenging and rewarding experiences of my life. The key is to embrace the journey, stay curious, and remember that every developer starts somewhere. I hope this post inspires you to keep going, even when it feels tough. Thank you for reading, and I’d love to hear about your own experiences and challenges with coding!',
  },
]
