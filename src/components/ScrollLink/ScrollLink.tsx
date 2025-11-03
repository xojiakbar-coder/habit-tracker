import React from 'react';
import { Button } from '../Button';
import * as Types from '../Button/internal/types';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
  offset?: number;
  onClose?: () => void;
  buttonProps?: Types.IBase.IProps;
}

const ScrollLink = ({ to, offset = 80, children, onClose, buttonProps, ...rest }: IProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.getElementById(to);

    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'instant' });

      onClose?.();
    }
  };

  return (
    <Button onClick={handleClick} {...buttonProps} {...rest}>
      {children}
    </Button>
  );
};

export default ScrollLink;
