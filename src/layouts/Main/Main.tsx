import type { MenuItem } from 'components/Sidebar'

import { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import tw from 'twin.macro'

import { mainRoutes } from 'Routes'
import { FlexCol, FlexRow } from 'components/Common'
import { Navbar } from 'components/Navbar'
import { Sidebar } from 'components/Sidebar'
import { useSidebarMenuList } from 'hooks/useSidebarMenuList'

type MainLayoutProps = {
  fullSidebar: boolean
}

const Container = tw(FlexRow)`relative h-screen w-full text-[#9ca3af] bg-[#111827]`
const Content = tw(FlexCol)`w-full overflow-auto bg-[#1F2937]`
const ContentContainer = tw(FlexRow)`relative overflow-x-auto`

export const MainLayout: React.FC = () => {
  // const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const [fullSidebar, setFullSidebar] = useState(true)
  const [itemSelected, setItemSelected] = useState('')
  const [menuList, setMenuList] = useSidebarMenuList()

  const { home } = mainRoutes.children

  useEffect(() => {
    const pathName = location.pathname
    const key = pathName.split('/')[1]
    // const currentMenu = menuList.find((menu) => menu.to.split('/')[1] === key)

    setItemSelected(key)
    // setBreadcrumbs([
    //   {
    //     to: pathName,
    //     label: currentMenu?.label || t('hello'),
    //   },
    // ])
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

  const handleClickItem = (key: string, item: MenuItem) => {
    setItemSelected(key)
    // setBreadcrumbs([{ to: item.to, label: item.label }])
    // navigate(item.to)
  }

  return (
    <Container>
      <Sidebar
        menuList={menuList}
        setMenuList={setMenuList}
        itemSelected={itemSelected}
        handleToggleSidebar={handleToggleSidebar}
      />

      <Content>
        <Navbar />

        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Content>
    </Container>
  )
}
