import React from "react"
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <> 
        <Route>
            <NavBar />
            <ApplicationViews />
        </Route>
    </>
)