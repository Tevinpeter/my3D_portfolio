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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    todo,
    miniHR
    
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
        title: "Data Analyst",
        company_name: "WILDAF",
        icon: reactjs,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
          "Collecting, processing, and analyzing data to provide actionable insights to stakeholders",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Utilizing statistical techniques, data visualization tools, and programming languages such as SQL, Python, or R to interpret data trends, patterns, and correlations.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },
    {
      title: "Short Summer program facilitator ",
      company_name: "Tanzania Excellence Institute",
      icon: reactjs,
      iconBg: "#383E56",
      date: "September 2023 - October 2023",
      points: [
        "Lead instructional sessions where you teach React.js fundamentals",
        "Collaborate with program organizers to design or refine the curriculum for the React.js summer program.",
        "Provide guidance, troubleshooting assistance, and code reviews to help participants ",
      ],
    },
    {
      title: "c# Developer",
      company_name: "Vistula University",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - present",
      points: [
        "Created a mini HR project",
        "Collaborating with fellow students on various task and projects.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to fellow students.",
      ],
    },
    {
      title: "USAID Volunteer",
      company_name: "USAID",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Feb 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Ecommerce Website",
      description:
        "Explore a seamless and intuitive online shopping experience on our eCommerce website, crafted with React framework for exceptional performance, responsiveness, and user satisfaction.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Tevinpeter/ecommerce_website",
    },
    {
      name: "Todolist App",
      description:
        "Discover effortless task management with our TodoList web application, leveraging MongoDB, Express, and EJS for a dynamic and user-friendly experience, seamlessly organizing your tasks with ease.",
      tags: [
        {
          name: "ejs",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/Tevinpeter/todolist_app",
    },
    {
      name: "MiniHR",
      description:
        "Efficiently manage your HR tasks with MiniHR, a comprehensive project built on the C#.NET framework.Show casing Object oriented Programming ",
      tags: [
        {
          name: " C#.NET",
          color: "blue-text-gradient",
        }
        
      ],
      image: miniHR,
      source_code_link: "https://github.com/Tevinpeter/MiniHR",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };