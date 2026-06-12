"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { productNavigationData } from "@/lib/navigation-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Products", href: "/#products", hasMegaMenu: true },
  { name: "Certificates", href: "/#certificates" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700 ease-in-out border-b px-5 md:px-[63px]",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-border" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className={cn(
        "flex items-center justify-between transition-all duration-500 w-full",
        scrolled 
          ? "h-16 md:h-20" 
          : "py-6"
      )}>
        <div className="transition-all duration-500 ease-in-out flex items-center">
          <Link href="/" className="flex items-center group">
            <div className="relative w-20 h-10 md:w-28 md:h-14 transition-transform group-hover:scale-105">
              <Image
                src="/amco-logo.jpg"
                alt="AMCO Valves Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        <div className={cn(
          "hidden md:flex items-center gap-6 lg:gap-8 transition-all duration-700 ease-in-out h-full",
          !scrolled && "bg-white px-8 py-3 h-auto rounded-2xl rounded-bl-[40px] shadow-lg border border-white/20"
        )}>
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative h-full flex items-center group/navitem"
              onMouseEnter={() => link.hasMegaMenu && setIsMegaMenuOpen(true)}
              onMouseLeave={() => link.hasMegaMenu && setIsMegaMenuOpen(false)}
            >
              <Link
                href={link.href}
                className="text-[14px] lg:text-[16px] font-extrabold text-primary transition-colors hover:text-secondary whitespace-nowrap flex items-center gap-1 h-full py-2"
              >
                {link.name}
                {link.hasMegaMenu && <ChevronDown className={cn("size-4 transition-transform duration-300", isMegaMenuOpen && "rotate-180")} />}
              </Link>
            </div>
          ))}
          <div className="flex items-center h-full">
            <Button variant="secondary" size="sm" className="rounded-xl font-extrabold px-6 h-10 text-[14px] lg:text-[16px]" asChild>
              <Link href="/#contact">Get a Quote</Link>
            </Button>
          </div>
        </div>

        <div className="md:hidden flex items-center h-full">
          <button
            className={cn(
              "p-2 rounded-xl transition-all duration-500 ease-in-out text-primary",
              scrolled 
                ? "bg-primary/5" 
                : "bg-white shadow-md border-white/20 border"
            )}
            onClick={() => setIsOpen(true)}
          >
            <Menu className="size-9" />
          </button>
        </div>
      </div>

      {/* Full-width Desktop Mega Menu Overlay */}
      <div 
        className={cn(
          "absolute left-0 w-full transition-all duration-300 origin-top z-50 hidden md:block",
          scrolled ? "top-full" : "top-[calc(100%-32px)] pt-[32px]",
          isMegaMenuOpen ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto" : "opacity-0 -translate-y-4 scale-y-0 pointer-events-none"
        )}
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <div className="bg-white shadow-2xl border-t border-border">
          {/* Added horizontal padding to prevent sticking to screen edges */}
          <div className="max-w-[1440px] mx-auto p-8 lg:p-10 px-12 md:px-24">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
              {productNavigationData.map((category) => (
                <div key={category.title} className="space-y-4">
                  <h4 className="text-secondary font-bold text-[12px] uppercase tracking-wider border-b border-secondary/20 pb-2 leading-tight min-h-[40px] flex items-end">
                    {category.title}
                  </h4>
                  <div className="space-y-6">
                    {category.subCategories.map((sub) => (
                      <div key={sub.name} className="space-y-2">
                        <h5 className="text-primary font-bold text-[13px] flex items-center gap-2">
                          <ChevronRight className="size-3 text-secondary shrink-0" />
                          {sub.name}
                        </h5>
                        <ul className="space-y-1.5 pl-5">
                          {sub.products.map((product) => (
                            <li key={product.name}>
                              <Link 
                                href={product.href} 
                                className="text-foreground/60 hover:text-secondary text-[12px] lg:text-[13px] transition-colors block leading-tight"
                                onClick={() => setIsMegaMenuOpen(false)}
                              >
                                {product.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 bottom-0 right-0 w-[85vw] bg-white z-[70] md:hidden transition-transform duration-500 ease-in-out shadow-2xl flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-5 flex items-center justify-between border-b border-border bg-white shrink-0">
          <div className="relative w-24 h-12">
            <Image
              src="/amco-logo.jpg"
              alt="AMCO Valves Logo"
              fill
              className="object-contain"
            />
          </div>
          <button onClick={() => setIsOpen(false)} className="text-primary p-2">
            <X className="size-8" />
          </button>
        </div>

        <div className="flex flex-col py-4 bg-white flex-1 overflow-y-auto px-5">
          <Accordion type="single" collapsible className="w-full">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasMegaMenu ? (
                  <AccordionItem value={link.name} className="border-b border-border">
                    <AccordionTrigger className="py-5 text-lg font-bold text-primary uppercase hover:no-underline">
                      {link.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2 pb-4">
                        {productNavigationData.map((category) => (
                          <div key={category.title} className="space-y-4">
                            <h4 className="text-secondary font-bold text-xs uppercase tracking-wider bg-secondary/5 px-3 py-1 rounded">
                              {category.title}
                            </h4>
                            <div className="space-y-5 pl-2">
                              {category.subCategories.map((sub) => (
                                <div key={sub.name} className="space-y-2">
                                  <h5 className="text-primary font-bold text-[13px] flex items-center gap-2">
                                    <ChevronRight className="size-3 text-secondary shrink-0" />
                                    {sub.name}
                                  </h5>
                                  <ul className="space-y-2 pl-5">
                                    {sub.products.map((product) => (
                                      <li key={product.name}>
                                        <Link 
                                          href={product.href} 
                                          className="text-foreground/60 text-sm block py-1 leading-tight"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          {product.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex py-5 text-lg font-bold text-primary uppercase border-b border-border hover:bg-muted/30 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </Accordion>
        </div>

        <div className="p-8 border-t border-border bg-white mt-auto shrink-0">
          <Button variant="secondary" size="lg" className="w-full rounded-xl font-bold uppercase tracking-wider h-14" asChild onClick={() => setIsOpen(false)}>
            <Link href="/#contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
