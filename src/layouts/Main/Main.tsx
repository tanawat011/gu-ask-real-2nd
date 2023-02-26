import { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { mainRoute } from 'Routes'
import { Navbar } from 'components/Navbar'
import { Sidebar } from 'components/Sidebar'
import { useGetSidebarMenu } from 'hooks/useGetSidebarMenu'
import { sidebarAtom } from 'recoils/atoms/sidebar'

import { MainContainer, MainContent, MainContentContainer } from './Main.style'

export const MainLayout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [{ fullSidebar }, setFullSidebar] = useRecoilState(sidebarAtom)

  const [menuList, setMenuList] = useGetSidebarMenu()

  const { home } = mainRoute

  useEffect(() => {
    handleRedirectToHome()
  }, [])

  const handleRedirectToHome = () => {
    const defaultPaths = ['', '/']

    if (defaultPaths.includes(location.pathname)) {
      navigate(home.dashboard)
    }
  }

  const handleToggleSidebar = () => {
    setFullSidebar({ fullSidebar: !fullSidebar })
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

        <MainContentContainer data-testid='scrollable-content' id='main-layout'>
          <Outlet />

          <div className='min-h-[64px]'>Container Footer Template</div>
        </MainContentContainer>
      </MainContent>
    </MainContainer>
  )
}
