import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import styles from "./Root.module.css";

export function Root() {
  const navigation = useNavigation();
  return (
    <div
      className={`${styles.flexContainer} ${
        navigation.state === "loading" ? styles.loading : ""
      }`}
    >
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
