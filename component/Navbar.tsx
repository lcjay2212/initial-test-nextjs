import {
  Box,
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  ButtonProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

import {
  Paginator,
  Container,
  Previous,
  usePaginator,
  Next,
  PageGroup,
} from "chakra-paginator";

const Navbar = ({ searchText, setSearchText }) => {
  const [temp, setTemp] = useState(searchText ?? "");

  const {
    isDisabled,
    pagesQuantity,
    currentPage,
    setCurrentPage,
    setIsDisabled,
    pageSize,
    setPageSize,
    offset, // you may not need this most of the times, but it's returned for you anyway
  } = usePaginator({
    total: 100,
    initialState: {
      pageSize: 10,
      currentPage: 1,
      isDisabled: false,
    },
  });

  // styles
  const baseStyles: ButtonProps = {
    w: 7,
    fontSize: "sm",
  };

  const normalStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: "green.300",
    },
    // bg: "red.300",
  };

  const activeStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: "blue.300",
    },
  };

  const separatorStyles: ButtonProps = {
    w: 7,
    bg: "green.200",
  };

  const handlePageChange = (nextPage: number) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    console.log("request new data with ->", nextPage);
  };

  const handlePageSizeChange = (event) => {
    const pageSize = Number(event.target.value);

    setPageSize(pageSize);
  };

  const handleDisableClick = () => {
    return setIsDisabled((oldState) => !oldState);
  };

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

      {/* <Paginator
        isDisabled={isDisabled}
        activeStyles={activeStyles}
        innerLimit={2}
        currentPage={currentPage}
        outerLimit={2}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
        pagesQuantity={pagesQuantity}
        onPageChange={handlePageChange}
      >
        <Container align="center" justify="space-between" w="full" p={4}>
          <Previous>
            Previous
          </Previous>
          <PageGroup isInline align="center" />
          <Next>
            Next
          </Next>
        </Container>
      </Paginator> */}
    </Box>
  );
};

export default Navbar;
