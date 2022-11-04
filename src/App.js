import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Dashboard from "./pages/Dashboard"
import Home from "./screens/Home"
import Property from "./screens/Property"
import Booking from "./screens/Booking"
import Client from "./screens/Client"
import AddProperty from "./screens/AddProperty"
import Esp from "./screens/Esp"
import Buyer from "./screens/Property/OtherScreens/Buyer"
import EditProperty from "./screens/Property/OtherScreens/EditProperty";
import Downlines from "./screens/Esp/OtherScreen/Downlines";

function App() {
  return (
    <div> 
      <Router>
        <Routes>     
          <Route path='/' element={<Dashboard />}> 
            <Route path='/dashboard' element={<Home />}/>
            <Route path='/dashboard/add-property' element={<AddProperty />}/>
            <Route path='/dashboard/property' element={<Property />}/>
            <Route path='/dashboard/property/buyer' element={<Buyer />}/>
            <Route path='/dashboard/property/edit-property' element={<EditProperty />}/>
            <Route path='/dashboard/booking' element={<Booking />}/>
            <Route path='/dashboard/client' element={<Client />}/>
            <Route path='/dashboard/esp' element={<Esp />}/>
            <Route path='/dashboard/esp/downlines' element={<Downlines />}/>
          </Route> 
          <Route path='*' element={
            <div className=" w-full h-screen flex justify-center pt-36 " >
                <p className=" font-Inter-Bold text-4xl " >Page Not Found</p>
            </div>
          }/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
