import AnimeLists from "component/AnimeLists";
import { Box } from "@chakra-ui/layout";
import Navbar from "component/Navbar";
import Pagination from "component/Pagination";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Pagination />
      <AnimeLists />
    </Box>
  );
}
