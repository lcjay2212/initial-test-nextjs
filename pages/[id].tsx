import { useQuery } from "@apollo/client";
import { GET_ANIME_BY_ID } from "queries/anime.queries";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import AnimeDetails from "component/AnimeDetails";
import CharacterInfo from "component/CharacterInfo";
import TabsLists from "component/TabsLists";

const AnimeById = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useQuery(GET_ANIME_BY_ID, {
    variables: { id: id },
  });

  return (
    <Box
      bgGradient={useColorModeValue(
        "radial(orange.400 1px, transparent 1px)",
        "radial(orange.300 1px, transparent 1px)"
      )}
      backgroundSize="20px 20px"
      h="100%"
    >
      <AnimeDetails data={data?.Media} />
      <TabsLists data={data?.Media?.characters?.nodes} loading={loading} />
    </Box>
  );
};

export default AnimeById;
