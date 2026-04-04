export const personal = {
  name: 'Omnia Khaled',
  title: 'Frontend Developer',
  email: 'omniakhaled418@gmail.com',
  phone: '01018445662',
  location: 'Egypt',
  linkedin: 'https://www.linkedin.com/in/omnia-khaled-568774171/',
  github: 'https://github.com/OmnikKhaled2121',
}

export const profile =
  'Frontend Developer with 4 years of experience building scalable, high-performance web applications in enterprise and financial services environments. Skilled in React, Next.js, TypeScript, and modern frontend architecture, with a strong background in performance optimization, automated testing, and Agile methodologies. Passionate about delivering seamless user experiences and driving digital transformation.'

export const jobs = [
  {
    company: 'Ejada | Al Rajhi Capital',
    companyUrl: 'https://www.ejada.com/',
    role: 'Frontend Developer – React.js',
    period: 'Aug 2024 – Present',
    location: 'Egypt',
    description:
      'Ejada is a leading technology solutions provider in the MENA region, serving AlRajhi Capital\'s digital financial platforms.',
    project: {
      name: 'SuperWeb (React.js)',
      url: 'https://web.alrajhi-capital.sa/login-oms',
      summary:
        'A comprehensive digital investment platform by AlRajhi Capital, built to deliver end-to-end financial and brokerage services. SuperWeb unifies trading tools, portfolio management, and multiple financial products — from Saudi and international equity markets to Sukuk — into a single, seamless experience that simplifies investing for every user.',
    },
    points: [
      'Contributed to the frontend development and release of a major digital transformation feature for financial services.',
      'Implemented digital onboarding, real-time market data, and cross-market portfolio management across Saudi and international markets supporting global trading, IPO subscriptions, and real-time portfolio tracking.',
      'Initiated a shared Azure Artifacts package to centralize reusable components across SuperWeb and SuperApp.',
      'Optimized performance using memoization, lazy loading, and code splitting, improving Lighthouse score from ~40% to ~75%.',
      'Expanded automated testing coverage using Cypress and React Testing Library.',
      'Led peer code reviews and mentored team members on React best practices and scalable architecture.',
    ],
  },
  {
    company: 'Huawei',
    role: 'Software Engineer',
    period: 'Sep 2022 – Jul 2024',
    location: 'Egypt',
    description:
      'Huawei is a global leader in ICT infrastructure and smart devices.',
    project: {
      name: 'NOC Web Applications (React.js)',
      summary: '',
    },
    points: [
      'Developed 20+ Network Operations Center web applications using React.js, JavaScript, HTML, and CSS.',
      'Built and customized cloud-based web service components for network management.',
      'Integrated GIS mapping capabilities using OpenLayers for network topology visualization.',
      'Implemented backend services in Node.js, applying OOP and data structures to improve performance.',
      'Championed OutSystems low-code development to accelerate delivery of internal tools.',
      'Resolved live production incidents and security vulnerabilities.',
      'Collaborated with stakeholders to gather requirements and deliver solutions to fit business needs.',
    ],
  },
]

export const projects = [
  {
    title: 'QLAB',
    subtitle: 'Islamic Educational Platform',
    points: [
      'Developed a full-stack platform comprising an admin dashboard and a public-facing website.',
      'Built the admin dashboard using React, ShadCN UI, React Hook Form, Zod, Redux Toolkit (RTK Query), and Tailwind CSS.',
      'Implemented a centralized CMS enabling administrators to dynamically manage website content.',
      'Developed the public website using Next.js with server-side rendering (SSR) for SEO optimization.',
    ],
    tech: ['React', 'Next.js', 'ShadCN UI', 'RTK Query', 'Tailwind CSS', 'Zod'],
    github: '',
    live: 'https://qalb-institute.com/en/home',
  },
  {
    title: 'ESTKDAM',
    subtitle: 'Recruitment Platform (Saudi Arabia)',
    points: [
      'Developed responsive user interfaces with React.js and Material UI.',
      'Integrated frontend with PHP Laravel backend via RESTful APIs.',
      'Implemented unit and integration testing, and validated APIs using Postman.',
    ],
    tech: ['React', 'Material UI', 'Laravel', 'REST APIs', 'Postman'],
    github: '',
    live: 'https://omnikkhaled2121.github.io/Estkdam/?/EstkdamRequest',
  },
]

