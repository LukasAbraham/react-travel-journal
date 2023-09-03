import React from "react"
import {IoLocationSharp} from "react-icons/io5";

function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src={props.imageUrl} />
            <div className="card--info">
                <div className="card--subheader">
                    <IoLocationSharp className="card--icon"/>
                    <h5>{props.location}</h5>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <b className="card--date">{props.startDate} - {props.endDate}</b>
                <p className="card--description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Card