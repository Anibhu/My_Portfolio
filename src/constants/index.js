
export const myProjects = [
  // 1. TRACK_ME
  {
    id: 1,
    title: "TRACK_ME – Smart Location Tracking & Geofencing",
    description:
      "A consent-based geolocation tracking and campus safety platform that enables real-time location monitoring, geofencing, and attendance management for students.",
    subDescription: [
      "Developed a real-time location tracking system using browser Geolocation API with periodic location updates.",
      "Implemented geofencing to detect student entry and exit within predefined college campus boundaries.",
      "Built RESTful APIs using FastAPI and integrated Supabase for authentication and location data storage.",
      "Integrated Leaflet and OpenStreetMap for interactive maps and historical location path visualization.",
      "Implemented secure tracking sessions, inactivity-based logout, and location history management."
    ],
    href: "https://github.com/Anibhu/TRACK_ME",
    logo: "",
    image: "/assets/projects/Tracking_Project.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 3,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 5,
        name: "Leaflet",
        path: "/assets/logos/leaflet.svg",
      },
    ],
  },

  // 2. E-commerce Platform
  {
    id: 2,
    title: "Full-Stack E-commerce Platform",
    description:
      "A full-stack e-commerce application that enables users to browse products, manage shopping carts, place orders, and manage their shopping experience through a responsive interface.",
    subDescription: [
      "Developed a dynamic web application using Node.js, Express.js, and EJS for server-side rendering.",
      "Integrated MongoDB with Mongoose for persistent storage and management of product and user data.",
      "Implemented product browsing, categorization, and shopping cart functionality.",
      "Designed responsive user interfaces using Tailwind CSS.",
      "Implemented server-side routing, controller-based architecture, and form handling."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Ecommerse.jpg",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/nodedotjs.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/express.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "EJS",
        path: "/assets/logos/ejs.svg",
      },
      {
        id: 5,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },

  // 3. Mediscript / DecipherDoc
  {
    id: 3,
    title: "Mediscript – AI-Powered Prescription Digitization",
    description:
      "An intelligent medical document digitization application that converts handwritten prescriptions and medical notes into structured, readable digital text using OCR and medical terminology recognition.",
    subDescription: [
      "Designed a document processing workflow supporting handwritten prescription images and PDF uploads.",
      "Integrated OCR-based text extraction to recognize handwritten medical notes and prescription details.",
      "Developed medical terminology correction to improve recognition of drug names and healthcare-related terms.",
      "Implemented image processing to prepare uploaded documents for improved text extraction.",
      "Enabled exporting extracted prescription information into readable text and structured JSON formats."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/OCR-Software.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "OCR",
        path: "/assets/logos/tesseract.svg",
      },
      {
        id: 3,
        name: "OpenCV",
        path: "/assets/logos/opencv.svg",
      },
      {
        id: 4,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
    ],
  },
];
export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "AI/ML Research Intern",
    job: "National Institute of Technology (NIT), Jamshedpur",
    date: "2025",
    contents: [
      "Worked on an AI-powered plant disease detection system using deep learning and computer vision techniques.",
      "Developed and evaluated deep learning models including MobileNetV2 and EfficientNetV2B3 for potato leaf disease classification.",
      "Achieved 98.67% classification accuracy using EfficientNetV2B3 on the plant disease detection dataset.",
      "Integrated Raspberry Pi camera-based image acquisition with a FastAPI backend for real-time disease prediction.",
      "Implemented cloud-based inference and Firebase integration for storing disease predictions, confidence scores, and timestamps."
    ],
  },
  {
    title: "Intern – Communication Department",
    job: "West Bengal State Electricity Transmission Company Limited (WBSETCL)",
    date: "10 Jun 2026 – 30 Jun 2026",
    contents: [
      "Gained practical exposure to communication systems used in electrical power transmission and grid operations.",
      "Studied Power Line Carrier Communication (PLCC), VHF communication, optical fiber communication, and OPGW technology.",
      "Explored PDH/SDH transmission systems, Remote Terminal Units (RTUs), and DTPC communication infrastructure.",
      "Learned about SCADA and Substation Automation Systems (SAS) used for monitoring, control, and communication in power substations.",
      "Visited an operational substation and State Load Despatch Centre (SLDC) to understand real-world power system communication and grid monitoring."
    ],
  },
];
