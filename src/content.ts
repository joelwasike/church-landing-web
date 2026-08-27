import type { IconName } from "./components/Icon";

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#suite", label: "Product" },
  { href: "#contact", label: "Contact" },
];

export const modules = [
  "Member app",
  "Admin dashboard",
  "Landing website",
  "Offerings",
  "Giving",
  "People",
  "Families",
  "Groups",
  "Events",
  "Attendance",
  "Volunteers",
  "Messaging",
  "Prayer",
  "Content",
  "Media",
  "Reports",
];

export const capabilities = [
  { label: "Member growth", detail: "apps people actually open" },
  { label: "Operational control", detail: "one dashboard for staff" },
  { label: "Realtime sync", detail: "live updates everywhere" },
];

export const featureCards = [
  {
    title: "Member app",
    body: "A polished mobile experience for devotion, giving, events, prayer, and profile updates.",
    icon: "people" as const,
  },
  {
    title: "Admin dashboard",
    body: "Run people, groups, events, giving, volunteers, and content from one login.",
    icon: "layers" as const,
  },
  {
    title: "Landing website",
    body: "A conversion-focused public site that makes the system easy to understand and easy to buy.",
    icon: "map" as const,
  },
  {
    title: "People & families",
    body: "Directory, household tracking, role-based access, and searchable member records.",
    icon: "people" as const,
  },
  {
    title: "Events & attendance",
    body: "Publish events, check people in, and keep attendance history without paper.",
    icon: "bolt" as const,
  },
  {
    title: "Giving & pledges",
    body: "Record gifts, offerings, campaigns, pledge tracking, and donation history in one place.",
    icon: "map" as const,
  },
  {
    title: "Offerings made simple",
    body: "Collect Sunday offerings, special giving, and recurring generosity without extra tools.",
    icon: "bolt" as const,
  },
  {
    title: "Prayer & care",
    body: "Collect prayer requests, follow up on needs, and keep ministry care organized.",
    icon: "layers" as const,
  },
  {
    title: "Messaging & alerts",
    body: "Announcements and realtime notifications that keep the church informed instantly.",
    icon: "bolt" as const,
  },
  {
    title: "Groups & volunteers",
    body: "Grow small groups and serving teams with simple sign-up and participation flows.",
    icon: "people" as const,
  },
  {
    title: "Media & content",
    body: "Publish bulletins, sermon notes, and church content members can revisit anytime.",
    icon: "layers" as const,
  },
  {
    title: "Roles & permissions",
    body: "Admin, staff, finance, leader, and member access rules tailored per organization.",
    icon: "map" as const,
  },
  {
    title: "Realtime sync",
    body: "Live updates across web and mobile so attendance, messages, and changes stay current.",
    icon: "bolt" as const,
  },
] as const;

type BentoTile =
  | {
      id: string;
      kind: "image";
      image: string;
      eyebrow: string;
      title: string;
      body: string;
    }
  | {
      id: string;
      kind: "text";
      icon: IconName;
      title: string;
      body: string;
    };

export const bentoTiles: BentoTile[] = [
  {
    id: "giving",
    kind: "image",
    image: "/images/pexels-jibarofoto-18482787.jpg",
    eyebrow: "Generosity",
    title: "Giving that meets people where they are",
    body: "Campaigns, pledges, and a full donation history — recorded in seconds and reported without spreadsheets.",
  },
  {
    id: "people",
    kind: "text",
    icon: "people",
    title: "People & families",
    body: "One directory for members, households, and the groups they belong to.",
  },
  {
    id: "realtime",
    kind: "text",
    icon: "bolt",
    title: "Realtime, always",
    body: "Check-ins, volunteer changes, and announcements land on every screen instantly.",
  },
  {
    id: "sites",
    kind: "text",
    icon: "map",
    title: "Multi-site ready",
    body: "Run one church or ten campuses from the same account.",
  },
  {
    id: "extend",
    kind: "text",
    icon: "layers",
    title: "Built to extend",
    body: "An audit trail and custom permissions for every role, out of the box.",
  },
];

export const roles = ["Admin", "Staff", "Finance", "Group leader", "Member"];

export const pullQuote =
  "Built for the volunteer checking in a first-time guest, the pastor finishing Sunday's slides at midnight, and the member who just wants to know where to be.";

export const stats = [
  { value: "One", label: "app members open" },
  { value: "One", label: "dashboard staff run" },
  { value: "Zero", label: "spreadsheets in between" },
];
