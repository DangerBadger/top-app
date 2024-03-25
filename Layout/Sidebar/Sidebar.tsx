import { FC } from "react";
import ISidebarProps from "./Sidebar.props";
// import cn from "classnames";
// import styles from "./Sidebar.module.css";

const Sidebar: FC<ISidebarProps> = ({ ...otherProps }) => {
  return <div {...otherProps}>Sidebar</div>;
};

export default Sidebar;
