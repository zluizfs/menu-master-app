import { ButtonHTMLAttributes } from 'react'

export interface ButtonComponentStyleVariants {
  $fullWidth?: boolean;
  $variants?: 'outlined'
  $color?: 'white'
  $size?: 'small' | 'medium' | 'large'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonComponentStyleVariants {
  href?: string;
}
