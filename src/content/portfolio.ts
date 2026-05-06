export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type HighlightStat = {
  label: string;
  value: string;
};

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  href: string;
  summary: string;
  skills: string[];
  accent: string;
};

export type Project = {
  slug: string;
  name: string;
  href?: string;
  github: string;
  summary: string;
  bullets: string[];
  stack: string[];
  accent: string;
};

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export type FocusArea = {
  title: string;
  description: string;
  items: string[];
  accent: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const navItems: NavItem[] = [
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/matoanbach" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ma-toan-bach-59b090265/",
  },
  { label: "Email", href: "mailto:bachmatoan2910@gmail.com" },
  { label: "Seneca", href: "mailto:mbach@myseneca.ca" },
];

export const hero = {
  eyebrow: "backend platforms, AI systems, and infrastructure-aware engineering",
  title: "I build automation that helps teams grow.",
  description:
    "I am a Software Engineering student at Seneca Polytechnic focused on networking, servers, and backend platform development across cloud and on-prem environments. RHCE, RHCSA, CKAD, and Terraform Associate certified; hands-on with Linux, RHEL, Kubernetes, AWS, Proxmox, Docker, Jenkins, and GitHub Actions. I like building reliable services, automating infrastructure, and shipping AI-assisted systems with strong observability.",
  ctas: [
    { label: "View Projects", href: "#projects" },
    { label: "Download Resume", href: "/resume.pdf" },
    { label: "GitHub", href: "https://github.com/matoanbach" },
  ],
};

export const highlightStats: HighlightStat[] = [
  { label: "Current role", value: "Research Assistant" },
  { label: "Recent role", value: "AI Engineer Intern" },
  { label: "Certifications", value: "4" },
  { label: "Resume projects", value: "8" },
];

export const certifications: Certification[] = [
  {
    name: "CKAD",
    issuer: "The Linux Foundation",
    issued: "2025-01",
    href: "https://www.credly.com/badges/3dda89d7-d510-4cab-aebd-1a01108d7c1f/public_url",
    summary:
      "Demonstrates practical Kubernetes application skills: containers, orchestration, ConfigMaps, Secrets, and deploying cloud-native workloads.",
    skills: [
      "Cloud-Native Applications",
      "ConfigMaps",
      "Containers",
      "Docker",
      "Kubernetes",
      "Orchestration",
      "Secrets",
    ],
    accent: "bg-[#ffd54f]",
  },
  {
    name: "Terraform Associate",
    issuer: "HashiCorp",
    issued: "2025-10",
    href: "https://www.credly.com/badges/7eef31ef-9f6e-4aa3-a16d-429c60e54df8/public_url",
    summary:
      "Shows competence with infrastructure as code using Terraform: authoring configurations, using modules, managing state, and automating cloud infrastructure workflows.",
    skills: [
      "Cloud Computing",
      "Infrastructure as code (IaC)",
      "Infrastructure Automation",
      "Multi-Cloud",
      "Terraform",
      "Terraform CLI",
      "Terraform Configuration",
      "Terraform Modules",
      "Terraform State",
    ],
    accent: "bg-[#92e6d7]",
  },
  {
    name: "RHCSA",
    issuer: "Red Hat",
    issued: "2025-09",
    href: "https://www.credly.com/badges/5261e1d4-1685-4126-a65f-5f236348d99b/public_url",
    summary:
      "Proves core Linux system administration skills in RHEL: filesystem and storage work, software/package management, networking, users/groups, Bash, security, firewalls, and SELinux.",
    skills: [
      "Red Hat Enterprise Linux (RHEL)",
      "Containerization",
      "File Management",
      "Manage software",
      "Bash",
      "Local Storage Configuration",
      "File System Configuration",
      "Networking",
      "Security Management",
      "Basic container management",
      "Security",
      "Firewalls",
      "SELinux",
      "Users and Groups",
    ],
    accent: "bg-[#c1b5ff]",
  },
  {
    name: "RHCE",
    issuer: "Red Hat",
    issued: "2026-04",
    href: "https://www.credly.com/badges/fe83c308-e0c2-493b-8035-021d7b9bf8e9/public_url",
    summary:
      "Validates hands-on Red Hat and Linux administration beyond the basics: system deployment, storage, automation, container workflows, security, and operational maintenance.",
    skills: [
      "Software packages and repositories",
      "Task scheduling",
      "Users and Groups",
      "Podman",
      "Configure local storage",
      "Create and configure file systems",
      "Deploy, configure, and maintain systems",
      "Shell Scripts",
      "Manage security",
    ],
    accent: "bg-[#ff9f8b]",
  },
];

