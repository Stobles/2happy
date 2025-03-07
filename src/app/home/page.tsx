import ComplementFashion from "./components/Addition/ComplementFashion";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Categories from "./components/Categories/Categories";
import Fashion from "./components/Fashion/Fashion";
import FinalSale from "./components/FinalSale/FinalSale";
import Instagram from "./components/Instagram/Instagram";
import MainSection from "./components/MainSection/MainSection";
import NewCollection from "./components/NewCollection/NewCollection";
import Notifications from "./components/Notifications/Notifications";

export default function Home() {
  return (
    <>
      <MainSection />
      <NewCollection />
      <Bestsellers />
      <Fashion />
      <ComplementFashion />
      <Categories />
      <FinalSale />
      <Instagram />
      <Notifications />
    </>
  );
}
