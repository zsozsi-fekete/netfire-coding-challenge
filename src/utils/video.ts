export const isVideoPlaying = (video?: HTMLVideoElement | null) => {
  if (!video) return false;
  return !!(
    video.currentTime > 0 &&
    !video.paused &&
    !video.ended &&
    video.readyState > 2
  );
};

export const getVideoCurrentTime = (video?: HTMLVideoElement | null) => {
  if (!video) return 0;
  return video.currentTime;
};

export const getVideoDuration = (video?: HTMLVideoElement | null) => {
  if (!video) return 0;
  return video.duration;
};
