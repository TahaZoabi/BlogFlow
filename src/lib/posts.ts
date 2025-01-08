export interface BlogPostType {
  id: number
  title: string
  created_at: string
  img: string
  intro: string
  sections: { title: string; content: string }[] // For multiple sections
  conclusion: string
  category: string
}

export const BlogPosts: BlogPostType[] = [
  {
    id: 1,
    title: 'Welcome to My Coding Blog',
    created_at: '25/12/2024',
    img: '/web-dev.png',
    intro:
      'Welcome to my blog! 🎉 This is the beginning of an exciting journey where I share my experiences, challenges, and learning as a new programmer diving into the world of Web Development. My goal is to document my progress, write about topics that fascinate me, and hopefully inspire others who are on a similar path.',
    sections: [
      {
        title: 'Why I Started This Blog',
        content:
          'As a student learning programming, I realized that writing about what I learn helps me understand it better. Plus, it’s a great way to connect with others who share the same passion for coding. Whether you\'re just starting or already a seasoned developer, I hope my posts can offer something useful or spark new ideas.'
      },
      {
        title: 'What to Expect',
        content:
          'On this blog, I\'ll be exploring a variety of topics related to web development. I\'ll start with the basics, offering tips and tricks for working with HTML, CSS, and JavaScript. As I continue, I\'ll share my journey with frontend frameworks, particularly Vue.js, highlighting both the challenges and victories along the way. I\'ll also dive into backend development, covering areas like databases, server-side programming, and more. Additionally, I’ll tackle programming fundamentals, exploring key concepts such as algorithms, data structures, and problem-solving strategies.'
      },
      {
        title: 'A Little About Me',
        content:
          'I’m a programming student passionate about building projects and learning as I go. My current focus is on web development, particularly creating dynamic websites. When I’m not coding, you can find me exploring new design trends or reading about tech innovations.'
      }
    ],
    conclusion:
      'Thank you for stopping by and being part of my journey. I’d love to hear from you, so feel free to ask questions. Let’s learn and grow together! Stay tuned for my next post.',
    category: 'Tutorials'
  },
  {
    id: 2,
    title: ' Learning to Code',
    created_at: '26/12/2024',
    img: '/learn-to-code.png',
    intro:
      'Learning to code is a rewarding but challenging journey. In this post, I’ll share some of the struggles I’ve faced as a new programmer and the strategies I’ve used to overcome them. Whether you’re just starting out or looking for ways to push through a tough coding problem, I hope you’ll find something helpful here.',
    sections: [
      {
        title: 'The Initial Hurdles',
        content:
          'When I first started learning to code, everything seemed overwhelming. Concepts like variables, loops, and functions felt like a completely new language. Debugging errors was frustrating, and imposter syndrome crept in every time I compared myself to more experienced developers.'
      },
      {
        title: 'How I Stayed Motivated',
        content:
          'To keep going, I set small, achievable goals for myself. Instead of trying to learn everything at once, I focused on mastering one concept at a time. Celebrating small victories, like solving a simple coding challenge or building a basic project, kept me motivated to tackle the next step.'
      },
      {
        title: 'Resources That Helped Me',
        content:
          'I leaned heavily on online resources like freeCodeCamp, MDN Web Docs, and coding tutorials on YouTube. Joining coding communities on platforms like Reddit and Discord also gave me a space to ask questions and get feedback from others. Practice platforms like LeetCode and Codewars helped me build confidence by solving coding problems at my own pace.'
      },
      {
        title: 'Lessons Learned',
        content:
          'One of the biggest lessons I’ve learned is that it’s okay to make mistakes. Every error message and bug is an opportunity to learn something new. Patience and persistence are key when it comes to coding, and progress often comes in small, incremental steps.'
      }
    ],
    conclusion:
      'Learning to code has been one of the most challenging and rewarding experiences of my life. The key is to embrace the journey, stay curious, and remember that every developer starts somewhere. I hope this post inspires you to keep going, even when it feels tough. Thank you for reading, and I’d love to hear about your own experiences and challenges with coding!',
    category: 'Programming'
  },
  {
    id: 3,
    title: 'The Power of JetBrains IDEs',
    created_at: '28/12/2024',
    img: '/jetbrains.png',
    intro:
      'As a developer, choosing the right Integrated Development Environment (IDE) is crucial to streamline your workflow and improve productivity. In this post, I want to talk about why I prefer JetBrains IDEs over other popular options like Visual Studio Code (VSCode), and how they’ve become my go-to tools for development.',
    sections: [
      {
        title: 'What Makes JetBrains IDEs Stand Out?',
        content:
          'JetBrains offers a suite of powerful IDEs tailored for specific programming languages and technologies. Whether you’re working with Java (IntelliJ IDEA), Python (PyCharm), JavaScript (WebStorm), or even PHP (PhpStorm), JetBrains tools are designed to provide a comprehensive development experience. What sets them apart is their deep integration with programming languages, providing features that go beyond syntax highlighting and code completion.'
      },
      {
        title: 'Advanced Code Assistance and Refactoring',
        content:
          'One of the things I love about JetBrains IDEs is the advanced code assistance features. They offer intelligent code completion, context-aware suggestions, and robust refactoring tools. This makes it much easier to write clean, maintainable code. JetBrains IDEs are constantly analyzing your code and providing feedback in real-time, so you can make informed decisions while coding. For example, if I’m working in JavaScript, WebStorm can suggest optimizations and warn me about potential issues in my code as I type.'
      },
      {
        title: 'Built-in Debugging and Testing Tools',
        content:
          'JetBrains IDEs come with powerful built-in debugging tools that allow you to step through your code, inspect variables, and track down issues quickly. I find this much more efficient than using separate debugging tools or extensions. In addition, they support a variety of testing frameworks, which makes running unit tests or integration tests seamless. The integration with popular testing libraries like Jest (for JavaScript) or PyTest (for Python) ensures that you can test your code without switching tools.'
      },
      {
        title: 'Unified Development Environment',
        content:
          'Unlike VSCode, which relies heavily on extensions to add functionality, JetBrains IDEs come with a unified experience out of the box. Everything you need to write, test, debug, and deploy code is included in one IDE. This means no more hunting down the right extension or dealing with compatibility issues. You get everything you need, integrated seamlessly. Whether it’s version control (Git), databases, or deployment tools, JetBrains IDEs have you covered.'
      }
    ],
    conclusion:
      'Overall, JetBrains IDEs offer an all-in-one, powerful solution for developers who want a more robust and integrated development experience. While VSCode is a fantastic lightweight editor, JetBrains IDEs provide a level of sophistication and functionality that makes them my preferred choice for serious development work. If you’re looking for an IDE that supports deep code analysis, intelligent code assistance, and comprehensive development tools, JetBrains is definitely worth considering.',
    category: 'Technology'
  },
  {
    id: 4,
    title: 'Mastering the Art of Debugging',
    created_at: '08/01/2025',
    img: '/debug.jpeg',
    intro:
      'Debugging is an inevitable part of the coding journey, and while it can be frustrating at times, it’s also one of the most rewarding skills to master. In this post, I’ll share tips and strategies that have helped me become more efficient at troubleshooting code issues.',
    sections: [
      {
        title: 'The Mindset of a Debugger',
        content:
          'Debugging is more than fixing bugs—it’s about problem-solving and critical thinking. A calm and methodical approach is key. Don’t let frustration cloud your judgment; instead, treat each bug as a learning opportunity.'
      },
      {
        title: 'Strategies for Effective Debugging',
        content:
          '- **Read the Error Message**: This might seem obvious, but error messages are often your best clues. Take the time to understand what they’re telling you.\n- **Isolate the Problem**: Use techniques like logging or commenting out parts of your code to pinpoint where the issue lies.\n- **Rubber Duck Debugging**: Explain your code, step by step, to someone else—or even to a rubber duck! This often helps you spot logical errors.'
      },
      {
        title: 'Tools to Make Debugging Easier',
        content:
          'Modern development tools make debugging much simpler. Use browser developer tools, IDE debuggers, or logging libraries to identify and resolve issues effectively. JetBrains IDEs, for example, have excellent debugging features built right in.'
      }
    ],
    conclusion:
      'Debugging is an essential skill for any programmer. By approaching it with the right mindset, utilizing effective strategies, and leveraging the right tools, you can turn it into an opportunity to grow and improve as a developer. Embrace the process, and happy debugging!',
    category: 'Programming'
  }

]
