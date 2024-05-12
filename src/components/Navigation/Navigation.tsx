import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <Link className={styles.navLink} href="#about">
        <p className={styles.navText}>About</p>
        About
      </Link>
      <Link className={styles.navLink} href="#projects">
        <p className={styles.navText}>Projects</p>
        Projects
      </Link>
      <Link className={styles.navLink} href="#contact">
        <p className={styles.navText}>Contact</p>
        Contact
      </Link>
      <a className={styles.downloadLink} href="/resume" target="_blank">
          Resumé
        <FaDownload />
      </a>
    </>
  );
};

export default Navigation;
