import { FC } from "react";
import ILayoutProps from "./Layout.props";
import cn from "classnames";
import styles from "./Layout.module.css";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
