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
    "I am a Software Engineering student at Seneca Polytechnic focused on backend and platform development across cloud and on-prem environments. RHCE, RHCSA, CKAD, and Terraform Associate certified; hands-on with Linux, Kubernetes, AWS, Proxmox, Docker, and GitHub Actions. I like building reliable services, automating infrastructure, and solving problems across the systems stack.",
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
  { label: "Featured builds", value: "5" },
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
      "Built a LeetCode-style problem workspace with editor, execution output, timers, and settings.",
      "Integrated an AI voice interviewer with OpenAI Realtime for structured mock interview flow.",
      "Connected authentication and code execution services and deployed the web app to Vercel.",
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
      "A hackathon MVP for food-industry analytics, inventory visibility, and operational dashboards.",
    bullets: [
      "Led the MVP front end for company and supplier views, KPI dashboards, and report workflows.",
      "Designed a UI for certification workflows, sales insights, and near-expiry alert scenarios.",
      "Set up CI/CD to build, ship, and deploy containers to AWS ECR and EKS.",
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
    name: "Homelab Cluster",
    github: "https://github.com/matoanbach/homelab",
    summary:
      "A personal Linux and Kubernetes lab for hands-on systems administration and automation practice.",
    bullets: [
      "Maintained a 3-node RHEL cluster on Proxmox for Linux administration and infrastructure experiments.",
      "Practiced storage, systemd, SELinux, SSH, firewalld, networking, and user permission workflows.",
      "Explored Kubernetes cluster setup on Proxmox using Kubespray.",
    ],
    stack: ["RHEL", "Proxmox", "Linux", "Kubernetes", "Kubespray", "Bash"],
    accent: "bg-[#c1b5ff]",
  },
  {
    slug: "very-simple-bank",
    name: "Very Simple Bank",
    github: "https://github.com/matoanbach/simple-bank",
    summary:
      "A backend banking system built to exercise API design, testing, and cloud-native deployment.",
    bullets: [
      "Implemented account, auth, and transaction APIs using Go, Gin, and gRPC.",
      "Wrote unit tests to cover 57.1% of the codebase and wired CI/CD with GitHub Actions.",
      "Built, tagged, and pushed backend images to Amazon ECR and deployed them to Amazon EKS.",
    ],
    stack: [
      "Go",
      "Gin",
      "gRPC",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS",
    ],
    accent: "bg-[#ff9f8b]",
  },
  {
    slug: "job-scraper",
    name: "Job Scraper",
    github: "https://github.com/matoanbach/not/tree/main/LinkedIn%20Bot",
    summary:
      "An automated internship scraper that combines browser automation, AI filtering, and distribution.",
    bullets: [
      "Scraped dynamic LinkedIn listings daily with Playwright and Node.js.",
      "Used ChatGPT APIs to categorize and filter postings for relevance.",
      "Deduplicated postings in DynamoDB and broadcasted results to Discord for 144 students.",
    ],
    stack: ["JavaScript", "Node.js", "Playwright", "OpenAI APIs", "DynamoDB", "Discord"],
    accent: "bg-[#f8a6e0]",
  },
];

export const otherProjects: Project[] = [
  {
    slug: "seneca-networking-lab",
    name: "Seneca Networking Lab",
    github: "https://github.com/matoanbach/networking",
    summary:
      "Configured small computer networks with routers, switches, IPv4/IPv6 addressing, and basic device security.",
    bullets: [
      "Set up PCs, switches, and routers and verified communication with ping and show commands.",
      "Configured passwords, banners, and end-to-end IPv4 and IPv6 connectivity.",
    ],
    stack: ["Cisco IOS CLI", "IPv4/IPv6", "Cisco Catalyst", "Packet Tracer"],
    accent: "bg-[#fff7d1]",
  },
  {
    slug: "compiler-in-go",
    name: "Compiler in Go",
    github: "https://github.com/matoanbach/go-compiler",
    summary:
      "Built a bytecode compiler and stack-based virtual machine in Go following Writing A Compiler In Go.",
    bullets: [
      "Transformed an interpreter into a VM capable of executing compiled code with a 3x speed-up.",
      "Implemented bytecode instructions, symbol tables, a constant pool, jumps, functions, built-ins, and closures.",
    ],
    stack: ["Go", "Compiler", "Virtual Machine", "GitHub Actions"],
    accent: "bg-[#daf7f0]",
  },
  {
    slug: "http-server",
    name: "HTTP Server",
    github: "https://github.com/matoanbach/http-server",
    summary:
      "A multithreaded C++ HTTP server handling GET/POST, static files, and gzip-compressed content.",
    bullets: [
      "Implemented routing and concurrent request handling using C++ and CMake.",
      "Served static resources and optimized throughput with multithreading.",
    ],
    stack: ["C++", "TCP", "HTTP", "Multithreading", "CMake"],
    accent: "bg-[#c1b5ff]",
  },
  {
    slug: "dns-server",
    name: "DNS Server",
    github: "https://github.com/matoanbach/dns-server/tree/main",
    summary:
      "A C++ DNS server that parses and responds to basic UDP queries on a Unix-based system.",
    bullets: [
      "Implemented custom packet parsing and domain name compression per RFC 1035.",
      "Tested responses with dig and returned a default IP address for verification.",
    ],
    stack: ["C++", "UDP", "DNS", "RFC 1035", "CMake"],
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
      "Building AI-assisted firmware testing systems with strong observability, concurrency controls, and internal platform integration.",
    bullets: [
      "Designed and deployed an automated firmware unit-test generation workflow using Python, LangChain/LangGraph, and FastMCP, cutting manual setup time by 90%.",
      "Architected and containerized a microservices FastMCP server exposing 12+ test tools for parallel and sandboxed test runs.",
      "Implemented a RAG pipeline over 4,000+ code symbols and knowledge-base records, boosting coverage from 84% to 99% while reducing token usage by about 32%.",
      "Integrated observability with OpenTelemetry, Grafana, Tempo, and Loki to improve debugging and reproducibility.",
    ],
    stack: ["Python", "FastMCP", "LangChain", "LangGraph", "OpenTelemetry", "Grafana", "Tempo", "Loki"],
  },
  {
    company: "Pathway Communications",
    title: "AI Engineer Intern",
    period: "December 2025 - April 2026",
    location: "Toronto, ON",
    summary:
      "Built AI automation tooling for browser workflows, internal observability, and agent-accessible database platforms.",
    bullets: [
      "Built an AI browser automation system to extract information from third-party portals using Playwright, TypeScript, OpenCode SDK, Jenkins, and Docker, reducing manual coding time by 96%.",
      "Assisted in testing AI automation workflows for ticket processing in OTRS using the Google Agent Development Toolkit and Python.",
      "Built a Django-based observability dashboard to support debugging and testing of AI automation workflows.",
      "Architected and maintained a FastMCP server platform exposing MySQL, PostgreSQL, and SQLite tools for AI agents.",
    ],
    stack: ["TypeScript", "Playwright", "Django", "FastMCP", "Docker", "Jenkins", "Google ADK", "Langfuse"],
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
