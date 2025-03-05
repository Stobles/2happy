import Bestsellers from "./components/Bestsellers/Bestsellers";
import Categories from "./components/Categories/Categories";
import Fashion from "./components/Fashion/Fashion";
import FinalSale from "./components/FinalSale/FinalSale";
import Instagram from "./components/Instagram/Instagram";
import MainSection from "./components/MainSection/MainSection";
import NewCollection from "./components/NewCollection/NewCollection";

export default function Home() {
  return (
    <>
      <MainSection />
      <NewCollection />
      <Bestsellers />
      <Fashion />
      <Instagram />
      <Categories />
      <FinalSale />
    </>
  );
}
