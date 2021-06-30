import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Stack,
  useColorModeValue,
  Link,
  Container,
  Tag,
  Grid,
  Skeleton,
} from "@chakra-ui/react";

const AnimeDetails = ({ data, loading }) => {
  console.log(data);
  return (
    <>
      {loading ? (
        <Box p={12}>
          <Stack>
            <Skeleton height={500} pb="1" />
          </Stack>
        </Box>
      ) : (
        <Box
          backgroundImage={`url(${data?.bannerImage})`}
          bgRepeat="no-repeat"
          backgroundSize="auto 43.75rem"
          backgroundPosition="center"
          backgroundAttachment="inherit"
        >
          <Flex justifyContent="center">
            <Box
              m={12}
              maxW={400}
              w="auto"
              h={500}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
              textAlign="center"
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
                  <Heading
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
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
                <Box color="gray.600">
                  <Text fontWeight="bold" fontSize="xs">
                    Episodes: {data?.episodes}
                  </Text>
                  <Text
                    fontWeight="bold"
                    fontSize="xs"
                    textTransform={"uppercase"}
                  >
                    Status: {data?.status} airing
                  </Text>
                  <Text fontWeight="bold" fontSize="xs">
                    Season: {data?.season} {data?.seasonYear}
                  </Text>
                  {data?.studios?.nodes
                    .filter((_, i) => i <= 0)
                    .map((q) => {
                      return (
                        <Text fontWeight="bold" fontSize="xs">
                          Studio: {q?.name}
                        </Text>
                      );
                    })}
                </Box>
              </Box>
            </Box>
            <Box>
              <Container maxW="50rem" p={12}>
                <Box
                  bg="white"
                  boxShadow="dark-lg"
                  p="6"
                  rounded="md"
                  bgGradient="linear(to-r, #B2AFAF , #ECE7E7)"
                >
                  <Heading marginTop="1">
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                    >
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
      )}
    </>
  );
};

export default AnimeDetails;
