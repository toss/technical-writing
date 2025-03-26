import { ReactNode } from 'react';
import styles from './DoDont.module.css';

export const DoDont = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

DoDont.Do = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${styles.directive} ${styles.doContainer}`}>
      <h2 className={`${styles.directiveTitle} ${styles.doTitle}`}>Do</h2>
      {children}
    </div>
  );
};

DoDont.Dont = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${styles.directive} ${styles.dontContainer}`}>
      <h2 className={`${styles.directiveTitle} ${styles.dontTitle}`}>Don't</h2>
      {children}
    </div>
  );
};
