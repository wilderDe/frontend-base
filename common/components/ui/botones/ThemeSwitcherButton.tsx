import { IconButton, IconButtonProps, Tooltip } from '@mui/material'
import { useThemeContext } from '../../../../context/ui/ThemeContext'
import { Icono } from '../Icono'

interface ThemeSwitcherButtonProps extends IconButtonProps {}

const ThemeSwitcherButton = ({ ...rest }: ThemeSwitcherButtonProps) => {
  const { themeMode, toggleTheme } = useThemeContext()
  return (
    <Tooltip
      title={
        themeMode === 'light' ? `Cambiar a modo oscuro` : `Cambiar a modo claro`
      }
    >
      <IconButton {...rest} onClick={toggleTheme}>
        {themeMode === 'light' ? (
          <Icono color={'primary'}>light_mode</Icono>
        ) : (
          <Icono color={'primary'}>dark_mode</Icono>
        )}
      </IconButton>
    </Tooltip>
  )
}
export default ThemeSwitcherButton
