import { ComponentProps } from "react";
import styles from "./Highlight.module.css";

interface Props extends ComponentProps<"strong"> {}

const Highlight = ({ children, ...delegated }: Props) => {
  return (
    <strong className={styles.highlight} {...delegated}>
      {children}
    </strong>
  );
};

export default Highlight;
