export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduation: string;
  gpa: string;
}

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Anand Institute of Information Science",
    location: "Anand",
    graduation: "July 2012",
    gpa: "8.05 CGPA from Gujarat Technological University"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "M. B. Patel Science College",
    location: "Anand",
    graduation: "April 2012",
    gpa: "First class from Sardar Patel University"
  }
];