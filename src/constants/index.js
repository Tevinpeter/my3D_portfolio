import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI/UX Design",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Prototyping",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      id: "monday-support",
      category: "Professional experience",
      marker: "M",
      title: "Technical Support Engineer – Tier 2/3",
      organization: "Monday.com Support Operations",
      location: "Warsaw, Poland",
      date: "May 2025 – July 2026",
      points: [
        "Investigated Tier 2/3 escalations across APIs, integrations, webhooks, and JSON payloads.",
        "Troubleshot OAuth and authentication issues and debugged production systems, including P0/P1 incidents.",
        "Used root-cause analysis to understand complex technical failures, independently resolving approximately 90% of escalations.",
      ],
    },
    {
      id: "vistula-degree",
      category: "Education",
      marker: "BSc",
      title: "BSc Computer Engineering",
      organization: "Vistula University",
      location: "Warsaw, Poland",
      date: "Graduated July 2025",
      points: [
        "Academic focus in Artificial Intelligence, Machine Learning, and Neural Networks.",
        "Studied Data Structures & Algorithms and Software Engineering.",
        "Built foundations in Cloud Computing and Computer Networks.",
      ],
    },
    {
      id: "square-weebly-support",
      category: "Professional experience",
      marker: "S",
      title: "Technical Support Specialist – Tier 1/2",
      organization: "Square Online & Weebly Support Operations",
      location: "Warsaw, Poland",
      date: "April 2024 – May 2025",
      points: [
        "Provided Tier 1/2 technical troubleshooting for customer-facing web and e-commerce systems.",
        "Worked with Square Online and Weebly systems, developing practical experience investigating customer technical issues.",
      ],
    },
    {
      id: "independent-ml",
      category: "Independent development · not employment",
      marker: "ML",
      title: "Machine Learning & AI — Independent Development",
      date: "Self-directed learning",
      points: [
        "Implemented and studied Linear Regression, Logistic Regression, and K-Nearest Neighbors through practical local projects.",
        "Explored Neural Networks, Forward Propagation, Backpropagation, and Convolutional Neural Networks (CNNs).",
        "Used classification experiments to deepen understanding of model behavior. These projects currently exist locally and are not all published on GitHub.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      id: "kibaliti",
      name: "KIBALITI",
      category: "Full-stack application",
      description: "A corporate travel booking and management platform connecting a React interface with backend services and real-time flight and hotel data.",
      architecture: ["React", "REST APIs", "Express", "MongoDB"],
      architectureCaption: "Frontend, backend, and third-party travel API integration.",
      highlights: [
        "Third-party APIs for real-time flight and hotel data.",
        "Request tracing, response validation, and error handling across frontend/backend integration.",
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      source_code_link: "https://github.com/Tevinpeter/Kibalit",
      live_link: "https://kibaliti-1.onrender.com",
    },
    {
      id: "student-record-database",
      name: "Student Record Management Database",
      category: "Database engineering",
      description: "A normalized MySQL relational database with 20+ tables for students, academic records, attendance, examinations, guardians, and fees.",
      architecture: ["Relational schema", "Stored procedures", "Views"],
      architectureCaption: "Structured data, relational integrity, and reporting.",
      highlights: [
        "Foreign-key and many-to-many relationships connect school records across the schema.",
        "Stored procedures support database operations; views organize data for reporting and analysis.",
      ],
      tags: ["MySQL", "SQL", "Stored Procedures", "Views"],
      source_code_link: "https://github.com/Tevinpeter/student-record-management-sql.",
    },
  ];

  const mlExperiments = [
    {
      title: "Regression & Classification",
      description: "Linear Regression, Logistic Regression, K-Nearest Neighbors (KNN), and classification experiments.",
    },
    {
      title: "Neural Network Foundations",
      description: "Neural Networks, Forward Propagation, and Backpropagation through practical implementations and study.",
    },
    {
      title: "Convolutional Networks",
      description: "Exploring Convolutional Neural Networks (CNNs) through local experiments.",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, mlExperiments };