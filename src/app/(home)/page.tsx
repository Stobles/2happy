import ComplementFashion from "./components/ComplementFashion/ComplementFashion";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Categories from "./components/Categories/Categories";
import Fashion from "./components/Fashion/Fashion";
import FinalSale from "./components/FinalSale/FinalSale";
import Instagram from "./components/Instagram/Instagram";
import Main from "./components/Main/Main";
import NewCollection from "./components/NewCollection/NewCollection";
import Notifications from "./components/Notifications/Notifications";

export const revalidate = 380;

const HomePage = () => {
  return (
    <>
      <Main />
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
};

export default HomePage;
