export interface TechInfo {
  name: string;
  category: string;
  summary: string;
  usedFor: string[];
}

/**
 * Every entry mirrors a skill listed in the "My Technology Arsenal" section
 * (including the full skills page categories), so the marquee never shows a
 * technology that isn't part of the arsenal.
 */
export const techInfo: Record<string, TechInfo> = {
  HTML: {
    name: "HTML",
    category: "Frontend",
    summary:
      "The markup language that structures every web page: headings, text, images, forms and links.",
    usedFor: ["Page structure & semantics", "Accessibility landmarks", "SEO-friendly content"],
  },
  CSS: {
    name: "CSS",
    category: "Frontend",
    summary:
      "The styling language for the web — colours, spacing, typography, responsive layouts and animation.",
    usedFor: ["Responsive layouts (Flexbox/Grid)", "Theming & design systems", "Transitions & animations"],
  },
  JavaScript: {
    name: "JavaScript",
    category: "Frontend",
    summary:
      "The programming language of the browser, adding interactivity and logic to web interfaces.",
    usedFor: ["DOM interactivity", "API requests", "Client-side app logic"],
  },
  ReactJS: {
    name: "ReactJS",
    category: "Frontend",
    summary:
      "A component-based JavaScript library for building user interfaces from small, reusable pieces of UI.",
    usedFor: ["Single-page applications", "Reusable component libraries", "State-driven dashboards"],
  },
  NextJS: {
    name: "NextJS",
    category: "Frontend",
    summary:
      "A React framework that adds routing, server rendering and static generation out of the box.",
    usedFor: ["SEO-friendly rendering", "File-based routing", "Full-stack React apps"],
  },
  PHP: {
    name: "PHP",
    category: "Backend",
    summary:
      "A server-side scripting language that powers a large share of the web's dynamic sites.",
    usedFor: ["Server-side rendering", "Form & session handling", "Database-driven websites"],
  },
  Laravel: {
    name: "Laravel",
    category: "Backend",
    summary:
      "An elegant PHP framework with routing, an ORM (Eloquent), auth and templating built in.",
    usedFor: ["REST APIs & MVC apps", "Authentication & roles", "Database migrations"],
  },
  ".NET": {
    name: ".NET",
    category: "Backend",
    summary:
      "Microsoft's development platform for building web APIs, desktop and enterprise applications with C#.",
    usedFor: ["Enterprise web APIs", "Desktop applications", "Windows-based services"],
  },
  PhpMyAdmin: {
    name: "PhpMyAdmin",
    category: "Database",
    summary:
      "A web-based administration tool for MySQL/MariaDB databases — browse tables and run SQL visually.",
    usedFor: ["Inspecting tables & rows", "Running SQL queries", "Import / export of databases"],
  },
  MySQL: {
    name: "MySQL",
    category: "Database",
    summary:
      "A popular open-source relational database that stores structured data in tables with SQL.",
    usedFor: ["Relational data modelling", "Transactional apps", "Reporting & aggregation"],
  },
  "SQL Server Management Studio": {
    name: "SQL Server Management Studio",
    category: "Database",
    summary:
      "Microsoft's IDE for managing SQL Server instances, writing queries and tuning databases.",
    usedFor: ["Query authoring & debugging", "Schema management", "Backups & performance tuning"],
  },
  "Android Studio (Kotlin)": {
    name: "Android Studio (Kotlin)",
    category: "Mobile",
    summary:
      "The official Android IDE, paired with Kotlin — the modern, concise language for native Android apps.",
    usedFor: ["Native Android apps", "Material Design UI", "Device APIs & emulators"],
  },
  "React Native": {
    name: "React Native",
    category: "Mobile",
    summary:
      "A framework for building genuinely native iOS and Android apps using React components.",
    usedFor: ["Cross-platform mobile apps", "Shared codebase with web", "Native device features"],
  },
  Firebase: {
    name: "Firebase",
    category: "Cloud",
    summary:
      "Google's app platform offering realtime/NoSQL databases, auth, storage and hosting.",
    usedFor: ["Realtime data sync", "Authentication", "File storage & hosting"],
  },
  Supabase: {
    name: "Supabase",
    category: "Cloud",
    summary:
      "An open-source backend built on PostgreSQL with auth, storage, realtime and instant APIs.",
    usedFor: ["Postgres database & RLS", "User authentication", "File storage & edge functions"],
  },
  GitHub: {
    name: "GitHub",
    category: "Tools",
    summary:
      "A Git hosting platform for version control, code review and team collaboration.",
    usedFor: ["Version control & branching", "Pull requests & reviews", "CI/CD workflows"],
  },
  "VS Code": {
    name: "VS Code",
    category: "Tools",
    summary:
      "A fast, extensible code editor with debugging, Git integration and a huge extension ecosystem.",
    usedFor: ["Day-to-day coding", "Debugging & refactoring", "Integrated terminal & Git"],
  },
  Python: {
    name: "Python",
    category: "Others",
    summary:
      "A readable, general-purpose language widely used for scripting, data work and automation.",
    usedFor: ["Automation scripts", "Data processing", "Backend services"],
  },
  TypeScript: {
    name: "TypeScript",
    category: "Others",
    summary:
      "JavaScript with static types, catching mistakes before the code ever runs in the browser.",
    usedFor: ["Type-safe React apps", "Safer refactoring", "Self-documenting APIs"],
  },
};

/** Marquee order — every item exists in the arsenal above. */
export const techStack: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "NextJS",
  "PHP",
  "Laravel",
  ".NET",
  "PhpMyAdmin",
  "MySQL",
  "SQL Server Management Studio",
  "Android Studio (Kotlin)",
  "React Native",
  "Firebase",
  "Supabase",
  "GitHub",
  "VS Code",
  "Python",
  "TypeScript",
];
