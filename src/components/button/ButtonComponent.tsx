import type { ComponentProps } from "react";

type TVariant =
  | "primary"
  | "secondary"
  | "search"
  | "secondary-active"
  | "pagination"
  | undefined;

type IButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

function ButtonComponent({
  children,
  variant,
  className = "",
  ...rest
}: IButton) {
  return (
    <button
      type="button"
      {...rest}
      className={`${getVariantClasses(variant)} ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;

function getVariantClasses(variant: TVariant) {
  if (variant === "primary") {
    return "inline-flex items-center justify-center gap-2 px-5 py-2.5  rounded-lg text-sm font-medium cursor-pointer transition-colors hover:opacity-80  bg-primary text-white border border-border";
  } else if (variant === "search") {
    return "rounded-r-lg px-5 py-2.5 bg-primary text-sm font-medium text-white transition-colors hover:bg-primary-hover";
  } else if (variant === "secondary") {
    return "bg-muted font-light text-xs text-white py-1.5 px-3 rounded uppercase";
  } else if (variant === "secondary-active") {
    return "bg-secondary font-light text-xs text-white py-1.5 px-3 rounded uppercase";
  }
}
