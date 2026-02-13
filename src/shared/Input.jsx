import { forwardRef } from "react";

const inputVariants = {
  default:
    "border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/40",
  outline:
    "border-primary focus:border-primary focus:ring-2 focus:ring-primary/40",
  ghost:
    "border-transparent bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/40",
  error: "border-danger focus:border-danger focus:ring-2 focus:ring-danger/40",
};

const inputSizes = {
  sm: "h-9 px-3 text-sm",
  default: "h-10 px-3.5 text-sm",
  lg: "h-11 px-4 text-base",
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Input = forwardRef(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      type = "text",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "flex w-full placeholder:text-gray-50 font-medium rounded-[10px] border bg-white text-gray-50 placeholder:text-gray focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200";

    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          baseStyles,
          inputVariants[variant],
          inputSizes[size],
          className
        )}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
