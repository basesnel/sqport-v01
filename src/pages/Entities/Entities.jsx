import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  useEffect(() => {
    const getVersions = () => {
      return fetch("/jsons/windows/versions.json").then((response) =>
        response.json()
      );
    };

    const getPCReleases = () => {
      return fetch("/jsons/windows/pcreleases.json").then((response) =>
        response.json()
      );
    };

    const getSVReleases = () => {
      return fetch("/jsons/windows/svreleases.json").then((response) =>
        response.json()
      );
    };

    try {
      getVersions().then((value) => {
        console.log(value);
        getPCReleases().then((value) => console.log(value));
        getSVReleases().then((value) => console.log(value));
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
