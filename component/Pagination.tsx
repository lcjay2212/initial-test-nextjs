import { ButtonProps, Box } from "@chakra-ui/react";
import {
  Paginator,
  Container,
  Previous,
  usePaginator,
  Next,
  PageGroup,
} from "chakra-paginator";
import useStore, { PaginationProps } from "hooks/usePagination";
import shallow from "zustand/shallow";

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

  return (
    <Box opacity={total}>
      <Paginator
        isDisabled={isDisabled}
        activeStyles={activeStyles}
        currentPage={currentPage}
        innerLimit={3}
        outerLimit={3}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
        pagesQuantity={pagesQuantity}
        onPageChange={handlePageChange}
      >
        <Container align="center" justify="space-around" w="full" p={4}>
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
  );
};

export default Pagination;
