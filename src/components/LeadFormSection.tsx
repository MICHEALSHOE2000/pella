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
  mode?: "default" | "investment" | "court-royale";
}

const FORMSPREE_INVESTMENT_ENDPOINT = "https://formspree.io/f/mojpddyj";
const FORMSPREE_COURT_ENDPOINT = "https://formspree.io/f/mreoqkgq";

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
  const [submitting, setSubmitting] = useState(false);

  const [currentLocation, setCurrentLocation] = useState("");
  const [interest, setInterest] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [contactPreference, setContactPreference] = useState("");
  const [baseLocation, setBaseLocation] = useState("");
  const [wantOption, setWantOption] = useState("");
  const [plotInterest, setPlotInterest] = useState("");
  const [inspectionPreference, setInspectionPreference] = useState("");

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setNote("");
    setCurrentLocation("");
    setInterest("");
    setBudget("");
    setTimeline("");
    setContactPreference("");
    setBaseLocation("");
    setWantOption("");
    setPlotInterest("");
    setInspectionPreference("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    if (mode === "court-royale" && (!baseLocation || !wantOption || !plotInterest || !budget || !timeline || !inspectionPreference)) {
      toast({
        title: "Please complete your preferences",
        description: "All estate preference fields are required.",
        variant: "destructive",
      });
      return;
    }

    if (mode === "default") {
      const message = `Hello, I'm interested in ${estateName}.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nNote: ${note || "N/A"}`;

      window.open(`https://wa.me/2349055777795?text=${encodeURIComponent(message)}`, "_blank");
      toast({
        title: "Redirecting to WhatsApp",
        description: "Please complete your enquiry on WhatsApp.",
      });
      return;
    }

    try {
      setSubmitting(true);

      const payload = mode === "court-royale"
        ? {
            estateName,
            formType: "Court Royale Lead",
            fullName: name,
            phoneNumber: phone,
            emailAddress: email,
            basedIn: baseLocation,
            objective: wantOption,
            plotInterest,
            budget,
            timeline,
            inspection: inspectionPreference,
            additionalNote: note || "N/A",
          }
        : {
            estateName,
            formType: "Pride Farms Investment Lead",
            fullName: name,
            phoneNumber: phone,
            emailAddress: email,
            currentLocation,
            investmentInterest: interest,
            budget,
            timeline,
            contactPreference,
            additionalNote: note || "N/A",
          };

      const response = await fetch(mode === "court-royale" ? FORMSPREE_COURT_ENDPOINT : FORMSPREE_INVESTMENT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "Submission received",
        description: mode === "court-royale" ? "Thank you. Our sales advisor will contact you shortly." : "Thank you. Our investment advisor will contact you shortly.",
      });
      resetForm();
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const isInvestment = mode === "investment";
  const isCourtRoyale = mode === "court-royale";

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
              <form
                onSubmit={handleSubmit}
                action={isInvestment || isCourtRoyale ? (isCourtRoyale ? FORMSPREE_COURT_ENDPOINT : FORMSPREE_INVESTMENT_ENDPOINT) : undefined}
                method={isInvestment || isCourtRoyale ? "POST" : undefined}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div className="space-y-2">
                  <Label htmlFor="lead-name">Full Name</Label>
                  <Input id="lead-name" name="fullName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lead-phone">Phone Number (WhatsApp Preferred)</Label>
                  <Input id="lead-phone" name="phoneNumber" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="08012345678" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="lead-email">Email Address</Label>
                  <Input id="lead-email" name="emailAddress" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                </div>

                {isInvestment && (
                  <>
                    <div className="space-y-2">
                      <Label>Current Location (Nigeria / Abroad)</Label>
                      <Select value={currentLocation} onValueChange={setCurrentLocation}>
                        <SelectTrigger><SelectValue placeholder="Select location" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Nigeria">Nigeria</SelectItem>
                          <SelectItem value="Abroad">Abroad</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Investment Interest</Label>
                      <Select value={interest} onValueChange={setInterest}>
                        <SelectTrigger><SelectValue placeholder="Choose one" /></SelectTrigger>
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
                        <SelectTrigger><SelectValue placeholder="Select budget" /></SelectTrigger>
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
                        <SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger>
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
                        <SelectTrigger><SelectValue placeholder="Choose preferred contact" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                          <SelectItem value="Phone Call">Phone Call</SelectItem>
                          <SelectItem value="Email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {isCourtRoyale && (
                  <>
                    <div className="space-y-2">
                      <Label>Where are you based?</Label>
                      <Select value={baseLocation} onValueChange={setBaseLocation}>
                        <SelectTrigger><SelectValue placeholder="Select location" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Lagos">Lagos</SelectItem>
                          <SelectItem value="Other State">Other State</SelectItem>
                          <SelectItem value="Abroad">Abroad</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>What do you want?</Label>
                      <Select value={wantOption} onValueChange={setWantOption}>
                        <SelectTrigger><SelectValue placeholder="Select an option" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Buy and build immediately">Buy and build immediately</SelectItem>
                          <SelectItem value="Buy and hold (land banking)">Buy and hold (land banking)</SelectItem>
                          <SelectItem value="Buy and resell later">Buy and resell later</SelectItem>
                          <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Plot interest</Label>
                      <Select value={plotInterest} onValueChange={setPlotInterest}>
                        <SelectTrigger><SelectValue placeholder="Choose plot size" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="250sqm">250sqm</SelectItem>
                          <SelectItem value="500sqm">500sqm</SelectItem>
                          <SelectItem value="Multiple plots">Multiple plots</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Budget</Label>
                      <Select value={budget} onValueChange={setBudget}>
                        <SelectTrigger><SelectValue placeholder="Select budget" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="₦800K – ₦2M">₦800K – ₦2M</SelectItem>
                          <SelectItem value="₦2M – ₦5M">₦2M – ₦5M</SelectItem>
                          <SelectItem value="₦5M+">₦5M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Timeline</Label>
                      <Select value={timeline} onValueChange={setTimeline}>
                        <SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Ready now">Ready now</SelectItem>
                          <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                          <SelectItem value="Just exploring">Just exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Inspection — Would you like to inspect the site?</Label>
                      <Select value={inspectionPreference} onValueChange={setInspectionPreference}>
                        <SelectTrigger><SelectValue placeholder="Select inspection preference" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                          <SelectItem value="Virtual inspection">Virtual inspection</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="lead-note">Message (Optional)</Label>
                  <Textarea id="lead-note" name="additionalNote" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Tell us your preferred plan or budget" />
                </div>
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button type="submit" disabled={submitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {submitting ? "Submitting..." : isCourtRoyale ? "Get Price Details" : "Submit Enquiry"}
                  </Button>
                  {mode === "default" && (
                    <Button type="button" variant="outline" className="w-full" onClick={() => window.open("https://wa.me/2349055777795", "_blank")}>Chat on WhatsApp</Button>
                  )}
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
