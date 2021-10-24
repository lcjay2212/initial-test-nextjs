import AnimeLists from "component/AnimeLists";
import { Box } from "@chakra-ui/layout";
import Pagination from "component/Pagination";
import { useColorModeValue } from "@chakra-ui/system";

export default function Home() {
  return (
    <Box
      bgGradient={useColorModeValue(
        "radial(orange.400 1px, transparent 1px)",
        "radial(orange.300 1px, transparent 1px)"
      )}
      backgroundSize="20px 20px"
      h="100%"
    >
      <Pagination />
      <AnimeLists />
    </Box>
  );
}
