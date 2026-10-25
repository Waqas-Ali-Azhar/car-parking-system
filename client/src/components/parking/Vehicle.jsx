function Vehicle({ vehicle, onRemove }){
return (
    <div className="SingleVehicle">
        <h3>{vehicle.make} {vehicle.model}</h3>
        <p>Year: {vehicle.year}</p>
        <button onClick={()=>onRemove(vehicle.id)}>Remove Vehicle</button>
        <hr />
    </div>
);
}

export default Vehicle;