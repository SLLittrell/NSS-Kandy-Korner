import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css"
import {LocationContext} from "../locations/LocationProvider"
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const {employees, getEmployees, addEmployee} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)
    
    const [employee, setEmployee] = useState({
        name:"",
        locationId: 0,
        manager: false,
        fullTime: false,
        hourlyRate: 0
    })

    const history = useHistory()

    const inputChange = (event) => {
        const newEmployee = {...employee}
        newEmployee[event.target.id]=event.target.value
        setEmployee(newEmployee)
    }

    const onSaveClick = () => {
        if (parseInt(employee.locationId) === 0) {
            window.alert("Please select a location")
        }
        else {
            addEmployee(employee)
            .then(() => history.push("/employees"))
        }
    }
    useEffect(()=>{
        getLocations()
    }, [])

    return(
        <form className="EmployeeForm">
          <h2 className="employeeForm__title">New Employee</h2>
          <fieldset>
              <div className="form-employee">
                  <label htmlFor="employeeName">Name: </label>
                  <input type="text" id="name" required autoFocus className="emplyeeForm-control" placeholder="Name" 
                  onChange={inputChange}/>
              </div>
          </fieldset>
          <fieldset className="radio">
            <input type="radio" id="manager" value={true} onChange={inputChange}></input>
            <label for="manager">Manager</label>
          </fieldset>
          <fieldset className="radio">
            <input type="radio" id="fullTime" value={true} onChange={inputChange}></input>
            <label htmlFor="fullTime">Full Time</label>
            <input type="radio" id="partTime" onChange={inputChange}></input>
            <label htmlFor="partTime">Part Time</label>
          </fieldset>
          <fieldset>
              <div className="form-employee">
              <label htmlFor="location">Assign to location: </label>
                  <select value={employee.locationId} id="locationId" className="form-control" onChange={inputChange} >
                      <option value="0">Select a location</option>
                      {locations.map(local => (
                          <option key={local.id} value={local.id}>
                              {local.name}
                          </option>
                      ))}
                  </select> 
              </div>
          </fieldset>
          <fieldset>
              <div className="form-employee">
                  <label htmlFor="hourlyRate">Hourly Rate: </label>
                  <input type="text" id="hourlyRate" required className="emplyeeForm-control" placeholder="Hourly Rate" 
                  onChange={inputChange}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={event => { event.preventDefault() 
                onSaveClick()}}>
            New Employee
          </button>
        </form>
    )
}

