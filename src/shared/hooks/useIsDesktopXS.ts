import { GlobalMedia } from "@/shared/styles/globalStyles";
import { useMediaQuery } from "@mui/material";

const useIsDesktopXS = () => useMediaQuery(GlobalMedia.desktopXS);

export default useIsDesktopXS;
