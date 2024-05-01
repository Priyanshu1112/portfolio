import { useMediaQuery } from "@mui/material";

function useDeviceSize() {
  const isMobile = useMediaQuery("(max-width: 540px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  return { isMobile, isTablet };
}

export default useDeviceSize;
