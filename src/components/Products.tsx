"use client";

import { Settings, Maximize, Layers, Gauge, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const productData = [
  { 
    id: "1", 
    title: "Ball Valves", 
    specs: "1 Pc | 2 Pc | 3 Pc", 
    features: [
      "Screwed | Socket Weld | Butt Weld | Flanged", 
      "Soft & Metal Seat", 
      "Floating & Trunnion Mounted (Fire Safe Design)"
    ] 
  },
  { 
    id: "2", 
    title: "Knife Edge Gate Valves", 
    specs: "Uni Directional | Bi Directional", 
    features: ["Wafer, Lugged & Flanged", "Soft & Metal Seat"] 
  },
  { 
    id: "3", 
    title: "Damper Valve", 
    specs: "Fabricated Damper Valve", 
    features: ["Wafer, Lugged & Flanged", "Metal Seat"] 
  },
  { 
    id: "4", 
    title: "Wafer Check Valves", 
    specs: "Wafer Type", 
    features: ["With & Without Spring", "Soft Seat"] 
  },
  { 
    id: "5", 
    title: "Butterfly Valves", 
    specs: "Concentric | Double Offset | Triple Offset", 
    features: ["Wafer, Lugged & Flanged", "Soft & Metal Seat"] 
  },
  { 
    id: "6", 
    title: "Diaphragm Valve", 
    specs: "Weir & KB Type", 
    features: ["Flanged Only", "Unlined & Rubber Lined"] 
  },
  { 
    id: "7", 
    title: "Piston Valve", 
    specs: "Screwed | Socket Weld | Flanged", 
    features: [
      "Metal Seat, Glandless",
      "OS & Y Type, Bolted Bonnet, Rising Spindle",
      "IBR & NON IBR"
    ] 
  },
  { 
    id: "11", 
    title: "IBR & Non IBR Gate/Globe/Check Valve", 
    specs: "", 
    features: [
      "IBR & Non IBR Gate Valve 800#, 1500#, 2500# Screwed / Socket weld / Butt weld",
      "IBR & Non IBR Globe Valve 800#, 1500#, 2500# Screwed / Socket weld / Butt weld",
      "IBR & Non IBR Lift check Valve 800#, 1500#, 2500#Screwed / Socket weld / Butt weld",
      "IBR & Non IBR Gate Valve 150#, 300#, 600# Flanged / Butt weld",
      "IBR & Non IBR Globe Valve 150#, 300#, 600# Flanged / Butt weld",
      "IBR & Non IBR Swing check Valve 150#, 300#, 600# Flanged / Butt weld"
    ] 
  },
  { 
    id: "8", 
    title: "Dual Plate Check Valve", 
    specs: "Wafer | Lugged | Flanged", 
    features: ["Soft & Metal Seat"] 
  },
  { 
    id: "9", 
    title: "Non Slam Check Valve (DCV)", 
    specs: "Wafer", 
    features: ["Soft & Metal Seat"] 
  },
  { 
    id: "10", 
    title: "FEP & PFA Lined Valves", 
    specs: "Flanged | Wafer", 
    features: [
      "Plug Valve (Sleeved, Lined & Jacketed)",
      "Ball valve (Lined)",
      "Butterfly valve (Sleeved and Lined)",
      "Diaphragm valve (Lined)",
      "Wafer Check valve (Lined)",
      "Ball type check valve (Lined)"
    ] 
  },
  { 
    id: "12", 
    title: "High Pressure Valves", 
    specs: "Ball | Check | Needle", 
    features: ["Soft Seat", "Screwed", "1500 psi, 3000 psi, 6000 psi"] 
  },
  { 
    id: "13", 
    title: "Strainers", 
    specs: "Y, T, Pot, Duplex, Self Cleaning Type", 
    features: [
      "Y Type - Screwed & Flanged", 
      "T Type, Pot Type, Duplex, Self Cleaning - Flanged", 
      "Mesh Size To Customer Requirement"
    ] 
  },
  { 
    id: "14", 
    title: "Sliding Gate Valve", 
    specs: "Fabricated Penstock | Sliding Gate Valve", 
    features: [
      "For Hydro, Sewage, Rainwater",
      "Soft & Metal Seat",
      "Manual Wheel, Gear Operated, Cylinder Operated",
      "Large Size Available"
    ] 
  },
  {
    id: "15",
    title: "Actuator & Accessories",
    specs: "",
    features: [
      "Pneumatic & Electrical Actuators (Double acting, Single acting, 1 phase & 3 phase)",
      "Solenoid valve, Limit switch and AFR (IP67 and Ex-proof)",
      "Gear box with locking arrangement",
      "Limit switch arrangement for On/off feedback for manual valves",
      "Linear Cylinders (Double acting and single acting)",
      "Hydraulic Cylinders (Linear)"
    ]
  },
  {
    id: "16",
    title: "Safety Relief Valve",
    specs: "Screwed | Flanged",
    features: ["Angle type"]
  }
];

export function Products() {
  return (
    <section id="products" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-secondary font-bold text-sm uppercase tracking-widest mb-3">Product Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Our Valve Solutions</h3>
          <p className="text-foreground/70 text-sm md:text-base mb-8">
            Discover comprehensive range of our precision engineered valves designed for the world's most demanding environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-20">
          {productData.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden border border-border/40 bg-white rounded-[1.5rem] flex flex-col group shadow-sm hover:shadow-xl hover:shadow-secondary/5 hover:border-secondary/30 transition-all duration-300 h-full"
            >
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="flex items-start gap-3 mb-8">
                  <div className="w-[3px] self-stretch bg-secondary rounded-full shrink-0 mt-1" />
                  <h3 className="text-xl md:text-2xl font-bold text-primary transition-colors group-hover:text-secondary leading-tight">
                    {product.title}
                  </h3>
                </div>

                <div className="flex flex-col flex-grow">
                  {product.specs && (
                    <div className="pb-4 text-primary/60 text-base font-medium">
                      {product.specs}
                    </div>
                  )}
                  
                  {product.features.map((feature, i) => (
                    <div 
                      key={i} 
                      className="py-4 border-t border-border/50 text-primary/70 text-base font-medium leading-relaxed"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}

          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div 
              className="relative flex flex-col items-center justify-center h-full py-12 px-8 bg-primary rounded-[2.5rem] text-white shadow-xl transition-all duration-500 group overflow-hidden gap-8"
            >
              <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-full text-center">
                <h4 className="text-xl md:text-2xl font-bold leading-tight">
                  Get our complete product catalog with technical specifications
                </h4>
              </div>
              
              <div className="relative z-10 shrink-0">
                <a 
                  href="/brochure.pdf" 
                  download="AMCO_Valves_Brochure.pdf"
                  className="inline-flex items-center gap-3 bg-secondary px-6 md:px-10 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all hover:translate-y-[-2px] animate-glow"
                >
                  <Download className="size-6" />
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Maximize, title: "Configurations", desc: "Standard & Custom Designs" },
            { icon: Layers, title: "Connections", desc: "Threaded, Weld, Flanged" },
            { icon: Settings, title: "Seat Types", desc: "Soft & Metal Seat Options" },
            { icon: Gauge, title: "Mounting", desc: "Versatile Installation" }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={cn(
                "p-6 md:p-8 rounded-[2rem] border border-border flex flex-col gap-4 shadow-sm transition-all duration-300 group",
                item.title === "Configurations" 
                  ? "bg-primary text-white hover:bg-secondary" 
                  : "bg-white text-primary hover:bg-secondary hover:text-white"
              )}
            >
              <item.icon className="text-secondary group-hover:text-white transition-colors size-8" />
              <h4 className="text-base md:text-lg font-bold">{item.title}</h4>
              <p className={cn(
                "text-xs md:text-sm group-hover:text-white/90",
                item.title === "Configurations" ? "text-white/70" : "text-foreground/60"
              )}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}