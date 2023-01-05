import { useEffect, useState } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import tw from 'twin.macro'

import { FlexCol, FlexRow } from 'components/Common'
import { Navbar } from 'components/Navbar'
import { Sidebar } from 'components/Sidebar'
import { useRouteList } from 'hooks/useRouteList'
import { useSidebarMenuList } from 'hooks/useSidebarMenuList'

const Container = tw(FlexRow)`relative h-screen w-full text-[#9ca3af] bg-[#111827]`
const Content = tw(FlexCol)`w-full overflow-auto bg-[#1F2937]`
const ContentContainer = tw(FlexRow)`relative overflow-x-auto`

export const MainLayout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [fullSidebar, setFullSidebar] = useState(true)

  const [menuList, setMenuList] = useSidebarMenuList()
  const { mainRoutes } = useRouteList()

  const { home } = mainRoutes.children

  useEffect(() => {
    handleRedirectToHome()
  }, [])

  const handleRedirectToHome = () => {
    const defaultPaths = ['', '/']

    if (defaultPaths.includes(location.pathname)) {
      navigate(home.fullPath)
    }
  }

  const handleToggleSidebar = () => {
    setFullSidebar(!fullSidebar)
  }

  return (
    <Container>
      <Sidebar menuList={menuList} setMenuList={setMenuList} fullSidebar={fullSidebar} />

      <Content>
        <Navbar handleToggleSidebar={handleToggleSidebar} />

        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Content>
    </Container>
  )
}
