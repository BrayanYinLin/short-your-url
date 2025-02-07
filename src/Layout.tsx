// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './modules/home/pages/Home'
import SignIn from './modules/auth/pages/SignIn'
import CallbackGithubPage from './modules/auth/pages/CallbackGithub'
import './index.css'
import { Dashboard } from './modules/dashboard/pages/Dashboard'
import { Links } from 'modules/dashboard/pages/Links'
import CallbackGoogle from 'modules/auth/pages/CallbackGoogle'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/auth/github/callback" element={<CallbackGithubPage />} />
      <Route path="/auth/google/callback" element={<CallbackGoogle />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Links />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