export const featuredProjects: Project[] = [
  {
    slug: "leetyap",
    name: "leetyap.com",
    href: "https://www.leetyap.com/",
    github: "https://github.com/matoanbach/leetyap",
    summary:
      "A solo interview-practice platform that combines a coding workspace with an AI voice interviewer.",
    bullets: [
      "Built a solo LeetCode-style interview practice platform with an in-browser problem workspace, Python editor, execution output, timers, and settings.",
      "Integrated an AI voice interviewer using OpenAI Realtime to guide users through a structured interview flow covering approach, implementation, testing, and complexity review.",
      "Implemented authentication with Auth0 and connected client-side code execution via Judge0, deploying the web app to Vercel with GitHub-based deployments.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Redux Toolkit",
      "Tailwind",
      "Auth0",
      "CodeMirror",
      "OpenAI Realtime",
    ],
    accent: "bg-[#ffd54f]",
  },
  {
    slug: "datatrace",
    name: "datatrace",
    href: "https://npm-runaway-git-main-ma-toan-bachs-projects.vercel.app/",
    github: "https://github.com/matoanbach/npm-runaway",
    summary:
      "A hackathon prototype for food-industry analytics, inventory visibility, and operational dashboards.",
    bullets: [
      "Collaborated in a 5-person hackathon team to prototype a food-industry analytics plus POS dashboard for inventory, sales trends, and near-expiry alert workflows.",
      "Led the MVP front end in Next.js and React, shipping company vs. supplier views, KPI dashboards, certification workflow UI, and PDF report generation.",
      "Implemented CI/CD with GitHub Actions to build and push Docker images to AWS ECR and deploy the container to Amazon EKS with Kubernetes manifests and ingress.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS ECR",
      "AWS EKS",
    ],
    accent: "bg-[#92e6d7]",
  },
  {
    slug: "homelab-cluster",
    name: "Homelab",
    github: "https://github.com/matoanbach/homelab",
    summary:
      "A Proxmox-based homelab for repeatable build-break-fix practice across Linux, networking, containers, and cluster operations.",
    bullets: [
      "Built and maintained a personal Proxmox-based homelab with 64GB RAM and dual Xeon E5-2660 v3 CPUs to practice infrastructure, systems, and automation through repeatable build-break-fix cycles.",
      "Provisioned and rebuilt Linux VMs to practice Red Hat-style administration and troubleshooting across users and permissions, systemd services, storage, filesystems, SSH, and DNS and network fundamentals.",
      "Planned and documented a compact OpenShift-on-Proxmox deployment using the agent-based installer, including static IP and DNS mapping plus Terraform-driven provisioning workflows.",
      "Explored Kubernetes cluster operations and CI/CD experiments with Jenkins, capturing configs and lessons learned as a reusable knowledge base.",
    ],
    stack: ["Proxmox", "RHEL", "Networking", "Terraform", "Ansible", "Kubernetes", "OpenShift", "Jenkins"],
    accent: "bg-[#c1b5ff]",
  },
  {
    slug: "very-simple-bank",
    name: "simple-bank",
    github: "https://github.com/matoanbach/simple-bank",
    summary:
      "A Go backend project that simulates core banking workflows with authentication, transactions, and CI-backed database testing.",
    bullets: [
      "Built a Go and Gin REST API simulating core banking workflows including user registration and login, account management, and money transfers, backed by PostgreSQL.",
      "Implemented secure authentication with bcrypt password hashing, JWT middleware, session records, and account-ownership checks for protected resources.",
      "Designed transactional transfer logic that records transfers and accounting entries and updates balances atomically, including stable ordering to reduce deadlock risk under concurrent transfers.",
      "Added database-backed automated tests and GitHub Actions CI that starts PostgreSQL, runs migrations, and executes the test suite on every push.",
    ],
    stack: ["Go", "Gin", "PostgreSQL", "sqlc", "JWT", "Docker", "GitHub Actions"],
    accent: "bg-[#ff9f8b]",
  },
  {
    slug: "job-scraper",
    name: "LinkedIn Job Bot",
    github: "https://github.com/matoanbach/not/tree/main/LinkedIn%20Bot",
    summary:
      "A LinkedIn job monitoring bot that combines browser automation, AI filtering, storage, and Discord distribution.",
    bullets: [
      "Built a LinkedIn job monitoring bot that scrapes new internship and co-op postings and delivers shortlisted roles to Discord channels for student job hunting.",
      "Automated LinkedIn login and UI-based job filtering with Node.js and Playwright, extracting job title, company, location, and apply URLs from dynamic pages.",
      "Applied OpenAI-based validation to filter for CS-related internship and co-op roles in English before publishing to Discord.",
      "Implemented deduplication with DynamoDB using a 14-day TTL to suppress repeats and broadcasted approved jobs to two Discord channels serving 144 students.",
    ],
    stack: ["JavaScript", "Node.js", "Playwright", "OpenAI API", "DynamoDB", "Express", "Discord Webhooks"],
    accent: "bg-[#f8a6e0]",
  },
];