export const skillCategories = [
  {
    label: 'Frontend Development',
    skills: [
      { name: 'JavaScript (ES6+)', icon: 'SiJavascript' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'HTML5', icon: 'SiHtml5' },
      { name: 'CSS3', icon: 'SiCss3' },
      { name: 'JSX', icon: 'FaReact' },
    ],
  },
  {
    label: 'Frameworks',
    skills: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
    ],
  },
  {
    label: 'UI & Styling',
    skills: [
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Bootstrap', icon: 'SiBootstrap' },
      { name: 'Material UI', icon: 'SiMui' },
      { name: 'Ant Design', icon: 'SiAntdesign' },
      { name: 'ShadCN UI', icon: 'SiShadcnui' },
    ],
  },
  {
    label: 'State Management',
    skills: [
      { name: 'Redux', icon: 'SiRedux' },
      { name: 'RTK Query', icon: 'SiRedux' },
      { name: 'React Query', icon: 'SiReactquery' },
      { name: 'Zustand', icon: 'SiReact' },
    ],
  },
  {
    label: 'Testing',
    skills: [
      { name: 'Cypress (E2E)', icon: 'SiCypress' },
      { name: 'React Testing Library', icon: 'SiTestinglibrary' },
      { name: 'Unit & Integration Testing', icon: 'MdScience' },
    ],
  },
  {
    label: 'Tools & Cloud',
    skills: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'Postman', icon: 'SiPostman' },
      { name: 'Microsoft Azure', icon: 'VscAzure' },
      { name: 'Azure Artifacts', icon: 'VscAzure' },
      { name: 'React DevTools', icon: 'FaReact' },
    ],
  },
  {
    label: 'Backend Basics',
    skills: [
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'REST APIs', icon: 'TbApi' },
    ],
  },
  {
    label: 'CS Fundamentals',
    skills: [
      { name: 'Data Structures', icon: 'TbBinaryTree' },
      { name: 'OOP', icon: 'MdCode' },
      { name: 'UML Diagrams', icon: 'MdAccountTree' },
    ],
  },
]

export const education = {
  degree: "Bachelor's degree in Computer Science",
  university: 'Fayoum University',
  period: '2018 – 2022',
  gradProject: {
    name: 'Shoppingo (Smart Shopping Cart)',
    description:
      'Embedded system connected with an administrator website, Flutter mobile app, and data mining techniques.',
    grade: 'Awarded Excellence with a score of 98%',
  },
}

export const certificates = [
  { name: 'Intel Ideation Workshop', org: 'Intel', year: '2019' },
  { name: 'Potential Startup Course and Training', org: 'InnovEgypt University', year: '2019' },
  { name: 'Fundamentals of Community Organizing', org: 'Road2Lead', year: '2021' },
  { name: 'IEEE FSB Secretary Participation Certificate', org: 'IEEE SSR Egypt', year: '2021' },
  { name: 'Entrepreneurship Program', org: 'IEEE VEP', year: '2022' },
]

export const volunteering = [
  { title: 'Entrepreneurship Member', org: 'VEP Program, IEEE Young Professionals', period: '2021 – 2022' },
  { title: 'Secretary (High Board)', org: 'IEEE Fayoum Student Branch', period: '2020 – 2021' },
  { title: 'Head of Project Management', org: 'IEEE Fayoum Student Branch', period: '2019 – 2020' },
  { title: 'Project Management Member', org: 'IEEE Fayoum Student Branch', period: '2018 – 2019' },
]
