import type { MenuItem } from 'components/Sidebar'

import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

import { mainRoutes } from 'Routes'
import { FlexCol, FlexRow } from 'components/Common'
import { Navbar } from 'components/Navbar'
import { Sidebar } from 'components/Sidebar'

type MainLayoutProps = {
  fullSidebar: boolean
}

const Container = tw(FlexRow)`relative h-screen w-full text-[#9ca3af] bg-[#111827]`
const Content = tw(FlexCol)`w-full overflow-auto bg-[#1F2937]`
// const Navbar = tw.nav`flex items-center justify-between px-8 py-8 max-h-[32px]`
const ContentContainer = tw(FlexRow)`relative overflow-x-auto`

export const MainLayout: React.FC = () => {
  // const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const [fullSidebar, setFullSidebar] = useState(true)
  const [itemSelected, setItemSelected] = useState('')
  const [menuList, setMenuList] = useState<MenuItem[]>([
    {
      title: 'APPS',
      children: [
        {
          to: '/',
          label: 'Home',
          icon: <FontAwesomeIcon icon='house' size='lg' />,
        },
        {
          label: 'Todo',
          icon: <FontAwesomeIcon icon='house' size='lg' />,
          children: [
            {
              to: '/todo',
              label: 'Dashboard',
            },
          ],
        },
        {
          to: '/article',
          label: 'Article',
          icon: <FontAwesomeIcon icon='user' size='lg' />,
        },
      ],
    },
    {
      title: 'UI COMPONENTS',
      children: [
        {
          label: 'Common',
          icon: <FontAwesomeIcon icon='house' size='lg' />,
          children: [
            {
              to: '/component/card',
              label: 'Card',
            },
          ],
        },
        {
          to: '/component/button',
          label: 'Button',
          icon: <FontAwesomeIcon icon='house' size='lg' />,
        },
        {
          to: '/component/input',
          label: 'Input',
          icon: <FontAwesomeIcon icon='user' size='lg' />,
        },
      ],
    },
  ])

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
