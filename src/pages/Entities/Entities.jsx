import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  useEffect(() => {
    try {
      fetch("/jsons/systems.json")
        .then((response) => response.json())
        .then((value) => console.log(value));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  );
};

export default Main;
