import pause from "@/assets/pause.svg";
import play from "@/assets/play.svg";
import { UseVideoProps } from "@/hooks/useVideo";
import { getCurrentTimeFormat } from "@/utils/time";
import {
  Flex,
  IconButton,
  Image,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

interface Props {
  videoProps: UseVideoProps;
}

const MediaPlayer = ({ videoProps }: Props) => {
  const { currentTime, duration, isPlaying, onSeek, onToggle } = videoProps;
  const src = isPlaying ? pause : play;
  const label = isPlaying ? "pause" : "play";

  return (
    <Flex
      border="1px"
      borderColor="#FFFFFF33"
      borderRadius="10px"
      bg="#0302024D"
      w="100%"
      align="center"
      gap="30px"
      py="22px"
      px="32px"
    >
      <IconButton
        aria-label={label}
        w="48px"
        h="48px"
        minW="48px"
        border="1px"
        borderColor="brand.play-button-border"
        borderRadius="50%"
        bg="#0302024D"
        icon={<Image src={src} alt={`${label} icon`} />}
        onClick={onToggle}
      />
      <Slider
        aria-label="slider-ex-1"
        value={currentTime}
        onChange={onSeek}
        min={0}
        max={duration}
        h="10px"
      >
        <SliderTrack h="10px" borderRadius="10px" bg="brand.slider-track">
          <SliderFilledTrack bg="brand.slider-track-filled" />
        </SliderTrack>
      </Slider>
      <Text
        minW="50px"
        fontFamily="Exo"
        fontWeight="bold"
        color="brand.video-player-time"
      >
        {getCurrentTimeFormat(currentTime)}
      </Text>
    </Flex>
  );
};

export default MediaPlayer;
