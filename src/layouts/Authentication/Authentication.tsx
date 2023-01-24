import { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import tw from 'twin.macro'

import { FlexRow } from 'components/Common'
import { useRouteList } from 'hooks/useRouteList'

const Container = tw(FlexRow)`h-screen w-full bg-slate-300`

export const AuthenticationLayout: React.FC = () => {
  const { auth } = useRouteList()

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    handleRedirectToLogin()
  }, [])

  const handleRedirectToLogin = () => {
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
