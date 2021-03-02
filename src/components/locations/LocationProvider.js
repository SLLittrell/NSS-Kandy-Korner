import  React, {useState, creatContext} from "react"

export const LocationContext = creatContext()

//function to hold provider info/fetch call
export const LocationProvider = () => {
    const {locations, setLocations} = useState()


    const getLocations = () => {
        return fetch ("")
        .then(response => response.json())
        .then(setLocations)
    }
}