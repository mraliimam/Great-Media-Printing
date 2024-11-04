"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "Business Cards",
    image: "https://images.unsplash.com/photo-1589041127168-bf8039d9d9cc",
    description: "Premium business cards with various finish options"
  },
  {
    title: "Brochures",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
    description: "Professional tri-fold and bi-fold brochures"
  },
  {
    title: "Catalogs",
    image: "https://images.unsplash.com/photo-1574278143308-e4929ea4407e",
    description: "High-quality product catalogs and magazines"
  },
  {
    title: "Packaging",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
    description: "Custom packaging solutions for all needs"
  },
  {
    title: "Banners",
    image: "https://images.unsplash.com/photo-1588412079929-790b9f593d8e",
    description: "Large format printing for events and promotion"
  },
  {
    title: "Marketing Materials",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb",
    description: "Comprehensive marketing material solutions"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}