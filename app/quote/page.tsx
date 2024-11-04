"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, CheckCircle2 } from "lucide-react";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    numberOfPages: "",
    numberOfCopies: "",
    finalSize: "LARGE",
    bindingMethod: "SaddleStitch",
    customCover: false,
    coverPaper: "67",
    coverUV: "1",
    coverScore: "YES",
    coverOutside: "COLOR",
    coverInside: "COLOR",
    bodyPaper: "156",
    bodyPrinting: "COLOR",
    zipCode: "",
    email: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation logic here
    if (parseInt(formData.numberOfPages) < 8) {
      alert("Number of Pages must be equal to or exceed 8 pages.");
      return;
    }
    if (parseInt(formData.numberOfCopies) > 2500) {
      alert("Maximum quantity is 2,500 copies.");
      return;
    }
    // Process quote request
    console.log("Quote requested:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Your quote request has been received and is being processed. You will receive a detailed quotation at {formData.email} shortly.
              </p>
              <p className="text-muted-foreground">
                Our team typically responds within 24 business hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Get Your Print Quote</h1>
        
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="numberOfPages">Number of Pages (Including Cover)</Label>
                  <Input 
                    id="numberOfPages"
                    type="number"
                    min="8"
                    required
                    value={formData.numberOfPages}
                    onChange={(e) => setFormData({...formData, numberOfPages: e.target.value})}
                  />
                  <p className="text-sm text-muted-foreground">Minimum 8 pages</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numberOfCopies">Number of Copies</Label>
                  <Input 
                    id="numberOfCopies"
                    type="number"
                    min="1"
                    max="2500"
                    required
                    value={formData.numberOfCopies}
                    onChange={(e) => setFormData({...formData, numberOfCopies: e.target.value})}
                  />
                  <p className="text-sm text-muted-foreground">1-2,500 copies</p>
                </div>
              </div>

              {/* Size and Binding */}
              <div className="space-y-4">
                <Label>Final Size</Label>
                <RadioGroup
                  defaultValue={formData.finalSize}
                  onValueChange={(value) => setFormData({...formData, finalSize: value})}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="LARGE" id="LARGE" />
                    <Label htmlFor="LARGE">Large - Up To 8.5"x11"</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="6x9" id="6x9" />
                    <Label htmlFor="6x9">Medium - Up To 6"x9"</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="SMALL" id="SMALL" />
                    <Label htmlFor="SMALL">Small - Up To 5.5"x8.5"</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Binding Method</Label>
                <RadioGroup
                  defaultValue={formData.bindingMethod}
                  onValueChange={(value) => setFormData({...formData, bindingMethod: value})}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="SaddleStitch" id="SaddleStitch" />
                    <Label htmlFor="SaddleStitch">Saddle Stitching</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="PerfectBinding" id="PerfectBinding" />
                    <Label htmlFor="PerfectBinding">Perfect Binding</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="CoilBinding" id="CoilBinding" />
                    <Label htmlFor="CoilBinding">Spiral/Plastic Coil Binding</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              {/* Paper Selection */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Body Paper Selection</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label>Paper Type</Label>
                    <Select 
                      value={formData.bodyPaper}
                      onValueChange={(value) => setFormData({...formData, bodyPaper: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select paper type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="58">House Laser Gloss 100# TEXT</SelectItem>
                        <SelectItem value="51">House Laser Gloss 80# TEXT</SelectItem>
                        <SelectItem value="156">House Laser Gloss 70# TEXT</SelectItem>
                        <SelectItem value="63">House Laser Matte 100# TEXT</SelectItem>
                        <SelectItem value="62">House Laser Matte 80# TEXT</SelectItem>
                        <SelectItem value="59">House Opaque 100# TEXT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>Printing Type</Label>
                    <RadioGroup
                      defaultValue={formData.bodyPrinting}
                      onValueChange={(value) => setFormData({...formData, bodyPrinting: value})}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="COLOR" id="bodyColor" />
                        <Label htmlFor="bodyColor">Full Color</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="BLACK" id="bodyBlack" />
                        <Label htmlFor="bodyBlack">Monochrome (Black & White)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Ship To Zip Code</Label>
                  <Input 
                    id="zipCode"
                    required
                    maxLength={5}
                    value={formData.zipCode}
                    onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                  />
                  <p className="text-sm text-muted-foreground">U.S. Delivery Only</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <p className="text-sm text-muted-foreground">For quote copy and updates</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button type="submit" size="lg">
                  Get Quote
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-8 max-w-4xl mx-auto">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              All prices include shipping within the United States. For quantities over 2,500 or custom requirements, please contact us directly.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}