import AnimeLists from "component/AnimeLists";
import { Box } from "@chakra-ui/layout";
import Navbar from "component/Navbar";
import Pagination from "component/Pagination";
import { useColorModeValue } from "@chakra-ui/system";

export default function Home() {
  return (
    <Box
      bgGradient={useColorModeValue(
        "radial(orange.600 1px, transparent 1px)",
        "radial(orange.300 1px, transparent 1px)"
      )}
      backgroundSize="20px 20px"
      height="100%"
    >
      <Pagination />
      <AnimeLists />
    </Box>
  );
}
