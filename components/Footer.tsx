import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Printer className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Great Memories Media</span>
            </div>
            <p className="text-muted-foreground">
              Professional printing services with quick turnaround times and competitive pricing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 XYZ Street, Suite 456, NY 10001</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (111) 111-1111</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>dummy@greatmemoriesmedia.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} 
                className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} 
                className="block text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" type="email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2024 Great Memories Media Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}