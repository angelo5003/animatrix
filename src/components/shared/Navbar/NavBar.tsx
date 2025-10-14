"use client";

import { Box, List, Link as ChakraLink, Text } from "@chakra-ui/react";
import {
  NavBarContainerList,
  StyledActiveLinkLabelContainer,
} from "@/components/shared/Navbar/NavBar.styled";
import { navBarItems } from "./NavbarItem/NavBarItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const pathname = usePathname();

  const isActiveNavLink = (href: string) => {
    return pathname === href;
  };

  const activeNavItem = navBarItems.find((navItem) =>
    isActiveNavLink(navItem.href)
  );
  return (
    <Box as="nav">
      <NavBarContainerList
        p={4}
        display={{ base: "flex" }}
        justifyContent="space-around"
        alignItems="center"
        position="fixed"
        bottom={{ base: 0, md: "auto" }}
        top={{ base: "auto", md: 0 }}
      >
        {navBarItems.map((navItem) => {
          const isActive = isActiveNavLink(navItem.href);
          const IconComponent = navItem.icon;
          return (
            <List.Item key={navItem.href} p={4}>
              <ChakraLink
                asChild
                focusRing={"none"}
                color={isActive ? "teal.500" : "white"}
              >
                <Link href={navItem.href}>
                  {IconComponent && <IconComponent />}
                </Link>
              </ChakraLink>
            </List.Item>
          );
        })}

        <StyledActiveLinkLabelContainer>
          {activeNavItem && <Text>{activeNavItem.name}</Text>}
        </StyledActiveLinkLabelContainer>
      </NavBarContainerList>
    </Box>
  );
};

export default NavBar;
