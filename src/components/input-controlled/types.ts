import { Control, ControllerProps, FieldValues, Path } from 'react-hook-form'
import { InputUncontrolledProps } from '../input-uncontrolled/types'

export type InputControlledProps<TControl extends FieldValues> = Omit<
  ControllerProps<TControl>,
  'render' | 'control' | 'name'
> &
  Omit<InputUncontrolledProps, 'value'> & {
    control?: Control<TControl>;
    name: Path<TControl>;
  };
