
import Sidebar from './components/sidebar';
import Vehicles from './components/parking/Vehicles'
import ParkingDashboard from './components/parking/ParkingDashboard';
import AddVehicle from './components/parking/AddVehicle';

function App(){
return (
  <div className="App">
    <h1>Car Parking System</h1>
    <p>Parking management dashboard
    </p>
    

    <Sidebar />
    <ParkingDashboard totalSlots={100} occupiedSlots={40} />
    <Vehicles />
    
  </div>
)
}

export default App