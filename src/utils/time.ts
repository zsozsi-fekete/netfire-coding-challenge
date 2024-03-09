export const padWithZero = (num: number) => {
  if (num < 10) {
    return `0${num}`;
  }
  return num.toString();
};

export const getCurrentTimeFormat = (num: number) => {
  const minutes = Math.floor(num / 60);
  const seconds = Math.floor(num % 60);

  const paddedMinutes = padWithZero(minutes);
  const paddedSeconds = padWithZero(seconds);
  return `${paddedMinutes}:${paddedSeconds}`;
};
