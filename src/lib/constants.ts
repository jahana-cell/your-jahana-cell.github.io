

import { 
    ShieldCheck, Users, Recycle, MapPin, CheckSquare, TrendingUp,
    BarChart, Brush, FileText, FlaskConical, Globe, Goal, LayoutTemplate, 
    Library, Mail, Megaphone, MousePointerClick, Rocket, Scaling, Search, 
    Settings, Target, TestTube2, FileUp, Accessibility, PartyPopper, PenSquare,
    Handshake, Briefcase, DollarSign, Tractor, Home, Award, Wheat, Sprout, Combine, Droplets, Package, PieChart, GitCompareArrows, Eye, ShoppingCart, Repeat2, Video, AlertTriangle, Calendar, Clock, Vote, Landmark, Heart, Building, Scale
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type RoadmapItem = {
  icon: LucideIcon;
  title: string;
  timeline: string;
  pillar?: string;
  description: string;
  status: 'Complete' | 'In Progress' | 'Upcoming';
};

export const pillar1Items: RoadmapItem[] = [
  {
    icon: Globe,
    title: "Acquire Domain & Set Up Hosting",
    timeline: "Aug 20 - Sep 1",
    pillar: "Pillar 1",
    description: "Purchase the domain name 'growsharecapital.com' and configure reliable hosting. This foundational step ensures a professional web presence and is critical for all subsequent digital activities.",
    status: "Complete"
  },
  {
    icon: LayoutTemplate,
    title: "Develop New Landing Page",
    timeline: "Sep 2 - Sep 5",
    pillar: "Pillar 1",
    description: "Design and build a modern, responsive landing page that effectively communicates our value proposition. The page will be optimized for user engagement and conversion.",
    status: "Complete"
  },
  {
    icon: LayoutTemplate,
    title: "Web Builder by Squarespace",
    timeline: "July 25 - Present",
    pillar: "Pillar 1",
    description: "Utilizing Squarespace's web builder tools to develop and iterate on the website's design and functionality, enabling rapid prototyping and deployment.",
    status: "In Progress"
  },
  {
    icon: Brush,
    title: "Design Interactive Website Theme",
    timeline: "Sep 6 - Sep 9",
    pillar: "Pillar 1",
    description: "Create a visually stunning and interactive theme that enhances user experience and reinforces our brand identity. The design will be modern, intuitive, and fully responsive.",
    status: "In Progress"
  },
  {
    icon: Library,
    title: "Consolidate Multiple Websites into a Single Platform",
    timeline: "Sep 10 - Sep 12",
    pillar: "Pillar 1",
    description: "Merge several existing websites into a unified platform to streamline branding, improve user experience, and simplify content management. This will create a single source of truth for all digital content.",
    status: "Complete"
  },
  {
    icon: FileText,
    title: "Migrate Legacy Content",
    timeline: "Sep 13 - Sep 15",
    pillar: "Pillar 1",
    description: "Transfer all existing articles, blog posts, and other valuable content from the old platform to the new site. This ensures that we retain our SEO rankings and provide a seamless user experience.",
    status: "In Progress"
  },
  {
    icon: MousePointerClick,
    title: "Implement a Content Management System (CMS)",
    timeline: "Sep 16 - Sep 18",
    pillar: "Pillar 1",
    description: "Integrate a user-friendly CMS to streamline content creation, editing, and management. This will empower our team to keep the site updated with fresh and relevant information.",
    status: "Upcoming"
  },
  {
    icon: Search,
    title: "Conduct SEO Audit & Keyword Research",
    timeline: "Sep 19 - Sep 21",
    pillar: "Pillar 1",
    description: "Perform a comprehensive SEO audit to identify optimization opportunities and conduct keyword research to target relevant search terms.",
    status: "Upcoming"
  },
  {
    icon: FileUp,
    title: "Optimize On-Page SEO",
    timeline: "Sep 22 - Sep 23",
    pillar: "Pillar 1",
    description: "Optimize meta tags, headers, content, and images across the website to improve search engine rankings and organic visibility.",
    status: "Upcoming"
  },
  {
    icon: Accessibility,
    title: "Ensure Website Accessibility (WCAG)",
    timeline: "Sep 24 - Sep 25",
    pillar: "Pillar 1",
    description: "Audit and update the website to meet Web Content Accessibility Guidelines (WCAG) 2.1 AA standards, ensuring it is usable for people with disabilities.",
    status: "Upcoming"
  },
  {
    icon: Rocket,
    title: "Website Performance Optimization",
    timeline: "Sep 26 - Sep 27",
    pillar: "Pillar 1",
    description: "Improve page load times and overall site performance by optimizing images, leveraging browser caching, and minifying code.",
    status: "Upcoming"
  },
  {
    icon: ShieldCheck,
    title: "Implement Security Best Practices",
    timeline: "Sep 28",
    pillar: "Pillar 1",
    description: "Implement security measures such as SSL, firewalls, and regular backups to protect the website from threats.",
    status: "Upcoming"
  },
  {
    icon: TestTube2,
    title: "Final QA & Cross-Browser Testing",
    timeline: "Sep 29",
    pillar: "Pillar 1",
    description: "Conduct thorough quality assurance and testing across multiple browsers and devices to ensure a seamless user experience for all visitors.",
    status: "Upcoming"
  },
  {
    icon: PartyPopper,
    title: "Official Website Launch",
    timeline: "Sep 30",
    pillar: "Pillar 1",
    description: "Deploy the new website to the live server and make it accessible to the public. Go-live checklists and post-launch monitoring will be in place.",
    status: "Upcoming"
  }
];

export const pillar2Items: RoadmapItem[] = [
  {
    icon: Target,
    title: "Secure Social Media Handles",
    timeline: "Sep 4 - Sep 10",
    pillar: "Pillar 2",
    description: "Register and secure consistent social media handles across all relevant platforms (e.g., Twitter, LinkedIn, Facebook). This unifies our brand identity and makes it easier for our audience to find us.",
    status: "In Progress"
  },
  {
    icon: Brush,
    title: "Design Social Media Profiles",
    timeline: "Sep 8 - Sep 15",
    pillar: "Pillar 2",
    description: "Create a cohesive and professional visual identity for our social media profiles, including profile pictures, banners, and templates for posts.",
    status: "In Progress"
  },
  {
    icon: Megaphone,
    title: "Develop Content Creation Strategy",
    timeline: "Sep 16 - Sep 22",
    pillar: "Pillar 2",
    description: "Outline a content strategy that defines our voice, content pillars, and posting frequency to engage our target audience.",
    status: "In Progress"
  },
  {
    icon: Users,
    title: "Community Engagement Plan",
    timeline: "Sep 23 - Sep 29",
    pillar: "Pillar 2",
    description: "Develop a plan for interacting with our audience, responding to comments, and fostering a sense of community around our brand.",
    status: "Upcoming"
  },
  {
    icon: BarChart,
    title: "Implement Analytics & Tracking",
    timeline: "Sep 30 - Oct 6",
    pillar: "Pillar 2",
    description: "Set up and configure web analytics tools (e.g., Google Analytics) to track key performance indicators (KPIs), monitor user behavior, and gather data-driven insights for continuous improvement.",
    status: "Upcoming"
  },
  {
    icon: Mail,
    title: "Set Up Email Marketing Platform",
    timeline: "Oct 7 - Oct 13",
    pillar: "Pillar 2",
    description: "Select and configure an email marketing platform to build our subscriber list and nurture leads.",
    status: "Upcoming"
  },
  {
    icon: Settings,
    title: "A/B Testing Framework Setup",
    timeline: "Oct 14 - Oct 20",
    pillar: "Pillar 2",
    description: "Establish a framework for A/B testing landing pages, ad copy, and calls-to-action to optimize conversion rates.",
    status: "Upcoming"
  },
  {
    icon: FlaskConical,
    title: "Advertising Research & Experimentation",
    timeline: "Oct 21 - Oct 27",
    pillar: "Pillar 2",
    description: "Conduct thorough research into target audience segments and experiment with various advertising channels and messaging. This phase is crucial for identifying the most effective strategies.",
    status: "Upcoming"
  },
  {
    icon: Goal,
    title: "Develop Advertising Playbook",
    timeline: "Oct 28 - Nov 3",
    pillar: "Pillar 2",
    description: "Create a comprehensive advertising playbook that documents best practices, successful campaign strategies, and key learnings. This will serve as a guide for all future marketing efforts.",
    status: "Upcoming"
  },
  {
    icon: Scaling,
    title: "Scale Successful Campaigns",
    timeline: "Nov 4 - Nov 10",
    pillar: "Pillar 2",
    description: "Identify the most successful advertising campaigns from the experimentation phase and allocate a larger budget to scale them. This will maximize our return on investment and drive significant growth.",
    status: "Upcoming"
  },
];

export const expansionStrategyItems = [
    {
        icon: Target,
        slug: "market-entry",
        title: "Disciplined Market Entry",
        content: "Our strategy is disciplined and sector-focused. We first build deep credibility by mastering our anchor sectors—Real Estate, Agriculture, and Healthcare—before expanding into adjacent high-growth areas like digital finance and manufacturing. We forge strategic Public-Private Partnerships (PPPs) with city development agencies, federal programs, and international development banks to de-risk market entry and align with broader economic goals. This ensures each new venture is built on a foundation of trust and proven success."
    },
    {
        icon: PieChart,
        slug: "financial",
        title: "Robust Financial Architecture",
        content: "We structure deals using a sophisticated blend of debt, equity, and mezzanine financing to optimize returns and manage risk. By pioneering innovative community investment vehicles like REITs and fractional ownership, we democratize access to high-yield opportunities. Our approach involves launching pilot projects to prove financial viability before deploying capital at scale. This model directly ties investor ROI to social metrics, creating a powerful synergy where financial success and community impact are one and the same."
    },
    {
        icon: Handshake,
        slug: "impact",
        title: "Integrated Community Impact",
        content: "True impact comes from deep integration. We partner with farm co-ops, community development corporations (CDCs), and local organizations to co-design projects that are relevant, trusted, and immediately adopted. We intentionally link our housing developments with employment opportunities in our other sectors, creating a holistic ecosystem that provides both quality homes and stable jobs. Our success is measured not just in dollars, but in jobs created, families housed, and communities empowered."
    },
    {
        icon: Rocket,
        slug: "tech",
        title: "Technology & Innovation Catalyst",
        content: "We are positioned as an early adopter in transformative technologies, including AI-powered financial services, real estate tokenization, and regulated digital currencies. This allows us to unlock new efficiencies and create innovative, high-growth investment products. In agriculture, we invest across the entire value chain—from advanced farm technology to processing and distribution—creating a resilient and profitable link between U.S. and international markets. Our use of advanced data analytics ensures we remain agile and optimized for performance."
    },
    {
        icon: Megaphone,
        slug: "branding",
        title: "Strategic Branding & Investor Relations",
        content: "Our brand is built on a unique hybrid model that communicates a clear and powerful message: 'High Yield, High Impact.' We don't just secure capital; we build relationships. Through exclusive, regionally-focused investor summits in the Gulf and for the diaspora, we showcase a curated portfolio of high-potential projects. We establish market authority through high-quality, sector-specific content and analysis, making GrowShare Capital a trusted thought leader in our chosen investment verticals."
    }
];

export const partnershipBenefits = [
  {
    icon: Goal,
    title: "Innovative Capital Approach",
    description: "We merge catalytic capital with community-focused strategies to generate both financial returns and measurable social outcomes.",
  },
  {
    icon: Handshake,
    title: "Mutual Growth & Shared Success",
    description: "Our model aligns investor success with community prosperity. As projects flourish, local economies and stakeholders thrive.",
  },
  {
    icon: PieChart,
    title: "Diversified High-Yield Portfolio",
    description: "Access a curated portfolio of high-yield opportunities across core sectors like real estate, agriculture, and healthcare to ensure long-term stability.",
  },
  {
    icon: Users,
    title: "Community-Centered Impact",
    description: "Every project is designed to deliver tangible benefits, from workforce housing and job creation to sustainable farming and healthcare access.",
  },
  {
    icon: GitCompareArrows,
    title: "Global–Local Bridge",
    description: "We connect global capital with local U.S. and Bangladesh opportunities, amplifying reach and creating unmatched value.",
  }
];


export const INVESTMENT_TERMS = [
  { text: 'Investment:', value: '$1,000 per share.' },
  { text: 'Annual Livestock Return:', value: '1 goat or sheep for each share you invest in.' },
  { text: 'Annual Financial Return:', value: 'Proportional profit/loss from livestock sales.' },
  { text: 'Term Length:', value: '24 months, with option to renew.' },
  { text: 'Exit Options:', value: 'Reinvest for another term or receive a full cash payout.' },
  { text: 'Risk Mitigation:', value: 'Asset-backed by livestock and land, plus comprehensive insurance.' },
];

export const OVERVIEW_CARDS = [
  {
    icon: ShieldCheck,
    title: 'Principled & Compliant',
    description: 'An asset-based, principled model that avoids interest and uncertainty, ensuring transparency and financial fairness.'
  },
  {
    icon: CheckSquare,
    title: 'Humane Animal Care',
    description: 'Livestock are free-range, naturally fed, and regularly monitored by professionals, promoting ethical treatment and high-quality meat.'
  },
  {
    icon: Users,
    title: 'Community Focused',
    description: 'Community-driven farms are established to source, raise, and supply meat locally, prioritizing shared value and long-term sustainability.'
  },
   {
    icon: Recycle,
    title: 'Local Food Chain',
    description: 'By focusing on the local market, we strengthen the food supply chain and foster a more resilient community food system.'
  },
  {
    icon: TrendingUp,
    title: 'Transparent & Trackable',
    description: 'Investors receive comprehensive quarterly updates and are welcome to schedule site visits to cultivate a strong, transparent partnership.'
  },
  {
    icon: MapPin,
    title: 'Secure Project Site',
    description: 'Located on a secure, fenced property in Alabama, featuring dedicated grazing zones and sustainable infrastructure to ensure livestock well-being.'
  },
];

export const IMPACT_STATS = [
    { target: 1200, suffix: '+', label: 'Livestock Raised' },
    { target: 400, suffix: '+', label: 'Households Engaged' },
    { target: 100, suffix: '+', label: 'Youths Trained' },
    { target: 25, suffix: '+', label: 'Local Farmers Contracted' },
    { target: 10000, suffix: ' lbs', label: 'Meat Distributed' }
];

export const FAQ_ITEMS = [
    {
        question: "What is the minimum investment required?",
        answer: "The minimum investment is $1,000, which corresponds to one share in the partnership."
    },
    {
        question: "What kind of returns can I expect?",
        answer: "You receive a direct return of 1 goat or sheep per share annually. Additionally, you receive a proportional allocation of the profit or loss from livestock sales each year. The estimated value of the combined return is between 30-35% annually."
    },
    {
        question: "What is the investment structure?",
        answer: "The fund is structured as a principled, asset-backed-partnership. It avoids interest-based financing and speculative practices to ensure it is fully compliant with modern ethical financial principles."
    },
    {
        question: "How are the animals cared for?",
        answer: "Our livestock are free-range, naturally fed, and receive regular monitoring from veterinary professionals. We are committed to the highest standards of humane treatment and animal well-being."
    },
    {
        question: "What are the risks involved?",
        answer: "Like any investment, there are risks, which can include market price fluctuations, animal health, and operational challenges. We mitigate these risks by backing the investment with tangible assets (livestock and land) and maintaining comprehensive insurance."
    },
    {
        question: "What are my options at the end of the 2-year term?",
        answer: "At the end of the 24-month term, you have the flexibility to either reinvest your share for another term to continue growing your impact or to exit the partnership and receive a full cash disbursement for the current market value of your share."
    }
];

export const fundingData = [
    { name: 'Livestock Acquisition', value: 400, color: 'hsl(var(--primary))' },
    { name: 'Feed & Care', value: 250, color: 'hsl(var(--accent))' },
    { name: 'Shelter & Infrastructure', value: 150, color: 'hsl(var(--chart-2))' },
    { name: 'Staff & Operations', value: 100, color: 'hsl(var(--chart-3))' },
    { name: 'Contingency & Medical', value: 100, color: 'hsl(var(--chart-4))' },
  ];

export const investmentAllocationData = [
    { name: 'Livestock Acquisition', abbreviation: 'Acquisition', value: 400, color: 'hsl(var(--chart-1))' },
    { name: 'Feed & Care', abbreviation: 'Feed', value: 250, color: 'hsl(var(--chart-2))' },
    { name: 'Shelter & Infrastructure', abbreviation: 'Infra', value: 150, color: 'hsl(var(--chart-3))' },
    { name: 'Staff & Operations', abbreviation: 'Operations', value: 100, color: 'hsl(var(--chart-4))' },
    { name: 'Contingency & Medical Care', abbreviation: 'Contingency', value: 100, color: 'hsl(var(--chart-5))' },
];

export const allSearchableLinks = [
  { url: '/', title: 'Home', type: "Page", description: 'The main landing page for GrowShare Capital, outlining our mission, vision, and key investment sectors.'},
  { url: '/agriculture', title: 'Agriculture Sector', type: "Page", description: 'Overview of our high-yield investments in Americas food future, including our community livestock program and other value-added initiatives.'},
  { url: '/agriculture/livestock', title: 'Community Livestock Program', type: "Project", description: 'Detailed information on our asset-backed investment in sustainable goat and sheep farming, including returns, terms, and strategy.'},
  { url: '/agriculture/khalui-farm', title: 'Khalui Farm Project', type: "Project", description: 'Details on our successful and profitable venture in small-scale, sustainable agriculture in Memphis, TN, including our Neem production initiative.'},
  { url: '/agriculture/alabama-livestock', title: 'Alabama Livestock Project', type: "Project", description: 'Information about the foundational mission-driven project in Birmingham, AL, combining poultry farming with community co-housing.'},
  { url: '/agriculture/alabama-livestock/plan-a', title: 'Alabama Project: Business Plan A', type: "Page", description: 'The business plan for a Goat & Lamb Breeding Program in Alabama, including financial projections and operational strategy.'},
  { url: '/agriculture/alabama-livestock/plan-b', title: 'Alabama Project: Business Plan B', type: "Page", description: 'The business plan for a Poultry Production operation in Alabama, including broiler and layer plans, financial projections, and strategy.'},
  { url: '/agriculture/alabama-livestock/faq', title: 'Alabama Project: FAQ', type: "Page", description: 'Frequently asked questions about the Alabama Livestock project, covering investment, ownership, and profit distribution.'},
  { url: '/agriculture/alabama-livestock/payment', title: 'Invest in Alabama Livestock Project', type: "Page", description: 'The payment page to invest in the Alabama Livestock Project, with a fundraising goal of $20,000.'},
  { url: '/agriculture/alabama-livestock/operation-plan', title: 'Alabama Sheep & Lamb Operation Plan', type: "Page", description: 'A comprehensive guide for a 10-member LLC to establish a successful and sustainable sheep farm in Alabama.'},
  { url: '/agriculture/ghee-manufacturing', title: 'Ghee & Specialty Cheese Manufacturing', type: "Project", description: 'The business case for establishing a high-demand, value-added dairy production facility for ghee and specialty cheese.'},
  { url: '/healthcare', title: 'Healthcare Sector', type: "Page", description: 'Overview of our investments in healthcare and pharmaceuticals, focusing on funding high-growth ventures that close critical care gaps.'},
  { url: '/real-estate', title: 'Real Estate Sector', type: "Page", description: 'Overview of our real estate and community development investments, including our crowdfunding initiative and income-focused REIT.'},
  { url: '/news', title: 'Newsroom', type: "Page", description: 'Our latest company news, announcements, press releases, and in-depth reports on our investment sectors.'},
  { url: '/contact', title: 'Contact Us', type: "Page", description: 'Contact information, a form to get in touch with our team, and details about our IT & Management team.'},
  { url: '/services', title: 'Services', type: "Page", description: 'Overview of our professional services in design, construction, and training, as well as our internal admin tools.'},
  { url: '/services/skylinedb3', title: 'SkylineDB3 Design & Construction', type: "Service", description: 'Innovative and functional architectural design and construction solutions offered by our subsidiary, SkylineDB3.'},
  { url: '/services/training', title: 'Farm & Garden Training', type: "Service", description: 'Hands-on training sessions for gardening, greenhouse management, beekeeping, and livestock care.'},
  { url: '/services/training/payment', title: 'Training Payment', type: "Page", description: 'Payment page for the Farm & Garden training sessions.'},
  { url: '/services/global-trade', title: 'Global Trade Solutions', type: "Service", description: 'Bridging the gap between world-class manufacturers and high-growth markets for critical infrastructure and healthcare projects.'},
  { url: '/services/roadmap', title: 'Strategic IT Roadmap', type: "Page", description: 'Our strategic IT roadmap for 2025, covering digital presence and marketing initiatives.'},
  { url: '/services/admin', title: 'Admin Dashboard', type: "Page", description: 'Admin dashboard for managing documents, signatures, and internal tools.'},
  { url: '/services/agendas', title: 'Meeting Agendas', type: "Page", description: 'An archive of all board and strategic meetings agendas.'},
  { url: '/services/notary', title: 'Digital Notary Service', type: "Service", description: 'Generate a secure, timestamped Document ID for official records.'},
  { url: '/services/certificate', title: 'Certificate Generator', type: "Service", description: 'Generate official certificates of participation for investors and partners.'},
  { url: '/services/accounting', title: 'Accounting', type: "Page", description: 'Admin-only page for managing internal financial information, bank details, and calculations.'},
  { url: '/login', title: 'Sign In', type: "Page", description: 'Sign in to your GrowShare Capital account.'},
  { url: '/register', title: 'Sign Up', type: "Page", description: 'Create a new GrowShare Capital account.'},
  { url: '/forgot-password', title: 'Forgot Password', type: "Page", description: 'Reset your GrowShare Capital account password.'},
  { url: '/shop', title: 'Shop', type: "Page", description: 'Sustainably sourced products from our farms and partners.'},
  { url: '/marketing/flyers', title: 'Marketing', type: "Page", description: 'A collection of our promotional and informational assets.'},
  { url: '/marketing/flyers/collection', title: 'Flyers', type: "Page", description: 'A collection of our promotional and informational flyers for various campaigns and investment opportunities.'},
  { url: '/marketing/social-media', title: 'Social Media Posts', type: "Page", description: 'A library of ready-to-use social media posts to promote our initiatives across various platforms.'},
];

export const alabamaLivestockRoadmap: RoadmapItem[] = [
  {
    icon: Briefcase,
    title: "Foundational Business Meeting",
    timeline: "Q3 2025",
    description: "Initial meeting between Brother Selim, Dr. Aminuddin, and Ashif Jahan to structure the livestock program and align on the vision.",
    status: "Complete"
  },
  {
    icon: Handshake,
    title: "Memorandum of Understanding (MOU)",
    timeline: "Q3 2025",
    description: "Draft and finalize a simple agreement to formalize the partnership and outline the initial project scope.",
    status: "In Progress"
  },
  {
    icon: DollarSign,
    title: "Initial Seed Investment & Fundraising",
    timeline: "Q4 2025",
    description: "Secure an initial $20,000 to launch the project. GrowShare Capital will lead fundraising, with a $5,000 seed contribution from Khalui Farm LLC.",
    status: "In Progress"
  },
  {
    icon: Tractor,
    title: "Program Launch & Operation",
    timeline: "Q4 2025",
    description: "Commence livestock operations, including acquisition and care, and begin engaging with local community members and partners.",
    status: "In Progress"
  },
  {
    icon: Home,
    title: "Co-Housing Development Plan",
    timeline: "Q2 2026",
    description: "Begin formal planning and feasibility studies for developing co-housing opportunities in Birmingham to anchor community growth.",
    status: "Upcoming"
  },
  {
    icon: Award,
    title: "Expansion & Replication",
    timeline: "2027 onwards",
    description: "Create pathways to ownership via USDA programs and expand the model to become a replicable framework for other communities.",
    status: "Upcoming"
  }
];

export const coreValues = [
    {
        icon: ShieldCheck,
        title: "Integrity & Transparency",
        description: "We operate with unwavering ethical standards, ensuring every partnership is built on trust and clarity."
    },
    {
        icon: Users,
        title: "Community-Centric Growth",
        description: "Our investments are designed to create lasting value for the communities we serve, empowering local economies and fostering shared prosperity."
    },
    {
        icon: Sprout,
        title: "Sustainable Innovation",
        description: "We back resilient, forward-thinking projects in foundational sectors that promise both long-term financial returns and positive environmental impact."
    },
    {
        icon: Award,
        title: "Disciplined Excellence",
        description: "We apply a rigorous, data-driven approach to every investment, ensuring operational excellence and de-risked, high-yield opportunities for our partners."
    }
];

export const investmentPhilosophy = [
    {
        icon: CheckSquare,
        title: "Asset-Backed Security",
        description: "We prioritize investments secured by real, tangible assets—such as real estate or livestock—to provide a stable foundation and minimize risk for our partners."
    },
    {
        icon: Recycle,
        title: "Rigorous Due Diligence",
        description: "Every potential project undergoes a meticulous vetting process, including financial modeling, market analysis, and risk assessment, to ensure it meets our high standards for viability and impact."
    },
    {
        icon: Scale,
        title: "Balancing Profit & Purpose",
        description: "We believe financial success and social good are not mutually exclusive. Our model is designed to deliver competitive, market-rate returns while generating measurable, positive outcomes for communities."
    }
];

export const companyTimeline = [
    { year: "2022", event: "GrowShare Capital is founded with a mission to merge principled investing with community impact." },
    { year: "2023", event: "Launched the flagship Community Livestock Program, securing initial investment and beginning operations." },
    { year: "2024", event: "Acquired key properties for community-focused real estate development, including the 887 S. Highland hub." },
    { year: "2025", event: "Expanded into healthcare ventures and began development of the Alabama Livestock & Co-Housing project." }
];

export type MeetingAgenda = {
    id: string;
    title: string;
    date: string;
    location: string;
    attendees: string[];
    createdAt: any;
    agenda: {
        time: string;
        topic: string;
        leader: string;
        type: 'Open Discussion' | 'Presentation' | 'Decision' | 'Update';
    }[];
};
