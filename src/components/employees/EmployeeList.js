import React, {useContext, useEffect} from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { EmployeeCard } from "./Employee";
import { useHistory } from "react-router-dom";

//create function to use data from locationContext and render to DOM
export const EmployeeList =() => {
    const {employees, getEmployees} =useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    const history = useHistory()
    return (
    <>
        <button onClick={() => history.push("/employees/create")}>
           Add Employee
        </button>
        <div className="employees">
            {
                employees.map(employee => <EmployeeCard key={employee.id} employeeObj={employee} />)
            }

        </div>
    </>
    )
}