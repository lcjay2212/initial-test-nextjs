import {
  Box,
  Text,
  Stack,
  Tag,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import { GET_ANIME_LISTS } from "../queries/anime";
import { useQuery } from "@apollo/client";
import React from "react";

const Card = () => {
  const { loading, data } = useQuery(GET_ANIME_LISTS);

  return (
    <>
      {!loading ? (
        data.Page.media.map((q) => {
          return (
            <Box
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                cursor: "pointer",
              }}
              transition="0.5s ease-in"
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
                <Image
                  src={q.coverImage.extraLarge}
                  w="100%"
                  h="300px"
                  objectPosition="center center"
                  objectFit="cover"
                  layout={"fill"}
                />
              </Box>
              <Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  {q.title.userPreferred}
                </Text>
                <Flex flexWrap="wrap">
                  {q.genres.map((a, i) => {
                    if (i <= 1) {
                      return (
                        <Tag size="sm" m="1" textTransform={"uppercase"}>
                          {a}
                        </Tag>
                      );
                    } else {
                      return <></>;
                    }
                  })}
                </Flex>
              </Stack>
              <Text>{q.description.substr(0, 75)}... </Text>
            </Box>
          );
        })
      ) : (
        <Box>
          <Text>Loading...</Text>
        </Box>
      )}
    </>
  );
};

export default Card;
