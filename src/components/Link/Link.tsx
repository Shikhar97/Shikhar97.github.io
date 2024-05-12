import styles from "./Link.module.css";
import NextLink from "next/link";
export interface IProps {
  delegated?: any;
  href: string;
  target: string;
  rel: string;
}

const Link: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  ...delegated
}) => {
  return (
    <NextLink className={styles.link} {...delegated}>
      {children}
    </NextLink>
  );
};

export default Link;
