import AdvertBar from "@/components/AdvertBar";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import AdvertContent from "./AdvertContent";

const HomePage = () => {
  return (
    <>
      <AdvertBar>
        <AdvertContent />
      </AdvertBar>
      <NavBar />
      <Box mt={20}>...</Box>
      <Footer />
    </>
  );
};

export default HomePage;
