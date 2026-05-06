"use client";

import { ArrowUpRight, Download, Mail, Menu } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, socialLinks } from "@/content/portfolio";

const navLinkClassName =
  "inline-flex items-center rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-semibold shadow-[3px_3px_0_0_#21201d] transition hover:translate-x-px hover:translate-y-px hover:shadow-none";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-black bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="inline-flex items-center rounded-full border-2 border-black bg-white px-5 py-3 text-lg font-black uppercase tracking-tight shadow-[4px_4px_0_0_#21201d] transition hover:translate-x-px hover:translate-y-px hover:shadow-none"
        >
          mbach.dev
        </a>

        <nav className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClassName}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/matoanbach"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-black bg-[#c1b5ff] p-3 shadow-[3px_3px_0_0_#21201d] transition hover:translate-x-px hover:translate-y-px hover:shadow-none"
            aria-label="GitHub"
          >
            <ArrowUpRight className="size-4" />
          </a>
          <Button asChild className="h-auto px-5 py-3 text-sm">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <Download className="mr-2 size-4" />
              Resume
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open navigation"
                  className="inline-flex items-center justify-center rounded-full border-2 border-black bg-white p-3 shadow-[3px_3px_0_0_#21201d]"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l-2 border-black bg-[#fffaf2] p-0 shadow-[-6px_0_0_0_#21201d]"
            >
              <SheetHeader className="border-b-2 border-black px-5 py-5">
                <SheetTitle className="text-2xl font-black uppercase tracking-tight">
                  Navigate
                </SheetTitle>
                <SheetDescription>
                  Portfolio sections, resume, and contact links.
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-4 px-5 py-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border-2 border-black bg-white px-4 py-4 text-lg font-bold shadow-[4px_4px_0_0_#21201d]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="border-t-2 border-black px-5 py-5">
                <Button asChild className="h-auto w-full px-5 py-3 text-base">
                  <a href="/resume.pdf" target="_blank" rel="noreferrer">
                    <Download className="mr-2 size-4" />
                    Download Resume
                  </a>
                </Button>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const icon =
                      link.label === "GitHub" ? (
                        <ArrowUpRight className="size-4" />
                      ) : link.label === "LinkedIn" ? (
                        <ArrowUpRight className="size-4" />
                      ) : (
                        <Mail className="size-4" />
                      );

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-semibold shadow-[3px_3px_0_0_#21201d]"
                      >
                        {icon}
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
