import { InputHTMLAttributes } from 'react'

export interface WrapperStylesProps  {
  fullWidth?: boolean;
}

export interface TextInputStylesProps {
  fullWidth?: boolean;
  error?: boolean;
}

export interface InputUncontrolledProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'disabled' | 'error' | 'size'
> 
   {
    errorMessage?: string;
    fullWidth?: boolean;
  }
