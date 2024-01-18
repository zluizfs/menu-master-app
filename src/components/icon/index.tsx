'use client'

import { icons } from 'lucide-react'
import { IconProps } from './types'
import { useTheme } from 'styled-components'

export function Icon({ name, color = 'base_100', size = '16' }: IconProps) {
	const theme = useTheme()

	const LucideIcon = icons[name]

	return (
		<LucideIcon color={theme.colors[color]} size={size} strokeWidth="2.5" />
	)
}
