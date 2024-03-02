import AdvertBar from "@/components/AdvertBar";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import AdvertContent from "./AdvertContent";
import AccentBar from "@/components/AccentBar";

const HomePage = () => {
  return (
    <>
      <AdvertBar>
        <AdvertContent />
      </AdvertBar>
      <AccentBar />
      <NavBar />
      <Box mt={20}>...</Box>
      <Footer />
    </>
  );
};

export default HomePage;
