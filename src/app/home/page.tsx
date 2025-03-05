import Bestsellers from "./components/Bestsellers/Bestsellers";
import Categories from "./components/Categories/Categories";
import Fashion from "./components/Fashion/Fashion";
import Instagram from "./components/Instagram/Instagram";
import MainSection from "./components/MainSection/MainSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <Bestsellers />
      <Fashion />
      <Instagram />
      <Categories />
    </>
  );
}
