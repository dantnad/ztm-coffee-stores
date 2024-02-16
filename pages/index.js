import Banner from "../components/banner";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("Banner button clicked!");
  };

  return (
    <div className={styles.main}>
      <Banner
        buttonText='View stores nearby'
        habdleOnClick={handleOnBannerBtnClick}
      />
    </div>
  );
}
