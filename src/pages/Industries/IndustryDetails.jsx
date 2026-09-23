import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Database,
  Layers3,
  Sparkles,
  Zap,
  Cloud,
  BarChart3,
  ShieldCheck,
  Users,
  Building2,
} from "lucide-react";

import "./IndustryDetails.css";

import healthcareImage from "../../assets/images/case-studies/healthcare.png";
import bankingImage from "../../assets/images/case-studies/banking.png";
import learningImage from "../../assets/images/case-studies/learning.png";
import retailImage from "../../assets/images/case-studies/retail.png";
import realEstateImage from "../../assets/images/case-studies/real-estate.png";
import fleetImage from "../../assets/images/case-studies/fleet.png";
import heroImage from "../../assets/images/hero-tech.png";


/* =========================================================
   INDUSTRY DATA
========================================================= */

const industries = {
  healthcare: {
    number: "01",
    category: "HEALTHCARE TECHNOLOGY",
    title: "Digital platforms for the future of healthcare.",
    description:
      "We build secure, connected technology platforms that simplify healthcare operations, improve patient engagement, and enable intelligent decision-making.",
    image: healthcareImage,

    challengesTitle: "Technology needs to solve real healthcare problems.",
    challengesDescription:
      "Healthcare organizations operate across complex workflows, disconnected systems, sensitive information, and high expectations for patient experience.",

    challenges: [
      {
        icon: Users,
        title: "Patient engagement",
        text: "Create connected digital experiences that make healthcare more accessible and convenient.",
      },
      {
        icon: Database,
        title: "Connected information",
        text: "Bring operational and patient information together through reliable digital systems.",
      },
      {
        icon: ShieldCheck,
        title: "Security & compliance",
        text: "Design technology environments around privacy, security, and controlled access.",
      },
      {
        icon: BarChart3,
        title: "Operational intelligence",
        text: "Turn healthcare data into insights that support better operational decisions.",
      },
    ],

    solutionsTitle: "Digital solutions designed for healthcare.",
    solutionsDescription:
      "From patient-facing applications to intelligent automation, we combine technology capabilities to support healthcare organizations.",

    solutions: [
      {
        icon: Users,
        title: "Patient Platforms",
        text: "Digital experiences connecting patients, providers, and healthcare services.",
      },
      {
        icon: Zap,
        title: "Healthcare Automation",
        text: "Automate repetitive workflows and improve operational efficiency.",
      },
      {
        icon: Database,
        title: "Health Data Platforms",
        text: "Structured data environments designed for secure access and analysis.",
      },
      {
        icon: Sparkles,
        title: "AI & Intelligent Systems",
        text: "Intelligent tools that support workflows, insights, and decision-making.",
      },
    ],

    capabilities: [
      "Patient portals",
      "Healthcare applications",
      "Data platforms",
      "Workflow automation",
      "AI-powered solutions",
      "Analytics & reporting",
    ],

    technologies: ["React", "Node.js", "Python", "AI / ML", "Cloud", "SQL"],
  },

  banking: {
    number: "02",
    category: "BANKING & FINANCIAL SERVICES",
    title: "Digital banking experiences built for trust and scale.",
    description:
      "We engineer secure financial technology platforms that connect digital experiences, analytics, automation, and intelligent operations.",
    image: bankingImage,

    challengesTitle: "Modern finance demands secure digital infrastructure.",
    challengesDescription:
      "Financial organizations need technology that balances security, customer experience, operational efficiency, and continuous innovation.",

    challenges: [
      {
        icon: ShieldCheck,
        title: "Security",
        text: "Build technology environments with security and controlled access at their core.",
      },
      {
        icon: Users,
        title: "Customer experience",
        text: "Create intuitive digital banking experiences across customer touchpoints.",
      },
      {
        icon: BarChart3,
        title: "Financial intelligence",
        text: "Turn complex financial information into actionable business insights.",
      },
      {
        icon: Zap,
        title: "Automation",
        text: "Reduce manual processes through intelligent workflow automation.",
      },
    ],

    solutionsTitle: "Technology built around financial operations.",
    solutionsDescription:
      "We combine software engineering, data, cloud, and AI capabilities to create modern financial technology platforms.",

    solutions: [
      {
        icon: Building2,
        title: "Digital Banking",
        text: "Connected digital experiences for customers and financial teams.",
      },
      {
        icon: ShieldCheck,
        title: "Security Platforms",
        text: "Technology designed around secure transactions and controlled access.",
      },
      {
        icon: BarChart3,
        title: "Financial Analytics",
        text: "Analytics platforms that turn financial data into actionable insights.",
      },
      {
        icon: Sparkles,
        title: "Intelligent Automation",
        text: "AI-powered workflows that improve operational efficiency.",
      },
    ],

    capabilities: [
      "Digital banking platforms",
      "Financial analytics",
      "Customer portals",
      "Security systems",
      "Workflow automation",
      "Reporting platforms",
    ],

    technologies: ["React", "Node.js", "Java", "Python", "SQL", "Azure"],
  },

  education: {
    number: "03",
    category: "EDUCATION TECHNOLOGY",
    title: "Technology platforms transforming learning experiences.",
    description:
      "We create digital learning ecosystems that connect students, educators, institutions, and intelligent technology.",

    image: learningImage,

    challengesTitle: "Learning is becoming increasingly digital.",
    challengesDescription:
      "Educational institutions need technology that improves accessibility, engagement, administration, and learning outcomes.",

    challenges: [
      {
        icon: Users,
        title: "Learner engagement",
        text: "Create intuitive digital experiences that keep learners connected and engaged.",
      },
      {
        icon: Database,
        title: "Learning data",
        text: "Bring academic and operational information into connected platforms.",
      },
      {
        icon: Sparkles,
        title: "Intelligent learning",
        text: "Use AI and automation to create more personalized learning experiences.",
      },
      {
        icon: BarChart3,
        title: "Institutional insights",
        text: "Provide actionable analytics for educators and administrators.",
      },
    ],

    solutionsTitle: "Digital solutions for modern education.",
    solutionsDescription:
      "We build platforms that support the complete learning ecosystem from administration to intelligent learning.",

    solutions: [
      {
        icon: Layers3,
        title: "Learning Platforms",
        text: "Scalable digital platforms connecting students and educators.",
      },
      {
        icon: Sparkles,
        title: "AI Learning",
        text: "Intelligent tools designed to personalize learning experiences.",
      },
      {
        icon: Building2,
        title: "Campus Platforms",
        text: "Connected technology for academic and institutional operations.",
      },
      {
        icon: BarChart3,
        title: "Education Analytics",
        text: "Data-driven insights for better institutional decisions.",
      },
    ],

    capabilities: [
      "Learning management systems",
      "Student portals",
      "Campus platforms",
      "AI learning tools",
      "Education analytics",
      "Workflow automation",
    ],

    technologies: ["React", "Node.js", "Python", "AI / ML", "PostgreSQL", "Cloud"],
  },

  retail: {
    number: "04",
    category: "RETAIL & E-COMMERCE",
    title: "Digital commerce experiences built around the customer.",
    description:
      "We create scalable retail platforms that connect customers, commerce operations, data, and intelligent automation.",

    image: retailImage,

    challengesTitle: "Retail experiences are now digital-first.",
    challengesDescription:
      "Retail organizations need connected technology across commerce, inventory, customer engagement, analytics, and operations.",

    challenges: [
      {
        icon: Users,
        title: "Customer experience",
        text: "Deliver seamless digital experiences across every customer interaction.",
      },
      {
        icon: Database,
        title: "Inventory visibility",
        text: "Connect inventory information across channels and operations.",
      },
      {
        icon: BarChart3,
        title: "Commerce analytics",
        text: "Understand customer and business data through actionable analytics.",
      },
      {
        icon: Zap,
        title: "Operational automation",
        text: "Automate repetitive commerce and business workflows.",
      },
    ],

    solutionsTitle: "Technology for modern commerce.",
    solutionsDescription:
      "From customer-facing applications to intelligent backend systems, we create technology designed for growth.",

    solutions: [
      {
        icon: Building2,
        title: "E-Commerce Platforms",
        text: "High-performance digital commerce experiences built for scale.",
      },
      {
        icon: Database,
        title: "Inventory Systems",
        text: "Connected inventory and operational management platforms.",
      },
      {
        icon: Users,
        title: "Customer Platforms",
        text: "Digital experiences designed around customer engagement.",
      },
      {
        icon: BarChart3,
        title: "Retail Intelligence",
        text: "Analytics and reporting for data-driven retail decisions.",
      },
    ],

    capabilities: [
      "E-commerce platforms",
      "Inventory systems",
      "Customer portals",
      "Retail analytics",
      "Payment integrations",
      "Commerce automation",
    ],

    technologies: ["React", "Node.js", "Express", "SQL", "Python", "Cloud"],
  },

  "real-estate": {
    number: "05",
    category: "PROPERTY TECHNOLOGY",
    title: "Digital platforms for the future of real estate.",
    description:
      "We create technology platforms that simplify property discovery, management, customer engagement, and real estate operations.",

    image: realEstateImage,

    challengesTitle: "Technology needs to solve real business problems.",
    challengesDescription:
      "The real estate industry combines operational complexity, customer expectations, property information, and technology challenges. We design solutions around those realities.",

    challenges: [
      {
        icon: Building2,
        title: "Property information",
        text: "Bring property information, listings, availability, and operational data together.",
      },
      {
        icon: Users,
        title: "Customer engagement",
        text: "Create digital experiences that connect buyers, tenants, agents, and property teams.",
      },
      {
        icon: Database,
        title: "Property operations",
        text: "Connect operational workflows and property management processes through technology.",
      },
      {
        icon: BarChart3,
        title: "Business intelligence",
        text: "Use data and analytics to understand property performance and business operations.",
      },
    ],

    solutionsTitle: "Digital solutions designed for your industry.",
    solutionsDescription:
      "From property discovery to intelligent automation, we combine technology capabilities to support specific real estate requirements.",

    solutions: [
      {
        icon: Building2,
        title: "Property Platforms",
        text: "Digital platforms that bring property listings, buyers, agents, and operations together.",
      },
      {
        icon: Users,
        title: "Lead Management",
        text: "Organize and automate lead workflows to create more consistent customer journeys.",
      },
      {
        icon: BarChart3,
        title: "Property Intelligence",
        text: "Use structured data and analytics to understand property and business performance.",
      },
      {
        icon: Sparkles,
        title: "Real Estate Automation",
        text: "Reduce manual work by connecting workflows across sales, operations, and customer engagement.",
      },
    ],

    capabilities: [
      "Property listing platforms",
      "Real estate CRM",
      "Lead management",
      "Property dashboards",
      "Customer portals",
      "Real estate analytics",
    ],

    technologies: ["React", "Node.js", "Express", "SQL", "Python", "Cloud"],
  },

  manufacturing: {
    number: "06",
    category: "MANUFACTURING",
    title: "Connected technology for smarter manufacturing.",
    description:
      "We help manufacturing organizations connect operations, data, automation, and business intelligence through modern technology platforms.",

    image: heroImage,

    challengesTitle: "Modern manufacturing depends on connected systems.",
    challengesDescription:
      "Manufacturing operations require visibility across processes, assets, supply chains, people, and data.",

    challenges: [
      {
        icon: Database,
        title: "Operational data",
        text: "Connect operational information across manufacturing environments.",
      },
      {
        icon: Zap,
        title: "Process automation",
        text: "Automate repetitive workflows and improve operational efficiency.",
      },
      {
        icon: BarChart3,
        title: "Performance intelligence",
        text: "Transform operational data into useful business insights.",
      },
      {
        icon: Cloud,
        title: "Connected infrastructure",
        text: "Create scalable cloud and software infrastructure for modern operations.",
      },
    ],

    solutionsTitle: "Technology designed for connected operations.",
    solutionsDescription:
      "We combine software engineering, analytics, automation, and cloud capabilities for modern manufacturing environments.",

    solutions: [
      {
        icon: Database,
        title: "Operations Platforms",
        text: "Connected systems for managing operational workflows and information.",
      },
      {
        icon: Zap,
        title: "Process Automation",
        text: "Automate workflows and reduce manual operational processes.",
      },
      {
        icon: BarChart3,
        title: "Manufacturing Analytics",
        text: "Turn operational information into actionable insights.",
      },
      {
        icon: Cloud,
        title: "Cloud Platforms",
        text: "Scalable infrastructure supporting modern manufacturing systems.",
      },
    ],

    capabilities: [
      "Operations platforms",
      "Process automation",
      "Data dashboards",
      "Analytics",
      "Cloud infrastructure",
      "Enterprise applications",
    ],

    technologies: ["React", "Node.js", "Python", "SQL", "Azure", "Docker"],
  },

  logistics: {
    number: "07",
    category: "LOGISTICS & SUPPLY CHAIN",
    title: "Technology that keeps modern logistics moving.",
    description:
      "We build connected platforms for logistics operations, fleet visibility, automation, and supply chain intelligence.",

    image: fleetImage,

    challengesTitle: "Logistics depends on real-time visibility.",
    challengesDescription:
      "Modern logistics operations require connected information across vehicles, routes, customers, inventory, and teams.",

    challenges: [
      {
        icon: Zap,
        title: "Real-time operations",
        text: "Connect operational information to improve visibility and responsiveness.",
      },
      {
        icon: Database,
        title: "Supply chain data",
        text: "Bring information together across logistics and supply chain workflows.",
      },
      {
        icon: BarChart3,
        title: "Operational intelligence",
        text: "Use analytics to understand performance and identify opportunities.",
      },
      {
        icon: Cloud,
        title: "Scalable infrastructure",
        text: "Build reliable platforms capable of supporting growing logistics operations.",
      },
    ],

    solutionsTitle: "Connected technology for logistics.",
    solutionsDescription:
      "We create platforms that connect people, vehicles, data, and operational workflows.",

    solutions: [
      {
        icon: Zap,
        title: "Fleet Intelligence",
        text: "Connected visibility into fleet operations and vehicle activity.",
      },
      {
        icon: Database,
        title: "Logistics Platforms",
        text: "Digital systems for managing logistics workflows and operations.",
      },
      {
        icon: BarChart3,
        title: "Performance Analytics",
        text: "Dashboards and analytics designed around logistics performance.",
      },
      {
        icon: Cloud,
        title: "Connected Infrastructure",
        text: "Cloud-based systems designed for scale and reliability.",
      },
    ],

    capabilities: [
      "Fleet management",
      "Route management",
      "Logistics dashboards",
      "Operational analytics",
      "Tracking platforms",
      "Workflow automation",
    ],

    technologies: ["React", "Node.js", "Python", "SQL", "Cloud", "APIs"],
  },

  automotive: {
    number: "08",
    category: "AUTOMOTIVE",
    title: "Connected technology for the automotive ecosystem.",
    description:
      "We create digital platforms that connect vehicles, customers, service operations, and intelligent data.",

    image: fleetImage,

    challengesTitle: "Automotive is becoming increasingly connected.",
    challengesDescription:
      "Automotive businesses need technology that connects vehicles, service operations, customer experiences, and data.",

    challenges: [
      {
        icon: Users,
        title: "Customer experience",
        text: "Create connected digital experiences for automotive customers.",
      },
      {
        icon: Database,
        title: "Vehicle information",
        text: "Bring vehicle and operational information into accessible digital platforms.",
      },
      {
        icon: Zap,
        title: "Service automation",
        text: "Improve service operations through connected digital workflows.",
      },
      {
        icon: BarChart3,
        title: "Vehicle intelligence",
        text: "Turn vehicle and business data into useful operational insights.",
      },
    ],

    solutionsTitle: "Digital solutions for automotive businesses.",
    solutionsDescription:
      "We build connected platforms for vehicle operations, service management, and customer engagement.",

    solutions: [
      {
        icon: Building2,
        title: "Service Platforms",
        text: "Digital platforms connecting automotive service teams and customers.",
      },
      {
        icon: Database,
        title: "Vehicle Data",
        text: "Connected systems for collecting and managing vehicle information.",
      },
      {
        icon: Users,
        title: "Customer Portals",
        text: "Digital experiences designed around automotive customers.",
      },
      {
        icon: BarChart3,
        title: "Automotive Analytics",
        text: "Insights that support better service and operational decisions.",
      },
    ],

    capabilities: [
      "Vehicle platforms",
      "Service management",
      "Customer portals",
      "Fleet systems",
      "Vehicle analytics",
      "Automation",
    ],

    technologies: ["React", "Node.js", "Python", "SQL", "Cloud", "APIs"],
  },

  hospitality: {
    number: "09",
    category: "HOSPITALITY",
    title: "Digital experiences designed around modern guests.",
    description:
      "We create connected hospitality platforms that improve guest engagement, operations, and service delivery.",

    image: heroImage,

    challengesTitle: "Hospitality is built around experience.",
    challengesDescription:
      "Technology should simplify operations while making every guest interaction more connected and intuitive.",

    challenges: [
      {
        icon: Users,
        title: "Guest experience",
        text: "Create seamless digital experiences across the guest journey.",
      },
      {
        icon: Building2,
        title: "Property operations",
        text: "Connect operational workflows across hospitality environments.",
      },
      {
        icon: Database,
        title: "Connected information",
        text: "Bring reservations, customers, and operational data together.",
      },
      {
        icon: BarChart3,
        title: "Business intelligence",
        text: "Use analytics to understand operations and customer behavior.",
      },
    ],

    solutionsTitle: "Technology for connected hospitality.",
    solutionsDescription:
      "We build digital platforms that improve guest engagement and simplify hospitality operations.",

    solutions: [
      {
        icon: Users,
        title: "Guest Platforms",
        text: "Digital experiences that connect guests and hospitality teams.",
      },
      {
        icon: Building2,
        title: "Property Systems",
        text: "Technology platforms for managing hospitality operations.",
      },
      {
        icon: BarChart3,
        title: "Hospitality Analytics",
        text: "Actionable data and analytics for operational decisions.",
      },
      {
        icon: Sparkles,
        title: "Intelligent Automation",
        text: "Automate workflows to improve service efficiency.",
      },
    ],

    capabilities: [
      "Guest platforms",
      "Property management",
      "Booking systems",
      "Customer engagement",
      "Hospitality analytics",
      "Automation",
    ],

    technologies: ["React", "Node.js", "Python", "SQL", "Cloud", "APIs"],
  },

  travel: {
    number: "10",
    category: "TRAVEL & TOURISM",
    title: "Technology that makes travel more connected.",
    description:
      "We build digital travel platforms that simplify discovery, booking, customer engagement, and operational workflows.",

    image: heroImage,

    challengesTitle: "Travel experiences depend on connected journeys.",
    challengesDescription:
      "Travel businesses need technology that connects customers, bookings, operations, destinations, and data.",

    challenges: [
      {
        icon: Users,
        title: "Traveler experience",
        text: "Create intuitive experiences across discovery, booking, and travel.",
      },
      {
        icon: Database,
        title: "Booking information",
        text: "Connect travel information across customers, packages, and operations.",
      },
      {
        icon: Zap,
        title: "Operational efficiency",
        text: "Automate repetitive workflows across travel operations.",
      },
      {
        icon: BarChart3,
        title: "Travel intelligence",
        text: "Use data to understand customer behavior and business performance.",
      },
    ],

    solutionsTitle: "Digital solutions for travel businesses.",
    solutionsDescription:
      "We combine software engineering, cloud, data, and AI to build modern travel experiences.",

    solutions: [
      {
        icon: Users,
        title: "Travel Platforms",
        text: "Connected digital experiences for travelers and travel businesses.",
      },
      {
        icon: Building2,
        title: "Booking Systems",
        text: "Scalable platforms for packages, reservations, and operations.",
      },
      {
        icon: BarChart3,
        title: "Travel Analytics",
        text: "Insights that help businesses understand travel behavior.",
      },
      {
        icon: Sparkles,
        title: "AI Travel Solutions",
        text: "Intelligent technology for discovery, recommendations, and automation.",
      },
    ],

    capabilities: [
      "Travel platforms",
      "Booking systems",
      "Tour management",
      "Customer portals",
      "Travel analytics",
      "AI solutions",
    ],

    technologies: ["React", "Node.js", "Spring Boot", "SQL", "Redis", "Cloud"],
  },

  media: {
    number: "11",
    category: "MEDIA & ENTERTAINMENT",
    title: "Digital platforms for modern media experiences.",
    description:
      "We create scalable technology platforms for content, audiences, engagement, and intelligent media operations.",

    image: heroImage,

    challengesTitle: "Media is evolving faster than ever.",
    challengesDescription:
      "Modern media organizations need technology that supports content delivery, audience engagement, analytics, and scale.",

    challenges: [
      {
        icon: Users,
        title: "Audience engagement",
        text: "Create connected digital experiences that keep audiences engaged.",
      },
      {
        icon: Cloud,
        title: "Content delivery",
        text: "Build scalable platforms capable of delivering digital experiences at scale.",
      },
      {
        icon: BarChart3,
        title: "Audience intelligence",
        text: "Understand content and audience behavior through analytics.",
      },
      {
        icon: Sparkles,
        title: "Intelligent content",
        text: "Use AI and automation to support modern content workflows.",
      },
    ],

    solutionsTitle: "Technology built for digital audiences.",
    solutionsDescription:
      "We engineer platforms that connect content, audiences, analytics, and intelligent technology.",

    solutions: [
      {
        icon: Cloud,
        title: "Content Platforms",
        text: "Scalable systems for managing and delivering digital content.",
      },
      {
        icon: Users,
        title: "Audience Platforms",
        text: "Digital experiences designed around audience engagement.",
      },
      {
        icon: BarChart3,
        title: "Media Analytics",
        text: "Actionable insights into audience and content performance.",
      },
      {
        icon: Sparkles,
        title: "AI Media Solutions",
        text: "Intelligent automation for modern media workflows.",
      },
    ],

    capabilities: [
      "Content platforms",
      "Streaming experiences",
      "Audience analytics",
      "Digital publishing",
      "AI automation",
      "Cloud infrastructure",
    ],

    technologies: ["React", "Node.js", "Python", "Cloud", "AI / ML", "SQL"],
  },

  startups: {
    number: "12",
    category: "STARTUPS & SMEs",
    title: "Technology built to help ambitious businesses move faster.",
    description:
      "We help startups and growing businesses turn ideas into scalable digital products without unnecessary complexity.",

    image: heroImage,

    challengesTitle: "Growing businesses need technology that keeps pace.",
    challengesDescription:
      "Startups and SMEs need reliable engineering, fast iteration, scalable architecture, and technology aligned with business priorities.",

    challenges: [
      {
        icon: Zap,
        title: "Speed to market",
        text: "Move from idea to production through focused product engineering.",
      },
      {
        icon: Layers3,
        title: "Scalable architecture",
        text: "Build foundations that can evolve as your business grows.",
      },
      {
        icon: Users,
        title: "Product experience",
        text: "Create digital products that customers can understand and use easily.",
      },
      {
        icon: BarChart3,
        title: "Growth intelligence",
        text: "Use data to understand product performance and business growth.",
      },
    ],

    solutionsTitle: "Digital products built for growth.",
    solutionsDescription:
      "From MVP development to scalable platforms, we provide the engineering capabilities growing businesses need.",

    solutions: [
      {
        icon: Code2,
        title: "Product Engineering",
        text: "Build reliable digital products from concept through production.",
      },
      {
        icon: Layers3,
        title: "MVP Development",
        text: "Validate ideas quickly with focused and scalable product builds.",
      },
      {
        icon: Cloud,
        title: "Cloud Platforms",
        text: "Create infrastructure that grows alongside your business.",
      },
      {
        icon: Sparkles,
        title: "AI Integration",
        text: "Add intelligent capabilities that create meaningful product value.",
      },
    ],

    capabilities: [
      "MVP development",
      "Product engineering",
      "Web applications",
      "Mobile applications",
      "AI integration",
      "Cloud infrastructure",
    ],

    technologies: ["React", "Node.js", "Python", "SQL", "AWS", "Azure"],
  },
};


