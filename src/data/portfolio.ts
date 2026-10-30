export const profile = {
  name: "Muhammad Dzikri Maulana",
  role: "Full-Stack Developer & Software Engineer",
  location: "Padang, Indonesia",
  bio: "I'm a full-stack developer with over three years of experience and an enthusiast of private-server game development.",
  github: "https://github.com/Hexamouse",
  linkedin: "https://www.linkedin.com/in/dzikrimaulana/",
  instagram: "https://instagram.com/dzikriieeex",
  facebook: "https://facebook.com/dzikri.maulana016",
  email: "mailto:dzikrimaulana169@gmail.com",
};

export const projects = [
  { title: "CineID", description: "A modern and responsive streaming and media discovery application.", tech: ["SvelteKit", "Tailwind CSS", "TypeScript"], link: "#" },
  { title: "Sentinel Project", description: "A centralized management and authentication system with role-based navigation.", tech: ["Next.js", "PostgreSQL", "Prisma"], link: "#" },
  { title: "Media Stream Downloader", description: "A high-performance backend service for media processing and conversion.", tech: ["FastAPI", "yt-dlp", "FFmpeg"], link: "#" },
];

const techLinks: Record<string, string> = {
  react: "https://react.dev", next: "https://nextjs.org", nuxt: "https://nuxt.com", svelte: "https://svelte.dev", ts: "https://www.typescriptlang.org", js: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", html: "https://developer.mozilla.org/en-US/docs/Web/HTML", tailwindcss: "https://tailwindcss.com", css: "https://developer.mozilla.org/en-US/docs/Web/CSS", nodejs: "https://nodejs.org", py: "https://www.python.org", php: "https://www.php.net", java: "https://www.java.com", cs: "https://learn.microsoft.com/en-us/dotnet/csharp/", dotnet: "https://dotnet.microsoft.com", cpp: "https://isocpp.org", mysql: "https://www.mysql.com", postgres: "https://www.postgresql.org", docker: "https://www.docker.com", linux: "https://www.linux.org", nginx: "https://www.nginx.com", vscode: "https://code.visualstudio.com", visualstudio: "https://visualstudio.microsoft.com", postman: "https://www.postman.com", git: "https://git-scm.com", github: "https://github.com", vercel: "https://vercel.com",
};

