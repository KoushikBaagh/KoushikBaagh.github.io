/* Change this file to get your personal Porfolio */
/*eslint-disable */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileVideo } from "@fortawesome/free-solid-svg-icons";
import awardImage from "./assests/images/foodpreneurship.jpg";
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want the starting Splash screen.
};

//SEO Related settings
const seo = {
  title: "Koushik's Portfolio",
  description:
    "Full-Stack Developer | Open Source Chromium Contributor | Blockchain Enthusiast | CS Grad @BITMesra'24",
  og: {
    title: "Koushik's Portfolio",
    type: "website",
    url: "https://bit.ly/custom_CV_Koushik",
  },
};

//Home Page
const greeting = {
  title: "Koushik",
  logo_name: "Koushik Kumar Bug",
  // nickname: "the_freeman007",
  subTitle:
    "Full-Stack Developer | Open Source Chromium Contributor | Blockchain Enthusiast | CS Grad @BITMesra'24",
  resumeLink:
    "https://drive.google.com/file/d/1Zfl2b0mdjhOBiT6Py6oDk2flQKFV7CDt/view?usp=drive_link",
  portfolio_repository:
    "https://github.com/KoushikBaagh/KoushikBaagh.github.io.git",
  githubProfile: "https://github.com/KoushikBaagh",
};

