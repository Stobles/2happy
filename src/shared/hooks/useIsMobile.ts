import { GlobalMedia } from "@/shared/styles/globalStyles";
import { useMediaQuery } from "@mui/material";

const useIsMobile = () => useMediaQuery(GlobalMedia.mobile);

export default useIsMobile;
