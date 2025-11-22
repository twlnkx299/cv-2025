import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CV from './views/userCv/cv.jsx';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `"Cabin", "Doris","sans-serif"`,
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CV/>
      </ThemeProvider>
    </>
  )
}

export default App
