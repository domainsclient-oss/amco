"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Download } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ThreePieceFlangedBallValveFullRangePage() {
  const productImage = PlaceHolderImages.find(img => img.id === "product-3") || PlaceHolderImages[0];

  const specs = [
    { label: "Size", value: "DN6 - DN300" },
    { label: "Material of construction", value: "A105 / F304/L / F316/L / WCB / CF8 / CF8M / CF3 / CF3M" },
    { label: "End connection", value: "FLANGED / BW" },
    { label: "Pressure rating", value: "150# / 300# / 600# / 900#" },
    { label: "Mode of operation", value: "Lever, Actuator" },
    { label: "Manufacturing Standard", value: "ISO 17292 / API 6D / API 608" },
    { label: "Testing Standard", value: "ISO 5208 / ISO 10497 / API 607" },
  ];

  const table150_300 = [
    { size: "DN8", f150fl: "", f150bw: "", d150: "", h150: "", pcd150: "", f300fl: "", f300bw: "", d300: "", h300: "", pcd300: "" },
    { size: "DN10", f150fl: "", f150bw: "", d150: "", h150: "", pcd150: "", f300fl: "", f300bw: "", d300: "", h300: "", pcd300: "" },
    { size: "DN15", f150fl: "108", f150bw: "140", d150: "90", h150: "Ø 16 X 4", pcd150: "60.3", f300fl: "140", f300bw: "140", d300: "95", h300: "Ø 16 X 4", pcd300: "66.7" },
    { size: "DN20", f150fl: "117", f150bw: "152", d150: "100", h150: "Ø 16 X 4", pcd150: "69.9", f300fl: "152", f300bw: "152", d300: "115", h300: "Ø 19 X 4", pcd300: "82.6" },
    { size: "DN25", f150fl: "127", f150bw: "165", d150: "110", h150: "Ø 16 X 4", pcd150: "79.4", f300fl: "165", f300bw: "165", d300: "125", h300: "Ø 19 X 4", pcd300: "88.9" },
    { size: "DN32", f150fl: "140", f150bw: "178", d150: "115", h150: "Ø 16 X 4", pcd150: "88.9", f300fl: "178", f300bw: "178", d300: "135", h300: "Ø 19 X 4", pcd300: "98.4" },
    { size: "DN40", f150fl: "165", f150bw: "190", d150: "125", h150: "Ø 16 X 4", pcd150: "98.4", f300fl: "190", f300bw: "190", d300: "155", h300: "Ø 22.2 X 4", pcd300: "114.3" },
    { size: "DN50", f150fl: "178", f150bw: "216", d150: "150", h150: "Ø 19 X 4", pcd150: "120.7", f300fl: "216", f300bw: "216", d300: "165", h300: "Ø 19 X 8", pcd300: "127" },
    { size: "DN65", f150fl: "190", f150bw: "241", d150: "180", h150: "Ø 19 X 4", pcd150: "139.7", f300fl: "241", f300bw: "241", d300: "190", h300: "Ø 22.2 X 8", pcd300: "149.2" },
    { size: "DN80", f150fl: "203", f150bw: "282", d150: "190", h150: "Ø 19 X 4", pcd150: "152.4", f300fl: "282", f300bw: "282", d300: "210", h300: "Ø 22.2 X 8", pcd300: "168.3" },
    { size: "DN100", f150fl: "229", f150bw: "305", d150: "230", h150: "Ø 19 X 8", pcd150: "190.5", f300fl: "305", f300bw: "305", d300: "255", h300: "Ø 22.2 X 8", pcd300: "200" },
    { size: "DN125", f150fl: "254", f150bw: "", d150: "255", h150: "Ø 22.2 X 8", pcd150: "215.9", f300fl: "", f300bw: "", d300: "280", h300: "Ø 22.2 X 8", pcd300: "235" },
    { size: "DN150", f150fl: "267", f150bw: "403", d150: "280", h150: "Ø 22.2 X 8", pcd150: "241.3", f300fl: "403", f300bw: "403", d300: "320", h300: "Ø 22.2 X 12", pcd300: "269.9" },
    { size: "DN200", f150fl: "292", f150bw: "419", d150: "345", h150: "Ø 22.2 X 8", pcd150: "298.5", f300fl: "419", f300bw: "419", d300: "380", h300: "Ø 25.4 X 12", pcd300: "330.2" },
    { size: "DN250", f150fl: "330", f150bw: "457", d150: "405", h150: "Ø 25.4 X 12", pcd150: "362", f300fl: "457", f300bw: "457", d300: "445", h300: "Ø 29 X 16", pcd300: "387.4" },
    { size: "DN300", f150fl: "356", f150bw: "502", d150: "485", h150: "Ø 25.4 X 12", pcd150: "431.8", f300fl: "502", f300bw: "502", d300: "520", h300: "Ø 32 X 16", pcd300: "450.8" },
  ];

  const table600_900 = [
    { size: "DN8", f600fl: "-", f600bw: "-", d600: "-", h600: "-", pcd600: "-", f900fl: "-", f900bw: "-", d900: "-", h900: "-", pcd900: "-" },
    { size: "DN10", f600fl: "-", f600bw: "-", d600: "-", h600: "-", pcd600: "-", f900fl: "-", f900bw: "-", d900: "-", h900: "-", pcd900: "-" },
    { size: "DN15", f600fl: "165", f600bw: "165", d600: "95", h600: "Ø 16 X 4", pcd600: "66.7", f900fl: "-", f900bw: "-", d900: "120", h900: "Ø 22.2 X 4", pcd900: "82.6" },
    { size: "DN20", f600fl: "190", f600bw: "190", d600: "115", h600: "Ø 19 X 4", pcd600: "82.6", f900fl: "-", f900bw: "-", d900: "130", h900: "Ø 22.2 X 4", pcd900: "88.9" },
    { size: "DN25", f600fl: "216", f600bw: "216", d600: "125", h600: "Ø 19 X 4", pcd600: "88.9", f900fl: "254", f900bw: "254", d900: "150", h900: "Ø 25.4 X 4", pcd900: "101.6" },
    { size: "DN32", f600fl: "229", f600bw: "229", d600: "135", h600: "Ø 19 X 4", pcd600: "98.4", f900fl: "279", f900bw: "279", d900: "160", h900: "Ø 25.4 X 4", pcd900: "111.1" },
    { size: "DN40", f600fl: "241", f600bw: "241", d600: "155", h600: "Ø 22.2 X 4", pcd600: "114.3", f900fl: "305", f900bw: "305", d900: "180", h900: "Ø 29 X 4", pcd900: "123.8" },
    { size: "DN50", f600fl: "292", f600bw: "292", d600: "165", h600: "Ø 19 X 8", pcd600: "127.0", f900fl: "368", f900bw: "368", d900: "215", h900: "Ø 25.4 X 8", pcd900: "165.1" },
    { size: "DN65", f600fl: "330", f600bw: "330", d600: "190", h600: "Ø 22.2 X 8", pcd600: "149.2", f900fl: "419", f900bw: "419", d900: "245", h900: "Ø 29 X 8", pcd900: "190.5" },
    { size: "DN80", f600fl: "356", f600bw: "356", d600: "210", h600: "Ø 22.2 X 8", pcd600: "168.3", f900fl: "381", f900bw: "381", d900: "240", h900: "Ø 25.4 X 8", pcd900: "190.5" },
    { size: "DN100", f600fl: "432", f600bw: "432", d600: "275", h600: "Ø 25.4 X 8", pcd600: "215.9", f900fl: "457", f900bw: "457", d900: "290", h900: "Ø 32 X 8", pcd900: "235" },
    { size: "DN125", f600fl: "", f600bw: "", d600: "330", h600: "Ø 29 X 8", pcd600: "266.7", f900fl: "", f900bw: "", d900: "350", h900: "Ø 35 X 8", pcd900: "279.4" },
  ];

  const handleDownloadCSV = () => {
    const headers = ["Specification", "Details"];
    const rows = [
      ["Product", "3 Piece Design Flanged Ball Valve"],
      ["Category", "Ball Valve"],
      ["Title", "Floating Design"],
      ["Model", "3 Piece Design Flanged ANSI 150#, 300#, 600# & 900#"],
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
    link.setAttribute("download", `3_Piece_Flanged_Ball_Valve_Full_Range.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
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
          <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2">3 Piece Design Flanged ANSI 150#, 300#, 600# & 900#</h1>
        </div>
      </div>

      <section className="py-12 md:py-20 px-5 md:px-[63px]" style={{ backgroundColor: '#f3f3f3bd' }}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start mb-20">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white border border-border shadow-lg">
              <Image
                src={productImage.imageUrl}
                alt="3 Piece Flanged Ball Valve"
                fill
                className="object-contain p-8 md:p-12"
                priority
              />
            </div>

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
            <div className="bg-white rounded-[2rem] border border-border shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table className="border-collapse w-full">
                  <TableHeader>
                    <TableRow className="bg-white border-b border-neutral-300">
                      <TableHead colSpan={6} className="text-center font-bold text-primary border-r border-neutral-200 uppercase py-6">3PC FLANGED END 150#</TableHead>
                      <TableHead colSpan={6} className="text-center font-bold text-primary uppercase py-6">3PC FLANGED END 300#</TableHead>
                    </TableRow>
                    <TableRow className="bg-neutral-50 border-b border-neutral-300">
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4">SIZE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">Face To Face (FL)</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">Face To Face (BW)</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">Outer Dia</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">Hole Dia x No. of Holes</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">PCD</TableHead>
                      
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4">SIZE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">Face To Face (FL)</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">Face To Face (BW)</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">Outer Dia</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">Hole Dia x No. of Holes</TableHead>
                      <TableHead className="text-center font-bold text-primary text-xs py-4 leading-tight uppercase">PCD</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {table150_300.map((row, idx) => (
                      <TableRow key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                        <TableCell className="font-bold text-primary text-center border-r border-neutral-100 py-4">{row.size}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f150fl}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f150bw}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.d150}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.h150}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-200">{row.pcd150}</TableCell>
                        
                        <TableCell className="font-bold text-primary text-center border-r border-neutral-100 py-4">{row.size}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f300fl}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f300bw}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.d300}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.h300}</TableCell>
                        <TableCell className="text-center text-foreground/80">{row.pcd300}</TableCell>
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

            <div className="bg-white rounded-[2rem] border border-border shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table className="border-collapse w-full">
                  <TableHeader>
                    <TableRow className="bg-white border-b border-neutral-300">
                      <TableHead colSpan={6} className="text-center font-bold text-primary border-r border-neutral-200 uppercase py-6">3PC FLANGED END 600#</TableHead>
                      <TableHead colSpan={6} className="text-center font-bold text-primary uppercase py-6">3PC FLANGED END 900#</TableHead>
                    </TableRow>
                    <TableRow className="bg-neutral-50 border-b border-neutral-300">
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4">SIZE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">FACE TO FACE (FL)</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">FACE TO FACE (BW)</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">OUTER DIA</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">HOLE DIA X NO. OF HOLES</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">PCD</TableHead>
                      
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4">SIZE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">FACE TO FACE (FL)</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">FACE TO FACE (BW)</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">OUTER DIA</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4 leading-tight uppercase">HOLE DIA X NO. OF HOLES</TableHead>
                      <TableHead className="text-center font-bold text-primary text-xs py-4 leading-tight uppercase">PCD</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {table600_900.map((row, idx) => (
                      <TableRow key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                        <TableCell className="font-bold text-primary text-center border-r border-neutral-100 py-4">{row.size}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f600fl}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f600bw}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.d600}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.h600}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-200">{row.pcd600}</TableCell>
                        
                        <TableCell className="font-bold text-primary text-center border-r border-neutral-100 py-4">{row.size}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f900fl}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f900bw}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.d900}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.h900}</TableCell>
                        <TableCell className="text-center text-foreground/80">{row.pcd900}</TableCell>
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
