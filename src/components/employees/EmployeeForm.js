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
        manager: "",
        fullTime: "",
        hourlyRate: 0
    })

    const history = useHistory()

    const inputChange = (event) => {
        const newEmployee = {...employee}
        newEmployee[event.target.id]=event.target.value
        setEmployee(newEmployee)
    }

    const onSaveClick = () => {
        if (parseInt(employees.locationId) === 0) {
            window.alert("Please select a location")
        }
        else {
            addEmployee({employee})
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
          <button className="btn btn-primary"
            onClick={event => { event.preventDefault() 
                onSaveClick()}}>
            New Employee
          </button>
        </form>
    )
}

