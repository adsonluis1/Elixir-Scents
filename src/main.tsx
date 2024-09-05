import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyled } from './Global.styled.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextProviber } from './context/Login.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProviber>
      <BrowserRouter>
        <GlobalStyled />
        <App />
      </BrowserRouter>
    </ContextProviber>
  </StrictMode>,
)
