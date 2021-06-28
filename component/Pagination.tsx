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

const Pagination = () => {
  const setPage = useStore(
    (state: { setPage: (e: number) => void }) => state.setPage
  );

  const {
    isDisabled,
    pagesQuantity,
    currentPage,
    setCurrentPage,
    offset, // you may not need this most of the times, but it's returned for you anyway
  } = usePaginator({
    total: 2000,
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
