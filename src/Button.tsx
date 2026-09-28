import * as React from "react";

export type ButtonVariant = "primary" | "secondary" | "danger";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  /**
   * Visual style. `primary` (turquoise) is the one main action per screen.
   * `secondary` (outline) is for every other action. `danger` (red) is
   * reserved for the irreversible "Éliminer" action — there is no Annuler,
   * so it never appears alongside a cancel button.
   */
  variant?: ButtonVariant;
}

/**
 * Sticker-style pill button: 56px tall, hard drop shadow that flattens on
 * press. The label is a verb that names the action ("Lancer la partie",
 * "J'ai mémorisé") — never an emoji, and only one `primary` button per
 * screen.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant = "primary", type = "button", ...rest }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        className={`btn btn--${variant}`}
        {...rest}
      />
    );
  },
);
