import Card from "./Card";
import { Grid } from "@chakra-ui/react";
import { GET_ANIME_LISTS } from "../queries/anime";
import { useQuery } from "@apollo/client";

const AnimeLists = ({ searchText }) => {
  const { loading, data } = useQuery(GET_ANIME_LISTS);
  console.log(data, loading);

  return (
    <>
      {loading ? (
        <>Loading</>
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
