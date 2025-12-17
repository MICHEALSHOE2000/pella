import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const occupations = [
  "Corporate Worker",
  "Stay-at-home Mum",
  "NYSC / Corper",
  "Student",
  "Entrepreneur",
  "Other",
];

const WealthTitansForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !city || !occupation) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit your application.",
        variant: "destructive",
      });
      return;
    }

    const message = `Hello! I want to join Wealth Titans.

*Full Name:* ${name}
*Email:* ${email}
*WhatsApp:* ${phone}
*State/City:* ${city}
*Occupation:* ${occupation}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2349055777795?text=${encodedMessage}`, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your registration on WhatsApp.",
    });
  };

  return (
    <Card className="max-w-lg mx-auto glass-panel border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-center text-primary">
          Marketer Recruitment Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="wt-name">Full Name</Label>
            <Input
              id="wt-name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="wt-email">Email Address</Label>
            <Input
              id="wt-email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="wt-phone">WhatsApp Number</Label>
            <Input
              id="wt-phone"
              type="tel"
              placeholder="09099887766"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="wt-city">State or City</Label>
            <Input
              id="wt-city"
              placeholder="Lagos, Abuja, Ibadan..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Current Occupation</Label>
            <Select value={occupation} onValueChange={setOccupation} required>
              <SelectTrigger>
                <SelectValue placeholder="Select occupation" />
              </SelectTrigger>
              <SelectContent>
                {occupations.map((occ) => (
                  <SelectItem key={occ} value={occ}>
                    {occ}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <MessageCircle className="w-4 h-4 mr-2" />
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default WealthTitansForm;
