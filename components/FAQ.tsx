"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are your typical turnaround times?</AccordionTrigger>
              <AccordionContent>
                Our standard turnaround time is 2-3 business days for most products. Rush orders may be available for an additional fee. Large or complex orders may require additional time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What file formats do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept PDF, AI, EPS, PSD, and INDD files. PDF files are preferred and should be set up with proper bleed, margins, and color mode (CMYK for print).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer design services?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer professional design services for all print products. Our experienced designers can help create or modify your designs to ensure the best print results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What paper stocks are available?</AccordionTrigger>
              <AccordionContent>
                We offer a wide range of paper stocks including 16pt card stock, 100lb gloss text, 100lb matte text, and various specialty papers. Custom options are available upon request.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer shipping services?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer worldwide shipping through reliable carriers. Local pickup is also available at our facility. Rush shipping options are available for urgent orders.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What are your minimum order quantities?</AccordionTrigger>
              <AccordionContent>
                Minimum order quantities vary by product. Business cards start at 100 pieces, while other products may have different minimums. Contact us for specific product minimums.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}