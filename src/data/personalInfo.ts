// Start of professional software development career (Fusion Informatics, Android Developer)
const careerStartDate = "2014-04-01";

export const getYearsOfExperience = (): number => {
  const start = new Date(careerStartDate);
  const now = new Date();
  const diffYears = (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diffYears * 2) / 2;
};

// Short, punchy — used in the Hero masthead.
export const getHeroTagline = (years: number): string =>
  `I've spent the last ${years}+ years building Android apps — from solo-owned products at small studios to leading a team shipping apps across retail, travel, and logistics. These days I'm most comfortable on the frontend JS side and working with SQL-heavy backends.`;

// Longer, narrative — used in the About section.
export const getAboutBio = (): string =>
  `My path started in the classroom, teaching C, C++, Java, and Android as a Lecturer, before moving into full-time Android development at Fusion Informatics — where I grew from developer to team lead shipping apps across retail, travel & tourism, workforce management, and logistics. From there I built out hospitality and enterprise products at Voolsy Networks, and at Helios Solutions I've since branched out from mobile into frontend JavaScript (Fabric.js, Three.js) and backend PHP/Symfony work, using Claude AI as a daily pair-programming tool on legacy code along the way.`;

export const personalInfo = {
  name: "Harpalsinh Solanki",
  title: "Senior Software Engineer",
  phone: "+91 8849714535",
  email: "harpalsinh2703@gmail.com",
  address: "Harikrupa, Mogar, Anand-388340",
  github: "https://github.com/HarpalsinhSolanki",
  linkedin: "https://linkedin.com",
};
