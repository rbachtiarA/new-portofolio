import type { Content } from "@/types/content";

export const PROJECT_LIST: Content[] = [
  {
    slug: "kriibo-app",
    title: "Kriibo App",
    type: "Personal",
    image: "./kriibo-app-home.jpg",
    link: {
      github: "https://github.com/rbachtiarA/Forum-app",
      url: "https://kriibo.vercel.app",
    },
    icon: "./icons/kriibo-app-icon.svg",
    tags: [
      "NextJs",
      "Typescript",
      "Tanstack",
      "Supabase",
      "Prisma",
      "Shadcn",
      "Tailwind",
    ],
    shortSummary:
      "Social media web based application that fully developed using **NextJs** as backend & frontend also **Supabase** for database. Platform for user to post a status, a discussion, and reply to others",
  },
  {
    slug: "bermuda-store",
    title: "Bermuda Store",
    type: "Collaboration",
    image: "./bermuda-store-home.webp",
    link: {
      github: "https://github.com/rbachtiarA/Bermuda-app",
      url: "https://bermuda-web.vercel.app",
    },
    icon: "./icons/bermuda-store-icon.ico",
    tags: [
      "NextJs",
      "Typescript",
      "Redux",
      "NodeJs",
      "ExpressJs",
      "Prisma",
      "Supabase",
      "MySQL",
      "Tailwind",
      "Hero UI",
    ],
    shortSummary:
      "An Ecommerce application based web, with **monorepo** strategy using **NextJs** framework and **ExpressJs** as backend for handling API route and transaction with **Midtrans**",
  },
  {
    slug: "bandar-tiket",
    title: "Bandar Tiket",
    type: "Collaboration",
    image: "./bandar-tiket-home.webp",
    link: {
      github: "https://github.com/rbachtiarA/bandar-ticket-app",
    },
    tags: ["NextJs", "Typescript", "NodeJs", "ExpressJS", "Tailwind", "MySQL"],
    shortSummary:
      "Ticket booking application based web, with **monorepo** using **NextJS** and **ExpressJs** for backend. Platform to share and buy ticket for events",
  },
];

export const TECH_STACK = {
  frontend: {
    slug: "frontend",
    title: "Frontend",
    description:
      "Frameworks, libraries, and programming languages that I’ve utilized to build responsive, interactive, and scalable front-end applications.",
    mainTitle: "Frontend Development",
    item: [
      {
        slug: "javascript",
        title: "Javascript",
        icon: "./icons/javascript.svg",
        level: "Experienced",
      },
      {
        slug: "typescript",
        title: "Typescript",
        icon: "./icons/typescript.svg",
        level: "Experienced",
      },
      {
        slug: "react",
        title: "React",
        icon: "./icons/reactjs.svg",
        level: "Experienced",
      },
      {
        slug: "nextjs-framework",
        title: "NextJs Framework",
        icon: "./icons/nextjs.svg",
        level: "Experienced",
      },
      {
        slug: "tanstack",
        title: "Tanstack",
        icon: "./icons/tanstack.svg",
        level: "Experienced",
      },
      {
        slug: "html-5",
        title: "HTML",
        icon: "./icons/html-5.svg",
        level: "Experienced",
      },
      {
        slug: "css",
        title: "CSS",
        icon: "./icons/css.svg",
        level: "Experienced",
      },
      {
        slug: "astro",
        title: "Astro Framework",
        icon: "./icons/astro.svg",
        level: "Intermediate",
      },
    ],
  },
  backend: {
    slug: "backend",
    title: "Backend",
    mainTitle: "Backend Development",
    description:
      "Languages, frameworks, and tools I’ve used to create efficient, secure, and reliable backend systems that support modern web and mobile applications.",
    item: [
      {
        slug: "nodejs-express",
        title: "NodeJs & ExpressJs",
        icon: "./icons/nodejs.svg",
        level: "Experienced",
      },
      {
        slug: "nestjs-framework",
        title: "NestJS Framework",
        icon: "./icons/nestjs.svg",
        level: "Experienced",
      },
      {
        slug: "golang",
        title: "Go",
        icon: "./icons/golang.svg",
        level: "Basic",
      },
      {
        slug: "python",
        title: "Python",
        icon: "./icons/python.svg",
        level: "Intermediate",
      },
    ],
  },
  database: {
    slug: "database",
    title: "Data & SQL",
    mainTitle: "Database Development",
    description:
      "Databases and tools I’ve used to store, organize, and access data efficiently while ensuring reliability and scalability for applications.",
    item: [
      {
        slug: "mysql",
        title: "MysQL",
        icon: "./icons/mysql.svg",
        level: "Experienced",
      },
      {
        slug: "postgresql",
        title: "PostgreSQL",
        icon: "./icons/postgresql.svg",
        level: "Experienced",
      },
      {
        slug: "supabase",
        title: "Supabase",
        icon: "./icons/supabase.svg",
        level: "Experienced",
      },
      {
        slug: "prisma-orm",
        title: "Prisma ORM",
        icon: "./icons/prisma.svg",
        level: "Experienced",
      },
    ],
  },
  tools: {
    slug: "tools",
    title: "Tools",
    mainTitle: "Tools & Platforms",
    description:
      "Design, collaboration, and development tools I rely on to streamline workflows, manage projects, and build better applications.",
    item: [
      {
        slug: "figma",
        title: "Figma",
        icon: "./icons/figma.svg",
        level: "Intermediate",
      },
      {
        slug: "gitlab",
        title: "Gitlab",
        icon: "./icons/gitlab.svg",
        level: "Experienced",
      },
      {
        slug: "github",
        title: "Github",
        icon: "./icons/github.svg",
        level: "Experienced",
      },
      {
        slug: "postman",
        title: "Postman",
        icon: "./icons/postman.svg",
        level: "Experienced",
      },
      {
        slug: "docker",
        title: "Docker",
        icon: "./icons/docker.svg",
        level: "Intermediate",
      },
    ],
  },
  learning: {
    slug: "learning",
    title: "Learning",
    mainTitle: "Currently Learning",
    item: [
      {
        slug: "angular",
        title: "Angular",
        icon: "./icons/angular.svg",
        level: "Learning",
      },
      {
        slug: "java",
        title: "Java",
        icon: "./icons/java.svg",
        level: "Learning",
      },
    ],
  },
};
