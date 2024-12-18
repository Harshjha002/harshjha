import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdDownloading } from "react-icons/md";

export const  ScrollItems = [
    {Label:"Home",href:"#Home"},
    {Label:"About",href:"#About"},
    {Label:"Projects",href:"#Projects"},
    {Label:"Tech-Stack",href:"#Tech-Stack"},
    {Label:"Contact",href:"#Contact"},
    ]

export const SocialLink = [
    {
        name:"LinkedIn",
        href:"https://www.linkedin.com/in/harsh-jha-85722b254/",
        logo:<FaLinkedin size={50}/>
    },
    {
        name:"Git Hub",
        href:"https://github.com/Harshjha002",
        logo:<FaGithub size={50}/>
    },
    {
        name:"LeetCode",
        href:"https://leetcode.com/u/Harsh884/",
        logo:<TbBrandLeetcode size={50}/>
        
    },
    {
        name:"Resume",
        href:'/harshjha.pdf',
        logo:<MdDownloading size={50}/>
    },
]

export const myProjects = [
    {
        id:1,
        name: "Portfolio Website",
        gitlink: "https://github.com/yourusername/portfolio",
        liveLink: "https://yourportfolio.com",
        sortDescription: "A personal portfolio website showcasing my skills and projects.",
        largeDescription: "This is my personal portfolio built with React. It includes various sections like 'About Me', 'Projects', and 'Contact'. The site is responsive and features animations to enhance the user experience.",
        techStack: ['React', 'CSS', 'JavaScript']
    },
    {
        id:2,
        name: "E-commerce App",
        gitlink: "https://github.com/yourusername/ecommerce-app",
        liveLink: "https://ecommerce-app.com",
        sortDescription: "An e-commerce web application allowing users to browse and purchase products.",
        largeDescription: "This app is built with React and Express, providing a seamless shopping experience with features like product filtering, search, and cart management. Users can view products, add them to their cart, and proceed to checkout.",
        techStack: ['React', 'Express', 'MongoDB', 'Node.js']
    },
    {
        id:3,
        name: "Task Manager",
        gitlink: "https://github.com/yourusername/task-manager",
        liveLink: "https://task-manager.com",
        sortDescription: "A task management application to track and organize tasks.",
        largeDescription: "A simple task manager that allows users to add, edit, and delete tasks. It features task prioritization, deadlines, and categorization. Built with React for the frontend and Node.js with Express for the backend.",
        techStack: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
        id:4,
        name: "Portfolio Website",
        gitlink: "https://github.com/yourusername/portfolio",
        liveLink: "https://yourportfolio.com",
        sortDescription: "A personal portfolio website showcasing my skills and projects.",
        largeDescription: "This is my personal portfolio built with React. It includes various sections like 'About Me', 'Projects', and 'Contact'. The site is responsive and features animations to enhance the user experience.",
        techStack: ['React', 'CSS', 'JavaScript']
    },
    {
        id:5,
        name: "E-commerce App",
        gitlink: "https://github.com/yourusername/ecommerce-app",
        liveLink: "https://ecommerce-app.com",
        sortDescription: "An e-commerce web application allowing users to browse and purchase products.",
        largeDescription: "This app is built with React and Express, providing a seamless shopping experience with features like product filtering, search, and cart management. Users can view products, add them to their cart, and proceed to checkout.",
        techStack: ['React', 'Express', 'MongoDB', 'Node.js']
    },
    {
        id:6,
        name: "Task Manager",
        gitlink: "https://github.com/yourusername/task-manager",
        liveLink: "https://task-manager.com",
        sortDescription: "A task management application to track and organize tasks.",
        largeDescription: "A simple task manager that allows users to add, edit, and delete tasks. It features task prioritization, deadlines, and categorization. Built with React for the frontend and Node.js with Express for the backend.",
        techStack: ['React', 'Node.js', 'Express', 'MongoDB']
    },
];
