import {
  ButtonProps,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Paginator,
  Container,
  Previous,
  usePaginator,
  Next,
  PageGroup,
} from "chakra-paginator";
import usePagination from "hooks/usePagination";
import useStore, { PaginationProps } from "hooks/usePagination";
import useSearch, { SearchProps } from "hooks/useSearch";
import { useState } from "react";
import shallow from "zustand/shallow";
import { debounce } from "lodash";

const buttonPadding = 7;

const Pagination = () => {
  const { perPage, setPage, total, page } = useStore(
    (state: PaginationProps) => ({
      setPage: state.setPage,
      total: state.total,
      perPage: state.perPage,
      page: state.page,
    }),
    shallow
  );

  const { isDisabled, pagesQuantity, currentPage, setCurrentPage } =
    usePaginator({
      total,
      initialState: {
        pageSize: perPage,
        currentPage: page,
        isDisabled: false,
      },
    });

  const baseStyles: ButtonProps = {
    w: 7,
    fontSize: "sm",
    p: buttonPadding,
  };

  const normalStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: "green.300",
    },
  };

  const activeStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: "blue.300",
    },
    bg: "green.300",
  };

  const separatorStyles: ButtonProps = {
    w: 7,
    bg: "green.200",
    p: buttonPadding,
  };

  const handlePageChange = (nextPage: number) => {
    setCurrentPage(nextPage);
    setPage(nextPage);
  };

  const { searchText, setSearchText } = useSearch((state: SearchProps) => ({
    searchText: state.searchText,
    setSearchText: state.setSearchText,
  }));
  const [temp, setTemp] = useState(searchText ?? "");
  const resetValues = usePagination(
    (state: PaginationProps) => state.resetValues
  );

  return (
    <Flex align="center" justify="space-between" ml={5}>
      <InputGroup maxW="400px">
        <InputLeftElement pointerEvents="none" p={buttonPadding} />
        <Input
          bg="white"
          size="md"
          placeholder="Search"
          value={temp}
          onChange={(e) => {
            setTemp(e.target.value);
            debounce(() => {
              setSearchText(e.target.value);
              resetValues();
            }, 500)();
          }}
          p={buttonPadding}
        />
      </InputGroup>

      <Box opacity={total}>
        <Paginator
          isDisabled={isDisabled}
          activeStyles={activeStyles}
          currentPage={currentPage}
          innerLimit={1}
          outerLimit={1}
          normalStyles={normalStyles}
          separatorStyles={separatorStyles}
          pagesQuantity={pagesQuantity}
          onPageChange={handlePageChange}
        >
          <Container align="center" justify="space-between" w="full" p={4}>
            <Previous w={100} p={buttonPadding}>
              Previous
            </Previous>
            <PageGroup isInline align="center" />
            <Next w={100} p={buttonPadding}>
              Next
            </Next>
          </Container>
        </Paginator>
      </Box>
    </Flex>
  );
};

export default Pagination;
