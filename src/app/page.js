import RootLayout from "./layout";
import Navbar from "@/components/Navbar";

import styles from "./page.module.scss";

import "./globals.scss";

function HomePage() {
  return (
    <RootLayout>
      <Navbar />
      <div className={styles.title}>
        <h1>Home Page</h1>
      </div>
    </RootLayout>
  );
}

export default HomePage;
