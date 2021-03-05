import React, {useContext, useEffect} from "react";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./Locations";
import "./Locations.css"

//create function to use data from locationContext and render to DOM
export const LocationList =() => {
    const {locations, getLocations} =useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
    <div className="locations">
        {
            locations.map(location => <LocationCard key={location.id} location={location} />)
        }
    </div>
    ) 
}