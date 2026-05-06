"use client";

import { useState } from "react";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import type { Certification } from "@/content/portfolio";
import { cn } from "@/lib/utils";

type CertificationsSectionProps = {
  certifications: Certification[];
};

export function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  const [activeCertName, setActiveCertName] = useState(certifications[0]?.name ?? "");

  const activeCertification =
    certifications.find((cert) => cert.name === activeCertName) ?? certifications[0];

  if (!activeCertification) {
    return null;
  }

  return (
    <section
      id="certifications"
      className="section-shell py-18 scroll-mt-28"
      aria-labelledby="certifications-title"
    >
      <div className="max-w-3xl">
        <div className="text-sm font-black uppercase tracking-[0.18em] text-muted-foreground">
          Certifications
        </div>
        <h2
          id="certifications-title"
          className="mt-3 font-heading text-4xl font-black uppercase leading-[0.94] tracking-[-0.05em] sm:text-5xl lg:text-6xl"
        >
          Proof of hands-on Linux, Kubernetes, and infrastructure depth.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          The quick cert chips are useful, but the real signal is what each
          certification covers. This section shows the operating systems,
          container, Kubernetes, and infrastructure-as-code skills each badge
          represents.
        </p>
      </div>

      <div className="mt-10 hidden md:block">
        <div
          role="tablist"
          aria-label="Certification tabs"
          className="flex flex-wrap gap-3"
        >
          {certifications.map((cert) => {
            const isActive = cert.name === activeCertification.name;

            return (
              <button
                key={cert.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`cert-panel-${cert.name}`}
                id={`cert-tab-${cert.name}`}
                onClick={() => setActiveCertName(cert.name)}
                className={cn(
                  "rounded-full border-2 border-black px-5 py-3 text-sm font-black uppercase tracking-[0.14em] shadow-[3px_3px_0_0_#21201d] transition hover:translate-x-px hover:translate-y-px hover:shadow-none",
                  isActive ? `${cert.accent} text-black` : "bg-white text-foreground",
                )}
              >
                {cert.name}
              </button>
            );
          })}
        </div>

        <Card className="neo-panel mt-6 block w-full bg-white p-6 sm:p-8">
          <div
            role="tabpanel"
            id={`cert-panel-${activeCertification.name}`}
            aria-labelledby={`cert-tab-${activeCertification.name}`}
            className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <Badge
                variant="default"
                className={cn(
                  "rounded-full border-2 border-black px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-black shadow-[2px_2px_0_0_#21201d]",
                  activeCertification.accent,
                )}
              >
                <BadgeCheck className="mr-2 size-3.5" />
                {activeCertification.issuer}
              </Badge>

              <h3 className="mt-5 font-heading text-4xl font-black uppercase tracking-[-0.05em]">
                {activeCertification.name}
              </h3>

              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-muted-foreground">
                <span className="neo-pill bg-[#fff7d1]">Issued {activeCertification.issued}</span>
                <span className="neo-pill bg-[#daf7f0]">{activeCertification.skills.length} skills highlighted</span>
              </div>

              <div className="mt-6">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                  What this proves
                </div>
                <p className="mt-3 text-base leading-7 text-foreground sm:text-lg">
                  {activeCertification.summary}
                </p>
              </div>

              <div className="mt-6">
                <Button asChild className="h-auto px-5 py-3 text-sm">
                  <a href={activeCertification.href} target="_blank" rel="noreferrer">
                    Verify credential
                    <ArrowUpRight className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <div className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                Skills covered on the badge
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeCertification.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border-2 border-black bg-[#fffaf2] px-3 py-2 text-xs font-bold shadow-[2px_2px_0_0_#21201d]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-10 grid gap-6 md:hidden">
        {certifications.map((cert) => (
          <Card key={cert.name} className="neo-panel block w-full bg-white p-6">
            <Card.Header className="p-0">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <Badge
                  variant="default"
                  className={cn(
                    "rounded-full border-2 border-black px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-black shadow-[2px_2px_0_0_#21201d]",
                    cert.accent,
                  )}
                >
                  <BadgeCheck className="mr-2 size-3.5" />
                  {cert.issuer}
                </Badge>

                <span className="neo-pill bg-[#fff7d1] text-xs font-black uppercase tracking-[0.14em] text-foreground">
                  {cert.issued}
                </span>
              </div>

              <Card.Title className="mt-5 text-3xl font-black uppercase tracking-[-0.04em]">
                {cert.name}
              </Card.Title>
              <Card.Description className="mt-3 text-base leading-7 text-muted-foreground">
                {cert.summary}
              </Card.Description>
            </Card.Header>

            <Card.Content className="mt-6 p-0">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                Skills covered on the badge
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border-2 border-black bg-[#fffaf2] px-3 py-2 text-xs font-bold shadow-[2px_2px_0_0_#21201d]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Button asChild className="h-auto px-5 py-3 text-sm">
                  <a href={cert.href} target="_blank" rel="noreferrer">
                    Verify credential
                    <ArrowUpRight className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
}
