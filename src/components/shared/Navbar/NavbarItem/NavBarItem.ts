import { Home, Bookmark, User, Bell } from "lucide-react";

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
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    name: "Favorites",
    href: "/favorites",
    icon: Bookmark,
  },

  {
    name: "Account",
    href: "/account",
    icon: User,
  },
];
