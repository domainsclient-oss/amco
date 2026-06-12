import { CheckCircle2, Factory, History, ShieldCheck, Globe } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-end mb-12 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
              <Globe className="size-5 md:size-3.5" />
              About AMCO Valves
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-[52px] font-bold text-primary leading-[1.2] md:leading-[1.1]">
              Trusted by Industry <span className="text-secondary block">Since 1986</span>
            </h3>
          </div>
          <div className="lg:text-right">
            <p className="text-lg md:text-xl text-foreground/50 leading-relaxed max-w-xl ml-auto">
              We are Manufacturers of “AMCO™” brand Low pressure & High pressure IBR & Non IBR Industrial & Instrumentation Valves in the small sector ever since 1986
            </p>
          </div>
        </div>

        {/* Detailed Grid Section */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start mb-12 md:mb-20">
          <div className="space-y-6 md:space-y-8">
            <div className="p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-primary/5 border border-primary/10">
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                We Manufacture Quality Valves of almost all types for a wide spectrum of users in the Process & Chemical, Refineries & Petrochemicals, Fertilizers, Drugs & Pharmaceuticals, Thermal Power Stations, Nuclear & Atomic Power Stations, Textiles, Dyes & Intermediates, Paints & Varnishes, Sugar, Breweries & Distilleries, Soaps & Detergents, Steel Plants, Food & Oil Industry, Solvent Extraction Plants, Sewage, Effluent & Water Treatment, Cooling Water, Ship Yards and Marine Management, Water Works, Pulp & Paper, LPG Bottling Plants, Onshore & Offshore platforms, Slurry & Ash handling.
              </p>
            </div>
            
            <div className="p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white border border-border shadow-sm">
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                Our Unit is managed by a team of qualified personnel with extensive experience in the field. From a modest beginning in 1986, we have since made rapid strides in technology and statute and are today recognized by our esteemed customers as the most reliable single point source for their versatile requirement of Valves. 
                <br />
                Their sustained support bears ample testimony for the confidence reposed in us.
              </p>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white border border-border shadow-sm">
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                Whether it be a well planned project installation or contingent maintenance replacement, we at AMCO gear ourselves up to our customers exacting requirements and supply well within time as Marginal stocks of standard sizes and ranges of valves are available with us.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-secondary/5 border border-secondary/10">
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                We use Quality Raw Materials (Castings & Forgings ) from reputed foundries/forge shops and we have Statistical Quality Assurance system with inspection at every stage of Manufacture to ensure sustained quality in our supplies. We have adequate capacity in terms of expertise and finance are in a position to undertake large volume of orders with committed deliveries.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-8 md:p-14 bg-primary rounded-[1.5rem] md:rounded-[35px] text-white shadow-2xl">
          <h4 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            At AMCO, you do not have to pay a premium for Quality.
          </h4>
        </div>
      </div>
    </section>
  );
}
