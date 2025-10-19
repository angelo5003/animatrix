"use client";

import { Portal } from "@chakra-ui/react";
import { Dialog } from "@chakra-ui/react";
import SearchBar from "../../SearchBar/SearchBar";

type BottomSearchBarProps = {
  isBottomSearchBarOpen: boolean;
  onCloseBottomSearchBar: () => void;
};

const BottomSearchBar: React.FC<BottomSearchBarProps> = ({
  isBottomSearchBarOpen,
  onCloseBottomSearchBar,
}) => {
  if (!isBottomSearchBarOpen) return null;

  return (
    <Dialog.Root
      open={isBottomSearchBarOpen}
      onOpenChange={(dialogState) => {
        if (!dialogState.open) {
          onCloseBottomSearchBar();
        }
      }}
      closeOnInteractOutside
      role="dialog"
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content position="fixed" bottom="0" width="100%">
            <Dialog.Body p={4}>
              <SearchBar />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default BottomSearchBar;
