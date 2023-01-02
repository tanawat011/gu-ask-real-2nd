import type { MenuItem } from 'components/Sidebar'

import { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

import { mainRoutes } from 'Routes'
import { FlexCol, FlexRow } from 'components/Common'
import { Sidebar } from 'components/Sidebar'

type MainLayoutProps = {
  fullSidebar: boolean
}

const Container = tw(FlexRow)`relative h-screen w-full bg-slate-200`
const Content = styled(FlexCol)(({ fullSidebar }: MainLayoutProps) => [
  tw`w-full overflow-auto bg-bright2-gray transition-all`,
  fullSidebar ? tw`duration-500 ml-[290px]` : tw`duration-500 ml-[60px]`,
])
const ContentHeader = tw.nav`flex items-center justify-between px-8 py-8 max-h-[32px]`
const ContentContainer = tw(FlexRow)`relative h-full overflow-x-auto`

export const MainLayout: React.FC = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const [fullSidebar, setFullSidebar] = useState(true)
  const [itemSelected, setItemSelected] = useState('')

  const { home, home2 } = mainRoutes.children

  const menuList = [
    {
      label: t('hello'),
      to: home.fullPath,
    },
    {
      label: t('hello'),
      to: home2.fullPath,
    },
  ]

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
    navigate(item.to)
  }

  return (
    <Container>
      <Sidebar
        menuList={menuList}
        itemSelected={itemSelected}
        fullSidebar={fullSidebar}
        handleToggleSidebar={handleToggleSidebar}
        handleClickItem={handleClickItem}
      />

      <Content fullSidebar={fullSidebar}>
        <ContentHeader>
          {/* <Breadcrumb pages={breadcrumbs} />
          <Avatar profileName='xxx xxxxx' /> */}
        </ContentHeader>

        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Content>
    </Container>
  )
}
