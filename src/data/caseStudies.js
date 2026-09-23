import healthcareImage from "../assets/images/case-studies/healthcare.png";
import bankingImage from "../assets/images/case-studies/banking.png";
import retailImage from "../assets/images/case-studies/retail.png";
import learningImage from "../assets/images/case-studies/learning.png";
import realEstateImage from "../assets/images/case-studies/real-estate.png";
import fleetImage from "../assets/images/case-studies/fleet.png";

const caseStudies = [
  {
    id: "healthcare",
    slug: "ai-healthcare-platform",

    sector: "Healthcare",
    title: "AI Healthcare Platform",

    shortDescription:
      "A connected digital healthcare ecosystem designed around intelligent workflows, patient engagement and operational visibility.",

    description:
      "A modern healthcare platform designed to connect patients, healthcare professionals and operational teams through intelligent digital experiences.",

    image: healthcareImage,

    tags: ["AI", "Healthcare", "Automation"],

    challenge:
      "Healthcare organizations often operate across disconnected systems, making it difficult to coordinate patient information, workflows and operational activities.",

    solution:
      "We designed a connected digital platform that brings patient engagement, intelligent workflows, operational visibility and automation into a unified ecosystem.",

    outcome:
      "The platform creates a more connected digital healthcare experience while providing teams with better visibility and streamlined operational workflows.",

    technologies: [
      "React",
      "Node.js",
      "Python",
      "AI / ML",
      "PostgreSQL",
      "Cloud",
    ],

    highlights: [
      "Intelligent healthcare workflows",
      "Patient engagement platform",
      "Operational dashboards",
      "AI-assisted processes",
      "Secure data architecture",
      "Cloud-ready infrastructure",
    ],
  },

  {
    id: "banking",
    slug: "digital-banking-intelligence",

    sector: "Banking & Financial Services",
    title: "Digital Banking Intelligence",

    shortDescription:
      "A modern financial technology platform connecting digital banking experiences, analytics, security and intelligent operations.",

    description:
      "A digital banking ecosystem built to support secure customer experiences, intelligent financial operations and data-driven decision making.",

    image: bankingImage,

    tags: ["FinTech", "Analytics", "Security"],

    challenge:
      "Financial organizations need secure digital experiences while simultaneously managing large volumes of transactional data and operational processes.",

    solution:
      "We created a scalable technology platform combining digital banking interfaces, analytics, intelligent workflows and security-focused architecture.",

    outcome:
      "The resulting platform provides a foundation for connected financial experiences, operational visibility and scalable digital services.",

    technologies: [
      "React",
      "Node.js",
      "Python",
      "SQL",
      "Analytics",
      "Cloud",
    ],

    highlights: [
      "Digital banking experience",
      "Financial analytics",
      "Secure architecture",
      "Operational dashboards",
      "Intelligent workflows",
      "Scalable cloud infrastructure",
    ],
  },

  {
    id: "retail",
    slug: "intelligent-retail-platform",

    sector: "Retail & E-Commerce",
    title: "Intelligent Retail Platform",

    shortDescription:
      "A connected retail platform bringing digital commerce, customer experiences, analytics and operational intelligence together.",

    description:
      "A modern retail technology ecosystem designed to connect customers, commerce operations and business intelligence.",

    image: retailImage,

    tags: ["Retail", "E-Commerce", "Analytics"],

    challenge:
      "Retail businesses need to coordinate customer experiences, commerce operations, inventory and analytics across multiple digital touchpoints.",

    solution:
      "We designed a unified retail platform connecting commerce experiences, operational workflows and analytics into one scalable ecosystem.",

    outcome:
      "The platform provides retailers with a connected foundation for digital commerce, customer engagement and operational decision making.",

    technologies: [
      "React",
      "Node.js",
      "SQL",
      "Analytics",
      "Cloud",
      "APIs",
    ],

    highlights: [
      "Digital commerce",
      "Customer experience",
      "Business analytics",
      "Inventory visibility",
      "Operational workflows",
      "Scalable architecture",
    ],
  },

  {
    id: "learning",
    slug: "next-generation-learning-platform",

    sector: "Education & Learning",
    title: "Next-Generation Learning Platform",

    shortDescription:
      "A digital learning ecosystem designed to connect learners, educators, content and intelligent learning experiences.",

    description:
      "A scalable learning platform that combines digital content, learner engagement, analytics and intelligent capabilities.",

    image: learningImage,

    tags: ["EdTech", "Learning", "AI"],

    challenge:
      "Modern learning environments require flexible digital platforms that can support different learning journeys, content types and user roles.",

    solution:
      "We developed a connected learning ecosystem supporting digital content, learner engagement, analytics and intelligent learning workflows.",

    outcome:
      "The platform provides learners and educators with a more connected and data-informed digital learning experience.",

    technologies: [
      "React",
      "Node.js",
      "Python",
      "AI",
      "PostgreSQL",
      "Cloud",
    ],

    highlights: [
      "Digital learning",
      "Learner dashboards",
      "Content management",
      "Learning analytics",
      "AI-assisted experiences",
      "Role-based access",
    ],
  },

  {
    id: "real-estate",
    slug: "real-estate-intelligence-platform",

    sector: "Real Estate",
    title: "Real Estate Intelligence Platform",

    shortDescription:
      "A digital real estate platform connecting property discovery, customer engagement, analytics and operational workflows.",

    description:
      "A technology ecosystem designed to modernize property discovery, customer engagement and real estate operations.",

    image: realEstateImage,

    tags: ["PropTech", "Real Estate", "Analytics"],

    challenge:
      "Real estate organizations often rely on fragmented systems for property information, customer interactions and operational processes.",

    solution:
      "We created a connected digital platform that brings property data, customer experiences, analytics and operational workflows together.",

    outcome:
      "The platform establishes a scalable digital foundation for property businesses looking to modernize their customer and operational experiences.",

    technologies: [
      "React",
      "Node.js",
      "SQL",
      "Maps",
      "Analytics",
      "Cloud",
    ],

    highlights: [
      "Property discovery",
      "Digital customer experience",
      "Property data",
      "Analytics dashboards",
      "Lead management",
      "Scalable infrastructure",
    ],
  },

  {
    id: "fleet",
    slug: "fleet-intelligence-platform",

    sector: "Logistics & Mobility",
    title: "Fleet Intelligence Platform",

    shortDescription:
      "A connected fleet intelligence ecosystem providing operational visibility, vehicle insights and data-driven mobility management.",

    description:
      "A modern fleet technology platform designed to help organizations connect vehicles, operational data and intelligent decision making.",

    image: fleetImage,

    tags: ["Fleet", "IoT", "Analytics"],

    challenge:
      "Fleet operators need real-time visibility into vehicles, journeys, operational performance and maintenance activities.",

    solution:
      "We designed a connected fleet intelligence platform combining vehicle data, operational dashboards, analytics and intelligent monitoring.",

    outcome:
      "The platform provides organizations with a centralized view of fleet operations and a foundation for data-driven mobility management.",

    technologies: [
      "React",
      "Node.js",
      "IoT",
      "SQL",
      "Analytics",
      "Cloud",
    ],

    highlights: [
      "Fleet monitoring",
      "Vehicle intelligence",
      "Operational dashboards",
      "Route visibility",
      "Maintenance insights",
      "Data analytics",
    ],
  },
];

export default caseStudies;