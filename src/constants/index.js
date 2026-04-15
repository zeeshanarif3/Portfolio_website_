import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  vuejs,
  sharpener,
  handsInTechnology,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Vue JS',
    icon: vuejs,
  },
];

const experiences = [
  {
    title: 'Node.js Developer',
    company_name: 'xyz',
    icon: sharpener,
    iconBg: '#383E56',
    date: 'Sept 2018 - April 2022',
    points: [
      'Developed and maintained robust, high-performance web applications using Node.js and related technologies.',
      'Designed RESTful APIs and integrated third-party services to enhance application functionality.',
      'Utilized Express.js for creating server-side logic and handling HTTP requests and responses.',
      'Implemented real-time features using WebSocket and Socket.IO, enhancing user interaction and experience.',
      'Used MongoDB and other NoSQL databases for efficient data storage and retrieval.',
      'Deployed applications using cloud platforms such as AWS, Google Cloud, and Azure.',
      'Participated in code reviews and provided constructive feedback to improve code quality and maintain best practices.',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    company_name: 'abcd',
    icon: handsInTechnology,
    iconBg: '#E6DEDD',
    date: 'May 2022 - jan 2026',
    points: [
      'Designed and developed responsive, user-friendly web applications using HTML, CSS, and JavaScript.',
      'Implemented client-side scripting and server-side programming to create dynamic, interactive web pages.',
      'Utilized modern JavaScript frameworks and libraries such as React, Next, and Vue.js to build scalable front-end solutions.',
      'Developed and maintained back-end services using Node.js, Express.js, and other server-side technologies.',
      'Collaborated with UX/UI designers to translate design prototypes into functional, visually appealing web pages.',
      'Managed databases using MySQL, PostgreSQL, and MongoDB for efficient data storage and retrieval.',
      'Employed version control systems like Git for code collaboration and management.',
      'Conducted code reviews and implemented best practices to maintain code quality and consistency.',
      'Troubleshooted and resolved front-end and back-end issues to ensure smooth operation of web applications.',
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Gaming League',
    description:
      'It is a ompetitive e-sports platform that connects tournament organizers, players, and spectators. Founded by a team of gamers who believe in providing Indian players with a stage to launch their gaming careers, IGL offers tournaments across various games and platforms.',
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: project1,
    view: '',
  },

  {
    name: 'GameGods',
    description:
      'GameGods is a Web3-based social networking platform dedicated to gamers and the gaming community. Developed by Avalon Tech Inc., a U.S.-based tech startup, GameGods aims to create a global social network for gamers through its application and website. Game Gods is merely a gaming and technology platform, and you are solely and entirely responsible for the legal and tax compliance of all transactions.',
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: project2,
    view: '',
  },
  {
    name: 'Amity University',
    description:
      "ISBM University's modern and vibrant campus is designed to facilitate an engaging learning environment. The institution also emphasizes global exposure through international partnerships, aiming to provide students with diverse perspectives and a broader educational experience. Our university offers a variety of courses to meet the needs of every student. From Business to Biology, and from Psychology to Politics.",
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: project3,
    view: '',
  },
  // {
  //   name: '',
  //   description: '',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'stripe',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: ,
  //   view: '',
  // },
  {
    name: "B2B platform",
    description:
      "Platform is designed to reduce operational costs, enhance market reach, and provide real-time business analytics, empowering businesses to make informed decisions and foster growth within the ICT industry.",
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: project4,
    view: '',
  },
  {
    name: 'Online Insurance Portal Dubai',
    description:
      'The website is an online insurance portal based in Dubai, offering a range of insurance services to its users. The platform provides various types of insurance, including motor and yacht insurance, allowing users to obtain coverage for their vehicles and vessels.',
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: project5,
    view: '',
  },
  {
    name: 'E-Commerce',
    description:
      'It leverages modern web technologies Next.js and Tailwind CSS to deliver a seamless shopping experience. The site is optimized for speed, SEO, and dynamic content rendering, making it an excellent choice for online stores. It also supports integrations with various commerce providers, offering flexibility and scalability for businesses.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Stripe',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: project6,
    view: '',
  },
];

export { services, technologies, experiences, testimonials, projects };
