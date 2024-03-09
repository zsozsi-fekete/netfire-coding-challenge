import AdvertBar from "@/components/AdvertBar";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import AdvertContent from "./AdvertContent";
import AccentBar from "@/components/AccentBar";
import Hero from "./Hero";
import Example from "./Example";

const HomePage = () => {
  return (
    <>
      <Box position="fixed" top={0} w="100%" zIndex={100}>
        <AdvertBar>
          <AdvertContent />
        </AdvertBar>
        <AccentBar />
        <NavBar />
      </Box>
      <Box mt="172px">
        <Hero />
        <Example />
        <AccentBar />
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