const techMeta: Record<string, { name: string; icon: string; invertDark?: boolean }> = {
  react: { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  next: { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invertDark: true },
  nuxt: { name: "Nuxt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
  svelte: { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
  ts: { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  js: { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  html: { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  tailwindcss: { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  css: { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  nodejs: { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  py: { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  php: { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  java: { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  cs: { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  dotnet: { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  cpp: { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  mysql: { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  postgres: { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  docker: { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  linux: { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  nginx: { name: "NGINX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  vscode: { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  visualstudio: { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
  postman: { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  git: { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  github: { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invertDark: true },
  vercel: { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", invertDark: true },
};

export const allTech = Object.entries(techLinks).map(([key, link]) => ({ key, link, name: techMeta[key].name, icon: techMeta[key].icon, invertDark: techMeta[key].invertDark ?? false }));
export const techRow1 = allTech.slice(0, 14);
export const techRow2 = allTech.slice(14);

export const experiences = [
  { company: "PT. Parama Digital Store", role: "Customer Service Representative", period: "August 2025 - January 2026", technologies: ["Shopee Seller Centre", "Customer Relationship Management (CRM)", "Inventory Management", "E-commerce Operations", "Technical Support & Troubleshooting"], highlights: ["Delivered high-quality customer support via Shopee Live Chat, handling inquiries, orders, and post-purchase resolutions to maintain high shop ratings.", "Guided customers through product usage, setup, and troubleshooting to maximize customer satisfaction and reduce return/refund rates.", "Managed shift-based order fulfillment, verifying transactions, processing purchases, and coordinating timely order dispatches.", "Organized and monitored warehouse inventory levels, updating stock records in real time to prevent overselling and inventory discrepancies.", "Handled customer complaints and refund/return requests professionally while adhering to store policy and platform standards.", "Analyzed buyer feedback and recurring issues during shift handovers to improve shop communication workflows and service response times."] },
  { company: "Dinas Kesehatan Kota Padang (Padang Health Office)", role: "Web Developer Intern", period: "April 2025 - June 2025", technologies: ["TypeScript", "React", "NextJS", "Tailwind CSS", "Prisma", "PostgreSQL", "RESTful APIs", "JWT Authentication"], highlights: ["Developed an internal web application to streamline the internship application and management process for the Padang Health Office.", "Built and implemented RESTful APIs to ensure seamless data integration and communication between frontend and backend architectures.", "Designed database schemas and managed ORM configurations using Prisma to store applicant, employee, and service records efficiently.", "Integrated a secure authentication system using JSON Web Tokens (JWT) with access token and refresh token rotation.", "Provided hands-on IT support by troubleshooting and repairing hardware issues on office computers and printers.", "Organized and digitized administrative archives to improve data accessibility and document management efficiency."] },
  { company: "CV. Tigo Kreasindo | Advertising and Manufacture", role: "Graphic & 3D Manufacturing Designer", period: "August 2021 - September 2022", technologies: ["Adobe Illustrator", "Adobe Photoshop", "SketchUp", "CorelDRAW", "CMYK Pre-press"], highlights: ["Designed high-impact outdoor promotional media, including vinyl banners, billboards, and marketing collateral, tailored to client specifications.", "Created 3D models and structural blueprints for custom manufactured products, such as custom desks and billboard frameworks, using SketchUp.", "Collaborated closely with the fabrication team during manufacturing to ensure production matched design specifications accurately.", "Handled pre-press preparation, including CMYK color management, layout optimization, and material selection for large-format printing and fabrication.", "Communicated directly with clients to align visual concepts, manage design revisions, and estimate material requirements."] },
];

export const education = [
  { period: "2022 — 2026", major: "Informatics Engineering", institution: 'Putra Indonesia University "YPTK" Padang', logo: "https://i.imgur.com/kZGQDW4.png" },
  { period: "2018 — 2021", major: "Visual Communication Design", institution: "State Vocational High School 4 Padang", logo: "https://cdn.s.id/images/5e865509-5931-4e43-8292-940cd1adfe70_500x500.png" },
];

export const aboutContent = ["Hello! My name is Muhammad Dzikri Maulana. I am a passionate full-stack developer based in Padang, West Sumatra. Over the past 3+ years, I have worked across diverse software engineering stacks—from designing responsive user interfaces with modern frontend frameworks to crafting reliable RESTful APIs and optimized database systems.", "Alongside web and cloud application development, I have a deep passion for game server reverse-engineering, emulators, and private-server systems. This background has given me rigorous experience with low-level networking, memory inspection, socket protocols, and concurrent architecture.", "I hold a strong appreciation for clean, maintainable architecture, polished micro-interactions, and high-performance user experiences."];
export const interests = ["Full-Stack Web Development", "System Architecture & Distributed Backend", "Game Server Reverse Engineering", "UI/UX Design & Typography", "Database Optimization & Modeling", "DevOps & Containerization"];

export const organizations = [
  { id: "bem", organization: "University Student Executive Board", period: "October 2025 — May 2026", role: "Minister of Communication and Information", logo: "https://i.imgur.com/jFG7hXj.png", hasGallery: true, photos: [{ url: "https://i.imgur.com/Dit8Hbq.jpeg", caption: "BEM Universitas - Documentation 1" }, { url: "https://i.imgur.com/6Rpmngx.jpeg", caption: "BEM Universitas - Documentation 2" }, { url: "https://i.imgur.com/28j6RVh.jpeg", caption: "BEM Universitas - Documentation 3" }] },
  { id: "ksr", organization: "Indonesian Red Cross Student Volunteer Corps", period: "December 2024 — May 2025", role: "Head of Information and Communication Department", logo: "https://i.imgur.com/XkM7oTs.png", hasGallery: false },
  { id: "hmj", organization: "Informatics Engineering Student Association", period: "August 2022 — March 2024", role: "Information and Communication Staff", logo: "https://i.imgur.com/16pYs8P.png", hasGallery: true, photos: Array.from({ length: 9 }, (_, index) => ({ url: `/photos/hmjif/hmjif-${index + 1}.webp`, caption: `Informatics Engineering Student Association - Documentation ${index + 1}` })) },
];
