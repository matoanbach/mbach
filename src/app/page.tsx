import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Server,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { CertificationsSection } from "@/components/certifications-section";
import { SiteHeader } from "@/components/site-header";
import {
  certifications,
  contact,
  education,
  featuredProjects,
  focusAreas,
  hero,
  highlightStats,
  otherProjects,
  roles,
  skillGroups,
} from "@/content/portfolio";
import { cn } from "@/lib/utils";

const focusIcons = [BrainCircuit, Server, TerminalSquare];

export default function Home() {
  const marqueeItems = [
    { label: "Contact for work", href: "#contact" },
    { label: contact.email, href: `mailto:${contact.email}` },
    { label: "LinkedIn", href: contact.linkedin },
    { label: "AI automation", href: "#experience" },
    { label: "Platform engineering", href: "#skills" },
  ];

  return (
    <div id="top" className="min-h-screen bg-background">
      <div className="overflow-hidden border-b-2 border-black bg-[#ffd54f]">
        <div className="marquee-track text-xs font-black uppercase tracking-[0.18em] sm:text-sm">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="marquee-group"
              aria-hidden={copyIndex === 1}
            >
              {marqueeItems.map((item) => (
                <a
                  key={`${copyIndex}-${item.label}`}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-6 whitespace-nowrap"
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">+</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <SiteHeader />

      <main className="flex-1 pb-20">
        <section className="section-shell grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            <div className="mb-5 flex flex-wrap gap-3">
              <Badge
                variant="default"
                size="lg"
                className="rounded-full border-2 border-black bg-[#92e6d7] px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[3px_3px_0_0_#21201d]"
              >
                {hero.eyebrow}
              </Badge>
              <Badge
                variant="default"
                size="lg"
                className="rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[3px_3px_0_0_#21201d]"
              >
                B.Eng 2026
              </Badge>
            </div>

            <h1 className="max-w-4xl font-heading text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-foreground sm:text-6xl lg:text-8xl">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="h-auto px-6 py-4 text-base">
                <a href={hero.ctas[0].href}>
                  {hero.ctas[0].label}
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="h-auto border-2 border-black px-6 py-4 text-base"
              >
                <a href={hero.ctas[1].href} target="_blank" rel="noreferrer">
                  <Download className="mr-2 size-4" />
                  {hero.ctas[1].label}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto border-2 border-black px-6 py-4 text-base"
              >
                <a href={hero.ctas[2].href} target="_blank" rel="noreferrer">
                  <ArrowUpRight className="mr-2 size-4" />
                  {hero.ctas[2].label}
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-muted-foreground">
              <span className="neo-pill bg-white text-foreground">
                <MapPin className="mr-2 size-4" />
                Toronto, ON
              </span>
              <span className="neo-pill bg-[#f8a6e0] text-foreground">
                <Sparkles className="mr-2 size-4" />
                Research Assistant at Seneca Applied Research
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <Card className="neo-panel relative block w-full rotate-[-2deg] overflow-hidden bg-white p-4 sm:p-6">
              <Card.Content className="p-0">
                <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-black bg-[#ffd54f] px-4 pt-4 sm:px-6 sm:pt-6">
                  <div className="absolute -left-8 top-10 size-28 rounded-full border-2 border-black bg-[#92e6d7] opacity-90 sm:size-36" />
                  <div className="absolute -right-10 top-20 size-32 rounded-full border-2 border-black bg-[#f8a6e0] opacity-90 sm:size-40" />

                  <div className="relative z-10 flex flex-wrap justify-between gap-3">
                    <Badge
                      variant="default"
                      className="rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-black shadow-[3px_3px_0_0_#21201d]"
                    >
                      Linux + AI + Platform
                    </Badge>
                    <Badge
                      variant="default"
                      className="rounded-full border-2 border-black bg-[#c1b5ff] px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-black shadow-[3px_3px_0_0_#21201d]"
                    >
                      Toronto
                    </Badge>
                  </div>

                  <div className="relative z-10 mt-5 rounded-[1.5rem] border-2 border-black bg-[#fffaf2] px-4 py-4 shadow-[6px_6px_0_0_#21201d] sm:max-w-sm">
                    <div className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                      Systems I like building
                    </div>
                    <div className="mt-2 text-lg font-black uppercase leading-tight sm:text-xl">
                      Reliable services, developer tooling, and infra-aware products.
                    </div>
                  </div>

                  <div className="relative z-10 mx-auto mt-6 flex max-w-[20rem] justify-center sm:mt-8 sm:max-w-[22rem]">
                    <Image
                      src="/avatar.png"
                      alt="Portrait of Ma Toan Bach"
                      width={1728}
                      height={1536}
                      priority
                      className="h-auto w-full object-contain"
                      style={{
                        filter:
                          "drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff) drop-shadow(0 2px 0 #fff) drop-shadow(0 -2px 0 #fff) drop-shadow(1.5px 1.5px 0 #fff) drop-shadow(-1.5px -1.5px 0 #fff) drop-shadow(1.5px -1.5px 0 #fff) drop-shadow(-1.5px 1.5px 0 #fff)",
                      }}
                    />
                  </div>

                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="neo-panel bg-[#fff7d1] p-4">
                    <div className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                      Current focus
                    </div>
                    <div className="mt-3 text-lg font-black uppercase leading-tight">
                      AI agent systems for testing and automation
                    </div>
                  </div>
                  <div className="neo-panel bg-[#daf7f0] p-4">
                    <div className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                      Infra stack
                    </div>
                    <div className="mt-3 text-lg font-black uppercase leading-tight">
                      Linux, Docker, Kubernetes, Terraform, CI/CD
                    </div>
                  </div>
                </div>
              </Card.Content>
            </Card>

            <div className="neo-panel absolute -right-2 -bottom-6 w-56 rotate-[3deg] bg-[#c1b5ff] p-4 sm:w-72">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                Credentials
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert.name}
                    className="rounded-full border-2 border-black bg-white px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0_0_#21201d]"
                  >
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-6">
          <div className="grid gap-4 md:grid-cols-4">
            {highlightStats.map((stat) => (
              <Card key={stat.label} className="neo-panel block w-full bg-white p-5">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </div>
                <div className="mt-3 text-2xl font-black uppercase tracking-[-0.04em]">
                  {stat.value}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell py-18 scroll-mt-28">
          <SectionIntro
            eyebrow="Experience"
            title="Recent work in AI automation, firmware test systems, and internal platforms."
            description="Most of my recent work has been around AI-assisted workflows: browser automation, firmware test generation, observability, and internal tools that help engineers and operators move faster."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {roles.map((role) => (
              <Card key={role.company} className="neo-panel block h-full w-full bg-white p-6 sm:p-8">
                <Card.Header className="p-0">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <Card.Title className="text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">
                        {role.title}
                      </Card.Title>
                      <div className="mt-2 text-lg font-bold">{role.company}</div>
                    </div>
                    <div className="text-right text-sm font-semibold text-muted-foreground">
                      <div>{role.period}</div>
                      <div>{role.location}</div>
                    </div>
                  </div>
                  <Card.Description className="mt-4 text-base leading-7 text-muted-foreground">
                    {role.summary}
                  </Card.Description>
                </Card.Header>

                <Card.Content className="mt-6 p-0">
                  <ul className="space-y-3 text-base leading-7 text-foreground">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 size-3 rounded-full border-2 border-black bg-[#ffd54f] shadow-[2px_2px_0_0_#21201d]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {role.stack.map((item) => (
                      <Badge
                        key={item}
                        variant="default"
                        className="rounded-full border-2 border-black bg-[#ede4d7] px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-black shadow-[2px_2px_0_0_#21201d]"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card.Content>
              </Card>
            ))}
          </div>
        </section>

        <CertificationsSection certifications={certifications} />

        <section id="projects" className="section-shell py-18 scroll-mt-28">
          <SectionIntro
            eyebrow="Featured builds"
            title="Selected projects across AI products, backend systems, and infrastructure labs."
            description="These are the builds that best represent how I work: shipping usable software while still caring about architecture, deployment, observability, and operational detail."
          />

          <div className="mt-10 space-y-8">
            {featuredProjects.map((project, index) => (
              <article
                key={project.slug}
                className="grid gap-6 lg:grid-cols-2 lg:items-stretch"
              >
                <Card
                  className={cn(
                    "neo-panel block h-full w-full bg-white p-6 sm:p-8",
                    index % 2 === 1 && "lg:order-2",
                  )}
                >
                  <Card.Header className="p-0">
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-muted-foreground">
                      Overview
                    </div>
                    <Card.Description className="mt-4 text-lg leading-8 text-muted-foreground sm:text-xl">
                      {project.summary}
                    </Card.Description>
                  </Card.Header>

                  <Card.Content className="mt-6 p-0">
                    <ul className="space-y-3 text-base leading-7 text-foreground">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 size-3 rounded-full border-2 border-black bg-[#92e6d7] shadow-[2px_2px_0_0_#21201d]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.href ? (
                        <Button asChild className="h-auto px-5 py-3 text-sm">
                          <a href={project.href} target="_blank" rel="noreferrer">
                            Live Demo
                            <ExternalLink className="ml-2 size-4" />
                          </a>
                        </Button>
                      ) : null}
                      <Button
                        asChild
                        variant="outline"
                        className="h-auto border-2 border-black px-5 py-3 text-sm"
                      >
                        <a href={project.github} target="_blank" rel="noreferrer">
                          GitHub
                          <ArrowUpRight className="ml-2 size-4" />
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>

                <div
                  className={cn(
                    "neo-panel relative flex min-h-[20rem] items-end overflow-hidden p-6 sm:p-8",
                    project.accent,
                    index % 2 === 1 && "lg:order-1",
                  )}
                >
                  <div className="absolute right-4 top-4 rounded-full border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-[3px_3px_0_0_#21201d] sm:right-6 sm:top-6">
                    /{project.slug}
                  </div>
                  <div className="absolute -right-8 -top-6 text-[7rem] font-black uppercase tracking-[-0.08em] text-black/10 sm:text-[9rem]">
                    0{index + 1}
                  </div>

                  <div className="relative z-10 flex w-full flex-col gap-4">
                    <div className="neo-panel w-full bg-white/95 p-4">
                      <div className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        Project snapshot
                      </div>
                      <div className="mt-3 font-heading text-2xl font-black uppercase leading-none sm:text-3xl">
                        {project.name}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border-2 border-black bg-[#fffaf2] px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0_0_#21201d]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <SectionIntro
              eyebrow="More from the resume"
              title="More systems work from the resume: compilers, protocol servers, and lower-level networking."
              description="These projects round out the lower-level side of my work and show the same pattern as the main portfolio pieces: building from first principles and learning by shipping." 
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {otherProjects.map((project) => (
                <Card key={project.slug} className="neo-panel block w-full bg-white p-6">
                  <Card.Header className="p-0">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((item) => (
                        <Badge
                          key={item}
                          variant="default"
                          className="rounded-full border-2 border-black bg-[#fff7d1] px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-black shadow-[2px_2px_0_0_#21201d]"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <Card.Title className="mt-5 text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">
                      {project.name}
                    </Card.Title>
                    <Card.Description className="mt-3 text-base leading-7 text-muted-foreground">
                      {project.summary}
                    </Card.Description>
                  </Card.Header>

                  <Card.Content className="mt-5 p-0">
                    <ul className="space-y-3 text-base leading-7 text-foreground">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 size-3 rounded-full border-2 border-black bg-[#c1b5ff] shadow-[2px_2px_0_0_#21201d]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button
                        asChild
                        variant="outline"
                        className="h-auto border-2 border-black px-5 py-3 text-sm"
                      >
                        <a href={project.github} target="_blank" rel="noreferrer">
                          GitHub
                          <ArrowUpRight className="ml-2 size-4" />
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell py-18 scroll-mt-28">
          <SectionIntro
            eyebrow="Technical focus"
            title="The skills that keep showing up across the resume."
            description="Across research, internship work, and personal projects, the pattern is consistent: Linux-heavy infrastructure, AI automation, backend services, observability, and tools that other people can rely on."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {focusAreas.map((area, index) => {
              const Icon = focusIcons[index];

              return (
                <Card key={area.title} className="neo-panel block w-full bg-white p-6">
                  <Card.Header className="p-0">
                    <div
                      className={cn(
                        "mb-5 inline-flex size-14 items-center justify-center rounded-2xl border-2 border-black shadow-[4px_4px_0_0_#21201d]",
                        area.accent,
                      )}
                    >
                      <Icon className="size-6" />
                    </div>
                    <Card.Title className="text-2xl font-black uppercase tracking-[-0.04em]">
                      {area.title}
                    </Card.Title>
                    <Card.Description className="mt-3 text-base leading-7 text-muted-foreground">
                      {area.description}
                    </Card.Description>
                  </Card.Header>
                  <Card.Content className="mt-5 p-0">
                    <div className="flex flex-wrap gap-2">
                      {area.items.map((item) => (
                        <Badge
                          key={item}
                          variant="default"
                          className="rounded-full border-2 border-black bg-[#fffaf2] px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-black shadow-[2px_2px_0_0_#21201d]"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </Card.Content>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="neo-panel block w-full bg-white p-6 sm:p-8">
              <Card.Header className="p-0">
                <Badge
                  variant="default"
                  className="rounded-full border-2 border-black bg-[#92e6d7] px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-black shadow-[2px_2px_0_0_#21201d]"
                >
                  Education
                </Badge>
                <Card.Title className="mt-5 text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">
                  {education.school}
                </Card.Title>
                <Card.Description className="mt-3 text-base leading-7 text-muted-foreground">
                  {education.degree}
                </Card.Description>
              </Card.Header>

              <Card.Content className="mt-6 p-0 text-base leading-7">
                <div className="neo-panel bg-[#fff7d1] p-4 font-semibold">
                  {education.period}
                </div>
                <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="size-4" />
                  {education.location}
                </div>
              </Card.Content>
            </Card>

            <div className="grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <Card key={group.title} className="neo-panel block w-full bg-white p-5">
                  <Card.Header className="p-0">
                    <Card.Title className="text-2xl font-black uppercase tracking-[-0.04em]">
                      {group.title}
                    </Card.Title>
                  </Card.Header>
                  <Card.Content className="mt-4 p-0">
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border-2 border-black bg-[#fffaf2] px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0_0_#21201d]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell py-18 scroll-mt-28">
          <div className="neo-panel grid gap-6 bg-white p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.18em] text-muted-foreground">
                Contact
              </div>
              <h2 className="mt-3 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-5xl">
                Building something useful? Let&apos;s talk.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                I am interested in new grad engineering roles across AI
                systems, backend and platform engineering, developer tooling,
                and infrastructure automation.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:min-w-72">
              <Button asChild className="h-auto justify-center px-5 py-4 text-base">
                <a href={`mailto:${contact.email}`}>
                  <Mail className="mr-2 size-4" />
                  {contact.email}
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="h-auto justify-center border-2 border-black px-5 py-4 text-base"
              >
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  <ArrowUpRight className="mr-2 size-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto justify-center border-2 border-black px-5 py-4 text-base"
              >
                <a href={contact.github} target="_blank" rel="noreferrer">
                  <ArrowUpRight className="mr-2 size-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <footer className="mt-8 flex flex-col gap-3 border-t-2 border-black pt-6 text-sm font-semibold text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <div>Ma Toan Bach</div>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={`mailto:${contact.senecaEmail}`}>{contact.senecaEmail}</a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm font-black uppercase tracking-[0.18em] text-muted-foreground">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-heading text-4xl font-black uppercase leading-[0.94] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}
