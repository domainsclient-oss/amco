
"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Download } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ThreePieceHighPressureBallValvePage() {
  const productImage = PlaceHolderImages.find(img => img.id === "product-5") || PlaceHolderImages[0];

  const specs = [
    { label: "Size", value: "DN6 - DN50" },
    { label: "Material of construction", value: "A105 / F304/L / F316/L / CF8 / CF8M / CF3 / CF3M" },
    { label: "End connection", value: "BSPF / NPTF / SW / BW" },
    { label: "Pressure rating", value: "600# / 800# / 1500#" },
    { label: "Mode of operation", value: "Lever, Actuator" },
    { label: "Manufacturing Standard", value: "ISO 17292 / API 6D / API 608" },
    { label: "Testing Standard", value: "ISO 5208 / ISO 10497 / API 607" },
  ];

  const table600Data = [
    { size: "DN8", r_f: "-", r_l: "-", r_h: "-", f_f: "-", f_l: "-", f_h: "-" },
    { size: "DN10", r_f: "-", r_l: "-", r_h: "-", f_f: "-", f_l: "-", f_h: "-" },
    { size: "DN15", r_f: "68", r_l: "128", r_h: "38", f_f: "68", f_l: "128", f_h: "38" },
    { size: "DN20", r_f: "67", r_l: "128", r_h: "39", f_f: "85", f_l: "151", f_h: "53" },
    { size: "DN25", r_f: "85", r_l: "151", r_h: "53", f_f: "95", f_l: "165", f_h: "56" },
    { size: "DN32", r_f: "95", r_l: "165", r_h: "56", f_f: "110", f_l: "202", f_h: "70" },
    { size: "DN40", r_f: "110", r_l: "202", r_h: "70", f_f: "120", f_l: "202", f_h: "74" },
    { size: "DN50", r_f: "120", r_l: "202", r_h: "74", f_f: "158", f_l: "280", f_h: "84" },
  ];

  const table800Data = [
    { size: "DN8", r_f: "-", r_l: "-", r_h: "-", f_f: "-", f_l: "-", f_h: "-" },
    { size: "DN10", r_f: "-", r_l: "-", r_h: "-", f_f: "-", f_l: "-", f_h: "-" },
    { size: "DN15", r_f: "68", r_l: "128", r_h: "38", f_f: "68", f_l: "128", f_h: "38" },
    { size: "DN20", r_f: "67", r_l: "128", r_h: "39", f_f: "85", f_l: "151", f_h: "53" },
    { size: "DN25", r_f: "85", r_l: "151", r_h: "53", f_f: "95", f_l: "165", f_h: "56" },
    { size: "DN32", r_f: "95", r_l: "165", r_h: "56", f_f: "110", f_l: "202", f_h: "70" },
    { size: "DN40", r_f: "110", r_l: "202", r_h: "70", f_f: "120", f_l: "202", f_h: "74" },
    { size: "DN50", r_f: "120", r_l: "202", r_h: "74", f_f: "158", f_l: "280", f_h: "84" },
  ];

  const table1500Data = [
    { size: "DN8", r_f: "-", r_l: "-", r_h: "-", f_f: "-", f_l: "-", f_h: "-" },
    { size: "DN10", r_f: "-", r_l: "-", r_h: "-", f_f: "-", f_l: "-", f_h: "-" },
    { size: "DN15", r_f: "68", r_l: "128", r_h: "38", f_f: "68", f_l: "128", f_h: "38" },
    { size: "DN20", r_f: "67", r_l: "128", r_h: "39", f_f: "85", f_l: "151", f_h: "53" },
    { size: "DN25", r_f: "85", r_l: "151", r_h: "53", f_f: "95", f_l: "165", f_h: "56" },
    { size: "DN32", r_f: "95", r_l: "165", r_h: "56", f_f: "110", f_l: "202", f_h: "70" },
    { size: "DN40", r_f: "110", r_l: "202", r_h: "70", f_f: "120", f_l: "202", f_h: "74" },
    { size: "DN50", r_f: "120", r_l: "202", r_h: "74", f_f: "158", f_l: "280", f_h: "84" },
  ];

  const handleDownloadCSV = () => {
    const headers = ["Specification", "Details"];
    const rows = [
      ["Product", "3 Piece Design High Pressure Ball Valve"],
      ["Category", "Ball Valve"],
      ["Title", "Floating Design"],
      ["Model", "3 Piece Design Screwed / Socket weld 600# & 800# & 1500#"],
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
    link.setAttribute("download", `3_Piece_Ball_Valve_High_Pressure_data_sheet.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="bg-neutral-50 pt-32 pb-8 px-5 md:px-[63px]">
        <div className="container mx-auto">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-medium text-foreground/60 mb-4">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="size-4" />
            <Link href="/#products" className="hover:text-secondary transition-colors">Products</Link>
            <ChevronRight className="size-4" />
            <span className="text-primary">Ball Valve</span>
          </nav>
          <p className="text-secondary font-bold uppercase tracking-wider">Floating Design</p>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2">3 Piece Design Screwed / Socket weld 600# & 800# & 1500#</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-5 md:px-[63px]" style={{ backgroundColor: '#f3f3f3bd' }}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start mb-20">
            {/* Left Column: Image */}
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white border border-border shadow-lg">
              <Image
                src={productImage.imageUrl}
                alt="3 Piece High Pressure Ball Valve"
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

          <div className="space-y-12">
            {/* Dimension Table Section - 600# */}
            <div className="bg-white rounded-[2rem] border border-border shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table className="border-collapse w-full">
                  <TableHeader>
                    <TableRow className="bg-white border-b border-neutral-300">
                      <TableHead colSpan={7} className="text-center font-bold text-primary uppercase py-6">3PC DESIGN SCREWED / SOCKETWELD 600#</TableHead>
                    </TableRow>
                    <TableRow className="bg-white border-b border-neutral-300">
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 py-4"></TableHead>
                      <TableHead colSpan={3} className="text-center font-bold text-primary border-r border-neutral-200 py-4 uppercase">REGULAR BORE</TableHead>
                      <TableHead colSpan={3} className="text-center font-bold text-primary py-4 uppercase">FULL BORE</TableHead>
                    </TableRow>
                    <TableRow className="bg-neutral-50 border-b border-neutral-300">
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4">SIZE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">FACE TO FACE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">LEVER LENGTH</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">HEIGHT</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">FACE TO FACE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">LEVER LENGTH</TableHead>
                      <TableHead className="text-center font-bold text-primary text-xs uppercase">HEIGHT</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {table600Data.map((row, idx) => (
                      <TableRow key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                        <TableCell className="font-bold text-primary text-center border-r border-neutral-100 py-4">{row.size}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.r_f}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.r_l}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.r_h}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f_f}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f_l}</TableCell>
                        <TableCell className="text-center text-foreground/80">{row.f_h}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="px-6 py-3 border-t border-neutral-100 bg-neutral-50/50">
                <p className="text-base text-foreground/50 font-medium italic text-right">
                  All dimensions are in mm
                </p>
              </div>
            </div>

            {/* Dimension Table Section - 800# */}
            <div className="bg-white rounded-[2rem] border border-border shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table className="border-collapse w-full">
                  <TableHeader>
                    <TableRow className="bg-white border-b border-neutral-300">
                      <TableHead colSpan={7} className="text-center font-bold text-primary uppercase py-6">3PC DESIGN SCREWED / SOCKETWELD 800#</TableHead>
                    </TableRow>
                    <TableRow className="bg-white border-b border-neutral-300">
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 py-4"></TableHead>
                      <TableHead colSpan={3} className="text-center font-bold text-primary border-r border-neutral-200 py-4 uppercase">REGULAR BORE</TableHead>
                      <TableHead colSpan={3} className="text-center font-bold text-primary py-4 uppercase">FULL BORE</TableHead>
                    </TableRow>
                    <TableRow className="bg-neutral-50 border-b border-neutral-300">
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4">SIZE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">FACE TO FACE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">LEVER LENGTH</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">HEIGHT</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">FACE TO FACE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">LEVER LENGTH</TableHead>
                      <TableHead className="text-center font-bold text-primary text-xs uppercase">HEIGHT</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {table800Data.map((row, idx) => (
                      <TableRow key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                        <TableCell className="font-bold text-primary text-center border-r border-neutral-100 py-4">{row.size}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.r_f}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.r_l}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.r_h}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f_f}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f_l}</TableCell>
                        <TableCell className="text-center text-foreground/80">{row.f_h}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="px-6 py-3 border-t border-neutral-100 bg-neutral-50/50">
                <p className="text-base text-foreground/50 font-medium italic text-right">
                  All dimensions are in mm
                </p>
              </div>
            </div>

            {/* Dimension Table Section - 1500# */}
            <div className="bg-white rounded-[2rem] border border-border shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table className="border-collapse w-full">
                  <TableHeader>
                    <TableRow className="bg-white border-b border-neutral-300">
                      <TableHead colSpan={7} className="text-center font-bold text-primary uppercase py-6">3PC DESIGN SCREWED / SOCKETWELD 1500#</TableHead>
                    </TableRow>
                    <TableRow className="bg-white border-b border-neutral-300">
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 py-4"></TableHead>
                      <TableHead colSpan={3} className="text-center font-bold text-primary border-r border-neutral-200 py-4 uppercase">REGULAR BORE</TableHead>
                      <TableHead colSpan={3} className="text-center font-bold text-primary py-4 uppercase">FULL BORE</TableHead>
                    </TableRow>
                    <TableRow className="bg-neutral-50 border-b border-neutral-300">
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4">SIZE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">FACE TO FACE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">LEVER LENGTH</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">HEIGHT</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">FACE TO FACE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">LEVER LENGTH</TableHead>
                      <TableHead className="text-center font-bold text-primary text-xs uppercase">HEIGHT</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {table1500Data.map((row, idx) => (
                      <TableRow key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                        <TableCell className="font-bold text-primary text-center border-r border-neutral-100 py-4">{row.size}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.r_f}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.r_l}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.r_h}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f_f}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f_l}</TableCell>
                        <TableCell className="text-center text-foreground/80">{row.f_h}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="px-6 py-3 border-t border-neutral-100 bg-neutral-50/50">
                <p className="text-base text-foreground/50 font-medium italic text-right">
                  All dimensions are in mm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
