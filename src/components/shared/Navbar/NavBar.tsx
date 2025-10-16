"use client";

import { Box, List, Link as ChakraLink, Text } from "@chakra-ui/react";

import { navBarItems } from "./NavbarItem/NavBarItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavBarContainerList } from "./NavBar.styled";

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
        p={{ base: 2, md: 2 }}
        display={{ base: "flex" }}
        justifyContent="space-around"
        alignItems="center"
        position={{ base: "fixed", md: "static" }}
        bottom={{ base: 0, md: "auto" }}
        top={{ base: "auto", md: "auto" }}
        borderTopLeftRadius={{ base: "1rem", md: "0" }}
        borderTopRightRadius={{ base: "1rem", md: "0" }}
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

        <Box
          display={{ base: "flex", md: "none" }}
          justifyContent="center"
          alignItems="center"
          position="absolute"
          left={0}
          right={0}
          width="100%"
          bottom={0}
          p="0.125rem"
        >
          {activeNavItem && (
            <Text fontSize={{ base: "sm", md: "md" }}>
              {activeNavItem.name}
            </Text>
          )}
        </Box>
      </NavBarContainerList>
    </Box>
  );
};

export default NavBar;
