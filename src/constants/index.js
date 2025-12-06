export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Case Study',
      href: '#case',
    },
    {
      id: 7,
      name: 'Graphic Design',
      href: '#graphic',
    },

    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },

    {
      id: 6,
      name: 'Resume',
      href: '/assets/resume.pdf', 
      target: '_blank',    
      rel: 'noopener noreferrer', 
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'News Radar',
      desc: 'This Android application allows users to stay informed and up-to-date content curated to users. Users are able to customize their news feed to reflect their preferences and interests by getting news based on user\'s keywords. Users are also able to get news from specific subreddits and/or twitter users.',
      subdesc:
        'Built with Kotlin',
      href: 'https://play.google.com/store/apps/details?id=com.bignerdranch.android.newsapp',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project1icon.webp',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Kotlin',
          path: '/assets/kotlinicon.svg',
        },
        {
          id: 2,
          name: 'andriod',
          path: '/assets/android.svg',
        },
      ],
    },
    {
      title: 'SyncSchedule',
      desc: 'SyncSchedule is a scheduling platform designed to streamline the coordination of events and appointments with ease and efficiency. Users are able to personalize their calendars to organize tasks and commitments. Users can not only manage their schedules but also collaborate effectively with others. An integrated chat system enables direct communication within the platform, facilitating real-time discussions and coordination among team members or group participants.',
      subdesc:
        'Built with HTML, CSS, JavaScript',
      href: 'https://github.com/CS4800-Code-G/Calendar',
       prototype: 'https://www.figma.com/proto/xNU2LjOfyvKpDrOCGJ5Fjv/SyncSchedule?node-id=1-2&t=tircT72zvluQcny6-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=95%3A496',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/syncschedule.jpg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'HTML icon',
          path: '/assets/html.png',
        },
        {
          id: 2,
          name: 'CSS icon',
          path: 'assets/css.png',
        },
        {
          id: 3,
          name: 'JavaScript icon',
          path: '/assets/javascript.png',
        },
      
      ],
    },
    {
      title: 'Cybersecurity VR Project',
      desc: 'A virtual reality simulation of scenarios where players are faced with common social engineering tactics. The purpose of this VR game is to train players to spot and pick appropriate actions to take when confronted with deceptive techniques aimed at manipulating them into divulging sensitive information or performing unauthorized actions. Through immersive experiences, players will learn to recognize red flags, assess risks, and make informed decisions to safeguard themselves against the dangers of social engineering. With interactive decision-making, players will navigate various scenarios, honing their cybersecurity skills in a engaging environment.',
      subdesc:
        'Built with C#, Unity',
      href: 'https://www.youtube.com/watch?v=d75T7h4YUA0',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/cyber-security.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'C#',
          path: '/assets/c.svg',
        },
        {
          id: 2,
          name: 'Unity',
          path: '/assets/unity.svg',
        },
      ],
    },
    {
      title: 'We Play Tanks! Tanks!',
      desc: 'A recreation of the popular Wii game, Wii Play - Tanks! Instead of utilizing the Wii console itself, players will now be able to play with their PCs. Incorporating similar environments and enemies, players will be able to relive their childhood game.   ',
      subdesc:
        'Built with C#, Unity',
      href: 'https://emergencyplayer.itch.io/we-play-tanks-tanks',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/tanks.jpg',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'C#',
          path: '/assets/c.svg',
        },
        {
          id: 2,
          name: 'Unity',
          path: '/assets/unity.svg',
        },
      ],
    },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };


