"use client";

import React, { Fragment, useState } from "react";
import {
  Box,
  List,
  Link as ChakraLink,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Search } from "lucide-react";
import { navBarItems } from "./NavbarItem/NavBarItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavBarContainerList } from "./NavBar.styled";
import SearchBar from "../SearchBar/SearchBar";
import BottomSearchBar from "./BottomSearchBar/BottomSearchBar";

const NavBar: React.FC = () => {
  const [isBottomSearchBarOpen, setIsBottomSearchBarOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const isActiveNavLink = (href: string) => {
    return pathname === href;
  };

  const activeNavItem = navBarItems.find((navItem) =>
    isActiveNavLink(navItem.href)
  );

  const handleOpenBottomSearchBar = () => {
    setIsBottomSearchBarOpen(true);
    console.log("Opening bottom search bar");
  };

  const handleCloseBottomSearchBar = () => {
    setIsBottomSearchBarOpen(false);
    console.log("Closing bottom search bar");
  };

  return (
    <>
      <Box as="nav">
        <NavBarContainerList
          p={2}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          position={{ mdDown: "fixed", md: "static" }}
          bottom={{ mdDown: 0, md: "auto" }}
          top={{ mdDown: "auto", md: "auto" }}
          borderTopLeftRadius={{ mdDown: "1rem", md: "0" }}
          borderTopRightRadius={{ mdDown: "1rem", md: "0" }}
        >
          {!isMobile && <SearchBar />}
          {navBarItems.map((navItem) => {
            const isActive =
              isActiveNavLink(navItem.href) && !isBottomSearchBarOpen;
            const IconComponent = navItem.icon;

            return (
              <Fragment key={navItem.href}>
                <List.Item p={4}>
                  <ChakraLink
                    asChild
                    focusRing={"none"}
                    color={isActive ? "teal.500" : "white"}
                  >
                    <Link href={navItem.href}>
                      {isMobile && (
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          {IconComponent && <IconComponent />}
                        </Box>
                      )}

                      <Text display={{ mdDown: "none", md: "flex" }}>
                        {navItem.name}
                      </Text>
                    </Link>
                  </ChakraLink>
                </List.Item>

                {/* Insert search button after Home - only on mobile */}
                {navItem.href === "/" && isMobile && (
                  <List.Item p={4} focusRing={"none"}>
                    <Button
                      focusRing={"none"}
                      variant="ghost"
                      p={0}
                      flex="none"
                      minW="auto"
                      w="auto"
                      h="auto"
                      lineHeight="1"
                      verticalAlign="baseline"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      onClick={handleOpenBottomSearchBar}
                      aria-label="Search"
                    >
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Search
                          style={{ width: 24, height: 24 }}
                          color={isBottomSearchBarOpen ? "#14b8a6" : "white"}
                        />
                      </Box>
                    </Button>
                  </List.Item>
                )}
              </Fragment>
            );
          })}
          {isMobile && (
            <Box
              display="flex"
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
                <Text fontSize={{ mdDown: "sm", md: "md" }}>
                  {activeNavItem.name}
                </Text>
              )}
            </Box>
          )}
        </NavBarContainerList>
      </Box>
      {isBottomSearchBarOpen && isMobile && (
        <BottomSearchBar
          isBottomSearchBarOpen={isBottomSearchBarOpen}
          onCloseBottomSearchBar={handleCloseBottomSearchBar}
        />
      )}
    </>
  );
};

export default NavBar;
