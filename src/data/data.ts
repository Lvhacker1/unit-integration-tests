import { AboutSectionTypes, ActionButtonTypes, CodeBlockTypes, CourseCardTypes, FooterTypes, NavLinks, PageIntroTypes } from "@/types/types";

export const navLinks: NavLinks[] = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
];

export const codeExamples: CodeBlockTypes[] = [
    { code: "console.log('Hello, world!');", language: "Javascript" },
    { code: "print('Hello')", language: "Python" },
    { code: "let x: number = 5;", language: "TypeScript" },
    { code: "#include <iostream>\nint main() { std::cout << \"Hello\"; }", language: "C++" },
    { code: "public class Main { public static void main(String[] args) { System.out.println(\"Hello\"); } }", language: "Java" },
    { code: "printf(\"Hello\\n\");", language: "C" }
];

export const languageCourses: CourseCardTypes[] = [
    {
        language: "JavaScript",
        topic: "Web Development",
        role: "Websites, Frontend, Backend (Node.js)",
        description: "JavaScript is a versatile language used for interactive web development.",
        fullDescription: "JavaScript runs both in the browser and on servers via Node.js. It supports object-oriented, imperative, and functional programming styles, making it suitable for almost any type of web project."
    },
    {
        language: "Python",
        topic: "Data Science",
        role: "Data Analysis, AI, Web",
        description: "Python is readable and widely used in data science.",
        fullDescription: "Python has a simple syntax and a large ecosystem of libraries. It is widely used in data analysis, AI, web development, automation, and scripting tasks."
    },
    {
        language: "TypeScript",
        topic: "Web Development",
        role: "Large-Scale Web Applications",
        description: "TypeScript adds types to JavaScript for safer code.",
        fullDescription: "TypeScript helps catch errors early and improves maintainability in large projects. It compiles to plain JavaScript and integrates seamlessly with modern frameworks like React and Angular."
    },
    {
        language: "C++",
        topic: "System Programming",
        role: "Games, Performance-Critical Applications",
        description: "C++ is used for high performance applications.",
        fullDescription: "C++ is powerful for system programming, game development, and performance-critical applications. Supports both procedural and object-oriented programming and provides fine control over memory."
    },
    {
        language: "Java",
        topic: "Backend",
        role: "Enterprise Apps, Backend Services",
        description: "Java runs on any platform via JVM.",
        fullDescription: "Java is portable across platforms thanks to the Java Virtual Machine. Widely used for backend services, enterprise systems, and Android app development."
    },
    {
        language: "C",
        topic: "System Programming",
        role: "Operating Systems, Embedded Systems",
        description: "C is foundational for system programming.",
        fullDescription: "C provides low-level memory access and efficiency. Often used in operating systems, embedded devices, and performance-critical applications."
    }
]

export const pageIntroData: Record<string, PageIntroTypes> = {
    home: {
        title: "Code Playground",
        description: "Play, experiment, and tinker with programming concepts in an interactive way."
    },
    courses: {
        title: "The Language Lab",
        description: "Discover programming languages through real examples and see them in action."
    },
    about: {
        title: "Behind the Screen",
        description: "Meet the minds shaping our playground and learn why we code the way we do."
    }
}

export const footerData: FooterTypes = {
    copyright: "©",
    year: new Date().getFullYear(),
    description: "Code Playground | All rights reserved."
}

export const aboutData: AboutSectionTypes = {
    name: "Lava Sharif",
    role: "Creator & Developer",
    description: "Code Playground was born when I realized I was talking more to my Red Bull than to people, and it still makes more sense than this almost nonexistent page. Right now the site is like a student apartment. A table, a chair and a microwave, technically livable but you really wish for a few more pieces of furniture."
}

export const callToActionsData: ActionButtonTypes[] = [
    {
        title: "Start Experimenting",
        href: "/courses",
        description: "Where 6 programming languages wait to confuse and enlighten you"
    },
    {
        title: "Meet the Mind",
        href: "/about",
        description: "Meet the developer who has more browser tabs open than brain cells functioning"
    }
]