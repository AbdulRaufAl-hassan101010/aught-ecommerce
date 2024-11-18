import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-blue-500 text-white px-6 py-3 hover:opacity-80 text-sm font-medium rounded-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
