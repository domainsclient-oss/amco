"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Download } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ProductDetailPage() {
  const productImage = PlaceHolderImages.find(img => img.id === "product-1") || PlaceHolderImages[0];

  const specs = [
    { label: "Size", value: "DN 8 to DN 50 (Custom sizes available)" },
    { label: "Material of construction", value: "Cast Iron / WCB / SS 304 / SS 316 (Bill of material provided on request)" },
    { label: "End connection", value: "Wafer Lugged" },
    { label: "Pressure rating", value: "PN10" },
    { label: "Mode of operation", value: "Manual Handwheel / Pneumatic / Electric Actuator" },
    { label: "Manufacturing Standard", value: "MSS SP-81" },
    { label: "Testing Standard", value: "API 598" },
    { label: "Approvals", value: "ISO 9001:2015, IBR, CE (On Request)" },
  ];

  const dimensionData = [
    { size: "DN 8", l: "67", ob: "10", l1: "131", h: "44", threading: "1/4\"", socketweld: "14.1", torque: "6.5", weight: "0.65" },
    { size: "DN10", l: "67", ob: "10", l1: "131", h: "44", threading: "3/8\"", socketweld: "17.5", torque: "6.5", weight: "0.65" },
    { size: "DN15", l: "67", ob: "10", l1: "131", h: "44", threading: "1/2\"", socketweld: "21.7", torque: "6.5", weight: "0.65" },
    { size: "DN20", l: "73", ob: "13", l1: "131", h: "47", threading: "3/4\"", socketweld: "27", torque: "6.5", weight: "0.90" },
    { size: "DN25", l: "95.5", ob: "19", l1: "155", h: "62", threading: "1\"", socketweld: "33.8", torque: "9", weight: "1.60" },
    { size: "DN32", l: "102", ob: "25", l1: "155", h: "66", threading: "1 1/4\"", socketweld: "42.5", torque: "16", weight: "2.30" },
    { size: "DN40", l: "115.5", ob: "32", l1: "190", h: "80", threading: "1 1/2\"", socketweld: "48.6", torque: "23", weight: "3.20" },
    { size: "DN50", l: "127.5", ob: "38", l1: "190", h: "82", threading: "2\"", socketweld: "61.1", torque: "34", weight: "4.20" },
  ];

  const handleDownloadCSV = () => {
    const headers = ["Specification", "Details"];
    const rows = [
      ["Product", "Knife Edge Gate Valve"],
      ["Type", "Uni Directional"],
      ["Model", "Wafer Lugged Resilient seat PN10#"],
      ...specs.map(spec => [spec.label, spec.value])
    ];
    
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Wafer_Lugged_Resilient_seat_PN10_data_sheet.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="bg-neutral-50 pt-32 pb-8">
        <div className="container mx-auto px-6 md:px-[63px]">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-medium text-foreground/60 mb-4">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="size-4" />
            <Link href="/#products" className="hover:text-secondary transition-colors">Products</Link>
            <ChevronRight className="size-4" />
            <span className="text-primary">Knife Edge Gate Valve</span>
          </nav>
          <p className="text-secondary font-bold uppercase tracking-wider">Uni Directional</p>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2">Wafer Lugged Resilient seat PN10#</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#f3f3f3bd' }}>
        <div className="container mx-auto px-6 md:px-[63px]">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start mb-20">
            {/* Left Column: Image */}
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white border border-border shadow-lg">
              <Image
                src={productImage.imageUrl}
                alt="Knife Edge Gate Valve"
                fill
                className="object-contain p-8 md:p-12"
                priority
              />
            </div>

            {/* Right Column: Specs */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6">
                {specs.map((spec, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 border-b border-border pb-4 last:border-none">
                    <span className="text-primary font-bold text-sm md:text-base md:min-w-[220px] uppercase tracking-wide">
                      {spec.label} :
                    </span>
                    <span className="text-foreground/70 text-sm md:text-base leading-relaxed">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="secondary" className="h-12 px-8 rounded-xl font-bold">
                  Request a Quote
                </Button>
                <Button 
                  variant="outline" 
                  className="h-12 px-8 rounded-xl font-bold border-primary text-primary hover:bg-neutral-100 hover:text-primary transition-colors"
                  onClick={handleDownloadCSV}
                >
                  <Download className="mr-2 size-5" /> Download Data Sheet
                </Button>
              </div>
            </div>
          </div>

          {/* Dimension Table Section */}
          <div className="bg-white rounded-[2rem] border border-border shadow-xl overflow-hidden">
            <div className="bg-[#09193e] p-6 md:p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest">DIMENSIONS (mm)</h2>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-neutral-100">
                  <TableRow className="border-b border-neutral-200">
                    <TableHead className="font-bold text-primary text-center uppercase py-6">SIZE</TableHead>
                    <TableHead className="font-bold text-primary text-center uppercase">L</TableHead>
                    <TableHead className="font-bold text-primary text-center uppercase">ØB</TableHead>
                    <TableHead className="font-bold text-primary text-center uppercase">L1</TableHead>
                    <TableHead className="font-bold text-primary text-center uppercase">H</TableHead>
                    <TableHead className="font-bold text-primary text-center uppercase">THREADING BSP/NPT (F)</TableHead>
                    <TableHead className="font-bold text-primary text-center uppercase">SOCKETWELD BORE ØA</TableHead>
                    <TableHead className="font-bold text-primary text-center uppercase">TORQUE (Nm)</TableHead>
                    <TableHead className="font-bold text-primary text-center uppercase">WEIGHT Kg.</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dimensionData.map((row, idx) => (
                    <TableRow key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                      <TableCell className="font-bold text-primary text-center py-5">{row.size}</TableCell>
                      <TableCell className="text-center text-foreground/80">{row.l}</TableCell>
                      <TableCell className="text-center text-foreground/80">{row.ob}</TableCell>
                      <TableCell className="text-center text-foreground/80">{row.l1}</TableCell>
                      <TableCell className="text-center text-foreground/80">{row.h}</TableCell>
                      <TableCell className="text-center text-foreground/80 font-medium">{row.threading}</TableCell>
                      <TableCell className="text-center text-foreground/80">{row.socketweld}</TableCell>
                      <TableCell className="text-center text-foreground/80">{row.torque}</TableCell>
                      <TableCell className="text-center text-foreground/80 font-semibold">{row.weight}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="px-6 py-3 border-t border-neutral-100 bg-neutral-50/50">
              <p className="text-sm text-foreground/50 font-medium italic text-right">
                All dimensions are in mm
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
