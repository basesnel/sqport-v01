import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRequests } from "../../utils/useRequests";
import { Versions } from "../../components/Versions/Versions";

const Main = () => {
  useRequests();

  return (
    <>
      <Header />
      <main>
        <Versions />
      </main>
      <Footer />
    </>
  );
};

export default Main;
