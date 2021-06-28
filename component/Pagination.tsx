import { useLazyQuery } from "@apollo/client";
import { ButtonProps } from "@chakra-ui/react";
import {
  Paginator,
  Container,
  Previous,
  usePaginator,
  Next,
  PageGroup,
} from "chakra-paginator";
import useStore from "hooks/pagination";
import shallow from "zustand/shallow";

const Pagination = () => {
  const { perPage, setPage, total, page } = useStore(
    (state: {
      setPage: (e: number) => void;
      total: number;
      perPage: number;
      page: number;
    }) => ({
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
  };

  // handlers
  const handlePageChange = (nextPage: number) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    setPage(nextPage);
    console.log("request new data with ->", nextPage);
  };

  return (
    <>
      <Paginator
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
        <Container align="center" justify="space-around" w="full" p={4}>
          <Previous justifyContent="flex-end">Previous</Previous>
          <PageGroup isInline align="center" />
          <Next>Next</Next>
        </Container>
      </Paginator>
    </>
  );
};

export default Pagination;
