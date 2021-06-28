import AnimeLists from "component/AnimeLists";
import { Box } from "@chakra-ui/layout";
import Navbar from "component/Navbar";
import React, { useState } from "react";
import Pagination from "component/Pagination";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  return (
    <Box>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Pagination />
      <AnimeLists searchText={searchText} />
    </Box>
  );
}