export const otherProjects: Project[] = [
  {
    slug: "compiler-in-go",
    name: "turtle programming language (Go)",
    github: "https://github.com/matoanbach/go-compiler",
    summary:
      "A small programming language in Go with both an interpreter-style evaluator and a bytecode VM.",
    bullets: [
      "Implemented a small programming language in Go, including a lexer, Pratt parser, AST, runtime object system, and built-in functions.",
      "Built two execution engines: a tree-walking evaluator for interpreting the AST and a bytecode compiler that lowers AST nodes into instructions for a stack-based virtual machine.",
      "Implemented VM features including globals, call frames, closures with free-variable capture, and symbol resolution across global, local, and builtin scopes, with unit tests across parser, compiler, and VM behavior.",
    ],
    stack: ["Go", "Compiler", "Virtual Machine", "GitHub Actions"],
    accent: "bg-[#daf7f0]",
  },
  {
    slug: "http-server",
    name: "HTTP/1.1 Server",
    github: "https://github.com/matoanbach/http-server",
    summary:
      "A lightweight HTTP/1.1 server in C++ built to practice sockets, request parsing, routing, and concurrency.",
    bullets: [
      "Built a lightweight HTTP/1.1 server from scratch in C++23 using TCP sockets, implementing request parsing, response construction, and routing for GET and POST endpoints.",
      "Implemented basic file upload and download support using a configurable storage directory and appropriate success and error responses.",
      "Added response compression and multi-client request handling to improve performance and scalability under concurrent traffic.",
    ],
    stack: ["C++23", "POSIX Sockets", "pthreads", "zlib", "CMake", "vcpkg"],
    accent: "bg-[#c1b5ff]",
  },
  {
    slug: "dns-server",
    name: "DNS Server",
    github: "https://github.com/matoanbach/dns-server/tree/main",
    summary:
      "A lightweight DNS server in C++ for learning UDP protocol handling, binary parsing, and message serialization.",
    bullets: [
      "Built a lightweight DNS server in C++ that receives and responds to queries over UDP, implementing binary message parsing and serialization for DNS headers, questions, and answers.",
      "Implemented domain-name encoding and support for compressed names using pointer-based labels to correctly parse real DNS packets and construct valid responses.",
      "Enabled the server to forward queries to a public DNS provider and return the resolved results, validating end-to-end behavior using dig.",
    ],
    stack: ["C++23", "UDP Sockets", "DNS", "CMake"],
    accent: "bg-[#f8a6e0]",
  },
];

