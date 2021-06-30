import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import CharacterInfo from "./lists/CharacterInfo";
import StaffLists from "./lists/StaffLists";

const TabsLists = ({ data, loading }) => {
  return (
    <Box>
      <Tabs isFitted variant="enclosed" px={12} pb={12}>
        <TabList bg="#6B6ACC" color="white" p={2}>
          <Tab>
            <b>Character</b>
          </Tab>
          <Tab>
            <b>Staff</b>
          </Tab>
          <Tab>
            <b>Info</b>
          </Tab>
        </TabList>

        <TabPanels bg="white" boxShadow="dark-lg">
          <TabPanel>
            <CharacterInfo data={data?.characters?.nodes} loading={loading} />
          </TabPanel>
          <TabPanel>
            <StaffLists data={data?.staff?.nodes} loading={loading} />
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsLists;
