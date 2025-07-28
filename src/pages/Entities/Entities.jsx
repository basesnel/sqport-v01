import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  useEffect(() => {
    const getVersionsPC = () => {
      return fetch("/jsons/windows/majorpc.json").then((response) =>
        response.json()
      );
    };

    const getReleasesPC = () => {
      return fetch("/jsons/windows/pc.json").then((response) =>
        response.json()
      );
    };

    try {
      getVersionsPC().then((value) => {
        console.log(value);
        getReleasesPC().then((value) => console.log(value));
      });
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
