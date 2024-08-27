import React from "react";
import MuiButton from "@mui/material/Button";
import styles from "./Button.module.scss";

export const Button = (props: {
  label: string;
  variant: string;
  color: string;
  onClick: any;
  disabled?: boolean;
}) => {
  const {
    label,
    variant = "light",
    color = "success",
    onClick,
    disabled = false,
  } = props;

  return (
    <div>
      <MuiButton className={styles.button}>222{label}</MuiButton>
      <MuiButton className={styles.button} disabled>
        disabled {label}
      </MuiButton>
    </div>
  );
};
