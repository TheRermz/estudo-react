import styles from "./styles.module.css";
import type { ReactNode } from "react";

type GenericHtmlProps = {
  children: ReactNode;
};

export const GenericHtml = ({ children }: GenericHtmlProps) => {
  return <div className={styles.genericHtml}>{children}</div>;
};
