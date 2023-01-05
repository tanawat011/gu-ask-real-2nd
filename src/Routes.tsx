import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useRouteList } from 'hooks/useRouteList'
import { renderRoutes } from 'utils/route'

export const AppRoutes = () => {
  const { allRoutes } = useRouteList()

  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(allRoutes)}

        <Route path='*' element={<div>error 404</div>} />
      </Routes>
    </BrowserRouter>
  )
}
