import React from "react";
import { LocationProvider } from "./locations/LocationProvider";
import {LocationList} from "./locations/LocationList"

export const KandyKorner = () => {

return (
    <>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    
        
    </>
)
}