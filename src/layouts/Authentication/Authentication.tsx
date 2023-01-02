import { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import tw from 'twin.macro'

import { allRoutes } from 'Routes'
import { FlexRow } from 'components/Common'

const Container = tw(FlexRow)`h-screen w-full bg-slate-300`

export const AuthenticationLayout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    handleRedirectToLogin()
  }, [])

  const handleRedirectToLogin = () => {
    const { auth } = allRoutes
    const { login } = auth.children

    if (location.pathname === auth.fullPath) {
      navigate(login.fullPath)
    }
  }

  return (
    <Container>
      <Outlet />
    </Container>
  )
}
