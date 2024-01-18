import { InputHTMLAttributes } from 'react'
import { Mask } from 'react-text-mask'

export interface WrapperStylesProps {
  $fullWidth?: boolean;
}

export interface TextInputStylesProps {
  $fullWidth?: boolean;
  $error?: boolean;
}

export interface InputUncontrolledProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'disabled' | 'error' | 'size'
  > {
  errorMessage?: string;
  $fullWidth?: boolean;
  $mask?: Mask | ((value: string) => Mask);
}
