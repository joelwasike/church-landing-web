import type { IconName } from "./components/Icon";

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#suite", label: "Product" },
  { href: "#contact", label: "Contact" },
];

export const modules = [
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
  { label: "Giving & pledges", detail: "campaigns, reports" },
  { label: "Realtime", detail: "live check-in & alerts" },
  { label: "Role-based", detail: "admin to volunteer" },
];

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
