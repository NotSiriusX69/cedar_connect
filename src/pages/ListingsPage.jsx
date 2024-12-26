import NavBar from "../components/ui/NavBar";
import FiltersBox from "../components/ui/FiltersBox";
import ListingsContainer from "../components/layout/containers/ListingsContainer";
import FooterSection from "../components/sections/FooterSection";

const ListingsPage = () => {
  return (
    <div className="">
      <NavBar />
      <ListingsContainer />
      <FooterSection />
    </div>
  );
};

export default ListingsPage;
