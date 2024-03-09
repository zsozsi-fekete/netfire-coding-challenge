import {
  getVideoCurrentTime,
  getVideoDuration,
  isVideoPlaying,
} from "@/utils/video";
import { useEffect, useRef, useState } from "react";

export interface UseVideoProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  onSeek: (value: number) => void;
  onToggle: () => void;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

const useVideo = (src: string): UseVideoProps => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, forceRender] = useState(0);

  const isPlaying = isVideoPlaying(videoRef.current);
  const currentTime = getVideoCurrentTime(videoRef.current);
  const duration = getVideoDuration(videoRef.current);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.src = src;
    videoRef.current.autoplay = true;
    videoRef.current.muted = true;
    videoRef.current.ontimeupdate = (e) => {
      forceRender((e.target as HTMLVideoElement).currentTime);
    };
  }, [src]);

  const onSeek = (value: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = value;
    videoRef.current.play();
  };

  const onToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      return;
    }
    videoRef.current.play();
  };

  return {
    videoRef,
    onSeek,
    onToggle,
    isPlaying,
    currentTime,
    duration,
  };
};

export default useVideo;
