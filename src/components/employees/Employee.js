import  React  from "react";

export const EmployeeCard = ({employeeObj}) => (
    <section className="employee">
        <div className="employee__address">Address: {employeeObj.name}</div>
        <div className="employee__Location">Location: {employeeObj.location.name}</div>
        <div className="employee__manager">Manager: {employeeObj.manager.toString()}</div>
        <div className="employee__fullTime">Full Time: {employeeObj.fullTime.toString()}</div>
        <div className="employee__hourlyRate">Hourly Rate: ${employeeObj.hourlyRate}</div>
    </section>
)