import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

interface Props {
  className: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<Props> = ({
  className,
  children,
  onClick,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.btn, className)}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
