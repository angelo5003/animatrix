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
        p={{ base: 4, md: 2 }}
        display={{ base: "flex" }}
        justifyContent="space-around"
        alignItems="center"
        position={{ base: "fixed", md: "static" }}
        bottom={{ base: 0, md: "auto" }}
        top={{ base: "auto", md: "auto" }}
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
                  <Box
                    display={{ base: "flex", md: "none" }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {IconComponent && <IconComponent />}
                  </Box>
                  <Text display={{ base: "none", md: "block" }}>
                    {navItem.name}
                  </Text>
                </Link>
              </ChakraLink>
            </List.Item>
          );
        })}

        <StyledActiveLinkLabelContainer
          display={{ base: "flex", md: "none" }}
          borderRadius={{ base: "0" }}
        >
          {activeNavItem && <Text>{activeNavItem.name}</Text>}
        </StyledActiveLinkLabelContainer>
      </NavBarContainerList>
    </Box>
  );
};

export default NavBar;
