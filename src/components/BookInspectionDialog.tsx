import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const estates = [
  "Itura Estate",
  "Halleluyah Estates",
  "Kings Flaven",
  "Irorun Estate",
  "Pella's Court",
  "Court Royale 2",
  "Esperanza Ville Estate",
  "Vermon Estate 2",
  "Golden Citadel",
  "Pride Farm Estate",
  "Adopt a Farm Program",
];

interface BookInspectionDialogProps {
  trigger?: React.ReactNode;
  defaultEstate?: string;
}

const BookInspectionDialog = ({ trigger, defaultEstate }: BookInspectionDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [estate, setEstate] = useState(defaultEstate || "");
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone || !estate || !date) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to book an inspection.",
        variant: "destructive",
      });
      return;
    }

    const formattedDate = format(date, "PPP");
    const message = `Hello! I'd like to book a free inspection.

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Estate:* ${estate}
*Preferred Date:* ${formattedDate}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2349055777795?text=${encodedMessage}`, '_blank');

    setOpen(false);
    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your booking on WhatsApp.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8">
            Book Free Inspection
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary">Book Free Inspection</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="08012345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Select Estate</Label>
            <Select value={estate} onValueChange={setEstate} required>
              <SelectTrigger>
                <SelectValue placeholder="Choose an estate" />
              </SelectTrigger>
              <SelectContent>
                {estates.map((est) => (
                  <SelectItem key={est} value={est}>
                    {est}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Preferred Inspection Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
            <MessageCircle className="w-4 h-4 mr-2" />
            Complete Booking on WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookInspectionDialog;
