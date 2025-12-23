
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, ArrowRight, Banknote } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const LandBanking = () => {
    const [searchParams] = useSearchParams();
    const defaultTab = searchParams.get("tab") === "agro" ? "agro" : "buyback";

    const buyBackOfferings = [
        { duration: "6 Months", roi: "12.5%", label: "Short Term" },
        { duration: "9 Months", roi: "20%", label: "Mid Term" },
        { duration: "12 Months", roi: "30%", label: "Standard" },
        { duration: "18 Months", roi: "45%", label: "Extended" },
        { duration: "24 Months", roi: "73%", label: "Long Term" },
        { duration: "36 Months", roi: "130%", label: "Maximum" },
    ];

    const buyBackTableData = [
        { capital: "₦500,000", m6: "₦562,500", m12: "₦650,000", m18: "₦725,000", m36: "₦1,150,000" },
        { capital: "₦1,000,000", m6: "₦1,125,000", m12: "₦1,300,000", m18: "₦1,450,000", m36: "₦2,300,000" },
        { capital: "₦2,000,000", m6: "₦2,250,000", m12: "₦2,600,000", m18: "₦2,900,000", m36: "₦4,600,000" },
        { capital: "₦5,000,000", m6: "₦5,625,000", m12: "₦6,500,000", m18: "₦7,250,000", m36: "₦11,500,000" },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <ScrollReveal variant="fadeDown">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6">
                            Land Banking <br className="md:hidden" /> & Investments
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal variant="fadeUp" delay={0.2}>
                        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-2">
                            Secure your future with our Buy-Back Schemes and Agro-Real Estate opportunities.
                            Earn massive returns backed by tangible assets.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <Tabs defaultValue={defaultTab} className="w-full">
                        <div className="flex justify-center mb-12">
                            <TabsList className="grid w-full max-w-md grid-cols-2 h-14 p-1 bg-muted rounded-full">
                                <TabsTrigger value="buyback" className="rounded-full text-base md:text-lg py-3">Buy-Back Scheme</TabsTrigger>
                                <TabsTrigger value="agro" className="rounded-full text-base md:text-lg py-3">Agro-Real Estate</TabsTrigger>
                            </TabsList>
                        </div>

                        {/* Buy-Back Tab */}
                        <TabsContent value="buyback" className="space-y-12">
                            <ScrollReveal variant="fadeUp">
                                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
                                    <h2 className="text-3xl font-bold mb-4 text-primary">Pella Square Buy-Back</h2>
                                    <p className="text-lg text-muted-foreground px-2">
                                        Our Buy-Back Scheme is designed to help individuals and corporate bodies build wealth
                                        by leveraging the lucrative nature of real estate. Invest as little as ₦500,000
                                        with a guaranteed return.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {buyBackOfferings.map((offer, idx) => (
                                    <Card key={idx} className="text-center hover:scale-105 transition-transform duration-300 cursor-default bg-card shadow-sm hover:shadow-xl border-t-4 border-t-primary">
                                        <CardHeader className="p-4">
                                            <CardTitle className="text-2xl md:text-3xl font-bold text-primary">{offer.roi}</CardTitle>
                                            <CardDescription className="text-sm font-semibold text-foreground mt-2 bg-muted/50 rounded-full py-1">
                                                {offer.duration}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>

                            <ScrollReveal variant="fadeUp" delay={0.2}>
                                <div className="bg-card rounded-xl shadow-lg border overflow-hidden">
                                    <div className="p-6 bg-primary/5 border-b flex flex-col md:flex-row items-center justify-between gap-4">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <Banknote className="w-5 h-5 text-primary" /> How Much You Can Earn (ROI + Capital)
                                        </h3>
                                        <div className="text-sm text-muted-foreground bg-white px-3 py-1 rounded-full border shadow-sm">
                                            Minimum Investment: ₦500,000
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <Table>
                                            <TableHeader>
                                                <TableRow className="bg-muted/50">
                                                    <TableHead className="font-bold text-foreground min-w-[120px]">Capital</TableHead>
                                                    <TableHead className="font-bold text-primary min-w-[100px]">6 Months</TableHead>
                                                    <TableHead className="font-bold text-primary min-w-[100px]">12 Months</TableHead>
                                                    <TableHead className="font-bold text-primary min-w-[100px]">18 Months</TableHead>
                                                    <TableHead className="font-bold text-primary min-w-[100px]">36 Months</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {buyBackTableData.map((row, i) => (
                                                    <TableRow key={i} className="hover:bg-muted/20 odd:bg-muted/5">
                                                        <TableCell className="font-bold">{row.capital}</TableCell>
                                                        <TableCell>{row.m6}</TableCell>
                                                        <TableCell>{row.m12}</TableCell>
                                                        <TableCell>{row.m18}</TableCell>
                                                        <TableCell>{row.m36}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <div className="p-4 bg-muted/30 text-xs text-muted-foreground text-center border-t">
                                        * Post Dated Cheque | Insurance Coverage | Allocation Letter
                                    </div>
                                </div>
                            </ScrollReveal>
                        </TabsContent>

                        {/* Agro-Real Estate Tab */}
                        <TabsContent value="agro" className="space-y-16">
                            {/* Land Ownership Section */}
                            <ScrollReveal variant="fadeUp">
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-bold mb-4">
                                            Pride Farms Estate
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                                            Own a Land Now! <br />
                                            <span className="text-green-600">& Earn Huge Returns</span>
                                        </h2>
                                        <p className="text-lg text-muted-foreground mb-6">
                                            Secure your land today in Owode, Ofada, Ogun State. We farm on your land while you sit back and
                                            enjoy steady 18% annual returns, or let it compound and you earn 100% of your land cost in just 65 months.
                                        </p>
                                        <ul className="space-y-4 mb-8">
                                            <li className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-100">
                                                <div className="bg-green-200 p-1 rounded-full"><Check className="w-4 h-4 text-green-700" /></div>
                                                <span className="font-medium">Limited acres available</span>
                                            </li>
                                            <li className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-100">
                                                <div className="bg-green-200 p-1 rounded-full"><Check className="w-4 h-4 text-green-700" /></div>
                                                <span className="font-medium">Own your land for as low as ₦600k (1 Plot)</span>
                                            </li>
                                            <li className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-100">
                                                <div className="bg-green-200 p-1 rounded-full"><Check className="w-4 h-4 text-green-700" /></div>
                                                <span className="font-medium">Safe, secured, and verified land</span>
                                            </li>
                                        </ul>
                                        <Button
                                            size="lg"
                                            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
                                            onClick={() => window.open('https://wa.me/2349055777795?text=I want to own land in Pride Farms', '_blank')}
                                        >
                                            Buy Land Now <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </div>
                                    <div className="space-y-6">
                                        <Card className="border-green-200 bg-green-50 overflow-hidden relative">
                                            <div className="absolute top-0 right-0 bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
                                            <CardHeader className="pb-2 text-center pt-8">
                                                <CardTitle className="text-green-800 text-xl uppercase tracking-wide">1 Plot Package</CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-center pb-8">
                                                <div className="text-5xl font-bold text-green-700 mb-2">₦600K</div>
                                                <p className="text-green-600 text-sm">Outright Payment</p>
                                            </CardContent>
                                        </Card>
                                        <Card className="border-green-200 bg-emerald-50 overflow-hidden relative">
                                            <div className="absolute top-0 right-0 bg-emerald-200 text-emerald-800 text-xs font-bold px-3 py-1 rounded-bl-lg">PREMIUM</div>
                                            <CardHeader className="pb-2 text-center pt-8">
                                                <CardTitle className="text-emerald-800 text-xl uppercase tracking-wide">1 Acre Package (6 Plots)</CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-center pb-8">
                                                <div className="text-5xl font-bold text-emerald-700 mb-2">₦3.5M</div>
                                                <p className="text-emerald-600 text-sm">Bulk Purchase Discount</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Farm Investment Section */}
                            <ScrollReveal variant="fadeUp" delay={0.2}>
                                <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-12 shadow-2xl overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                                    <div className="md:flex justify-between items-start mb-12 relative z-10">
                                        <div className="max-w-2xl">
                                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">Pella Farm Investment</h2>
                                            <p className="text-gray-300 text-lg leading-relaxed">
                                                Our farm investment plan is structured to help investors grow their capital steadily while enjoying substantial returns.
                                                Earn 45% profit every 13 months. The plan runs on a 5-year investment cycle with full capital returned at the end.
                                            </p>
                                        </div>
                                        <div className="mt-8 md:mt-0 bg-white text-slate-900 p-6 rounded-2xl text-center min-w-[200px] shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                                            <div className="text-5xl md:text-6xl font-bold text-green-600">45%</div>
                                            <div className="font-bold text-slate-600 mt-2 uppercase tracking-wide text-sm">Return Every 13th Month</div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-800/80 backdrop-blur rounded-xl overflow-hidden border border-slate-700 relative z-10">
                                        <div className="p-4 bg-green-600 font-bold text-center text-lg uppercase tracking-wider">How Much You Can Earn (Agro-Investment)</div>
                                        <div className="overflow-x-auto">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow className="border-slate-700 hover:bg-slate-700">
                                                        <TableHead className="text-gray-300 min-w-[120px]">Capital</TableHead>
                                                        <TableHead className="text-green-400 min-w-[100px]">13 Months</TableHead>
                                                        <TableHead className="text-green-400 min-w-[100px]">26 Months</TableHead>
                                                        <TableHead className="text-green-400 min-w-[100px]">39 Months</TableHead>
                                                        <TableHead className="text-green-400 min-w-[100px]">52 Months</TableHead>
                                                        <TableHead className="text-white bg-green-700/50 min-w-[140px]">65 Months (Total)</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow className="border-slate-700 hover:bg-slate-700/50">
                                                        <TableCell className="font-bold text-white">₦500,000</TableCell>
                                                        <TableCell>₦225,000</TableCell>
                                                        <TableCell>₦225,000</TableCell>
                                                        <TableCell>₦225,000</TableCell>
                                                        <TableCell>₦225,000</TableCell>
                                                        <TableCell className="bg-green-700/20 font-bold text-green-300">₦725,000</TableCell>
                                                    </TableRow>
                                                    <TableRow className="border-slate-700 hover:bg-slate-700/50">
                                                        <TableCell className="font-bold text-white">₦1,000,000</TableCell>
                                                        <TableCell>₦450,000</TableCell>
                                                        <TableCell>₦450,000</TableCell>
                                                        <TableCell>₦450,000</TableCell>
                                                        <TableCell>₦450,000</TableCell>
                                                        <TableCell className="bg-green-700/20 font-bold text-green-300">₦1,450,000</TableCell>
                                                    </TableRow>
                                                    <TableRow className="border-slate-700 hover:bg-slate-700/50">
                                                        <TableCell className="font-bold text-white">₦3,000,000</TableCell>
                                                        <TableCell>₦1,350,000</TableCell>
                                                        <TableCell>₦1,350,000</TableCell>
                                                        <TableCell>₦1,350,000</TableCell>
                                                        <TableCell>₦1,350,000</TableCell>
                                                        <TableCell className="bg-green-700/20 font-bold text-green-300">₦4,350,000</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            <section className="py-20 bg-muted/20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Start Your Investment Journey</h2>
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-xl px-10 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                        onClick={() => window.open('https://wa.me/2349055777795', '_blank')}
                    >
                        Contact Us to Invest
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandBanking;