/* =========================================================
   COMPONENT
========================================================= */

export default function IndustryDetails() {
  const { slug } = useParams();

  const industry = industries[slug];

  if (!industry) {
    return (
      <main className="industry-not-found">
        <div className="industry-not-found-inner">
          <span>INDUSTRY</span>

          <h1>Industry not found</h1>

          <p>
            The industry you're looking for doesn't exist.
          </p>

          <Link to="/industries">
            <ArrowRight size={16} />
            Back to Industries
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="industry-details-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="industry-hero">

        <div className="industry-hero-background">
          <div className="hero-grid-lines" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
        </div>

        <div className="industry-container">

          {/* Breadcrumb */}

          <div className="industry-breadcrumb">

            <Link to="/">Home</Link>

            <ChevronRight size={14} />

            <Link to="/industries">Industries</Link>

            <ChevronRight size={14} />

            <span>
              {industry.category
                .toLowerCase()
                .replace(" technology", "")
                .replace("property", "Real Estate")}
            </span>

          </div>


          <div className="industry-hero-content">

            <div className="industry-hero-copy">

              <div className="industry-eyebrow">

                <span className="eyebrow-number">
                  {industry.number}
                </span>

                <span>
                  {industry.category}
                </span>

              </div>


              <h1>
                {industry.title}
              </h1>


              <p className="industry-hero-description">
                {industry.description}
              </p>


              <div className="industry-hero-actions">

                <Link
                  to="/contact"
                  className="industry-primary-button"
                >
                  Start a Conversation
                  <ArrowUpRight size={17} />
                </Link>


                <Link
                  to="/case-studies"
                  className="industry-secondary-button"
                >
                  View Case Studies
                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>


            {/* Hero Visual */}

            <div className="industry-hero-visual">

              <div className="hero-image-frame">

                <img
                  src={industry.image || heroImage}
                  alt={`${industry.category} technology`}
                />

                <div className="hero-image-overlay" />

                <div className="hero-floating-card">

                  <div className="floating-icon">
                    <Sparkles size={19} />
                  </div>

                  <div>
                    <span>Technology Solutions</span>
                    <strong>
                      Built around your industry
                    </strong>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CHALLENGES
      ===================================================== */}

      <section className="industry-section industry-challenges">

        <div className="industry-container">

          <div className="section-introduction">

            <div className="section-label">
              THE CHALLENGE
            </div>

            <div className="section-heading-wrap">

              <h2>
                {industry.challengesTitle}
              </h2>

              <p>
                {industry.challengesDescription}
              </p>

            </div>

          </div>


          <div className="challenge-grid">

            {industry.challenges.map((challenge, index) => {

              const Icon = challenge.icon;

              return (
                <article
                  className="challenge-card"
                  key={challenge.title}
                >

                  <div className="challenge-top">

                    <span>
                      0{index + 1}
                    </span>

                    <div className="challenge-icon">
                      <Icon size={20} />
                    </div>

                  </div>

                  <h3>
                    {challenge.title}
                  </h3>

                  <p>
                    {challenge.text}
                  </p>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section className="industry-section industry-solutions">

        <div className="industry-container">

          <div className="section-introduction solutions-introduction">

            <div className="section-label">
              OUR APPROACH
            </div>

            <div className="section-heading-wrap">

              <h2>
                {industry.solutionsTitle}
              </h2>

              <p>
                {industry.solutionsDescription}
              </p>

            </div>

          </div>


          <div className="solutions-grid">

            {industry.solutions.map((solution, index) => {

              const Icon = solution.icon;

              return (
                <article
                  className="solution-card"
                  key={solution.title}
                >

                  <div className="solution-number">
                    0{index + 1}
                  </div>

                  <div className="solution-icon">
                    <Icon size={23} />
                  </div>

                  <div className="solution-content">

                    <h3>
                      {solution.title}
                    </h3>

                    <p>
                      {solution.text}
                    </p>

                  </div>

                  <ArrowUpRight
                    className="solution-arrow"
                    size={19}
                  />

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="industry-capabilities">

        <div className="industry-container">

          <div className="capabilities-panel">

            <div className="capabilities-copy">

              <div className="section-label">
                TECHNOLOGY CAPABILITIES
              </div>

              <h2>
                Technology capabilities
                <br />
                aligned to your needs.
              </h2>

              <p>
                We bring together engineering, data, cloud,
                and intelligent technologies to create solutions
                designed around your business objectives.
              </p>

              <Link
                to="/technologies"
                className="capabilities-link"
              >
                Explore our technologies
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="capabilities-list">

              {industry.capabilities.map(
                (capability, index) => (
                  <div
                    className="capability-item"
                    key={capability}
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="capability-check">
                      <Check size={14} />
                    </div>

                    <strong>
                      {capability}
                    </strong>

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY STACK
      ===================================================== */}

      <section className="industry-section technology-stack">

        <div className="industry-container">

          <div className="stack-heading">

            <div>
              <div className="section-label">
                TECHNOLOGY STACK
              </div>

              <h2>
                Built with modern technology.
              </h2>
            </div>

            <p>
              We select technologies based on the
              requirements, scale, and long-term
              objectives of each solution.
            </p>

          </div>


          <div className="technology-pills">

            {industry.technologies.map(
              (technology) => (
                <div
                  className="technology-pill"
                  key={technology}
                >
                  <Code2 size={16} />
                  {technology}
                </div>
              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="industry-final-cta">

        <div className="industry-container">

          <div className="final-cta-inner">

            <div className="final-cta-glow" />

            <div className="final-cta-content">

              <span>
                BUILD WHAT'S NEXT
              </span>

              <h2>
                Let's create technology
                <br />
                built for your industry.
              </h2>

              <p>
                Tell us what you're building, what you're
                trying to improve, or where technology can
                create more value for your business.
              </p>

            </div>


            <Link
              to="/contact"
              className="final-cta-button"
            >
              Start a Conversation
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}