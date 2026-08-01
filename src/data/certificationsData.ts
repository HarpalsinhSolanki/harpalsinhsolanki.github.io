export interface Certification {
  name: string;
  issuer?: string;
  date?: string;
}

export const certifications: Certification[] = [
  {
    name: "Android Development Certification",
    issuer: "Google Developers",
    date: "2021"
  },
  {
    name: "React Native Developer Training",
    issuer: "Meta",
    date: "2022"
  },
  {
    name: "Advanced Java Programming",
    issuer: "Oracle",
    date: "2020"
  },
  {
    name: "Mobile App Development Specialist",
    issuer: "Udacity",
    date: "2021"
  }
];