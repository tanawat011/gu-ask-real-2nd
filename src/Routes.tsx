import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useGetRoutes } from 'hooks/useGetRoutes'
import { useLocalSetting } from 'hooks/useLocalSetting'
import { renderRoutes } from 'utils/route'

export const AppRoutes = () => {
  const { all } = useGetRoutes()
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
