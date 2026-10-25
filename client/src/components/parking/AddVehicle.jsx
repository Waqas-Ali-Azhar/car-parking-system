import { useState } from 'react';


// function AddVehicle(){
//     setVehicles(previousVehicles => [...previousVehicles,
//         {    ...newVehicle,
//             id: crypto.randomUUID()
//         }
//     ]);
// }
function AddVehicle({onAdd}){

    const [make,setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');


    function handleSubmit(event){
        event.preventDefault();

        const newVehicle = {
            make: make.trim(),
            model: model.trim(),
            year: year.trim()
        };



        if(!newVehicle.make || !newVehicle.model || !newVehicle.year){
            return ;
        }

        // call the parent function
        onAdd(newVehicle);


        // Clear input fields
        setMake('');
        setModel('');
        setYear('');
    }

    return (
        <div className="addVehicleForm">
            <h2>Add new Vehicle</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="make">Make:</label>
                <input type="text" placeholder="Vehicle Make" value={make} onChange={(event) => setMake(event.target.value)} />

                <label htmlFor="model">Model:</label>
                <input type="text" placeholder="Vehicle Model" value={model} onChange={(event) => setModel(event.target.value)} />


                <label htmlFor="year">Year:</label>
                <input type="text" placeholder="Vehicle Year" value={year} onChange={(event) => setYear(event.target.value)} />

                <button type="submit"> Add Vehicle</button>
            </form>
        </div>
    )
    
}

export default AddVehicle;