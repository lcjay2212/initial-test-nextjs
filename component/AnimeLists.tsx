import Card from "./Card";
import { Grid, Stack, Skeleton } from "@chakra-ui/react";
import { GET_ANIME_LISTS } from "../queries/anime";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

const AnimeLists = ({ searchText }) => {
  const [getAnimeLists, { loading, data }] = useLazyQuery(GET_ANIME_LISTS);
  console.log(data, loading);

  useEffect(() => {
    getAnimeLists();
  }, []);

  useEffect(() => {
    if (searchText) {
      getAnimeLists({
        variables: {
          search: searchText,
        },
      });
    }
    console.log("There is a change on search text");
  }, [searchText]);

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
            {Array.from({ length: 20 }).map((q) => (
              <Stack>
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
