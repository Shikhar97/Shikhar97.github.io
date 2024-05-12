import clsx from "clsx";
import styles from "./SectionTitle.module.css";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  side: "left" | "right";
  delegated?: any;
}

const SectionTitle = ({ side, children, className, ...delegated }: Props) => {
  return (
    <div
      className={clsx(styles.sectionTitle, styles[side], className)}
      {...delegated}
    >
      {children}
      <hr className={styles.line} />
    </div>
  );
};

export const ConstrainedTitle = ({ className, ...delegated }: Props) => {
  return (
    <SectionTitle
      className={clsx(styles.constrained, className)}
      {...delegated}
    />
  );
};

export const DesktopTitle = ({ className, ...delegated }: Props) => {
  return (
    <SectionTitle className={clsx(styles.desktop, className)} {...delegated} />
  );
};

export const MobileTitle = ({ className, ...delegated }: Props) => {
  return (
    <SectionTitle className={clsx(styles.mobile, className)} {...delegated} />
  );
};

export default SectionTitle;
