import {useState, useEffect} from 'react';
import Vehicle from './Vehicle';
import AddVehicle from './AddVehicle';

function Vehicles(){

    const [vehicles, setVehicles] = useState(()=>{

        const savedVehicles = localStorage.getItem('vehicles');

        if(savedVehicles){
            return JSON.parse(savedVehicles);
        }

        return [
            { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
            { id: 2, make: 'Honda', model: 'Civic', year: 2019 },
            { id: 3, make: 'Ford', model: 'Mustang', year: 2021 }
        ]
    });

    // const [vehicles, setVehicles] = useState([
    //     { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
    //     { id: 2, make: 'Honda', model: 'Civic', year: 2019 },
    //     { id: 3, make: 'Ford', model: 'Mustang', year: 2021 },
    // ]);

    useEffect(() => {
        localStorage.setItem('vehicles', JSON.stringify(vehicles));
    },[vehicles]);


    function addVehicle(newVehicle){
        const vehicleWithId = {
            ...newVehicle,
            id: crypto.randomUUID()
        };
        setVehicles([...vehicles, vehicleWithId]);
    }
    

    function removeVehicle(id){
        setVehicles(previousVehicles => previousVehicles.filter(vehicle => vehicle.id !== id));
    }

    

    return (
        <div>
            
            <AddVehicle onAdd={addVehicle} />
            
            <h2>Parked Vehicles</h2>

            {/* <button onClick={addVehicle}>Add Vehicle</button> */}
            
            {
                vehicles.map((vehicle)=>{
                    return <Vehicle key={vehicle.id} vehicle={vehicle} onRemove={removeVehicle} />
                })
            }
            
        </div>
    );
}

export default Vehicles;