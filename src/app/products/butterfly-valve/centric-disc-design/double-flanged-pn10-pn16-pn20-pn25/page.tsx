
"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Download } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function DoubleFlangedButterflyValvePage() {
  const productImage = PlaceHolderImages.find(img => img.id === "product-3") || PlaceHolderImages[0];

  const specs = [
    { label: "Size", value: "DN40 - DN1000" },
    { label: "Material of construction", value: "CI / DI / WCB / CF8 / CF8M / CF3 / CF3M / DSS / SDS / AL. BR" },
    { label: "Seat / Liner", value: "BUNA-N, EPDM, SILICON, VITON" },
    { label: "End connection", value: "Flanged" },
    { label: "Pressure rating", value: "PN10# / PN16# / PN20# / PN25#" },
    { label: "Mode of operation", value: "Lever, Gear, Actuator" },
    { label: "Manufacturing Standard", value: "API 609 (Cat.A)" },
    { label: "Testing Standard", value: "API 598" },
  ];

  const dimensionData = [
    { size: "DN40", f: "106", th: "101", bh: "55", ll: "180", gear: "175" },
    { size: "DN50", f: "108", th: "113", bh: "59", ll: "180", gear: "175" },
    { size: "DN65", f: "112", th: "121", bh: "67", ll: "180", gear: "175" },
    { size: "DN80", f: "114", th: "128", bh: "75", ll: "180", gear: "175" },
    { size: "DN100", f: "127", th: "146", bh: "94", ll: "270", gear: "175" },
    { size: "DN125", f: "140", th: "158", bh: "108", ll: "270", gear: "175" },
    { size: "DN150", f: "140", th: "174", bh: "120", ll: "270", gear: "175" },
    { size: "DN200", f: "152", th: "198", bh: "147", ll: "320", gear: "250" },
    { size: "DN250", f: "165", th: "245", bh: "200", ll: "550", gear: "250" },
    { size: "DN300", f: "178", th: "284", bh: "268", ll: "550", gear: "350" },
    { size: "DN350", f: "190", th: "318", bh: "291", ll: "-", gear: "350" },
    { size: "DN400", f: "216", th: "360", bh: "310", ll: "-", gear: "500" },
    { size: "DN450", f: "222", th: "390", bh: "334", ll: "-", gear: "500" },
    { size: "DN500", f: "229", th: "410", bh: "362", ll: "-", gear: "500" },
    { size: "DN600", f: "267", th: "504", bh: "432", ll: "-", gear: "600" },
    { size: "DN700", f: "292", th: "580", bh: "-", ll: "-", gear: "-" },
    { size: "DN750", f: "318", th: "595", bh: "-", ll: "-", gear: "-" },
    { size: "DN800", f: "318", th: "670", bh: "-", ll: "-", gear: "-" },
    { size: "DN900", f: "330", th: "705", bh: "-", ll: "-", gear: "-" },
    { size: "DN1000", f: "410", th: "782", bh: "-", ll: "-", gear: "-" },
  ];

  const flangeSuitabilityData = [
    { size: "DN40", p150: "98.4", d150: "16", n150: "4", pPN10: "110", dPN10: "18", nPN10: "4" },
    { size: "DN50", p150: "120.7", d150: "19", n150: "4", pPN10: "125", dPN10: "18", nPN10: "4" },
    { size: "DN65", p150: "139.7", d150: "19", n150: "4", pPN10: "145", dPN10: "18", nPN10: "4" },
    { size: "DN80", p150: "152.4", d150: "19", n150: "4", pPN10: "160", dPN10: "18", nPN10: "8" },
    { size: "DN100", p150: "190.5", d150: "19", n150: "8", pPN10: "180", dPN10: "18", nPN10: "8" },
    { size: "DN125", p150: "215.9", d150: "22.2", n150: "8", pPN10: "210", dPN10: "18", nPN10: "8" },
    { size: "DN150", p150: "241.3", d150: "22.2", n150: "8", pPN10: "240", dPN10: "22", nPN10: "8" },
    { size: "DN200", p150: "298.5", d150: "22.2", n150: "8", pPN10: "295", dPN10: "22", nPN10: "8" },
    { size: "DN250", p150: "362.0", d150: "25.4", n150: "12", pPN10: "350", dPN10: "22", nPN10: "12" },
    { size: "DN300", p150: "431.8", d150: "25.4", n150: "12", pPN10: "400", dPN10: "22", nPN10: "12" },
    { size: "DN350", p150: "476.3", d150: "29", n150: "12", pPN10: "460", dPN10: "22", nPN10: "16" },
    { size: "DN400", p150: "539.8", d150: "29", n150: "16", pPN10: "515", dPN10: "26", nPN10: "16" },
    { size: "DN450", p150: "577.9", d150: "32", n150: "16", pPN10: "565", dPN10: "26", nPN10: "20" },
    { size: "DN500", p150: "635.0", d150: "32", n150: "20", pPN10: "620", dPN10: "26", nPN10: "20" },
    { size: "DN600", p150: "749.3", d150: "35", n150: "20", pPN10: "725", dPN10: "30", nPN10: "20" },
    { size: "DN700", p150: "863.6", d150: "35", n150: "28", pPN10: "840", dPN10: "30", nPN10: "24" },
    { size: "DN750", p150: "914.4", d150: "35", n150: "28", pPN10: "-", dPN10: "-", nPN10: "-" },
    { size: "DN800", p150: "977.9", d150: "41.2", n150: "28", pPN10: "950", dPN10: "33", nPN10: "24" },
    { size: "DN900", p150: "1085.8", d150: "41.2", n150: "32", pPN10: "1050", dPN10: "33", nPN10: "24" },
    { size: "DN1000", p150: "1200.2", d150: "41.2", n150: "36", pPN10: "1160", dPN10: "36", nPN10: "28" },
  ];

  const pn16JisSuitabilityData = [
    { size: "DN40", p16: "110", d16: "18", n16: "4", pJIS: "95", dJIS: "15", nJIS: "4" },
    { size: "DN50", p16: "125", d16: "18", n16: "4", pJIS: "105", dJIS: "15", nJIS: "4" },
    { size: "DN65", p16: "145", d16: "18", n16: "4", pJIS: "130", dJIS: "15", nJIS: "4" },
    { size: "DN80", p16: "160", d16: "18", n16: "8", pJIS: "145", dJIS: "19", nJIS: "4" },
    { size: "DN100", p16: "180", d16: "18", n16: "8", pJIS: "165", dJIS: "19", nJIS: "8" },
    { size: "DN125", p16: "210", d16: "18", n16: "8", pJIS: "200", dJIS: "19", nJIS: "8" },
    { size: "DN150", p16: "240", d16: "22", n16: "8", pJIS: "230", dJIS: "19", nJIS: "8" },
    { size: "DN200", p16: "295", d16: "22", n16: "12", pJIS: "280", dJIS: "23", nJIS: "8" },
    { size: "DN250", p16: "355", d16: "26", n16: "12", pJIS: "345", dJIS: "23", nJIS: "12" },
    { size: "DN300", p16: "410", d16: "26", n16: "12", pJIS: "390", dJIS: "23", nJIS: "12" },
    { size: "DN350", p16: "470", d16: "26", n16: "16", pJIS: "435", dJIS: "25", nJIS: "12" },
    { size: "DN400", p16: "525", d16: "30", n16: "16", pJIS: "495", dJIS: "25", nJIS: "16" },
    { size: "DN450", p16: "585", d16: "30", n16: "20", pJIS: "555", dJIS: "25", nJIS: "16" },
    { size: "DN500", p16: "650", d16: "33", n16: "20", pJIS: "605", dJIS: "25", nJIS: "20" },
    { size: "DN600", p16: "770", d16: "36", n16: "20", pJIS: "715", dJIS: "27", nJIS: "20" },
    { size: "DN700", p16: "840", d16: "36", n16: "24", pJIS: "820", dJIS: "27", nJIS: "24" },
    { size: "DN750", p16: "-", d16: "-", n16: "-", pJIS: "880", dJIS: "33", nJIS: "24" },
    { size: "DN800", p16: "950", d16: "39", n16: "24", pJIS: "930", dJIS: "33", nJIS: "24" },
    { size: "DN900", p16: "1050", d16: "39", n16: "28", pJIS: "1030", dJIS: "33", nJIS: "24" },
    { size: "DN1000", p16: "1170", d16: "42", n16: "28", pJIS: "1130", dJIS: "33", nJIS: "28" },
  ];

  const jis10kSuitabilityData = [
    { size: "DN40", pcd: "105", dia: "19", holes: "4" },
    { size: "DN50", pcd: "120", dia: "19", holes: "4" },
    { size: "DN65", pcd: "140", dia: "19", holes: "4" },
    { size: "DN80", pcd: "150", dia: "19", holes: "8" },
    { size: "DN100", pcd: "175", dia: "19", holes: "8" },
    { size: "DN125", pcd: "210", dia: "23", holes: "8" },
    { size: "DN150", pcd: "240", dia: "23", holes: "8" },
    { size: "DN200", pcd: "290", dia: "23", holes: "12" },
    { size: "DN250", pcd: "355", dia: "25", holes: "12" },
    { size: "DN300", pcd: "400", dia: "25", holes: "16" },
    { size: "DN350", pcd: "445", dia: "25", holes: "16" },
    { size: "DN400", pcd: "510", dia: "27", holes: "16" },
    { size: "DN450", pcd: "565", dia: "27", holes: "20" },
    { size: "DN500", pcd: "620", dia: "27", holes: "20" },
    { size: "DN600", pcd: "730", dia: "33", holes: "24" },
    { size: "DN700", pcd: "840", dia: "33", holes: "24" },
    { size: "DN750", pcd: "900", dia: "33", holes: "24" },
    { size: "DN800", pcd: "950", dia: "33", holes: "28" },
    { size: "DN900", pcd: "1050", dia: "33", holes: "28" },
    { size: "DN1000", pcd: "1160", dia: "39", holes: "28" },
  ];

  const handleDownloadCSV = () => {
    const headers = ["Specification", "Details"];
    const rows = [
      ["Product", "Double Flanged BFV"],
      ["Category", "Butterfly Valve"],
      ["Sub Category", "Centric Disc Design"],
      ["Model", "Double Flanged PN10# / PN16# / PN20# / PN25#"],
      ...specs.map(spec => [spec.label, spec.value]),
      [""],
      ["General Dimensions"],
      ["Size", "Face To Face", "Center To Top", "Center To Bottom", "Lever Length", "Gear Wheel Dia"],
      ...dimensionData.map(row => [row.size, row.f, row.th, row.bh, row.ll, row.gear]),
      [""],
      ["Flange Suitability (150# / PN10)"],
      ["Size", "PCD (150#)", "Hole Dia (150#)", "No. Holes (150#)", "PCD (PN10)", "Hole Dia (PN10)", "No. Holes (PN10)"],
      ...flangeSuitabilityData.map(row => [row.size, row.p150, row.d150, row.n150, row.pPN10, row.dPN10, row.nPN10]),
      [""],
      ["Flange Suitability (PN16 / JIS 5K)"],
      ["Size", "PCD (PN16)", "Hole Dia (PN16)", "No. Holes (PN16)", "PCD (JIS 5K)", "Hole Dia (JIS 5K)", "No. Holes (JIS 5K)"],
      ...pn16JisSuitabilityData.map(row => [row.size, row.p16, row.d16, row.n16, row.pJIS, row.dJIS, row.nJIS]),
      [""],
      ["Flange Suitability (JIS 10K)"],
      ["Size", "PCD", "Hole Dia", "No. of Holes"],
      ...jis10kSuitabilityData.map(row => [row.size, row.pcd, row.dia, row.holes])
    ];
    
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Double_Flanged_BFV_data_sheet.csv`);
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
            <span className="text-primary">Butterfly Valve</span>
          </nav>
          <p className="text-secondary font-bold uppercase tracking-wider">Centric Disc Design</p>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2">Double Flanged PN10# / PN16# / PN20# / PN25#</h1>
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
                alt="Double Flanged Butterfly Valve"
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
            {/* Dimension Table Section - General Dimensions */}
            <div className="bg-white rounded-[2rem] border border-border shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table className="border-collapse w-full">
                  <TableHeader>
                    <TableRow className="bg-white border-b border-neutral-300">
                      <TableHead colSpan={6} className="text-center font-bold text-primary uppercase py-6">DOUBLE FLANGED BFV</TableHead>
                    </TableRow>
                    <TableRow className="bg-neutral-50 border-b border-neutral-300">
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4">SIZE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase leading-tight">FACE TO FACE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase leading-tight">CENTER TO TOP HEIGHT</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase leading-tight">CENTER TO BOTTOM HEIGHT</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase leading-tight">LEVER LENGTH</TableHead>
                      <TableHead className="text-center font-bold text-primary text-xs uppercase leading-tight">GEAR OPERATION WHEEL DIA</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dimensionData.map((row, idx) => (
                      <TableRow key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                        <TableCell className="font-bold text-primary text-center border-r border-neutral-100 py-4">{row.size}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.f}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.th}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.bh}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.ll}</TableCell>
                        <TableCell className="text-center text-foreground/80">{row.gear}</TableCell>
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

            {/* Dimension Table Section - Flange Suitability (150# & PN10#) */}
            <div className="bg-white rounded-[2rem] border border-border shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table className="border-collapse w-full">
                  <TableHeader>
                    <TableRow className="bg-white border-b border-neutral-300">
                      <TableHead rowSpan={2} className="text-center font-bold text-primary border-r border-neutral-200 uppercase py-4">SIZE</TableHead>
                      <TableHead colSpan={3} className="text-center font-bold text-primary border-r border-neutral-200 uppercase py-4">TO SUIT 150# FLANGES</TableHead>
                      <TableHead colSpan={3} className="text-center font-bold text-primary uppercase py-4">TO SUIT PN10# FLANGES</TableHead>
                    </TableRow>
                    <TableRow className="bg-neutral-50 border-b border-neutral-300">
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4">PCD</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">HOLE DIA</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">NO. OF HOLES</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs">PCD</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">HOLE DIA</TableHead>
                      <TableHead className="text-center font-bold text-primary text-xs uppercase">NO. OF HOLES</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {flangeSuitabilityData.map((row, idx) => (
                      <TableRow key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                        <TableCell className="font-bold text-primary text-center border-r border-neutral-100 py-4">{row.size}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.p150}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.d150}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-200">{row.n150}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.pPN10}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.dPN10}</TableCell>
                        <TableCell className="text-center text-foreground/80">{row.nPN10}</TableCell>
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

            {/* Dimension Table Section - Flange Suitability (PN16# & JIS 5K) */}
            <div className="bg-white rounded-[2rem] border border-border shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table className="border-collapse w-full">
                  <TableHeader>
                    <TableRow className="bg-white border-b border-neutral-300">
                      <TableHead rowSpan={2} className="text-center font-bold text-primary border-r border-neutral-200 uppercase py-4">SIZE</TableHead>
                      <TableHead colSpan={3} className="text-center font-bold text-primary border-r border-neutral-200 uppercase py-4">TO SUIT PN16# FLANGES</TableHead>
                      <TableHead colSpan={3} className="text-center font-bold text-primary uppercase py-4">TO SUIT JIS 5K FLANGES</TableHead>
                    </TableRow>
                    <TableRow className="bg-neutral-50 border-b border-neutral-300">
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4">PCD</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">HOLE DIA</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">NO. OF HOLES</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs">PCD</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">HOLE DIA</TableHead>
                      <TableHead className="text-center font-bold text-primary text-xs uppercase">NO. OF HOLES</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pn16JisSuitabilityData.map((row, idx) => (
                      <TableRow key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                        <TableCell className="font-bold text-primary text-center border-r border-neutral-100 py-4">{row.size}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.p16}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.d16}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-200">{row.n16}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.pJIS}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.dJIS}</TableCell>
                        <TableCell className="text-center text-foreground/80">{row.nJIS}</TableCell>
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

            {/* Dimension Table Section - JIS 10K Suitability */}
            <div className="bg-white rounded-[2rem] border border-border shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table className="border-collapse w-full">
                  <TableHeader>
                    <TableRow className="bg-white border-b border-neutral-300">
                      <TableHead colSpan={4} className="text-center font-bold text-primary uppercase py-6">TO SUIT JIS 10K FLANGES</TableHead>
                    </TableRow>
                    <TableRow className="bg-neutral-50 border-b border-neutral-300">
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs py-4">SIZE</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">PCD</TableHead>
                      <TableHead className="text-center font-bold text-primary border-r border-neutral-200 text-xs uppercase">HOLE DIA</TableHead>
                      <TableHead className="text-center font-bold text-primary text-xs uppercase">NO. OF HOLES</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {jis10kSuitabilityData.map((row, idx) => (
                      <TableRow key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                        <TableCell className="font-bold text-primary text-center border-r border-neutral-100 py-4">{row.size}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.pcd}</TableCell>
                        <TableCell className="text-center text-foreground/80 border-r border-neutral-100">{row.dia}</TableCell>
                        <TableCell className="text-center text-foreground/80">{row.holes}</TableCell>
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

