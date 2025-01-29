import {
  DollarSign,
  Headphones,
  Link,
  GitHub,
  Award,
  Activity,
  Heart,
} from "react-feather";
import {
  Mail,
  Bell,
  Settings,
  Music,
  AlertTriangle,
  AlertCircle,
} from "react-feather";

export const ContextualBadgeData = [
  { color: "secondary", text: "Secondary" },
  { color: "success", text: "Success" },
  { color: "info", text: "Info" },
  { color: "warning", text: "Warning" },
  { color: "danger", text: "Danger" },
  { color: "light txt-dark", text: "Light" },
  { color: "dark tag-pills-sm-mb", text: "Dark" },
];

export const ButtonPartData = [
  {
    color: "secondary",
    text: "Notification",
    icon: <Bell />,
  },
  {
    color: "success",
    text: "Update available",
    icon: <Settings />,
  },
  {
    color: "info",
    text: "Playing Now",
    icon: <Music />,
  },
  {
    color: "warning",
    text: "1.2 GB Used",
    icon: <AlertTriangle />,
  },
];
export const TagsWithNumData = [
  { color: "secondary", text: "2" },
  { color: "success", text: "3" },
  { color: "info", text: "4" },
  { color: "warning", text: "5" },
  { color: "danger", text: "6" },
  { color: "light", text: "7" },
  { color: "dark ", text: "8" },
];

export const TagWithIconData = [
  { color: "secondary", icon: <Headphones /> },
  { color: "success", icon: <Link /> },
  { color: "info", icon: <GitHub /> },
  { color: "warning", icon: <Award /> },
  { color: "light", icon: <Activity /> },
  { color: "danger", icon: <Heart /> },
  { color: "dark ", icon: <Mail /> },
];

export const ContextualBadgeSubTitle = [
  {
    text: "Use the ",
    code: ".badge",
  },
  {
    text: " utility class to make more badges.",
  },
];

export const ContextualPillsSubTitle = [
  {
    text: "Use the ",
    code: ".rounded-pill ",
  },
  {
    text: "utility class to make badges more rounded with a larger border-radius",
  },
];

export const TagsWithNumberSubTitle = [
  {
    text: "Use the ",
    code: ".badge ",
  },
  {
    text: "utility class to make number of more badges.",
  },
];

export const PillsWithNumberSubTitle = [
  {
    text: "Use the ",
    code: ".rounded-circle ",
  },
  {
    text: "utility class to make badges more rounded with a larger border-radius",
  },
];

export const TagsWithIconSubTitle = [
  {
    text: "Use the ",
    code: ".badge ",
  },
  {
    text: "utility class to make more icons.",
  },
];

export const PillWithIconSubTitle = [
  {
    text: "Use the ",
    code: ".rounded-pill ",
  },
  {
    text: "utility class to make icons badges more rounded with a larger border-radius.",
  },
];

export const ButtonPartSubTitle = [
  {
    code: ".badge ",
  },
  {
    text: "can be used as part of button to provide a icons",
  },
];

export const HeadingBadgeSubTitle = [
  {
    text: "All html headings ",
    code: "<h1>",
  },
  {
    text: "to ",
    code: "<h6> ",
  },
  {
    text: " , are available in ",
    code: ".badge ",
  },
  {
    text: "tags",
  },
];
