"use client";

import { Box, List, Link as ChakraLink } from "@chakra-ui/react";
import { NavBarContainerList } from "@/components/shared/Navbar/NavBar.styled";
import { navBarItems } from "./NavbarItem/NavBarItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const pathname = usePathname();

  const isActiveNavLink = (href: string) => {
    return pathname === href;
  };
  return (
    <Box as="nav">
      <NavBarContainerList p={4}>
        {navBarItems.map((navItem) => {
          const isActive = isActiveNavLink(navItem.href);
          const IconComponent = navItem.icon;
          return (
            <List.Item key={navItem.href} p={2}>
              <ChakraLink
                asChild
                focusRing={"none"}
                color={isActive ? "teal.500" : "white"}
              >
                <Link href={navItem.href}>
                  {IconComponent && <IconComponent />}
                  {navItem.name}
                </Link>
              </ChakraLink>
            </List.Item>
          );
        })}
      </NavBarContainerList>
    </Box>
  );
};

export default NavBar;
