import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Soy un apasionado desarrollador full stack con una habilidad especial para crear aplicaciones web robustas y escalables. `;

export const ABOUT_TEXT = `Soy un programador full stack con una sólida formación académica y experiencia práctica en el desarrollo de
aplicaciones tanto frontend como backend. Mi objetivo es aprovechar mi experiencia para crear soluciones innovadoras 
que impulsen el crecimiento empresarial y ofrezcan experiencias de usuario excepcionales. 
Con años de experiencia práctica, he perfeccionado mis habilidades en tecnologías front-end como React, 
así como en tecnologías back-end como MySQL, PHP y Xampp.
`;

export const EXPERIENCES = [
  {
    year: "Nov 2023 - Abr 2024",
    role: "Profesor de Programación",
    company: "CEGES - UAPA",
    description: `Enseñé JavaScript y SQL, proporcionando a los estudiantes una comprensión sólida de estos lenguajes esenciales para el desarrollo web y la gestión de bases de datos.
Guié a los estudiantes en la creación de interfaces de usuario efectivas y responsivas, utilizando tecnologías como HTML, CSS y JavaScript.
Instruí en la integración y gestión de bases de datos, utilizando PHP y otros lenguajes de programación.`,
    technologies: ["Javascript", "HTML", "CSS", "MySQL", "PHP"],
  },
  {
    year: "2022 - Actual",
    role: "Full Stack Developer",
    company: "Freelance",
    description: `Desarrollo de aplicaciones web frontend y backend
Colaboración con diversos clientes para crear soluciones personalizadas`,
    technologies: ["HTML", "CSS", "React", "FireBase", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Android App",
    image: project1,
    description:
      "Una aplicación de comercio electrónico completamente funcional con funciones como listado de productos, carrito de compras y autenticación de usuario.",
    technologies: ["Android Studio", "FireBase", "FXML", "Java", "JavaFX"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Santiago De Los Caballeros, República Dominicana ",
  phoneNo: "+1 829 765 3372 ",
  email: "contact@jeisonjmartinez.com",
};
