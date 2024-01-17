import { ButtonHTMLAttributes } from 'react'

export interface ButtonComponentStyleVariants {
  fullWidth?: boolean;
  variants?: 'outlined'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonComponentStyleVariants {
  href?: string;
}
