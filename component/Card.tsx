import {
  Box,
  Text,
  Stack,
  Tag,
  useColorModeValue,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

const Card = ({ data: q }) => {
  return (
    <Box
      key={q.id}
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
          src={q?.coverImage?.extraLarge}
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
          {q?.title?.userPreferred}
        </Text>
        <Flex flexWrap="wrap" align="center" justifyContent="flex-start">
          {q.genres
            .filter((_, q: number) => q <= 1)
            .map((a: string, i: number) => (
              <Tag
                key={i}
                size="sm"
                m="1"
                colorScheme="facebook"
                textTransform={"uppercase"}
                direction={"row"}
              >
                {a}
              </Tag>
            ))}
        </Flex>
      </Stack>
      {q.description && <Text>{q?.description?.substr(0, 75)}... </Text>}
      <Button
        w={"full"}
        mt={8}
        colorScheme="green"
        rounded={"md"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
      >
        {" "}
        <Link
          href={{
            pathname: `/anime${q?.title?.userPreferred}`,
            query: {
              imgUrl: q?.coverImage?.extraLarge,
              id: q.id,
            },
          }}
        >
          Read More!
        </Link>
      </Button>
    </Box>
  );
};

export default Card;
