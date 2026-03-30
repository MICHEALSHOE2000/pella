import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface LeadFormSectionProps {
  estateName: string;
  title?: string;
  description?: string;
  mode?: "default" | "investment";
}

const LeadFormSection = ({
  estateName,
  title,
  description,
  mode = "default",
}: LeadFormSectionProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const [currentLocation, setCurrentLocation] = useState("");
  const [interest, setInterest] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [contactPreference, setContactPreference] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !email) {
      toast({
        title: "Please complete required fields",
        description: "Name, phone number, and email are required.",
        variant: "destructive",
      });
      return;
    }

    if (mode === "investment" && (!currentLocation || !interest || !budget || !timeline || !contactPreference)) {
      toast({
        title: "Please complete investment details",
        description: "All investment preference fields are required.",
        variant: "destructive",
      });
      return;
    }

    const message = mode === "investment"
      ? `Hello, I'm interested in ${estateName}.\n\nFull Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCurrent Location: ${currentLocation}\nInvestment Interest: ${interest}\nBudget: ${budget}\nTimeline: ${timeline}\nContact Preference: ${contactPreference}\nAdditional Note: ${note || "N/A"}`
      : `Hello, I'm interested in ${estateName}.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nNote: ${note || "N/A"}`;

    window.open(`https://wa.me/2349055777795?text=${encodeURIComponent(message)}`, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Please complete your enquiry on WhatsApp.",
    });
  };

  return (
    <section id="lead-form" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-panel">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-bold mb-3">{title || "Request Details"}</h2>
              <p className="text-foreground/70 mb-8">
                {description || `Speak with our sales team about pricing, payment plans, and available units for ${estateName}.`}
              </p>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="lead-name">Full Name</Label>
                  <Input id="lead-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lead-phone">Phone Number (WhatsApp Preferred)</Label>
                  <Input id="lead-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="08012345678" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="lead-email">Email Address</Label>
                  <Input id="lead-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                </div>

                {mode === "investment" && (
                  <>
                    <div className="space-y-2">
                      <Label>Current Location (Nigeria / Abroad)</Label>
                      <Select value={currentLocation} onValueChange={setCurrentLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Nigeria">Nigeria</SelectItem>
                          <SelectItem value="Abroad">Abroad</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Investment Interest</Label>
                      <Select value={interest} onValueChange={setInterest}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose one" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Passive income">Passive income</SelectItem>
                          <SelectItem value="Long-term land investment">Long-term land investment</SelectItem>
                          <SelectItem value="Agricultural business">Agricultural business</SelectItem>
                          <SelectItem value="Not sure yet (Need guidance)">Not sure yet (Need guidance)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Budget</Label>
                      <Select value={budget} onValueChange={setBudget}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="₦500K – ₦1M">₦500K – ₦1M</SelectItem>
                          <SelectItem value="₦1M – ₦3M">₦1M – ₦3M</SelectItem>
                          <SelectItem value="₦3M+">₦3M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Timeline</Label>
                      <Select value={timeline} onValueChange={setTimeline}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Immediately">Immediately</SelectItem>
                          <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                          <SelectItem value="Just exploring">Just exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Contact Preference</Label>
                      <Select value={contactPreference} onValueChange={setContactPreference}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose preferred contact" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                          <SelectItem value="Phone Call">Phone Call</SelectItem>
                          <SelectItem value="Email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="lead-note">Message (Optional)</Label>
                  <Textarea id="lead-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Tell us your preferred plan or budget" />
                </div>
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get Full Investment Details
                  </Button>
                  <Button type="button" variant="outline" className="w-full" onClick={() => window.open("https://wa.me/2349055777795", "_blank")}>Chat on WhatsApp</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
