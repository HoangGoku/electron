import React, { Suspense, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from './components/Loading/Loading'
import './App.css'

const Error = React.lazy(() => import('./components/Error/Error'))
const SharedLayout = React.lazy(() => import('./pages/SharedLayout/SharedLayout'))
const Tour = React.lazy(() => import('./pages/Tour/Tour'))
const Plan = React.lazy(() => import('./pages/Plan/Plan'))
const Utils = React.lazy(() => import('./pages/Utilities/Utilities'))

function App() {
  const [active, setActive] = useState(1)

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" index element={<Loading />} />
            <Route element={<SharedLayout />}>
              <Route index path="/tour" element={<Tour />} />
              <Route index path="/plan" element={<Plan />} />
              <Route index path="/utils" element={<Utils />} />
            </Route>
            {/* <Route path="*" index element={<Error />} /> */}
            {/* đổi thành Loading do navigate lỗi */}
            <Route path="*" index element={<Loading />} />

          </Routes>
        </Router>
      </Suspense>
    </div>
  )
}

export default App
