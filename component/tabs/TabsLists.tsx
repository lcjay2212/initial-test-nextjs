import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import CharacterInfo from "./CharacterInfo";
import CharacterLists from "./CharacterLists";
import StaffLists from "./StaffLists";

const selected = { color: "white", bg: "blue.500" };
const TabsLists = ({ data, loading }) => {
  return (
    <Tabs variant="unstyled" px={12} pb={12} color="white" mt={12}>
      {loading ? (
        <></>
      ) : (
        <TabList p={2} color="black" bg="white" boxShadow="dark-lg">
          <Tab _selected={selected}>
            <b>Staff</b>
          </Tab>
          <Tab _selected={selected}>
            <b>Character</b>
          </Tab>
          <Tab _selected={selected}>
            <b>Info</b>
          </Tab>
        </TabList>
      )}
      {loading ? (
        <></>
      ) : (
        <TabPanels
          bg="white"
          boxShadow="dark-lg"
          bgGradient={useColorModeValue(
            "radial(orange.400 1px, transparent 1px)",
            "radial(orange.300 1px, transparent 1px)"
          )}
          backgroundSize="20px 20px"
          h="100%"
        >
          <TabPanel>
            <StaffLists data={data?.staff?.nodes} loading={loading} />
          </TabPanel>
          <TabPanel>
            <CharacterLists data={data?.characters?.nodes} />
          </TabPanel>
          <TabPanel>
            <CharacterInfo data={data?.characters?.nodes} />
          </TabPanel>
        </TabPanels>
      )}
    </Tabs>
  );
};

export default TabsLists;
