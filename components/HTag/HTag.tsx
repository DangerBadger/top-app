import { FC } from 'react';
import IHTagProps from './HTag.props';
import styles from './HTag.module.css';

export const HTag: FC<IHTagProps> = ({ tag, children }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>;
    case 'h2':
      return <h2>{children}</h2>;
    case 'h3':
      return <h3>{children}</h3>;
    default:
      return <></>;
  }
};