export const caseStudy = [
  {
    id: 1,
    title: "News Radar",
    description:
      "Customizable news app on Google Play Store delivering personalized and up-to-date news content.",
    role: "UX Designer, Programmer",
    duration: "4 months",
    tools: ["Kotlin", "LucidChart", "GitHub"],
    image: "/assets/project1icon.webp",
    
  
    linkLabel: "View Project", // 👈 optional, defaults to "View Project"
    link: "https://github.com/michael-m-truong/RSS-News-App", // 👈 add your URL here


  //github
  fullProject: "https://github.com/michael-m-truong/RSS-News-App",


    showPrototype: false, 
    details: [
      {
        heading: "Ideation:",
        content:
          "The idea for News Radar is designed to tackle the challenges of online searches. Finding specific topics can be difficult without precise queries and the ability to omit irrelevant terms. The idea for this is to simplify the process of searching and streamlining it, making it easier and more efficient to find exactly what you're looking for.",
      },

      {
        heading: "Research:",
        content:
          "This project was inspired by our personal experiences with searching for topics online. Instead of repeatedly entering the same queries to check for updates or sifting through irrelevant content, we wanted to simplify and streamline the search process. Our goal was to make navigating and managing search queries faster, more efficient, and more intuitive. To achieve this, we adopted an agile methodology, focusing on the development and delivery of a Minimum Viable Product (MVP). By prioritizing the MVP, we were able to concentrate on the core functionality needed to address these challenges, ensuring a strong foundation for iterative improvements based on user feedback.",
      },

      {
        heading: "Product Testing:",
        content:
          "Dogfooding: As developers, we tested the app ourselves to ensured a seamless user experience. User Testing: We collected feedback from actual users by reading comments on the app store.",
      },

      {
        heading: "Challenges Encountered:",
        content:
          "Many users found it difficult to undo actions. To solve this, we introduced: A cancel button and a pop-up notification to alert users about their current actions.Navigation Issues: Users struggled with navigating the app, highlighting flaws in our information architecture (IA). Confirmation Alerts: Added notifications to allow users to confirm or cancel actions before significant UI changes.Revisions:",
      },

      {
        heading: "Revisions",
        content:
          "Enhanced Information Architecture: We analyzed the IA of successful news apps and used the insights to restructure our app.Icons were rearranged and enlarged to ensure visibility and recognition.We used a iterative workflow to manage our project. We would first build a feature, test the feature, revise, and repeat.",
      },

      

      {
        heading: "Wireframe:",
      
        images: [
          {
            src: "/assets/mobile.jpg",
          },
        ],
      },


      {
        heading: "Final Product",
        content:
          "The end product is a tailored news retrieval system based on the keywords you select. While News Radar is currently available, we are actively seeking reviews to enhance the app further. Developing this app has given me valuable experience in using Kotlin and making iterative improvements.",
        images: [
          {
            src: "/assets/mobilefinal.jpg",
          },
        ],
      },



    ],
  },

  // 🆕 Add a new case study like this ↓
{
  id: 2,
  title: "SyncSchedule",
  description:
    "SyncSchedule is a scheduling platform that simplifies event and appointment coordination...",
  role: "Front-End Developer, UX Designer",
  duration: "5 months",
  tools: ["React", "Node.js", "MongoDB", "Stream API", "Figma"],
  image: "/assets/syncschedule.jpg",
  
  // 👇 prototype
  link: "https://www.figma.com/proto/xNU2LjOfyvKpDrOCGJ5Fjv/SyncSchedule?node-id=1-2&t=B4ahajrQO04SRZ4R-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=95%3A496",

  //github
  fullProject: "https://github.com/CS4800-Code-G/Calendar",

  showPrototype: true,
  details: [
    {
      heading: "Problem Statement",
      content:
        "Scheduling group events are often chaotic. Our goal was to design a seamless and intuitive solution for managing a shared calendar and direct messaging.",
      images: [{ src: "/assets/board.jpg" }],
    },
    {
      heading: "Ideation",
      content:
        "Research indicates that approximately 70% of adults use online calendars to organize their lives, highlighting the importance of scheduling tools in everyday life. To better understand user needs, interviews were conducted with club presidents and everyday students. This method enabled a comprehensive exploration of diverse perspectives and challenges. Some questions asked were: What tools or platforms do you currently use to manage your club’s activities?What is the biggest problem in organizing large group events? How do you notify members about where your meetings are held? How do you promote your events to ensure high participation? By focusing on these questions, the research provided valuable feedback that informed the platform's development, ensuring it addresses real-world challenges and enhances the user experience.",
    },

        {
      heading: "Heuristic Evaluation:",
      content:
        "Responsive Design: Ensured the chat system adapted seamlessly to different screen sizes and devices for a consistent user experience. Pop-up Alerts: Added alerts to notify users of significant actions, such as deleting data or navigating away from unsaved forms. Color Consistency: Used consistent button colors (red for Cancel) to enhance recognizability and usability.",
    },


        {
      heading: "Error Prevention & User Control:",
      content:
        "Validation Checks: Implemented form validation to prevent invalid login data.Undo Functionality: Enabled users to reverse actions like deleting items.Confirmation Alerts: Added notifications to allow users to confirm or cancel actions before significant UI change.",
    },





    {        
    heading: "Wireframe:",
        
        images: [
          {
            src: "/assets/Main Page.png",
          },
          {
            src: "/assets/Main Page-1.png",
          },
          {
            src: "/assets/Main Page-2.png",
          },

        ],
    },

    {
      heading: "User Testing & Privacy Enhancements:",
      content:
        "User Feedback: During testing, users appreciated the shared calendar system but raised concerns about privacy. Selective Sharing: In response, we allowed users to share specific events while keeping others private or restricted to certain individuals.",
    },




    {
        heading: "Final Product",
        content:
          "Overall, I am very pleased with the outcome of SyncSchedule. It was designed to solve a common problem many encounter when planning group activities. The project provided me with exposure to key UI/UX principles and introduced me to new developer methodologies like Agile and Waterfall. Through this experience, I gained practical knowledge in HTML, JavaScript, and CSS. Moreover, SyncSchedule afforded me valuable leadership opportunities, enabling me to organize tasks and meetings effectively, and giving me a comprehensive understanding of web development.",
        images: [
          {
            src: "/assets/morecalendar.jpg",
          },
        ],
      },



  ],
},

 {
    id: 3,
    title: "Seoul'd Out",
    description:
      "A modern KBBQ restaurant website designed to showcase the brand, menu, and location, helping customers quickly learn about the restaurant and plan their visit.",
    role: "UX Designer, Programmer",
    duration: "2 months",
    tools: ["HTML", "CSS", "JS", "Figma"],
    image: "/assets/icon.avif",
    
  
    linkLabel: "View Project", // 👈 optional, defaults to "View Project"
    link: "https://www.figma.com/design/ioEPG82tDpnqXMzwF8d7Up/Seoul-d-Out?node-id=0-1&t=GJtshfPPlvtDk2rU-1", // 👈 add your URL here


  //github
  fullProject: "https://andrew001347.github.io/seouldout/",


    showPrototype: true, 
    details: [
      {
        heading: "Goals/Objectives:",
        content:
          "The idea for News Radar is designed to tackle the challenges of online searches. Finding specific topics can be difficult without precise queries and the ability to omit irrelevant terms. The idea for this is to simplify the process of searching and streamlining it, making it easier and more efficient to find exactly what you're looking for.",
      },

      {
        heading: "Primary and Secondary Message:",
        content:
          "Bring the taste and energy of real Korean barbecue. Turn a simple Korean BBQ experience to a social, energetic dining environment made for groups and celebrations.",
      },


      {
        heading: "Competitive Analysis:",
      
        images: [
          {
            src: "/assets/comp.jpg",
          },
        ],
      },


        {
        heading: "User Personas:",
      
        images: [
          {
            src: "/assets/users.jpg",
          },
        ],
      },

        {
        heading: "Mood Board:",
      
        images: [
          {
            src: "/assets/inspo.jpg",
          },
        ],
      },

    ],
  },



    {
    id: 4,
    title: "Waymo App Walkthrough",
    description:
      "A UX redesign concept for Waymo's app onboarding experience. It showcases what Waymo is and can do for user. The prototype includes pagination, sign-up, and login screens to enhance engagement and ease of use for new and returning users.",
    role: "Front-End Developer, UX Designer",
    
duration: "3 days",
    tools: ["Figma"],
    image: "/assets/graphics/waymo.png",
   
    link: "https://www.figma.com/proto/HAeNnN9UFZtFuUskSbJ1fF/Mobile-App-Walkthrough--Andrew-Kim-Week6?node-id=1-4&t=BdvOAUM1G1PQzaRb-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4", // optional link to prototype or repo
    fullProject:"https://www.figma.com/proto/HAeNnN9UFZtFuUskSbJ1fF/Mobile-App-Walkthrough--Andrew-Kim-Week6?node-id=1-4&t=BdvOAUM1G1PQzaRb-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4",
    
    showPrototype: true,
    details: [
    {
      heading: "Objective",
      content:
        "To redesign Waymo’s onboarding experience for first-time users by clearly communicating the app’s key value — safe, autonomous ride-hailing — through motion and narrative design.",
    },
    
    {
      heading: "Design Approach",
      content:
        "The redesign features a four-screen onboarding flow with smooth pagination transitions, each screen highlighting what Waymo does and provides.",
    },
    
    {
      heading: "Prototype",
      content:
        "An interactive Figma prototype connects all onboarding, login, and sign-up screens. Micro-animations guide attention and improve flow, making the experience intuitive and engaging.",
    },

      {
        heading: "Figma Snippets ",
        content:
          "",
        images: [
          { src: "/assets/graphics/First.png" },
          { src: "/assets/graphics/Second.png" },
          { src: "/assets/graphics/Third-Slide.png" },
          { src: "/assets/graphics/Fourth-Slide.png" },
          { src: "/assets/graphics/Sign Up.png" },
          { src: "/assets/graphics/Sign In.png" },
        ],

      },
      
    ],
  },








];




  
export const graphicDesign = [
  {
    id: 2,
    title: "Shark Infographic",
    description:
      "A infographic combining vector illustration, hierarchy, and typography to communicate factual information about the Great White Shark. ",
    image: "/assets/graphics/infographic.jpg",
    tags: ["Adobe Illutrator"],
  },
  {
    id: 1,
    title: "Mediclo Email Marketing",
    description:
      "Designed and optimized Mediclo’s email campaigns from concept to deployment, focusing on improving user engagement and conversion",
    images: ["/assets/graphics/backtoschool.png","/assets/graphics/laborday.png","/assets/graphics/labordays.png","/assets/graphics/paradisegreen.png","/assets/graphics/terracotta.png"],  
    tags: ["Photoshop", "Klaviyo"],
  },
  {
    id: 3,
    title: "Glyph Magazine: Bauhaus",
    description:
      "Magazine layout inspired by Bauhaus design, focusing on clean typography and balanced composition.",
    images: ["/assets/graphics/magpages.jpg","/assets/graphics/magpages2.jpg","/assets/graphics/magpages3.jpg","/assets/graphics/magpages4.jpg","/assets/graphics/magpages5.jpg"],  
    tags: ["Adobe InDesign", "Editorial Design"],
  },

    {
    id: 4,
    title: "Brain Trauma Ads",
    description:
      "Awareness ad series combining impactful visuals and concise messaging for print media in various page sizes.",
    images: ["/assets/graphics/Kim-Andrew-Texting-Ad_page-0001.jpg","/assets/graphics/FullPage.jpg","/assets/graphics/2Thirds.jpg","/assets/graphics/1Third.jpg"],  
    tags: ["Adobe InDesign","Adobe Photoshop", "Advertising Design"],
  },

];







  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];