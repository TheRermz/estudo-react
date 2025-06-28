import styles from './Heading.module.css';

type HeadingProps = {
  children: string;
};

export const Heading = (props: HeadingProps) => {
  return (
    <>
      <h1 className={styles.heading}>{props.children}</h1>
    </>
  );
};
