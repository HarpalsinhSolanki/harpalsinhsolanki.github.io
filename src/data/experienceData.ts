export interface Experience {
  company: string;
  location: string;
  position: string;
  duration: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "Helios Solutions",
    location: "Vadodara",
    position: "Senior Software Engineer",
    duration: "Aug 2021 - Present",
    description: "Working across client communication, task analysis, quality assurance, and end-to-end development. Recently expanded from mobile into frontend web development, working as a JavaScript frontend developer for a USA-based drinkware/tumbler e-commerce brand — redesigning and upgrading its interactive 3D product customization tool (built with Fabric.js for design editing and Three.js for real-time 3D preview) from a business and conversion perspective. This project marked the start of a broader shift from mobile development into frontend web technologies. For the past year, also working as a back-office developer on a Norway-based company's platform, upgrading its legacy PHP and Symfony versions — leaning heavily on Claude AI to accelerate the migration and modernization work."
  },
  {
    company: "Voolsy Networks Pvt Ltd",
    location: "Ahmedabad",
    position: "Software Engineer",
    duration: "Mar 2019 - Aug 2021",
    description: "Built and maintained a suite of hospitality and enterprise products: a restaurant management app for dine-in, take-away, and payments; a companion kitchen display system for live order tracking; a white-labelled digital signage platform; an event/registration check-in app for help desks; and a self-service employee meal coupon system. Also delivered a fingerprint-based 1:1 identity verification and registration system for a school client."
  },
  {
    company: "Fusion Informatics Ltd",
    location: "Ahmedabad",
    position: "Android Developer → Team Lead",
    duration: "Apr 2014 - Mar 2019",
    description: "Started as an Android Developer and grew into a Team Lead role, driving development, design, and cross-functional collaboration. Built and shipped Android applications across a wide range of domains, including franchise & retail operations, travel & tourism, workforce management, fleet & logistics management for the petroleum sector, and e-learning for aviation training. Continuously discovered, evaluated, and implemented new technologies to maximise development efficiency."
  },
  {
    company: "Anand Institute of Information Science",
    location: "Anand",
    position: "Lecturer",
    duration: "Nov 2012 - Oct 2014",
    description: "Teach and manage the teaching plans for students, provide them practical knowledge of various programming languages like C, C++, Oracle, Java, and Android."
  }
];