// openSource const
export const openSource = {
  githubUserName: "YOUR_GITHUB_USERNAME_HERE", //প্রয়োজনীয় --> YOUR GITHUB USERNAME HERE
  // Important: Must be a Base64 encoded GitHub Personal Access Token.
  // Generate one from GitHub > Settings > Developer settings > Personal access tokens.
  // Ensure it has `public_repo` and `read:user` scopes.
  // Then, Base64 encode it (e.g., using an online tool or `echo -n 'YOUR_TOKEN' | base64` on Linux/macOS).
  githubConvertedToken: "YOUR_BASE64_ENCODED_TOKEN_HERE", //প্রয়োজনীয় --> YOUR BASE64 ENCODED TOKEN HERE
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/KoushikBaagh",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/koushik-kkb-bitmesra/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Video-CV",
    link:
      "https://drive.google.com/file/d/1QV1iQj2cN66kolFAPB6bfXc-5eN_-LiR/view?usp=drive_link",
    fontAwesomeIcon: "fab fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FBBC04", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:koushik.bitmesra.ac.in@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Open Source & Browser Development",
      fileName: "DataScienceImg", // Visually updated for this theme
      skills: [
        "⚡ Actively contributing to the Chromium codebase, implementing new features, fixing bugs, and collaborating with the Google team (GSOC'25 Application Phase).",
        "⚡ Engineered custom WebUI components for Web3 Chromium browsers and restructured Chromium internals for UI improvements (WootzApp).",
        "⚡ Proficient in C++, WebUI, Java, TypeScript, and JavaScript, utilizing Git and Gerrit for large-scale collaborative development.",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "Chromium",
          fontAwesomeClassname: "simple-icons:googlechrome",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Gerrit",
          imageSrc: "gerrit_bird.png", // Using custom bird image
          style: {
            width: "50px",
            height: "50px",
            backgroundColor: "transparent",
            objectFit: "contain",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },

        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "WebUI",
          text: "Web UI", // Text-only entry
          style: { fontWeight: "bold", color: "#363636", marginTop: "-100px" },
        },
      ],
    },
    {
      title: "Full-Stack Web Development",
      fileName: "FullStackImg", // Existing visual
      skills: [
        "⚡ Building responsive and engaging front-ends using React for projects like the Residential Society App and the Konversify chat platform.",
        "⚡ Developing robust and scalable back-ends with Node.js, Express.js, and MongoDB, implementing RESTful APIs and real-time features using Socket.IO.",
        "⚡ Enhanced 'PrepChat' at PrepInsta by implementing JWT-based security over WebSockets, significantly reducing unauthorized access and improving system performance.",
        "⚡ Scaled the Konversify chat platform to support 70+ concurrent users with low latency, boosting alumni engagement.",
      ],
      softwareSkills: [
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "simple-icons:css3",
        //   style: { color: "#1572B6" },
        // },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "Socket.io",
          fontAwesomeClassname: "logos:socket-io",
          style: { color: "#010101" },
        },
        {
          skillName: "VSCode",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: { color: "#007ACC" },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { color: "#FF6C37" },
        },
      ],
    },
    {
      title: "Blockchain & Smart Contract Development",
      fileName: "BlockchainImg", // Using ProjectsImg visual
      skills: [
        "⚡ Designing, writing, and deploying custom ERC20 token smart contracts on the Ethereum Sepolia testnet using Solidity and OpenZeppelin.",
        "⚡ Proficient in smart contract development, including the implementation of Ownable modules for access control (KoushikCoin).",
        "⚡ Keen interest and foundational knowledge in blockchain technology and Web3 application principles.",
      ],
      softwareSkills: [
        {
          skillName: "Blockchain",
          fontAwesomeClassname: "fa-link", // Generic icon for blockchain concept
          style: { color: "#F7931A" },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: { color: "#627EEA" },
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: { color: "#6C19FF" },
        },
        {
          skillName: "Web3.js",
          text: "Web3.js", // Text-only entry
          style: { fontWeight: "bold", color: "#363636", marginTop: "-100px" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
        fontSize: "5em", // Adjust this value to increase or decrease the icon size
      },
      profileLink: "https://leetcode.com/u/Koushik_leetcode/",
      img: awardImage, // Replace with the URL of your image
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Birla Institute of Technology, Mesra",
      subtitle: "Master's in Computer Applications",
      logo_path: "Birla_Institute_of_Technology_Mesra_LOGO.png",
      alt_name: "BIT Mesra",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development and Cloud Computing.",
        "⚡ I served as the Event Coordinator Head of the Fine Arts Society (FAS) at BIT Mesra, Ranchi, India, a role I have held for nearly 400 days. Also, under my leadership my team won the FoodPreneurship Award.",
      ],
      website_link: "https://www.bitmesra.ac.in/",
    },
    {
      title: "Dr.  B.C.Roy Engineering College, Durgapur",
      subtitle: "Bachelor's in Computer Applications",
      logo_path: "B.C.Roy Logo.png",
      alt_name: "Dr.BCREC",
      duration: "2017-2020",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Computer Vision etc.",
        "⚡ Apart from this, I have also worked on Facial Recognition Algorithms",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://bcrec.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    {
      title: "Machine Learning",
      subtitle: "- Microsoft Technology Associate",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1X2oBiAout_pYsaRUuNC19ltaTkt8y-4v/view?usp=drive_link",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    {
      title: "IT Automation Using Python",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/verify/professional-cert/HVWJVB8N3YVV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Open Source Contributions",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Open Source & Professional Experience",
      work: true,
      experiences: [
        {
          title: "Open-Source Contributor (GSOC'25 Application Phase)",
          company: "Google Chromium",
          company_url: "https://www.chromium.org/",
          logo_path: "chromium_logo.png",
          duration: "February 2025 – Present",
          location: "Remote",
          description:
            "Actively contributing to the Chromium codebase. Implemented new features, fixed bugs, and collaborated with the Google team.",
          color: "#4285F4",
        },
        {
          title: "Associate, Machine Learning Data Operations",
          company: "Amazon",
          company_url: "https://www.amazon.com/",
          logo_path: "amazon_logo.png",
          duration: "September 2024 – January 2025",
          location: "Pune",
          description:
            "Contributed to AI model development by annotating and verifying large-scale video datasets from warehouse operations, focusing on precise object localization to generate high-quality training data, achieving 99.8% label accuracy and reducing review cycles by 30%. Ensured data integrity & AI benchmark adherence through rigorous application of SOPs and QA protocols.",
          color: "#FF9900",
        },
        {
          title: "Open-Source Contributor",
          company: "WootzApp, Inc.",
          company_url: "#", // User to provide if available
          logo_path: "wootzapp_logo.png",
          duration: "May 2024 – August 2024",
          location: "Remote",
          description:
            'Created a \\"Help-Page\\" Web UI for a Web3 Chromium browser. Engineered a custom Android browser app, restructuring Chromium internals for UI improvements.',
          color: "#1DA1F2", // Generic tech blue, adjust as needed
        },
        {
          title: "Web Developer Intern",
          company: "PrepInsta Technologies Pvt. Ltd.",
          company_url: "https://prepinsta.com/home/",
          logo_path: "PrepInsta LOGO.png", // This file already exists in assets
          duration: "Jan 2024 - Mar 2024",
          location: "Noida, Uttar Pradesh",
          description:
            'Implemented JWT-based security over WebSockets, reducing unauthorized access by 45% and contributing to a 25% system performance enhancement. Enhanced \\"PrepChat\\" functionality and scalability, leading to a 40% increase in user engagement.',
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects",
  description: "A selection of my key software development projects.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "koushikcoin",
      name: "KoushikCoin (Solidity/Ethereum ERC20 Token)",
      createdAt: "2025-05-01T00:00:00Z",
      description:
        "Custom ERC20 token deployed on Sepolia testnet using Solidity and OpenZeppelin. Source code and transaction details are available via the project link.",
      url: "https://koushikcoin.surge.sh/",
    },
    {
      id: "residentialsociety",
      name: "Residential Society Frontend",
      createdAt: "2024-07-01T00:00:00Z",
      description:
        "React application for community engagement and event management. Source code available on GitHub.",
      url: "YOUR_LIVE_LINK_OR_GITHUB_PAGES_LINK_HERE", // Placeholder: User needs to update this
    },
    {
      id: "konversify",
      name: "Konversify (BIT Alumni Chat)",
      createdAt: "2024-04-30T00:00:00Z",
      description:
        "Real-time chat platform with file sharing, video calls, and screen sharing. Scaled for 70+ concurrent users. Tech: React, Node.js, Socket.IO, MongoDB.",
      url: "https://konversify-x-bit-mesra.onrender.com",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "LinkedIN Headshot.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Node JS OpenCV, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Home, India",
    locality: "ABCD",
    country: "INDIA",
    region: "ABCDEF",
    postalCode: "12345",
    streetAddress: "STREET ADDRESS",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91-7047274427",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
