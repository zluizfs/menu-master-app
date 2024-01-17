'use client'

import { Controller, FieldValues } from 'react-hook-form'

import { InputControlledProps } from './types'
import { InputUncontrolled } from '..'

export function InputControlled<TControl extends FieldValues>({
	name,
	control,
	...rest
}: InputControlledProps<TControl>) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value } }) => (
				<InputUncontrolled
					onChange={onChange}
					value={value}
					{...rest}
				/>
			)}
		/>
	)
}
