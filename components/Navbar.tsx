"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuoteRequest = () => {
    router.push("/quote");
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Printer className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Great Memories Media</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground/80 hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-foreground/80 hover:text-primary transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-foreground/80 hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-foreground/80 hover:text-primary transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          <Button onClick={handleQuoteRequest} variant="default">
            Get Quote
          </Button>
        </div>
      </div>
    </nav>
  );
}