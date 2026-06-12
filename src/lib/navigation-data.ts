export interface ProductItem {
  name: string;
  href: string;
}

export interface SubCategory {
  name: string;
  products: ProductItem[];
}

export interface MegaMenuCategory {
  title: string;
  subCategories: SubCategory[];
}

export const productNavigationData: MegaMenuCategory[] = [
  {
    title: "Knife Edge Gate Valve",
    subCategories: [
      {
        name: "Uni Directional",
        products: [
          { name: "Wafer Lugged Resilient seat PN10#", href: "/products/knife-edge-gate-valve/uni-directional/wafer-lugged-resilient-seat-pn10" },
          { name: "Wafer Lugged Metal seat PN10#", href: "#products" },
          { name: "Flanged Resilient seat PN10#", href: "#products" },
          { name: "Flanged Metal seat PN10#", href: "#products" }
        ]
      },
      {
        name: "Bi Directional",
        products: [
          { name: "Wafer Lugged Resilient seat PN10#", href: "#products" },
          { name: "Flanged Resilient seat PN10#", href: "#products" }
        ]
      }
    ]
  },
  {
    title: "Ball Valve",
    subCategories: [
      {
        name: "Floating Design",
        products: [
          { name: "2 Piece Design screwed 1000 WOG", href: "/products/ball-valve/floating-design/2-piece-design-screwed-1000-wog" },
          { name: "3 Piece Design Screwed / Socket weld 150# & 300#", href: "/products/ball-valve/floating-design/3-piece-design-screwed-socket-weld-150-300" },
          { name: "3 Piece Design Screwed / Socket weld 600# & 800# & 1500#", href: "/products/ball-valve/floating-design/3-piece-design-screwed-socket-weld-600-800-1500" },
          { name: "3 Piece Design Flanged ANSI 150#, 300#, 600# & 900#", href: "/products/ball-valve/floating-design/3-piece-design-flanged-ansi-150-300-600-900" },
          { name: "2 Piece Design Flanged ANSI 150#, 300#, 600#", href: "/products/ball-valve/floating-design/2-piece-design-flanged-ansi-150-300-600" },
          { name: "Wafer Design Ball valve 150# / PN25 / PN40", href: "/products/ball-valve/floating-design/wafer-design-ball-valve-150-pn25-pn40" }
        ]
      },
      {
        name: "Trunnion Mounted",
        products: [
          { name: "2 Piece Design Flanged ANSI 150#, 300#, 600#", href: "/products/ball-valve/trunnion-mounted/2-piece-design-flanged-ansi-150-300-600" },
          { name: "3 Piece Design Flanged ANSI 150#, 300#, 600#", href: "/products/ball-valve/trunnion-mounted/3-piece-design-flanged-ansi-150-300-600" }
        ]
      }
    ]
  },
  {
    title: "Butterfly Valve",
    subCategories: [
      {
        name: "Centric Disc Design",
        products: [
          { name: "Wafer Semi Lugged PN10# / PN16# / PN20# / PN25#", href: "/products/butterfly-valve/centric-disc-design/wafer-semi-lugged-pn10-pn16-pn20-pn25" },
          { name: "Full Lugged PN10# / PN16# / PN20# / PN25#", href: "/products/butterfly-valve/centric-disc-design/full-lugged-pn10-pn16-pn20-pn25" },
          { name: "Wafer Flanged PN10# / PN16# / PN20# / PN25#", href: "/products/butterfly-valve/centric-disc-design/wafer-flanged-pn10-pn16-pn20-pn25" },
          { name: "Double Flanged PN10# / PN16# / PN20# / PN25#", href: "/products/butterfly-valve/centric-disc-design/double-flanged-pn10-pn16-pn20-pn25" }
        ]
      },
      {
        name: "Double Offset Design",
        products: [
          { name: "Wafer Semi Lugged 150# / 300#", href: "/products/butterfly-valve/double-offset-design/wafer-semi-lugged-150-300" },
          { name: "Full Lugged 150# / 300#", href: "/products/butterfly-valve/double-offset-design/full-lugged-150-300" },
          { name: "Double Flanged 150# / 300#", href: "/products/butterfly-valve/double-offset-design/double-flanged-150-300" }
        ]
      }
    ]
  },
  {
    title: "Gate Valve for Fire Fighting",
    subCategories: [
      {
        name: "Fire Fighting Range",
        products: [
          { name: "Soft seated (PTFE) Double Flanged PN16# Wheel, Bare Shaft and Motor Operated", href: "#products" }
        ]
      }
    ]
  },
  {
    title: "Dual Plate Check Valve",
    subCategories: [
      {
        name: "Check Valve Range",
        products: [
          { name: "Wafer type Resilient seat PN16#", href: "#products" },
          { name: "Lugged type Resilient seat PN16#", href: "#products" },
          { name: "Flanged type Resilient PN16#", href: "#products" },
          { name: "Wafer type Retainerless Metal seat 150#, 300#", href: "#products" },
          { name: "Lugged type Retainerless Metal seat 150#, 300#", href: "#products" },
          { name: "Flanged type Retainerless Metal 150#, 300#", href: "#products" }
        ]
      }
    ]
  },
  {
    title: "IBR & Non IBR Gate/Globe/Check Valve",
    subCategories: [
      {
        name: "Valve Range",
        products: [
          { name: "IBR & Non IBR Gate Valve 800#, 1500#, 2500# Screwed / Socket weld / Butt weld", href: "#products" },
          { name: "IBR & Non IBR Globe Valve 800#, 1500#, 2500# Screwed / Socket weld / Butt weld", href: "#products" },
          { name: "IBR & Non IBR Lift check Valve 800#, 1500#, 2500#Screwed / Socket weld / Butt weld", href: "#products" },
          { name: "IBR & Non IBR Gate Valve 150#, 300#, 600# Flanged / Butt weld", href: "#products" },
          { name: "IBR & Non IBR Globe Valve 150#, 300#, 600# Flanged / Butt weld", href: "#products" },
          { name: "IBR & Non IBR Swing check Valve 150#, 300#, 600# Flanged / Butt weld", href: "#products" }
        ]
      }
    ]
  }
];
