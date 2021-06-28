import {
  Box,
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = ({ searchText, setSearchText }) => {
  const [temp, setTemp] = useState(searchText ?? "");

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
        <Flex>
          <InputGroup maxW="400px">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              bg="white"
              size="md"
              placeholder="Search"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
            />
          </InputGroup>

          <Button
            ml="2"
            colorScheme="green"
            onClick={() => setSearchText(temp)}
          >
            Search
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
