"use client";

import { Box, List } from "@chakra-ui/react";
import { NavBarContainerList } from "@/components/shared/Navbar/NavBar.styled";

const NavBar: React.FC = () => {
  return (
    <Box>
      <NavBarContainerList>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
        <List.Item>Item 3</List.Item>
        <List.Item>Item 4</List.Item>
      </NavBarContainerList>
    </Box>
  );
};

export default NavBar;
