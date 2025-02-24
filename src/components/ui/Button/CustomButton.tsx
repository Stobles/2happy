"use client";
import theme from "@/styles/appTheme";
import {
  Button,
  ComponentsOverrides,
  ComponentsVariants,
  styled,
  SxProps,
  Theme,
  useThemeProps,
} from "@mui/material";
import React, { memo } from "react";

// Определяем типы кнопок
type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "large" | "normal" | "medium" | "small" | "extraSmall";

type TButtonProps = {
  type?: "button" | "reset" | "submit";
  children: React.ReactNode;
  variant: ButtonVariant;
  sx?: SxProps<Theme>;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onlyIcon?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  isCircular?: boolean;
  fullWidth?: boolean;
};

declare module "@mui/material/styles" {
  interface ComponentNameToClassKey {
    CustomButton: "root";
  }

  interface ComponentsPropsList {
    CustomButton: Partial<TButtonProps>;
  }

  interface Components {
    CustomButton?: {
      defaultProps?: ComponentsPropsList["CustomButton"];
      styleOverrides?: ComponentsOverrides<Theme>["CustomButton"];
      variants?: ComponentsVariants["CustomButton"];
    };
  }
}

const CustomButtonRoot = styled(Button, {
  name: "CustomButton",
  slot: "root",
})<{ ownerState: TButtonProps }>(({ ownerState }) => ({
  display: "flex",
  width: "100%",
  minWidth: "auto",
  maxWidth: "max-content",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  textTransform: "uppercase",
  textWrap: "nowrap",
  gap: "8px",
  borderRadius: "2px",
  transition: "color .3s ease, background .3s ease",
  "& .MuiSvgIcon-root": {
    width: "24px",
    height: "24px",
  },
  "& .MuiButton-startIcon, & .MuiButton-endIcon": {
    margin: 0,
  },
  "&:disabled": {
    color: theme.palette.button.primary.text?.disabled,
    backgroundColor: theme.palette.button.primary.bg?.disabled,
    border: 0,
  },
  ...(ownerState.size === "large" && {
    ...theme.typography.button.large,
    padding: ownerState.onlyIcon ? "20px" : "20px 32px",
  }),
  ...(ownerState.size === "normal" && {
    ...theme.typography.button.normal,
    padding: ownerState.onlyIcon ? "16px" : "16px 32px",
  }),
  ...(ownerState.size === "medium" && {
    ...theme.typography.button.medium,
    padding: ownerState.onlyIcon ? "12px" : "14px 32px",
  }),
  ...(ownerState.size === "small" && {
    ...theme.typography.button.small,
    padding: ownerState.onlyIcon ? "8px" : "12px 24px",
    gap: "6px",
  }),
  ...(ownerState.size === "extraSmall" && {
    ...theme.typography.button.extraSmall,
    padding: ownerState.onlyIcon ? "8px" : "8px 24px",
    gap: "6px",
    "& .MuiSvgIcon-root": {
      width: "16px",
      height: "16px",
    },
  }),

  // PRIMARY //

  ...(ownerState.variant === "primary" && {
    color: theme.palette.button.secondary.text?.default,
    border: `1px solid ${theme.palette.stroke.focused}`,
    "&:hover": {
      backgroundColor: theme.palette.button.primary.bg?.hover,
    },
    "&:focus": {
      backgroundColor: theme.palette.button.primary.bg?.focused,
      border: `2px solid ${theme.palette.stroke.focused}`,
    },
    "&:active": {
      background: "none",
      backgroundColor: theme.palette.button.primary.bg?.active,
    },
  }),

  // SECONDARY //

  ...(ownerState.variant === "secondary" && {
    color: theme.palette.button.secondary.text?.default,
    backgroundColor: theme.palette.button.secondary.bg?.default,
    border: `1px solid ${theme.palette.stroke.focused}`,
    "&:hover": {
      color: theme.palette.button.secondary.text?.hover,
      background: theme.palette.button.radialGradient,
      backgroundColor: theme.palette.button.secondary.bg?.hover,
    },
    "&:focus": {
      color: theme.palette.button.secondary.text?.focused,
      backgroundColor: theme.palette.button.secondary.bg?.focused,
      border: `2px solid ${theme.palette.stroke.focused}`,
    },
    "&:active": {
      background: "none",
      backgroundColor: theme.palette.button.secondary.bg?.active,
      border: `1px solid ${theme.palette.stroke.focused}`,
    },
  }),

  // TERTIARY //

  ...(ownerState.variant === "tertiary" && {
    color: theme.palette.button.tertiary.text?.default,
    backgroundColor: theme.palette.button.tertiary.bg?.default,
    "&:hover": {
      color: theme.palette.button.tertiary.text?.hover,
      background: theme.palette.button.radialGradient,
      backgroundColor: theme.palette.button.tertiary.bg?.hover,
    },
    "&:focus": {
      color: theme.palette.button.tertiary.text?.focused,
      backgroundColor: theme.palette.button.tertiary.bg?.focused,
      border: `2px solid ${theme.palette.stroke.focused}`,
    },
    "&:active": {
      background: "none",
      backgroundColor: theme.palette.button.tertiary.bg?.active,
      color: theme.palette.button.tertiary.text?.active,
    },
  }),
}));

const CustomButton = React.forwardRef<HTMLButtonElement, TButtonProps>(
  function CustomBtn(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: "CustomButton" });
    const {
      type = "button",
      children,
      variant = "primary",
      size = "normal",
      disabled,
      leftIcon,
      rightIcon,
      onlyIcon,
      sx,
      onClick,
      ...other
    } = props;

    const ownerState = { ...props, variant, size };

    return (
      <CustomButtonRoot
        type={type}
        sx={sx}
        onClick={onClick}
        ref={ref}
        ownerState={ownerState}
        {...other}
        disabled={disabled}
        startIcon={leftIcon}
        endIcon={rightIcon}
        disableRipple
        disableTouchRipple
      >
        {!onlyIcon && children}
      </CustomButtonRoot>
    );
  }
);

export default memo(CustomButton);
