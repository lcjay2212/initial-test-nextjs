import {
  Box,
  Grid,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { uniqBy } from "lodash";
import { ReactElement } from "react";

const templateColume = {
  base: "repeat(2, 1fr)",
  sm: "repeat(3, 1fr)",
  md: "repeat(5, 1fr)",
  lg: "repeat(6, 1fr)",
  xl: "repeat(8, 1fr)",
};

type Staff = {
  image?: {
    large?: string;
  };
  name?: {
    userPreferred: string;
  };
};

const StaffLists = ({ data }: { data: Staff[] }) => {
  return (
    <Grid templateColumns={templateColume} gap={6} p="4" w="100%">
      {uniqBy(data, "id").map((q, i: number): ReactElement => {
        return (
          <Box
            key={i}
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              cursor: "pointer",
            }}
            transition="0.5s ease-in"
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={5}
            overflow={"hidden"}
          >
            <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
              <Image
                src={q?.image.large}
                w="100%"
                h="200px"
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
                {q?.name?.userPreferred}
              </Text>
            </Stack>
          </Box>
        );
      })}
    </Grid>
  );
};

export default StaffLists;
