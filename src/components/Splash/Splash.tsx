"use client";
import { useTheme } from "@/context/ThemeContext";
import styles from "./Splash.module.css";
import Image from "next/image";

export interface IProps {
  delegated?: any;
}

const Splash: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  ...delegated
}) => {
  const { logoUrl } = useTheme();
  return (
    <div className={styles.splash} {...delegated}>
      <Image
        className={styles.logo}
        width={172}
        height={160}
        src={logoUrl}
        alt="Logo"
      />
    </div>
  );
};

export default Splash;
