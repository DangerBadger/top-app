import { FC } from "react";
import IFooterProps from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";

const Footer: FC<IFooterProps> = ({ className, ...otherProps }) => {
  return (
    <footer {...otherProps} className={cn(className, styles.footer)}>
      <p className={styles.copyright}>
        OwlTop &#169; 2020 - 2021 Все права защищены
      </p>
      <ul className={cn(styles.list)}>
        <li>
          <a className={styles.link} href="*" target="_blank">
            Пользовательское соглашение
          </a>
        </li>
        <li>
          <a className={styles.link} href="*" target="_blank">
            Политика конфиденциальности
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
