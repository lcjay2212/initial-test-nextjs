import Card from "./Card";
import { Grid } from "@chakra-ui/react";

const AnimeLists = () => {
  

  return (
    <Grid templateColumns={{
      base: 'repeat(1, 1fr)',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)',
      xl: 'repeat(5, 1fr)'
    }} gap={6} p="4" w="100%">
      <Card />
    </Grid>
  );
};

export default AnimeLists;
