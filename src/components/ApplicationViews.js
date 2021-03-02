import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";


//use route to connect with link in nabar to rout components
export const ApplicationViews = () => {
    return (
    
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/locations">
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
            </Route>
        </>

)
    }