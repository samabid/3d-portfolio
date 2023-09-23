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
  nextjs,
  applebone,
  ballistic,
  cmm,
  sekoia,
  txsols,
  accurate,
  alzeer,
  arthrits,
  aziv,
  ecopro,
  handsoff,
  lyft,
  mwf,
  outreach,
  sanamed,
  sinfull,
  tielink,
  wax,
  zoom,
  carrent,
  jobit,
  tripguide,
  threejs,
  wordpress,
  sapient,
  mwficon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "WordPress Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "WordPress",
    icon: wordpress,
  },
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
    name: "Next.js",
    icon: nextjs,
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
  
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "MarketingwithaFlair",
    icon: mwficon,
    iconBg: "#383E56",
    date: "August 2020 - Present",
    points: [
      "Developed responsive and user-friendly websites using HTML5, CSS3, JavaScript, and PHP,ensuring cross-browser compatibility and accessibility.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Assisted in troubleshooting and resolving technical issues, providing timely support to clients andcolleagues.",
      "Led the migration of a large-scale e-commerce website from a legacy platform to WordPress,ensuring smooth transition and minimal downtime.",
      "Integrated third-party APIs, payment gateways, and external services into WordPress websites.",
      "Secured websites by implementing security measures, such as sanitizing inputs, validating data,and preventing common vulnerabilities.",
      "Optimized website performance through efficient code, caching techniques, and content deliverynetwork (CDN) integration.",
      "Led a team of developers to design and develop custom WordPress themes and plugins forclients.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Sapient Pro",
    icon: sapient,
    iconBg: "#E6DEDD",
    date: "Dec 2018 - Sep 2020",
    points: [
      "Implemented responsive design principles to ensure optimal user experience across different devices.",
      "Assisted senior developers in designing and developing WordPress websites for clients.",
      "Conducted quality assurance testing to identify and resolve issues related to website functionality and user interface.",
      "Contributed to the successful completion of 20 WordPress projects, working closely with senior developers and project managers.",
      "Assisted in the development of a custom WordPress theme that improved the website's user experience and increased user engagement.",
      "Collaborated with the team to implement a website optimization strategy that resulted in a 20% improvement in page load time.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "My expectations have been well exceeded! Very collaborative and knowledgeable person. I had a great experience. Thanks.",
    name: "Anissa",
    designation: "CEO",
    company: "MWF",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Excellent work within the short deadline of project. have good command in his field..",
    name: "Chris Brown",
    designation: "CEO",
    company: "Eco Pro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've worked with Sam on a couple of design projects now, and he is always responsive, talented, and efficient with deadlines. Would absolutely recommend, and he's now my go-to for any web design projects.",
    name: "Sana",
    designation: "CTO",
    company: "Sana Med",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    testimonial:
      "I had an excellent experience working with him. He really listened to what I wanted and needed for my website.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    testimonial:
      "Thank you for the beautiful work. Usama was very professional, great communication and quick to respond. Very professional, creative and talented. Highly recommend working with him. It was a pleasure.",
    name: "Lindsay",
    designation: "CEO",
    company: "Sinfull",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "I’m extremely happy with the services you have provided! I will tell anyone who needs high-quality website speed optimization about you! Thank you",
    name: "Susan",
    designation: "CTO",
    company: "IN-J-TECH",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    source_code_link: "#",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "#",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "#",
  },
  {
    name: "Certified Mold Master",
    description:
      "A WordPress website for a mold remediation company, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: cmm,
    source_code_link: "https://certifiedmoldmasters.com/",
  },
  {
    name: "Sekoia",
    description:
      "A WordPress website for a digital marketing company, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: sekoia,
    source_code_link: "https://sekoia.ca/",
  },
  {
    name: "IN-J-TECH",
    description:
      "A WordPress website for a ballistic production company, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: ballistic,
    source_code_link: "https://www.inj-tactical.com/",
  },
  {
    name: "TxSols",
    description:
      "A WordPress website for a software development company, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: txsols,
    source_code_link: "https://txsols.com/",
  },
  {
    name: "Applebone",
    description:
      "A WordPress website for a business consultation company, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: applebone,
    source_code_link: "https://applebone.com/",
  },
  {
    name: "Accurate HVOC",
    description:
      "A WordPress website for a HVOC company, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: accurate,
    source_code_link: "https://accurateelectricplumbingheatingandair.com/",
  },
  {
    name: "Alzeer Dates",
    description:
      "A WordPress website for a dates distribution company, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: alzeer,
    source_code_link: "https://alzeerdates.com/",
  },
  {
    name: "Azarthritis",
    description:
      "A WordPress website for Arizona's arthritis accosiates, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: arthrits,
    source_code_link: "https://www.azarthritis.com/",
  },
  {
    name: "AZIV",
    description:
      "A WordPress website for AZIV Infusion Therapy Centers, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: aziv,
    source_code_link: "https://azivinfusion.com/",
  },
  {
    name: "Eco Pro",
    description:
      "A WordPress website for a HVOC company, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: ecopro,
    source_code_link: "https://www.callecopro.com/",
  },
  {
    name: "HANDSOFF",
    description:
      "A WordPress website for a consultant company, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: handsoff,
    source_code_link: "https://handsoff.co.il/",
  },
  {
    name: "LyftYourSEO",
    description:
      "Build SEO tools website that provides micro SEO services using free API's. Website is built on Laravel",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: lyft,
    source_code_link: "https://lyftyourseo.com/",
  },
  {
    name: "TieLink",
    description:
      "Build URL shortener website that provides url shortener and QR reader services using free API's. Website is built on Laravel",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: tielink,
    source_code_link: "#",
  },
  {
    name: "MWF",
    description:
      "A WordPress website for a digital marketing company, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: mwf,
    source_code_link: "https://marketingwithaflair.com/",
  },
  {
    name: "OutreachWhiz",
    description:
      "Build email outreach platform as well as their landing page. Website is built on Laravel and their landing page is on WordPress",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: outreach,
    source_code_link: "http://outreachwhiz.com/",
  },
  {
    name: "SanaMed",
    description:
      "A WordPress website for a Medical company, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: sanamed,
    source_code_link: "https://sanamed.com.au/",
  },
  {
    name: "Sinfull",
    description:
      "A WordPress website for a barber shop in Arizona, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: sinfull,
    source_code_link: "https://sinfulblowdrybar.com/",
  },
  {
    name: "WaxEasy",
    description:
      "A WordPress website for a waxing related services in Arizona, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: wax,
    source_code_link: "#",
  },
  {
    name: "ZoomDrains",
    description:
      "A WordPress website for a HVOC company in Arizona, featuring a custom theme and plugins, and a custom-built CRM system for managing leads and customers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
    ],
    image: zoom,
    source_code_link: "https://zoomdrainseattle.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
