import AnimeLists from "../component/AnimeLists";
import { Box } from "@chakra-ui/layout";
import Navbar from "../component/Navbar";
import { useState } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  return (
    <Box>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <AnimeLists searchText={searchText} />
    </Box>
  );
}
