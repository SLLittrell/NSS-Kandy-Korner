import  React, {useState, createContext} from "react"

export const LocationContext = createContext()

//function to hold provider info/fetch call
export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])


    const getLocations = () => {
        return fetch ("http://localhost:8088/locations")
        .then(response => response.json())
        .then(setLocations)
    }
return (
    <LocationContext.Provider value ={{
        locations, getLocations
    }}>
        {props.children}
    </LocationContext.Provider>
)

}