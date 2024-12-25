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
]
