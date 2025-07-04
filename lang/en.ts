export const en = {
  // Metadata
  pageTitle: "Portfolio | Tatsunori Marumo",
  pageDescription: "Tatsunori Marumo's portfolio site",

  // Header & Profile
  portfolio: "Portfolio",
  portfolioDescription: "A collection of my projects. Select tags to filter.",
  name: "Tatsunori Marumo",
  jobTitle: "Machine Learning Engineer and Full-Stack Web Developer",
  bio: "I'm a graduate of the Computer Systems Technology program at the British Columbia Institute of Technology, with a strong foundation in web development using TypeScript and React, machine learning with Python, and backend development with FastAPI. I specialize in building maintainable and scalable systems that follow industry best practices, and I carefully choose the most suitable tech stack based on the project's goals. I'm also passionate about exploring AI tools and emerging technologies to boost productivity and enhance software quality.",

  // Filters
  filterByTags: "Filter by Tags",
  filterModeTitle: "Filter Mode",
  filterModeAnd: "AND (Match all tags)",
  filterModeOr: "OR (Match any tag)",
  filterClear: "Clear Filters",
  filterShow: "Show Filters",
  filterHide: "Hide Filters",

  // Projects
  projectsFoundMessage: "{count} projects found",
  projectsNotFoundMessage: "No projects match the selected tags.",
  projectSiteButton: "Visit Site",
  projectDemoButton: "Watch Demo",
  projectDocumentationButton: "Documentation",
  projectGithubRepo: "GitHub Repository",

  // Date formatting
  january: "Jan",
  february: "Feb",
  march: "Mar",
  april: "Apr",
  may: "May",
  june: "Jun",
  july: "Jul",
  august: "Aug",
  september: "Sep",
  october: "Oct",
  november: "Nov",
  december: "Dec",

  // Project Data
  numberedTetrisTitle: "Numbered Tetris",
  numberedTetrisDescription:
    "Designed and developed a number-based Tetris game in which blocks disappear when the sum of vertically or horizontally aligned numbers equals 10. Leveraged object-oriented programming principles to structure the game. Took a central role throughout the project, from initial planning to final testing, with key responsibilities including class architecture design, implementation of the GUI and audio systems, and building the core game loop.",

  myBodyBuddyTitle: "My Body Buddy",
  myBodyBuddyDescription:
    "Collaborated with a team to develop an innovative health and fitness application that uses AI to generate personalized workout and diet plans for beginners. My primary contributions included designing the database, implementing the profile and diet menu pages, and developing an algorithm to calculate the daily caloric intake and expenditure required to achieve users' health goals.",

  rateVanRentTitle: "Rate Van Rent",
  rateVanRentDescription:
    "Developed a web application to help renters in Vancouver discover better housing options by sharing reviews and experiences from other tenants. This was my first web development project, and I contributed as part of a team. I was responsible for implementing the property listing functionality, including robust error handling and form validation.",

  blissTitle: "Bliss",
  blissDescription:
    "Developed an app that detects the user's current stress level using Apple Watch Health data and recommends three songs from their Spotify listening history to help reduce stress. I was mainly responsible for building the iOS app that retrieves Health data via Apple HealthKit and displays music recommendations from a FastAPI backend. I also developed the algorithm that analyzes current stress levels by comparing real-time data with the past 14 days of Health records, and designed the system to integrate health data with music preferences.",

  myDogAppTitle: "My Dog App",
  myDogAppDescription:
    "Created a simple Android app using a free Dog API to retrieve a list of dog breeds and image data. The app can identify the breed from an image and display random photos of a searched breed.",

  skylineZiplineTitle: "Skyline Zipline",
  skylineZiplineDescription:
    "Participated in a project during my internship to digitize inspection operations for a zipline company. I was mainly responsible for implementing the inspection data table component, building authentication and authorization using middleware, and enhancing security across the application.",

  spamCheckerTitle: "Spam Checker",
  spamCheckerDescription:
    "Developed a web application that detects scam messages by fine-tuning a Transformer-based DistilBERT model. The trained model was published on Hugging Face and integrated via a backend API built with FastAPI. The frontend was built using React Router, and the entire application was deployed end-to-end.",
} as const;
