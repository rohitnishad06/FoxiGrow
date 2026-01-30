import { useState } from 'react'
import Home from './Pages/Home'
import Tasks from './Pages/Tasks'
import { Route, Routes } from 'react-router-dom'
import Rank from './Pages/Rank'
import Activity from './Pages/Activity'
import Profile from './Pages/Profile'

function App() {
  return (
    <div className="max-w-[390px] min-h-screen mx-auto bg-black text-white pb-20">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task' element={<Tasks />} />
        <Route path='/rank' element={<Rank />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
