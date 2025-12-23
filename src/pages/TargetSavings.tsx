
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Calendar, Wallet } from "lucide-react";

const TargetSavings = () => {
    const offerings = [
        { duration: "3 Months", roi: "1.6%", color: "bg-amber-700" },
        { duration: "6 Months", roi: "4%", color: "bg-red-600" },
        { duration: "9 Months", roi: "6.5%", color: "bg-blue-900" },
        { duration: "12 Months", roi: "10%", color: "bg-emerald-800" },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <ScrollReveal variant="fadeDown">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6">
                                <span className="text-gradient-blue">Target Savings</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal variant="fadeUp" delay={0.2}>
                            <p className="text-lg md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto px-4">
                                Build wealth by taking advantage of a guaranteed ROI when you save weekly or monthly.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal variant="scale" delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                                <Button
                                    size="lg"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 blue-glow font-bold text-lg px-6 md:px-10 py-6 md:py-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto"
                                    onClick={() => window.open('https://wa.me/2349055777795?text=I want to start Target Savings', '_blank')}
                                >
                                    Start Saving Today
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Offerings Section */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <ScrollReveal variant="fadeUp">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our ROI Offerings</h2>
                            <p className="text-lg text-muted-foreground">Choose a duration that fits your financial goals</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {offerings.map((offer, index) => (
                            <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
                                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-none shadow-md overflow-hidden group hover:-translate-y-2">
                                    <div className={`h-2 ${offer.color} w-full`} />
                                    <CardHeader className="text-center pb-2">
                                        <CardTitle className="text-4xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">{offer.roi}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <div className={`inline-block px-4 py-1 rounded-full text-white text-sm font-medium ${offer.color} shadow-sm`}>
                                            {offer.duration} Investment
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bi-Monthly Scheme Section */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <ScrollReveal variant="slideRight">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl blur-xl" />
                                <div className="relative bg-card p-6 md:p-8 rounded-xl border shadow-xl">
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                                        What's Pella Square <br />
                                        <span className="text-primary">BI-MONTHLY SCHEME?</span>
                                    </h3>
                                    <p className="text-lg text-muted-foreground mb-6">
                                        Our bi-monthly investment scheme allows investors to withdraw 22% of their total ROI every two months
                                        throughout the investment period.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 rounded-full bg-primary/10 shrink-0">
                                                <TrendingUp className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">Steady Returns</h4>
                                                <p className="text-sm text-muted-foreground">Enjoy a stream of income before maturity.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 rounded-full bg-primary/10 shrink-0">
                                                <Calendar className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">12 Months+ Only</h4>
                                                <p className="text-sm text-muted-foreground">Available for investments of 12 months or longer.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 rounded-full bg-primary/10 shrink-0">
                                                <Wallet className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">Flexible Access</h4>
                                                <p className="text-sm text-muted-foreground">Withdraw 22% of total ROI every two months.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal variant="slideLeft" delay={0.2}>
                            <div className="space-y-6">
                                <div className="bg-primary/5 p-6 md:p-8 rounded-lg border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold mb-4 text-primary">How This Works</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                                            <p className="text-foreground/80">Instead of waiting for the full maturity period, you can withdraw 22% of your total ROI every two months.</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                                            <p className="text-foreground/80">This applies only to investments of 12 months or longer.</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                                            <p className="text-foreground/80">Enjoy a steady stream of income while your investment continues to grow!</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <ScrollReveal variant="fadeUp">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Start Saving?</h2>
                        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Contact us today to set up your target savings plan and secure your financial future.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="font-bold text-lg px-8 py-6 rounded-full w-full sm:w-auto hover:bg-white hover:text-primary transition-colors shadow-lg"
                                onClick={() => window.open('tel:09055777795', '_self')}
                            >
                                Call 09055777795
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-lg px-8 py-6 rounded-full w-full sm:w-auto transition-all shadow-lg text-white"
                                onClick={() => window.open('https://wa.me/2349055777795', '_blank')}
                            >
                                Chat on WhatsApp
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TargetSavings;
