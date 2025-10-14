import styled from "@emotion/styled";
import { Box, List } from "@chakra-ui/react";

export const NavBarContainerList = styled(List.Root)`
  background-color: red;
  flex-direction: row;
  width: 100%;
  list-style: none;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

export const StyledActiveLinkLabelContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #3c3533;
  bottom: 0;
  padding: 0.125rem;
`;
