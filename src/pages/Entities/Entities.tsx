import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRequests } from "../../utils/useRequests";

const Main = () => {
  useRequests();

  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  );
};

export default Main;
