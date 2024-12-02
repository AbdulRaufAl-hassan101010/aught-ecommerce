import React from "react";

type InputProps = {
  label?: string;
  className?: string;
  containerClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  className,
  containerClassName,
  ...rest
}: InputProps) => {
  return (
    <div className={`${containerClassName}`}>
      {label && <label className="block">{label}</label>}
      <input
        {...rest}
        className={`w-full border p-2 rounded-md focus:outline-blue-400 ${className}`}
      />
    </div>
  );
};

export default Input;
