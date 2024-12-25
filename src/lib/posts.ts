export interface BlogPostType {
  id: number
  title: string
  created_at: string
  img: string
  description: string
}

export const BlogPosts: BlogPostType[] = [
  {
    id: 1,
    title: ' My Journey into Web Development',
    created_at: new Date().toLocaleDateString('en-GB'),
    img: '../public/web-dev.png',
    description:
      'Welcome to My Blog: A Journey into Web Development\n' +
      '\n' +
      'Hello and welcome to my blog! 🎉\n' +
      '\n' +
      'This is the beginning of an exciting journey where I share my experiences, challenges, and learning as a new programmer diving into the world of **web development**. My goal is to create a space where I can document my progress, write about topics that fascinate me, and hopefully inspire others who are on a similar path.\n' +
      '\n' +
      'Why I Started This Blog\n' +
      "As a student learning programming, I realized that writing about what I learn helps me understand it better. Plus, it’s a great way to connect with others who share the same passion for coding. Whether you're just starting or already a seasoned developer, I hope my posts can offer something useful or spark new ideas.\n" +
      '\n' +
      'What to Expect\n' +
      "Here are some of the categories I'll explore on this blog:\n" +
      '- **Web Development Basics**: Tips and tricks for HTML, CSS, and JavaScript.\n' +
      '- **Frontend Frameworks**: My journey with Vue.js, including challenges and victories.\n' +
      '- **Backend Development**: Diving into databases, server-side programming, and more.\n' +
      '- **Programming Fundamentals**: Concepts in algorithms, data structures, and problem-solving.\n' +
      '\n' +
      'A Little About Me\n' +
      'I’m a programming student passionate about building projects and learning as I go. My current focus is on web development, particularly creating dynamic websites using **Vue.js**. When I’m not coding, you can find me exploring new design trends or reading about tech innovations.\n' +
      '\n' +
      'Join Me on This Journey\n' +
      'Thank you for stopping by and being part of my journey. I’d love to hear from you, so feel free to leave a comment, share your thoughts, or ask questions. Let’s learn and grow together!\n' +
      '\n' +
      'Stay tuned for my next post, where I’ll dive into [tease the next topic, e.g., “The Basics of Setting Up a Blog Using Vue.js”].\n' +
      '\n' +
      'Cheers,  \n' +
      '[Your Name]\n',
  },
]
