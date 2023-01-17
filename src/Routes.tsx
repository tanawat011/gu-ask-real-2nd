import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useRouteList } from 'hooks/useRouteList'
import { useSetting } from 'hooks/useSetting'
import { renderRoutes } from 'utils/route'

export const AppRoutes = () => {
  const { allRoutes } = useRouteList()
  const [localSetting] = useSetting()

  return (
    <div className={localSetting.theme.mode || 'light'}>
      <BrowserRouter>
        <Routes>
          {renderRoutes(allRoutes)}

          <Route path='*' element={<div>error 404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
