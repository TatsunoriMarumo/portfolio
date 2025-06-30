import type { Project } from "@/types/project";
import { ProjectTag } from "@/types/project-tag";

const numberedTetrisImagesPath = "/images/numbered-tetris";
const myBodyBuddyImagesPath = "/images/my-body-buddy";
const rateVanRentImagesPath = "/images/rate-van-rent";
const blissImagesPath = "/images/bliss";
const myDogAppImagesPath = "/images/my-dog-app";
const skylineZiplineImagesPath = "/images/skyline-zipline";
const spamCheckerImagePath = "/images/spam-checker";

const {Python, FastAPI, Swift, Kotlin, Android, Java, OOP, TypeScript, React, NextJS, TailwindCSS, MongoDB, HTML5, CSS3, JavaScript, Bootstrap, Firebase, MySQL, Transformers } = ProjectTag;

// プロジェクトデータ - 複数リンクタイプ対応
export const projectsData: Project[] = [
  {
    id: 1,
    titleKey: "numberedTetrisTitle",
    descriptionKey: "numberedTetrisDescription",
    images: [
      `${numberedTetrisImagesPath}/game-start.png`,
      `${numberedTetrisImagesPath}/demo.png`,
      `${numberedTetrisImagesPath}/game-over.png`,
    ],
    tags: [Java, OOP],
    demoLink: "https://youtu.be/YtoIud6ZH8s",
    documentationLink: "",
    githubLink:
      "https://github.com/yoshidont-mind/COMP-2522-202410-Term-Project-Tats-Tatsunori",
    dateRange: {
      start: { year: 2024, month: 3 },
      end: { year: 2024, month: 4 },
    },
  },
  {
    id: 2,
    titleKey: "myBodyBuddyTitle",
    descriptionKey: "myBodyBuddyDescription",
    images: [
      `${myBodyBuddyImagesPath}/logo.png`,
      `${myBodyBuddyImagesPath}/workout.png`,
      `${myBodyBuddyImagesPath}/summery.png`,
    ],
    tags: [TypeScript, React, NextJS, TailwindCSS, MongoDB],
    demoLink: "https://youtu.be/KuduOg__RW4",
    githubLink: "https://github.com/shinn92dev/2800-202410-dtc05-my-body-buddy",
    dateRange: {
      start: { year: 2024, month: 4 },
      end: { year: 2024, month: 5 },
    },
  },
  {
    id: 3,
    titleKey: "rateVanRentTitle",
    descriptionKey: "rateVanRentDescription",
    images: [
      `${rateVanRentImagesPath}/home-before-login.png`,
      `${rateVanRentImagesPath}/home-after-login.png`,
      `${rateVanRentImagesPath}/all-listings.png`,
      `${rateVanRentImagesPath}/property-page.png`,
      `${rateVanRentImagesPath}/property-page2.png`,
      `${rateVanRentImagesPath}/add-property-invalid.png`,
      `${rateVanRentImagesPath}/add-property-valid.png`,
      `${rateVanRentImagesPath}/rate-property.png`,
      `${rateVanRentImagesPath}/rate-property2.png`,
      `${rateVanRentImagesPath}/bookmarks.png`,
    ],
    tags: [HTML5, CSS3, JavaScript, Bootstrap, Firebase],
    siteLink: "https://comp1800-demo-202330-edro.web.app",
    githubLink: "https://github.com/shinn92dev/Rate-Van-Rent",
    dateRange: {
      start: { year: 2023, month: 10 },
      end: { year: 2023, month: 12 },
    },
  },
  {
    id: 4,
    titleKey: "blissTitle",
    descriptionKey: "blissDescription",
    images: [`${blissImagesPath}/bliss.png`],
    tags: [Python, FastAPI, Swift],
    demoLink: "https://youtu.be/9KZRgmeT6ho",
    dateRange: {
      start: { year: 2025, month: 4 },
      end: { year: 2025, month: 5 },
    },
  },
  {
    id: 5,
    titleKey: "myDogAppTitle",
    descriptionKey: "myDogAppDescription",
    images: [
      `${myDogAppImagesPath}/home.png`,
      `${myDogAppImagesPath}/breed-list.png`,
      `${myDogAppImagesPath}/shiba-random.png`,
      `${myDogAppImagesPath}/corgi.png`,
    ],
    tags: [Kotlin, Android],
    demoLink: "https://youtube.com/shorts/qCUxZZZNetI",
    dateRange: {
      start: { year: 2024, month: 11 },
      end: { year: 2024, month: 11 },
    },
  },
  {
    id: 6,
    titleKey: "skylineZiplineTitle",
    descriptionKey: "skylineZiplineDescription",
    images: [
      `${skylineZiplineImagesPath}/login.png`,
      `${skylineZiplineImagesPath}/admin-menu.png`,
      `${skylineZiplineImagesPath}/admin-manage-sites.png`,
      `${skylineZiplineImagesPath}/admin-pending-sites.png`,
      `${skylineZiplineImagesPath}/owner-site-dashboard.png`,
      `${skylineZiplineImagesPath}/owner-update-status.png`,
      `${skylineZiplineImagesPath}/owner-inspection-forms.png`,
      `${skylineZiplineImagesPath}/owner-i-18.png`,
    ],
    tags: [TypeScript, React, NextJS, TailwindCSS, Firebase, MySQL],
    dateRange: {
      start: { year: 2025, month: 1 },
      end: { year: 2025, month: 4 },
    },
  },
  {
    id: 7,
    titleKey: "spamCheckerTitle",
    descriptionKey: "spamCheckerDescription",
    images: [
      `${spamCheckerImagePath}/home.png`,
      `${spamCheckerImagePath}/models.png`,
      `${spamCheckerImagePath}/plain.png`,
      `${spamCheckerImagePath}/weighted.png`,
    ],
    tags: [React, FastAPI, Transformers],
    siteLink: "https://spam-checker-frontend.netlify.app",
    demoLink: "https://youtu.be/VpgB5_Mwfqo",
    githubLink: "https://github.com/TatsunoriMarumo/spam-checker",
    dateRange: {
      start: { year: 2025, month: 4 },
      end: { year: 2025, month: 4 },
    },
  },
];
