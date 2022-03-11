import { Routes, Route, Outlet } from 'react-router-dom'

import Landing from '../Views/Landing'
import NoMatch from '../Views/NoMatch'

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
        </Route>
        <Route path="no_mach" element={<NoMatch />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
