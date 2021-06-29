import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
import CharacterInfo from "./CharacterInfo";

const TabsLists = ({ data, loading }) => {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Character</Tab>
        <Tab>Staff</Tab>
        <Tab>Info</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <CharacterInfo data={data} loading={loading} />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsLists;
