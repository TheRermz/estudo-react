import type { ComponentProps } from "react";
import styles from "./styles.module.css";

type InputProps = {
  id: string;
  labelText?: string;
} & ComponentProps<"input">;

export const Input = ({ id, type, labelText, ...rest }: InputProps) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} type={type} id={id} {...rest} />
    </>
  );
};
