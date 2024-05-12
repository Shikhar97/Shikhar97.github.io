import * as React from "react";
import styles from "./Title.module.css";
import clsx from "clsx";

interface Props extends React.ComponentProps<"h4"> {}

const Title = ({ className, children }: Props) => {
  return <h4 className={clsx(styles.title, className)}>{children}</h4>;
};

export default Title;
