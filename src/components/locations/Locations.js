import  React  from "react";

export const LocationCard = ({location}) => (
    <section className="location">
        <div className="location__name">Name: {location.name}</div>
        <div className="location__address">Address: {location.address}</div>
        <div className="location__sqft">Square Feet: {location.squareFeet}</div>
        <div className="location__handicap">Handicap Accessible: {location.handicapAccess.toString()}</div>
    </section>
)