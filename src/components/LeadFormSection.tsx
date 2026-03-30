import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface LeadFormSectionProps {
  estateName: string;
}

const LeadFormSection = ({ estateName }: LeadFormSectionProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

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

    const message = `Hello, I'm interested in ${estateName}.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nNote: ${note || "N/A"}`;
    window.open(`https://wa.me/2349055777795?text=${encodeURIComponent(message)}`, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Please complete your enquiry on WhatsApp.",
    });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-panel">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-bold mb-3">Request Details</h2>
              <p className="text-foreground/70 mb-8">Speak with our sales team about pricing, payment plans, and available units for {estateName}.</p>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="lead-name">Full Name</Label>
                  <Input id="lead-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lead-phone">Phone Number</Label>
                  <Input id="lead-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="08012345678" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="lead-email">Email Address</Label>
                  <Input id="lead-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="lead-note">Message (Optional)</Label>
                  <Textarea id="lead-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Tell us your preferred plan or budget" />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Submit Enquiry
                  </Button>
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
