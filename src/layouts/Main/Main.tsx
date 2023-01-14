import type { SidebarState } from 'recoils/atoms'

import { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import tw, { styled } from 'twin.macro'

import { FlexCol, FlexRow } from 'components/Common'
import { Navbar } from 'components/Navbar'
import { Sidebar } from 'components/Sidebar'
import { useRouteList } from 'hooks/useRouteList'
import { useSidebarMenuList } from 'hooks/useSidebarMenuList'
import { sidebarAtom } from 'recoils/atoms/sidebar'

const Container = styled(FlexRow)(({ fullSidebar }: SidebarState) => [
  tw`relative w-full bg-eerie-black text-cadet-grey`,
  fullSidebar ? tw`h-screen` : tw`min-h-screen`,
])
const Content = tw(FlexCol)`w-full bg-yankees-blue`
const ContentContainer = tw(FlexRow)`relative h-full overflow-x-auto`

export const MainLayout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [{ fullSidebar }, setFullSidebar] = useRecoilState(sidebarAtom)

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
    setFullSidebar({ fullSidebar: !fullSidebar })
  }

  return (
    <Container fullSidebar={fullSidebar}>
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
