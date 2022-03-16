import { Routes, Route, Outlet } from 'react-router-dom'

import TopBar from '../Components/TopBar'

import Landing from '../Views/Landing'
import List from '../Views/List'
import NoMatch from '../Views/NoMatch'

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="list" element={<List />} />
          <Route path="list/:id" element={<List />} />
          <Route path="list/:id/:task" element={<List />} />
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
      <TopBar />
      <Outlet />
    </div>
  )
}
