import { Home, Search, Bookmark, User, Bell } from "lucide-react";

type NavBarItem = {
  name: string;
  href: string;
  icon?: React.ComponentType;
};

export const navBarItems: NavBarItem[] = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
    href: "/about",
    icon: User,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Bell,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: Bookmark,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: Search,
  },
  {
    name: "Services",
    href: "/services",
  },
];
