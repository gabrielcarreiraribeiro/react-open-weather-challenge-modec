import React from 'react'
import { useSelector } from "react-redux"

import constants from '../../constants'

import './Marker.css'

export default function Marker(props) {

    return (
        <>
            <div className="marker-container">
            <img className="marker-img" alt="country" src={ props.countryCode ? `${constants.countryFlagsUrl + props.countryCode}/shiny/64.png` : constants.defaultFlagImage} />
            </div>
            <div className="ballon-point"></div>
        </>
    )

}