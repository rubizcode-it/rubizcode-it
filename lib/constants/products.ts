export interface Product {
  name: string;
  description: string;
  color: string;
  image: string;
  tryNowLink: string;
}

export const products = [
    {
      name: 'Daily Topper',
      description: 'Get all the news you need, in one place. Daily Topper, available on Android and iOS, delivers concise, essential updates from across the globe, making it easy for everyone to stay informed. Additionally, job seekers and BCS aspirants can enhance their preparation with specialized exam features, allowing them to practice current affairs and general knowledge through daily quizzes.',
      color: 'bg-red-500',
      image: '/images/products/daily-topper.svg',
      tryNowLink: 'https://dailytopper.com'
    },
    {
      name: 'Testiphy',
      description: 'Revolutionize your exam preparation with Testiphy, the AI-powered platform that brings OMR scanning technology right to your handset. Experience a seamless digital OMR system alongside a variety of gamified and interactive exams designed to help students practice and prepare effectively from home. Trusted by EdTech platforms, Testiphy also provides robust exam support, with detailed performance analytics and visuals that make learning engaging and insightful.',
      color: 'bg-purple-500',
      image: '/images/products/testiphy.svg',
      tryNowLink: 'https://testiphy.com'
    },
    {
      name: 'Taalaash',
      description: 'Say goodbye to endless page-flipping with Taalaash, the ultimate academic search engine. Designed for students, Taalaash quickly finds references and solutions from a vast collection of academic books in just seconds. Simply type in your question or keywords, and it will pinpoint the exact pages where your answers lie, making exam preparation and studying more efficient and stress-free.',
      color: 'bg-green-500',
      image: '/images/products/taalaash.svg',
      tryNowLink: 'https://taalaash.com'
    },
    {
      name: 'TopperOn',
      description: 'Simplify online learning with TopperOn, the social media platform designed for students and guardians. Stay connected with teachers, friends, and guardians—all in one app without the distractions. Discover nearby tutors, explore a diverse course library, and track performance with organized, student-friendly statistics. Plus, turn your news feed into an educational experience, making learning collaborative, engaging, and hassle-free.',
      color: 'bg-blue-500',
      image: '/images/products/topperon.svg',
      tryNowLink: 'https://topperon.com'
    }
  ] as const

// If you haven't already defined it, add this to your types.ts file:
export interface Product {
  name: string;
  description: string;
  image: string;
  color: string;
} 