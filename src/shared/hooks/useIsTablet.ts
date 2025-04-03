import { GlobalMedia } from "@/shared/styles/globalStyles";
import { useMediaQuery } from "@mui/material";

const useIsTablet = () => useMediaQuery(GlobalMedia.tablet);

export default useIsTablet;
