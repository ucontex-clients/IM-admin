import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './screens/Home'
import Property from './screens/Property'
import Booking from './screens/Booking'
import Client from './screens/Client'
import AddProperty from './screens/AddProperty'
import Esp from './screens/Esp'
import ProfileInfo from './screens/ProfileInfo'
import Settings from './screens/Settings'
import SellProperty from './screens/SellProperty'
import Buyer from './screens/Property/OtherScreens/Buyer'
import EditProperty from './screens/Property/OtherScreens/EditProperty'
import Downlines from './screens/Esp/OtherScreen/Downlines'
import Login from './screens/Login'
import { MyBlogs } from './screens/Blogs'
import { useState } from 'react'
import ViewProperty from './screens/Property/OtherScreens/ViewProperty'

function App() {
  const [user, setUser] = useState(true)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path='/dashboard' element={<Home />} /> */}
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property/buyer" element={<Buyer />} />
          <Route path="/property/view" element={<ViewProperty />} />
          <Route path="/property/edit-property" element={<EditProperty />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<MyBlogs />} />
          <Route path="/client" element={<Client />} />
          <Route path="/user-info" element={<ProfileInfo />} />
          <Route path="/esp" element={<Esp />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/esp/downlines" element={<Downlines />} />
          <Route path="/sell-property" element={<SellProperty />} />

          <Route
            path="*"
            element={
              <div className=" w-full h-screen flex justify-center pt-36 ">
                <p className=" font-Inter-Bold text-4xl ">Page Not Found</p>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
