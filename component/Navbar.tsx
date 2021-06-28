import {
  Box,
  Flex,
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

const Navbar = ({ searchText, setSearchText }) => {
  return (
    <Box bg="#4B54A3" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Text
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily={"heading"}
          color="white"
        >
          <b>Anilist</b>
        </Text>
        <InputGroup maxW="400px">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            size="md"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Navbar;
