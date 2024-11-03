import { Box } from "@mui/material";
import Navbar from "./Navbar";
import About from "./About";
import OurFocus from "./OurFocus";
import OurStory from "./OurStory";
import PeaceOfArts from "./PeaceOfArts";
import SocietyProducts from "./SocietyProducts";
import HfsSociety from "./HfsSociety";
import Subscribtions from "./Subscribtions";


function Home() {
  return (
    <Box>
      <Navbar />
      <About />
      <OurFocus />
      <OurStory />
      <PeaceOfArts />
      <SocietyProducts />
      <HfsSociety />
      <Subscribtions/>
    </Box>
  );
}

export default Home;
