import {
  Box,
  Text,
  Heading,
  Avatar,
  Image,
  Flex,
  Stack,
  useColorModeValue,
  Link,
  Container,
  Tag,
  Grid,
} from "@chakra-ui/react";

const AnimeDetails = ({ data }) => {
  return (
    <Box
      backgroundImage={`url(${data?.bannerImage})`}
      bgRepeat="no-repeat"
      pos="relative"
    >
      <Flex>
        <Box
          m={12}
          maxW={400}
          w="auto"
          h={500}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          //   overflow={"hidden"}
          textAlign="center"
          alignContent="center"
        >
          <Image
            h={"250px"}
            w="100%"
            src={data?.coverImage.extraLarge}
            objectFit={"cover"}
            borderTopRadius="md"
          />

          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {data?.title.userPreferred}
              </Heading>
            </Stack>
            <Box textAlign="center">
              {data?.genres.map((q, i) => {
                return (
                  <Tag
                    key={i}
                    size="sm"
                    m="1"
                    colorScheme="facebook"
                    textTransform={"uppercase"}
                    direction={"row"}
                  >
                    {q}
                  </Tag>
                );
              })}
            </Box>
            <Box>
              <Text>Episodes: {data?.episodes}</Text>
              <Text textTransform={"uppercase"}>
                Status: {data?.status} airing
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Container maxW={"8xl"} p={12}>
            <Box
              bg="white"
              boxShadow="dark-lg"
              p="6"
              rounded="md"
              bgGradient="linear(to-r, #B2AFAF , #ECE7E7)"
            >
              <Heading marginTop="1">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Summary
                </Link>
              </Heading>
              <Text
                as="p"
                marginTop="2"
                color={useColorModeValue("gray.700", "gray.200")}
                fontSize="lg"
              >
                {data?.description}
              </Text>
            </Box>
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default AnimeDetails;
