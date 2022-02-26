import React, { useState, useEffect } from 'react'
import { render } from '@testing-library/react'

import { AppContext } from "./context";
import { setTheme, getTheme } from "./helpers/theme";

// Экспортируем все
export * from '@testing-library/react'

export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Создаем кастомный рендер
const customRender = (ui, options) =>
  render(ui, { wrapper: ThemeProvider, ...options })

// Экспортируем кастомный рендер как функцию render
export { customRender as render }