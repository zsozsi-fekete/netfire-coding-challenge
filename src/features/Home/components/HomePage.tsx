import AdvertBar from "@/components/AdvertBar";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import AdvertContent from "./AdvertContent";
import AccentBar from "@/components/AccentBar";
import Hero from "./Hero";

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
      <Box mt="172px" h="3000px" bg="yellow.50">
        <Hero />
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
