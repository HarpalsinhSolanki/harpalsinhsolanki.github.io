export interface Skill {
  name: string;
  experienceYears: number;
  level: number;
  category: "programming" | "framework" | "tool" | "database" | "other";
}

export const skills: Skill[] = [
  { name: "Android SDK", experienceYears: 6, level: 4, category: "framework" },
  { name: "Java", experienceYears: 4, level: 4, category: "programming" },
  { name: "Kotlin", experienceYears: 3, level: 4, category: "programming" },
  { name: "Material Design", experienceYears: 3, level: 4, category: "framework" },
  { name: "APIs", experienceYears: 8, level: 4, category: "programming" },
  { name: "Android Studio (IDE)", experienceYears: 6, level: 5, category: "tool" },
  { name: "Visual Studio Code (IDE)", experienceYears: 2, level: 4, category: "tool" },
  { name: "XCode (IDE)", experienceYears: 2, level: 3, category: "tool" },
  { name: "Git", experienceYears: 8, level: 5, category: "tool" },
  { name: "Dart", experienceYears: 1, level: 2, category: "programming" },
  { name: "Google Firebase", experienceYears: 8, level: 4, category: "database" },
  { name: "SQLite", experienceYears: 6, level: 4, category: "database" },
  { name: "Room Database", experienceYears: 4, level: 4, category: "database" },
  { name: "XML Android (UI)", experienceYears: 6, level: 5, category: "framework" },
  { name: "MVVM", experienceYears: 3, level: 4, category: "other" },
  { name: "React Native", experienceYears: 2, level: 4, category: "framework" },
  { name: "JSON", experienceYears: 8, level: 4, category: "other" },
  { name: "TypeScript", experienceYears: 2, level: 4, category: "programming" }
];

export const skillsByCategory = {
  programming: skills.filter(skill => skill.category === "programming"),
  framework: skills.filter(skill => skill.category === "framework"),
  tool: skills.filter(skill => skill.category === "tool"),
  database: skills.filter(skill => skill.category === "database"),
  other: skills.filter(skill => skill.category === "other")
};