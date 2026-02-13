import { forwardRef } from "react";

const buttonVariants = {
  default: "bg-primary text-white hover:bg-primary/90 active:bg-primary/80",
  destructive: "bg-danger text-white hover:bg-danger/90 active:bg-danger/80",
  outline:
    "border-2 border-primary text-dark-gray bg-transparent hover:bg-primary/10 active:bg-primary/20",
  secondary:
    "bg-gray-100 text-gray-50 hover:bg-gray-100/80 active:bg-gray-100/70",
  ghost: "bg-background h-6! w-6! p-0! flex items-center justify-center",
  link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
};

const buttonSizes = {
  sm: "h-8 px-3 text-sm",
  default: "py-4 px-5",
  lg: "h-12 px-6 text-lg",
  icon: "h-10 w-10 p-0",
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Button = forwardRef(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      children,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center cursor-pointer gap-2 rounded-[10px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
