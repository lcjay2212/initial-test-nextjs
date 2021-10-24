import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const CharacterInfo = ({ data }) => (
  <>
    {data?.map((q, i) => (
      <Box overflow="hidden" m={5}>
        <Flex justifyContent="flex-start" alignItems="flex-start">
          <Box pos={"relative"} boxShadow="black-lg">
            <Image
              src={q?.image.large}
              w="100%"
              h="400px"
              objectFit="cover"
              rounded="md"
            />
          </Box>
          <Box
            w="100%"
            maxW="65rem"
            p="6"
            ml="50px"
            mb={10}
            bg="white"
            boxShadow="dark-lg"
            rounded="md"
            bgGradient="linear(to-r, #ece7e7 , #ECE7E7)"
          >
            <Heading marginTop="1" color="black">
              {q?.name?.userPreferred}
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              {q?.description}
            </Text>
          </Box>
        </Flex>
      </Box>
    ))}
  </>
);

export default CharacterInfo;
