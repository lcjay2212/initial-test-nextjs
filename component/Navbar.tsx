import {
  Box,
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useBreakpointValue,
  chakra,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import usePagination, { PaginationProps } from "hooks/usePagination";
import useSearch, { SearchProps } from "hooks/useSearch";

const Navbar = () => {
  const { searchText, setSearchText } = useSearch((state: SearchProps) => ({
    searchText: state.searchText,
    setSearchText: state.setSearchText,
  }));
  const [temp, setTemp] = useState(searchText ?? "");
  const resetValues = usePagination(
    (state: PaginationProps) => state.resetValues
  );

  return (
    <Box bg="#4B54A3" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Text
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily={"heading"}
          color="white"
        >
          <chakra.b textTransform="uppercase">Anilist</chakra.b>
        </Text>
      </Flex>
    </Box>
  );
};

export default Navbar;
