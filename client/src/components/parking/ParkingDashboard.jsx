function ParkingDashboard(props){

    const totalSlots = 100;
    const occupiedSlots = 45;
    // const availableSlots = totalSlots - occupiedSlots;

    const availableSlots = props.totalSlots - props.occupiedSlots;

    // write your jsx here
    return (
    <div>
        <h1>Parking Dashboard</h1>
        <div>
            <div className="itemContainer">
                <div className="labelContainer">
                    <span className="label">
                        Total Slots
                    </span>
                </div>
                <div    className="valueContainer">

                        <span className="value">
                            {props.totalSlots}
                        </span>
                    
                </div>
            </div>
            <div className="itemContainer">
                <div className="labelContainer">

                    <span className="label">
                        Occupied
                    </span>

                </div>
                <div className="valueContainer">
                    <span className="value">
                            {props.occupiedSlots}
                        </span>
                </div>
            </div>
            <div className="itemContainer">
                <div className="labelContainer">

                    <span className="label">
                        Available
                    </span>

                </div>
                <div className="valueContainer">
                    
                    <span className="value">
                            {availableSlots}
                        </span>

                </div>
            </div>
        </div>
    </div>
    )
}

export default ParkingDashboard;