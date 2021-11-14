import { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Home } from './Pages/Home'
import GlobalStyle from './styles/GlobalStyle'
import themes from './styles/theme'

export default function App() {

  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo( () => { 
    return themes[theme] || themes.light
  }, [theme])

  function handleToggleTheme(){
    setTheme( prevState => prevState === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={currentTheme} >
       <GlobalStyle/>
       <Home onToggleTheme={handleToggleTheme}/>
    </ThemeProvider>
   
  )
}