export interface Project {
  name: string;
  description: string;
  technologies?: string[];
  playStoreUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Find Perfect Roommate Application",
    description: "Application connects tenants, landlords and roommates. Provide a facility to find your perfect match based on interests and needs. Platform offers a variety of shared rooms, apartments, coliving, and over thousands of roommates across the country.",
    technologies: ["Android", "Kotlin", "Firebase", "APIs"],
    featured: true
  },
  {
    name: "React Estate Property Search",
    description: "It is to buy and sell the home for a country. It is categorized into three different properties in one place. like, for Within country, abroad, and commercial. You can get the best property based on the optimum search facility of this application. You can save your location-based property and get new property updates as well. Applications one of the key features is the upcoming or new property section which is only shown for this application only.",
    technologies: ["React Native", "TypeScript", "APIs"],
    featured: true
  },
  {
    name: "Scan Covid Vaccination Certificate",
    description: "Vendor must register and subscribe as a firm to use this app. This project for vendor who can scan covid vaccination certificate and verify it is valid certificate or not. Based on validation vendor assure no customer will enter to an organization without covid vaccine dose.",
    technologies: ["Android", "Kotlin", "QR Scanning", "APIs"]
  },
  {
    name: "Digital Signage",
    description: "Digital screens are a key way for brands and stores to communicate with customers. So, this project is a cloud based most intuitive and dynamic digital signage to manage multimedia content for multiple screens. This app supports all multimedia like video, image, gif, animation, and html for android devices as well android smart tv. Screens can switch to vertical, horizontal, reverse vertical and reverse horizontal. Screens can monitor running multimedia and upload data to the server for further data analysis. Downloading multimedia process works in both scenario background and foreground as per media type.",
    technologies: ["Android", "Java", "Cloud", "Multimedia"],
    featured: true
  },
  {
    name: "Restaurant POS",
    description: "This project provides online/offline application use. All restaurant related operations like token order, dining order, take away order and delivery order placed and payment done using this app. This app is designed for tablet devices. This project is designed for minimal use of the internet so the customer ordering process is completely seamless. For canteen restaurants, applications provide finger scan functionality to authenticate a user coupon/pass and allow him to eat. For the kitchen, the application shows all orders based on its category like table, take away and delivery. It also shows an order timer to deliver orders on priority based.",
    technologies: ["Android", "Java", "Restaurant Management"],
    featured: true
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