import React from "react";
import "./gradient-button.scss";

type ButtonType = "button" | "anchor";

interface GradientButtonComponentProps
  extends React.ComponentPropsWithoutRef<"button"> {}

interface GradientAnchorComponentProps
  extends React.ComponentPropsWithoutRef<"a"> {}

type AnchorAndButtonAttributes = React.ComponentPropsWithoutRef<"a"> &
  React.ComponentPropsWithoutRef<"button">;

interface GradientButtonProps extends AnchorAndButtonAttributes {
  buttonType: ButtonType;
}

/**
 * Create button element with gradient
 * @param {
 *   className,
 *   children,
 *   ...rest
 * }
 * @returns \<button\> JSX element with gradient style
 */
let GradientButtonComponent: React.FC<GradientButtonComponentProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={`gradient-button${className ? " " + className : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

/**
 * Create button element with gradient
 * @param {
 *   className,
 *   children,
 *   ...rest
 * }
 * @returns \<a\> element with gradient style
 */
let GradientAnchorComponent: React.FC<GradientAnchorComponentProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <a
      className={`gradient-button${className ? " " + className : ""}`}
      {...rest}
    >
      {children}
    </a>
  );
};


/**
 * Buttons type
 * @param {
 *   buttonType,
 *   children,
 *   ...rest
 * } 
 * @returns \<button\> or \<a\> JSX elements
 */
let GradientButton: React.FC<GradientButtonProps> = ({
  buttonType,
  children,
  ...rest
}) => {
  if (buttonType == "anchor") {
    return (
      <GradientAnchorComponent {...rest}>{children}</GradientAnchorComponent>
    );
  }

  return (
    <GradientButtonComponent {...rest}>{children}</GradientButtonComponent>
  );
};

export default GradientButton;
