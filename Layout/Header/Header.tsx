import { FC } from "react";
import IHeaderProps from "./Header.props";
// import cn from "classnames";
// import styles from "./Header.module.css";

const Header: FC<IHeaderProps> = ({ ...otherProps }) => {
  return <div {...otherProps}>Header</div>;
};

export default Header;
