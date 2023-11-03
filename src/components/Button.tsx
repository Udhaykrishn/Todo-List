import { ReactNode } from "react";

type Button = {
  children: ReactNode | string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: Button) => {
  return (
    <button className={className} type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
