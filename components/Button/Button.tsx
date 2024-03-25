import { FC } from "react";
import IButtonProps from "./Button.props";
import ArrowIcon from "./arrow_btn.svg";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button: FC<IButtonProps> = ({
  children,
  appearance,
  className,
  arrow = "none",
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
            [styles.right]: arrow === "right",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
