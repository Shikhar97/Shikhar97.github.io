import clsx from "clsx";
import styles from "./MaxWidthWrapper.module.css";

interface Props extends React.ComponentProps<"div"> {}

const MaxWidthWrapper = ({ children, className, ...delegated }: Props) => {
  return (
    <div className={clsx(styles.maxWidthWrapper, className)} {...delegated}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
