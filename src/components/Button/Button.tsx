import React from "react";
import MuiButton from "@mui/material/Button";
import styles from "./Button.module.scss";
import { ClassNames } from "@emotion/react";

export const VARIANTS = {
  light: "light",
  dark: "dark",
  outline: "outline",
  ghost: "ghost",
  grey: "grey",
};

type TypeButtonProps = {
  label?: string;
  variant?: keyof typeof VARIANTS;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = (props: TypeButtonProps) => {
  const {
    label,
    variant = VARIANTS.light,
    color = "success",
    onClick,
    disabled = false,
  } = props;

  const classNames = ClassNames[styles.button];

  return (
    <MuiButton className={classNames} variant="contained">
      {label}
    </MuiButton>
  );
};
