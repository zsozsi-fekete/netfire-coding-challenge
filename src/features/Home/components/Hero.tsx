import video from "@/assets/birds-flying.mp4";
import HeroBadge from "@/components/HeroBadge";
import MediaPlayer from "@/components/MediaPlayer";
import useVideo from "@/hooks/useVideo";
import { Box, Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  const videoProps = useVideo(video);

  const properties = {
    badgeText: "LOREM IPSUM",

    text1: "Lorem Ipsum Dolor Sit amet",
    text2: "Donec cursus ligula diam, nec congue",
    text3: "augue ultrices nec.",
  };

  return (
    <Flex
      align="center"
      justify="center"
      pos="relative"
      h="calc(100vh - 172px)"
    >
      <Box
        as={"video"}
        ref={videoProps.videoRef}
        pos="absolute"
        w="100%"
        h="100%"
        objectFit="cover"
      />
      <Flex zIndex={1} align="center" justify="space-around" w="100%">
        <Flex direction="column" align="flex-start" gap="38px" w="70%">
          <HeroBadge text={properties.badgeText} />
          <Flex direction="column">
            <Text
              layerStyle="accent"
              bgClip="text"
              fontSize="45px"
              fontFamily="Exo"
              fontWeight="semibold"
            >
              {properties.text1}
            </Text>
            <Text
              fontSize="45px"
              fontFamily="Exo"
              fontWeight="semibold"
              color="brand.hero-text"
            >
              {properties.text2}
            </Text>
            <Text
              fontSize="45px"
              fontFamily="Exo"
              fontWeight="semibold"
              color="brand.hero-text"
            >
              {properties.text3}
            </Text>
          </Flex>
          <MediaPlayer videoProps={videoProps} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;