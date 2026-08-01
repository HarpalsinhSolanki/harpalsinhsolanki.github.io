export interface Project {
  name: string;
  description: string;
  technologies?: string[];
  playStoreUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "PHP & Symfony Version Upgrade (Norway-based Platform)",
    description: "Working as a back-office developer on a Norway-based company's platform, upgrading legacy PHP and Symfony versions to bring the codebase current. Most of the migration and upgrade work is done with heavy use of Claude AI to speed up analysis, refactoring, and compatibility fixes across the codebase.",
    technologies: ["PHP", "Symfony", "Backend", "Claude AI"],
    featured: true
  },
  {
    name: "3D Product Customization Tool (USA Drinkware Brand)",
    description: "Led a business-driven redesign of an existing interactive product customization tool for a USA-based drinkware/tumbler e-commerce brand, rebuilding the experience with Fabric.js for 2D design editing and Three.js for real-time 3D product preview. This project marked a personal shift from mobile development into frontend web technology.",
    technologies: ["JavaScript", "Fabric.js", "Three.js", "Frontend"],
    featured: true
  },
  {
    name: "Find Perfect Roommate Application",
    description: "Application connects tenants, landlords and roommates. Provide a facility to find your perfect match based on interests and needs. Platform offers a variety of shared rooms, apartments, coliving, and over thousands of roommates across the country.",
    technologies: ["Android", "Kotlin", "Firebase", "APIs"],
    featured: true
  },
  {
    name: "React Estate Property Search",
    description: "It is to buy and sell the home for a country. It is categorized into three different properties in one place, like within country, abroad, and commercial. You can get the best property based on the optimum search facility of this application. You can save your location-based property and get new property updates as well. One of its key features is the upcoming/new property section, shown only in this application. Built as a cross-platform app for both Android and iPhone using React Native — this was where I picked up hands-on iOS development alongside cross-platform mobile engineering.",
    technologies: ["React Native", "TypeScript", "iOS", "APIs"],
    featured: true
  },
  {
    name: "Scan Covid Vaccination Certificate",
    description: "Vendor must register and subscribe as a firm to use this app. This project for vendor who can scan covid vaccination certificate and verify it is valid certificate or not. Based on validation vendor assure no customer will enter to an organization without covid vaccine dose.",
    technologies: ["Android", "Kotlin", "QR Scanning", "APIs"]
  },
  {
    name: "Digital Signage (Voolsy Screen)",
    description: "Digital screens are a key way for brands and stores to communicate with customers. This cloud-based, white-labelled signage platform is the company's most popular product, managing multimedia content across multiple screens. It supports video, image, gif, animation, and HTML on Android devices and Android smart TVs, with screens switchable between vertical, horizontal, reverse vertical, and reverse horizontal orientations. It monitors what's currently running and uploads usage data for analysis, with downloads handled in both background and foreground depending on media type.",
    technologies: ["Android", "Java", "Cloud", "Multimedia"],
    featured: true
  },
  {
    name: "Voolsy Manager",
    description: "Core restaurant management application handling dine-in, take-away, and in-app payment workflows end-to-end, giving restaurant staff a single system to manage orders and billing across service types. Designed for tablet devices with minimal internet dependency so ordering stays seamless.",
    technologies: ["Android", "Java", "Payments", "Restaurant Management"],
    featured: true
  },
  {
    name: "KDS (Kitchen Display System)",
    description: "Companion kitchen app that syncs live with Voolsy Manager, giving kitchen staff real-time visibility into incoming orders by category (dine-in, take-away, delivery) and an order timer to help prioritise what goes out next.",
    technologies: ["Android", "Java", "Real-time Sync"]
  },
  {
    name: "GVoolsy",
    description: "Self-service food coupon system that lets employees redeem meal passes independently via fingerprint authentication, streamlining canteen operations without manual coupon handling.",
    technologies: ["Android", "Java", "Biometric", "Self-Service"]
  },
  {
    name: "VooNote",
    description: "Event and registration capture app used at help desks to record attendee check-ins and registrations on the spot for events and front-desk workflows.",
    technologies: ["Android", "Java", "APIs"]
  },
  {
    name: "1:1 Biometric Verification System",
    description: "Fingerprint-based 1:1 verification system built for a school, matching a scanned fingerprint against the ID details provided at registration, along with the registration flow used to enrol new users.",
    technologies: ["Android", "Java", "Biometric SDK"]
  },
  {
    name: "Franchise Retail Management App",
    description: "Operations app built for a retail franchise network in Ahmedabad, helping franchise outlets manage day-to-day store operations and stay coordinated with the central business.",
    technologies: ["Android", "Java", "APIs"]
  },
  {
    name: "Dubai Travel & Tourism App",
    description: "Travel and tourism app for the Dubai market, helping visitors discover attractions, plan itineraries, and book tourism experiences.",
    technologies: ["Android", "Java", "APIs"]
  },
  {
    name: "UAE Currency Exchange App",
    description: "Money exchange app built for the UAE market, letting users check live rates and exchange money across multiple currencies.",
    technologies: ["Android", "Java", "Currency Exchange", "APIs"]
  },
  {
    name: "Aviation & Hospitality E-Learning App",
    description: "Online course platform for aviation and hospitality training, delivering video-based lessons, assessments, and progress tracking for students preparing for airline careers.",
    technologies: ["Android", "Java", "E-Learning"]
  },
  {
    name: "BPCL FLEETGENIE and FLEETGENIE SALESMAN",
    description: "An Organization App for Bharat Petroleum",
    technologies: ["Android", "Java"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bpcl.fleetg&hl=en"
  },
  {
    name: "KALOREX",
    description: "An Educational App",
    technologies: ["Android", "Java"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.fil.kalorex"
  },
  {
    name: "DIGITAL BEST DEAL",
    description: "An Ecommerce App",
    technologies: ["Android", "Java"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.fipl.digitalbestdeal"
  },
  {
    name: "TOUGH CROWD",
    description: "A Social Video Posting App",
    technologies: ["Android", "Java"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.fil.toughcrowd"
  }
];

export const featuredProjects = projects.filter(project => project.featured);
export const otherProjects = projects.filter(project => !project.featured);