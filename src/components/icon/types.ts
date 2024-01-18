import { icons } from 'lucide-react'
import { DefaultTheme } from 'styled-components'

export interface IconProps {
  name: keyof typeof icons;
  color?: keyof DefaultTheme['colors'];
  size?: string | number;
}
