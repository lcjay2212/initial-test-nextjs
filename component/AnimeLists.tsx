import Card from "./Card";
import { Grid, Stack, Skeleton } from "@chakra-ui/react";
import { GET_ANIME_LISTS } from "../queries/anime";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import useStore from "hooks/pagination";

const AnimeLists = ({ searchText }) => {
  const [getAnimeLists, { loading, data }] = useLazyQuery(GET_ANIME_LISTS, {
    fetchPolicy: "network-only",
  });

  const page = useStore((state: { page: number }) => state.page);
  const perPage = useStore((state: { perPage: number }) => state.perPage);

  useEffect(() => {
    console.log({
      page,
      perPage,
      searchText,
    });

    console.log(page, perPage, "USE EFFECT");
    getAnimeLists({
      variables: {
        page,
        perPage,
        search: searchText,
      },
    });
  }, [page, perPage, searchText]);

  return (
    <>
      {loading ? (
        <>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(5, 1fr)",
            }}
            gap={6}
            p="4"
            w="100%"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <Stack key={i}>
                <Skeleton height={522} pb="1" />
              </Stack>
            ))}
          </Grid>
        </>
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
          gap={6}
          p="4"
          w="100%"
        >
          {data?.Page.media?.length &&
            data?.Page.media?.map((q, i) => <Card key={i} data={q} />)}
        </Grid>
      )}
    </>
  );
};

export default AnimeLists;
