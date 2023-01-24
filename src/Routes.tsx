import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useLocalSetting } from 'hooks/useLocalSetting'
import { useRouteList } from 'hooks/useRouteList'
import { renderRoutes } from 'utils/route'

export const AppRoutes = () => {
  const { all } = useRouteList()
  const [localSetting] = useLocalSetting()

  return (
    <div className={localSetting.theme.mode || 'light'}>
      <BrowserRouter>
        <Routes>
          {renderRoutes(all)}

          <Route path='*' element={<div>error 404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
