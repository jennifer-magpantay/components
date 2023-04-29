export const resizeHandler = (isMobile, setIsMobile, width = 600) => {
  //const width = 600;
  const vw = window.innerWidth;
  const navigatorUA = Boolean(
    navigator.userAgent.match(
      /\b(Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop)\b/
    )
  );
  if (
    (navigatorUA &&
      window.matchMedia("(orientation: portrait)").matches &&
      vw < width) ||
    vw < width
  ) {
    if (!isMobile) {
      setIsMobile(true);
    }
  } else {
    if (isMobile) {
      setIsMobile(false);
    }
  }
};
