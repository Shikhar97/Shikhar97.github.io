import clsx from "clsx";
import styles from "./Button.module.css";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {}

const Button: React.FC<Props> = ({ children, className, ...delegated }) => {
  return (
    <button className={clsx(styles.button, className)} {...delegated}>
      {children}
    </button>
  );
};

export default Button;
