"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Printer, 
  BookOpen, 
  Package, 
  Star, 
  ChevronRight,
  Clock,
  Shield,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleQuoteRequest = () => {
    router.push("/quote");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1598301257982-0cf014dabbcd"
              alt="Printing press"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Great Memories Media LTD
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Professional quality printing services with quick turnaround times and competitive pricing
              </p>
              <Button size="lg" onClick={handleQuoteRequest} className="mr-4">
                Get Quote <ChevronRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Printer className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Digital Printing</h3>
                  <p className="text-muted-foreground">
                    High-quality digital printing for small to medium runs with quick turnaround times
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <BookOpen className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Booklets & Catalogs</h3>
                  <p className="text-muted-foreground">
                    Professional booklet and catalog printing with various binding options
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Package className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Packaging</h3>
                  <p className="text-muted-foreground">
                    Custom packaging solutions for products of all sizes
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <Gallery />

        {/* Products Tabs Section */}
        <section id="products" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
            <Tabs defaultValue="business" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="business">Business Materials</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="packaging">Packaging</TabsTrigger>
                <TabsTrigger value="specialty">Specialty Items</TabsTrigger>
              </TabsList>
              <ScrollArea className="h-[400px] mt-8">
                <TabsContent value="business" className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Business Cards</h3>
                      <ul className="space-y-2">
                        <li>• Premium 16pt card stock</li>
                        <li>• Multiple finish options</li>
                        <li>• Fast turnaround times</li>
                        <li>• Bulk discounts available</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
                <p className="text-muted-foreground">Most orders shipped within 2-3 business days</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground">100% satisfaction guaranteed on all orders</p>
              </div>
              <div className="text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
                <p className="text-muted-foreground">High-quality papers and finishing options</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="mb-4 text-muted-foreground">
                      "Exceptional quality and service. The team went above and beyond to ensure our printing needs were met perfectly."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary font-semibold">
                          {String.fromCharCode(64 + i)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">Client Name</p>
                        <p className="text-sm text-muted-foreground">Company {i}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="quote" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with us today for a custom quote
            </p>
            <Button size="lg" variant="secondary" onClick={handleQuoteRequest}>
              Request Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}