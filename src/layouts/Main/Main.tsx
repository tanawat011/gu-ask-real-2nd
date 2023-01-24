import type { OutletContextProps } from 'types'

import type { UIEvent } from 'react'
import { useState, useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { Navbar } from 'components/Navbar'
import { Sidebar } from 'components/Sidebar'
import { useRouteList } from 'hooks/useRouteList'
import { useSidebarMenuList } from 'hooks/useSidebarMenuList'
import { sidebarAtom } from 'recoils/atoms/sidebar'

import { MainContainer, MainContent, MainContentContainer } from './Main.style'

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
  const { main } = useRouteList()

  const { home } = main.children

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
    const { scrollTop, scrollLeft, scrollHeight, scrollWidth } =
      event.currentTarget

    setScroll({
      top: scrollTop,
      left: scrollLeft,
      height: scrollHeight,
      width: scrollWidth,
    })
  }

  return (
    <MainContainer fullSidebar={fullSidebar}>
      <Sidebar
        menuList={menuList}
        setMenuList={setMenuList}
        fullSidebar={fullSidebar}
      />

      <MainContent>
        <Navbar handleToggleSidebar={handleToggleSidebar} />

        <MainContentContainer
          data-testid='scrollable-content'
          id='main-layout'
          onScroll={handleScroll}
        >
          <Outlet context={{ scroll } as OutletContextProps} />
          <div className='min-h-[64px]'>Container Footer Template</div>
        </MainContentContainer>
      </MainContent>
    </MainContainer>
  )
}
