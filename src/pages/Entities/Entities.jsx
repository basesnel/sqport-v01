import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

// import styles from "./styles.module.css";

const systems =
  '{"entity": "system", "developer": "Microsoft", "name": "Windows 95", "logo": "W-logo", "family": "Windows 9x", "version": "4.00.950", "release": "August 24, 1995", "packageManager": "Program manager", "platforms": "IA-32", "kernel": "Monolithic", "defaultInterface" : "Desktop, taskbar, Start menu and Windows Explorer file manager", "license": "Proprietary commercial software", "site": "Windows 95 (archived at Wayback Machine)"}';

const Main = () => {
  useEffect(() => {
    try {
      console.log(JSON.parse(systems));
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
