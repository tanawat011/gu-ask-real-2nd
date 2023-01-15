import type { SidebarState } from 'recoils/atoms'
import type { OutletContextProps } from 'types'

import type { UIEvent } from 'react'
import { useState, useEffect } from 'react'

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
const ContentContainer = tw(FlexRow)`relative flex h-full flex-col overflow-x-auto`

export const MainLayout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [scroll, setScroll] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  })

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

  const handleScroll = (event: UIEvent<HTMLElement>) => {
    const { scrollTop, scrollLeft, scrollHeight, scrollWidth } = event.currentTarget

    setScroll({
      top: scrollTop,
      left: scrollLeft,
      height: scrollHeight,
      width: scrollWidth,
    })
  }

  return (
    <Container fullSidebar={fullSidebar}>
      <Sidebar menuList={menuList} setMenuList={setMenuList} fullSidebar={fullSidebar} />

      <Content>
        <Navbar handleToggleSidebar={handleToggleSidebar} />

        <ContentContainer data-testid='scrollable-content' onScroll={handleScroll}>
          <Outlet context={{ scroll } as OutletContextProps} />
          <div>Container Footer Template</div>
        </ContentContainer>
      </Content>
    </Container>
  )
}
