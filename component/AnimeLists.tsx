import Card from "./Card";
import { Grid, Stack, Skeleton } from "@chakra-ui/react";
import { GET_ANIME_LISTS } from "../queries/anime";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import useStore, { PaginationProps } from "hooks/pagination";
import shallow from "zustand/shallow";

const templateColumns = {
  base: "repeat(1, 1fr)",
  sm: "repeat(2, 1fr)",
  md: "repeat(3, 1fr)",
  lg: "repeat(4, 1fr)",
  xl: "repeat(5, 1fr)",
  "2xl": "repeat(6, 1fr)",
};

const AnimeLists = ({ searchText }) => {
  const { page, perPage, setTotal, setPage } = useStore(
    (state: PaginationProps) => ({
      page: state.page,
      perPage: state.perPage,
      setTotal: state.setTotal,
      setPage: state.setPage,
    }),
    shallow
  );

  const [getAnimeLists, { loading, data }] = useLazyQuery(GET_ANIME_LISTS, {
    fetchPolicy: "network-only",
    onCompleted: (response) => {
      if (searchText) {
        setPage(1);
      }

      setTotal(response?.Page?.pageInfo?.total);
    },
  });

  useEffect(() => {
    console.log(page, perPage, "USE EFFECT");

    const variables: {
      page: number;
      perPage: number;
      search?: string;
    } = { page, perPage };

    if (searchText) {
      variables.search = searchText;
    }

    getAnimeLists({
      variables,
    });
  }, [page, perPage, searchText]);

  return (
    <>
      {loading ? (
        <>
          <Grid templateColumns={templateColumns} gap={6} p="4" w="100%">
            {Array.from({ length: 20 }).map((_, i) => (
              <Stack key={i}>
                <Skeleton height={522} pb="1" />
              </Stack>
            ))}
          </Grid>
        </>
      ) : (
        <Grid templateColumns={templateColumns} gap={6} p="4" w="100%">
          {data?.Page.media?.length &&
            data?.Page.media?.map((q, i) => <Card key={i} data={q} />)}
        </Grid>
      )}
    </>
  );
};

export default AnimeLists;
