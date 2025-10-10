import styled from "@emotion/styled";
import { List } from "@chakra-ui/react";

export const NavBarContainerList = styled(List.Root)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