export const roles: Role[] = [
  {
    company: "Seneca Applied Research",
    title: "Research Assistant",
    period: "May 2025 - Present",
    location: "Toronto, ON",
    summary:
      "Building AI-assisted firmware test systems with internal tooling, observability, concurrency controls, and close collaboration with platform teams.",
    bullets: [
      "Designed and deployed an automated firmware unit-test generation workflow using Python, LangChain/LangGraph, and FastMCP, cutting manual setup time by 90%.",
      "Architected and containerized a microservices test-generation FastMCP server to expose 12+ test tools via an internal API platform, enabling parallel and sandboxed test runs with robust concurrency controls.",
      "Implemented a RAG pipeline over 4,000+ code symbols and knowledge-base records, boosting coverage from 84% to 99% while reducing token usage by about 32%.",
      "Integrated end-to-end observability with OpenTelemetry, Grafana, Tempo, and Loki, decreasing debugging time by 30% and improving reproducibility.",
      "Partnered with AMD firmware engineering teams to refine prompts, guardrails, and platform features, improving AI-generated test quality and driving adoption across the organization.",
    ],
    stack: ["Python", "FastMCP", "LangChain", "LangGraph", "OpenTelemetry", "Grafana", "Tempo", "Loki"],
  },
  {
    company: "Pathway Communications",
    title: "AI Engineer Intern",
    period: "December 2025 - April 2026",
    location: "Toronto, ON",
    summary:
      "Built AI automation tooling for browser workflows, internal observability, and agent-accessible data platforms in production-adjacent environments.",
    bullets: [
      "Built an AI browser automation system to extract and capture information from third-party portals using Playwright, TypeScript, OpenCode SDK with sandboxed execution, Jenkins CI/CD, and Docker for containerization, reducing manual coding time by 96%.",
      "Assisted in testing AI automation workflows for ticket processing in the production OTRS system using the Google Agent Development Toolkit and Python.",
      "Built a Django-based observability dashboard to support debugging and testing of AI automation workflows and collaborated with ITSM, DevOps teams, and stakeholders to gather feedback and align with project requirements.",
      "Architected and maintained a FastMCP server platform that exposed database tools across MySQL, PostgreSQL, and SQLite for AI agents to query client information.",
      "Integrated and configured Langfuse, Grafana, Prometheus, and OpenTelemetry to monitor LLM agent workflows and MCP server metrics, tracking cost, latency, token usage, and error rates to improve reliability and speed up troubleshooting.",
    ],
    stack: ["TypeScript", "Playwright", "Django", "FastMCP", "Docker", "Jenkins", "Google ADK", "Langfuse", "Grafana", "OpenTelemetry"],
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: "AI + Agent Systems",
    description:
      "I build LLM-powered workflows, browser automation, internal tool servers, and observability around agent behavior.",
    items: ["FastMCP", "LangChain/LangGraph", "OpenAI models", "Google ADK"],
    accent: "bg-[#ffd54f]",
  },
  {
    title: "Platform + DevOps",
    description:
      "I enjoy the infrastructure layer: Linux, containers, CI/CD, Kubernetes, AWS, and practical troubleshooting.",
    items: ["Linux", "Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions"],
    accent: "bg-[#92e6d7]",
  },
  {
    title: "Full-Stack Product Engineering",
    description:
      "I also ship product-facing software with strong developer ergonomics, API design, and thoughtful UI execution.",
    items: ["Next.js", "TypeScript", "Go", "FastAPI", "REST API", "gRPC"],
    accent: "bg-[#c1b5ff]",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "Go", "TypeScript", "SQL"],
  },
  {
    title: "DevOps",
    items: [
      "Linux",
      "RHEL",
      "Proxmox",
      "Bash",
      "Docker",
      "Podman",
      "Kubernetes",
      "Ansible",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
    ],
  },
  {
    title: "Observability",
    items: ["Langsmith", "Langfuse", "Grafana", "Prometheus"],
  },
  {
    title: "Cloud",
    items: ["AWS EC2", "AWS EKS", "AWS ECR", "AWS IAM", "AWS S3", "AWS RDS"],
  },
  {
    title: "Full-stack",
    items: ["FastAPI", "FastMCP", "OpenAPI", "REST API", "gRPC", "Gin", "React", "Tailwind CSS", "HTML"],
  },
  {
    title: "Databases / AI",
    items: [
      "LangChain",
      "LangGraph",
      "Google ADK",
      "ChromaDB",
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "OpenAI models",
    ],
  },
];

export const education = {
  school: "Seneca Polytechnic",
  degree: "Bachelor of Engineering in Software Engineering",
  period: "Sept 2022 - August 2026",
  location: "Toronto, ON",
};

export const contact = {
  email: "bachmatoan2910@gmail.com",
  senecaEmail: "mbach@myseneca.ca",
  github: "https://github.com/matoanbach",
  linkedin: "https://www.linkedin.com/in/ma-toan-bach-59b090265/",
};
