import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";
import { ProductProvider } from "./products/ProductProvider";
import { ProductList } from "./products/ProductList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { EmployeeList } from "./employees/EmployeeList";
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
            <Route path="/products">
                <ProductProvider>
                    <ProductList />
                </ProductProvider>
            </Route>
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                            <EmployeeList />
                    
                    </Route>
                    <Route path="/employees/create">
                        
                            <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

        </>

    )
}