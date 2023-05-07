import { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import tw from 'twin.macro'

import { Row } from 'components/Layout'
import { authRoute } from 'routes'

const Container = tw(Row)`h-screen w-full bg-slate-300`

export const AuthenticationLayout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    handleRedirectToLogin()
  }, [])

  const handleRedirectToLogin = () => {
    const { login } = authRoute

    if (location.pathname === '/auth') {
      navigate(login)
    }
  }

  return (
    <Container>
      <Outlet />
    </Container>
  )
}
